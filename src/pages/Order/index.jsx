import React, { useEffect, useState } from 'react'
import { ActionIcon, Flex, Loader, Table, Text, Title, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { IconEdit, IconRefresh, IconTrash } from '@tabler/icons-react'
import { connect } from 'react-redux'
import { getAllOrders, getOrderById, updateOrderById } from './state/orderAction'
import EmptyState from '../../components/EmptyState'
import PaginationControlled from '../../components/PaginationControlled'
import EditModal from '../../components/EditModal'
import FormOrder from '../../components/FormOrder'

const Order = (props) => {
    const { orderList, totalPages, getAllOrders, getOrderById } = props
    const [opened, { open, close }] = useDisclosure(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        getAllOrders()
    }, [])

    const onActionEdit = (id) => {
        getOrderById(id, () => open())
    }

    const onActionDelete = (id) => {}

    const rows = orderList?.map((element) => {
        return (
            <tr key={element.id}>
                <td>{element?.user?.name}</td>
                <td>{element?.user?.email}</td>
                <td>{element?.campsite?.name}</td>
                <td>{element?.checkInDate}</td>
                <td>{element?.checkOutDate}</td>
                <td>{element?.isCheckIn ? 'Already' : 'Not yet'}</td>
                <td>{element?.isCheckOut ? 'Already' : 'Not yet'}</td>
                <td>
                    <Flex>
                        <Tooltip label="Edit">
                            <ActionIcon onClick={() => onActionEdit(element.id)}>
                                <IconEdit />
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Delete">
                            <ActionIcon onClick={() => openDeleteModal(element.id)}>
                                <IconTrash />
                            </ActionIcon>
                        </Tooltip>
                    </Flex>
                </td>
            </tr>
        )
    })

    const openDeleteModal = (id) => {
        return modals.openConfirmModal({
            title: 'Delete Order',
            centered: true,
            children: <Text size="sm">Are you sure you want to delete order? This action is destructive.</Text>,
            labels: { confirm: 'Delete Order', cancel: 'Cancel' },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => onActionDelete(id),
        })
    }

    const handleRefresh = async () => {
        try {
            setIsRefresh(true)
            await getAllOrders()
            setTimeout(() => setIsRefresh(false), 500)
        } catch (error) {}
    }

    return (
        <>
            <Flex align={'center'} gap={10}>
                <Title>Order List</Title>
                <Tooltip label="Refresh">
                    <ActionIcon onClick={() => handleRefresh()}>
                        <IconRefresh color="blue" />
                    </ActionIcon>
                </Tooltip>
            </Flex>
            {isRefresh ? (
                <Flex size={'lg'} align={'center'} justify={'center'} mx={'lg'} h={'50vh'}>
                    <Loader />
                </Flex>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Campsite</th>
                            <th>Check In Date</th>
                            <th>Check Out Date</th>
                            <th>Check In Status</th>
                            <th>Check Out Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                    <EditModal title={'Form order'} children={<FormOrder />} close={close} opened={opened} />
                </Table>
            )}
            {orderList?.length > 0 ? null : <EmptyState />}
            <PaginationControlled activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
        </>
    )
}

const mapStateToProps = (state) => ({
    orderList: state.order.orderList,
    totalPages: state.order.totalPages,
})

export default connect(mapStateToProps, { getAllOrders, getOrderById, updateOrderById })(Order)
