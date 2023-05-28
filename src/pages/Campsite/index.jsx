import React, { useEffect, useState } from 'react'
import { ActionIcon, Button, Flex, Loader, Table, Text, Title, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { IconEdit, IconRefresh, IconTrash } from '@tabler/icons-react'
import FormCampsite from '../../components/FormCampsite/index.jsx'
import AddNewModal from '../../components/AddNewModal/index.jsx'
import EditModal from '../../components/EditModal/index.jsx'
import { connect } from 'react-redux'
import { getAllCampsites, deleteCampById, getCampById } from './state/campsiteAction.js'
import EmptyState from '../../components/EmptyState/index.jsx'
import PaginationControlled from '../../components/PaginationControlled/index.jsx'

const Campsite = (props) => {
    const { campList, getAllCampsites, getCampById, deleteCampById, totalPages } = props
    const [opened, { open, close }] = useDisclosure(false)
    const [openedAddNew, { open: openAddNew, close: closeAddNew }] = useDisclosure(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        getAllCampsites()
    }, [])

    useEffect(() => {
        getAllCampsites(activePage)
    }, [activePage])

    const onActionEdit = (id) => {
        getCampById(id, () => open())
    }

    const onActionDelete = (id) => {
        deleteCampById(id, activePage)
    }

    const rows = campList?.map((element) => {
        return (
            <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.province}</td>

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
            title: 'Delete Campsite',
            centered: true,
            children: <Text size="sm">Are you sure you want to delete the camp? This action is destructive.</Text>,
            labels: { confirm: 'Delete Campsite', cancel: 'Cancel' },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => onActionDelete(id),
        })
    }

    const handleRefresh = async () => {
        try {
            setIsRefresh(true)
            await getAllCampsites(activePage)
            setTimeout(() => setIsRefresh(false), 500)
        } catch (error) {}
    }

    return (
        <>
            <Flex align={'center'} gap={10}>
                <Title>Campsite List</Title>
                <Tooltip label="Refresh">
                    <ActionIcon onClick={() => handleRefresh()}>
                        <IconRefresh color="blue" />
                    </ActionIcon>
                </Tooltip>
                <Button onClick={openAddNew}>Add Campsite</Button>
            </Flex>
            {isRefresh ? (
                <Flex size={'lg'} align={'center'} justify={'center'} mx={'lg'} h={'50vh'}>
                    <Loader />
                </Flex>
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Province</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {campList?.length > 0 ? <tbody>{rows}</tbody> : null}

                    <AddNewModal
                        title={'Form Campsite'}
                        children={<FormCampsite />}
                        close={closeAddNew}
                        opened={openedAddNew}
                    />
                    <EditModal title={'Form menu'} children={<FormCampsite page={activePage} />} close={close} opened={opened} />
                </Table>
            )}
            <PaginationControlled activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
            {campList?.length > 0 ? null : <EmptyState />}
        </>
    )
}

const mapStateToProps = (state) => ({
    campList: state.camp.campList,
    totalPages: state.user.totalPages,
})

export default connect(mapStateToProps, { getAllCampsites, deleteCampById, getCampById })(Campsite)
