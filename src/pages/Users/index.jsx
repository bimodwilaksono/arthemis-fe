import React, { useEffect, useState } from 'react'
import { ActionIcon, Flex, Table, Text, Title, Tooltip, Loader } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { IconEdit, IconTrash, IconRefresh } from '@tabler/icons-react'
import { connect } from 'react-redux'
import { getAllUsers, updateUserById, deleteUserById, getUserById } from './state/userAction'
import EditModal from '../../components/EditModal'
import FormUser from '../../components/FormUser'
import EmptyState from '../../components/EmptyState'
import PaginationControlled from '../../components/PaginationControlled'

const Users = (props) => {
    const { userList, getAllUsers, getUserById, deleteUserById, totalPages } = props
    const [opened, { open, close }] = useDisclosure(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        getAllUsers()
    }, [])

    useEffect(() => {
        getAllUsers(activePage)
    }, [activePage])

    const onActionEdit = (id) => {
        getUserById(id, () => open())
    }

    const onActionDelete = (id) => {
        console.log("clicked delete")
        deleteUserById(id, activePage)
    }

    const rows = userList?.map((element) => {
        return (
            <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.role}</td>

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
            title: 'Delete User',
            centered: true,
            children: <Text size="sm">Are you sure you want to delete the user? This action is destructive.</Text>,
            labels: { confirm: 'Delete User', cancel: 'Cancel' },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => onActionDelete(id),
        })
    }

    const handleRefresh = async () => {
        try {
            setIsRefresh(true)
            await getAllUsers()
            setTimeout(() => setIsRefresh(false), 500)
        } catch (error) {}
    }

    return (
        <>
            <Flex align={'center'} gap={10}>
                <Title>User List</Title>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {userList?.length > 0 ? <tbody>{rows}</tbody> : null}

                    <EditModal title={'Form user'} children={<FormUser page={activePage} />} close={close} opened={opened} />
                </Table>
            )}
            <PaginationControlled activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
            {userList?.length > 0 ? null : <EmptyState />}
        </>
    )
}

const mapStateToProps = (state) => ({
    userList: state.user.userList,
    totalPages: state.user.totalPages,
})

export default connect(mapStateToProps, { getAllUsers, getUserById, updateUserById, deleteUserById })(Users)
