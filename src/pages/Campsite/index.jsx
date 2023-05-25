import React, { useEffect } from 'react'
import { ActionIcon, Button, Flex, Table, Text, Title, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import FormCampsite from '../../components/FormCampsite/index.jsx'
import AddNewModal from '../../components/AddNewModal/index.jsx'
import EditModal from '../../components/EditModal/index.jsx'

const data = [{ checkInDate: null, checkOutDate: null, user: null, campsite: null }]

const Campsite = (props) => {
    const { campsiteList, getAllCampsite, getCampsiteById, deleteCampsiteById } = props
    const [opened, { open, close }] = useDisclosure(false)
    const [
        openedAddNew,
        {
            open: { openAddNew },
            close: { closeAddNew },
        },
    ] = useDisclosure(false)

    useEffect(() => {
        // getAllCampsite()
    }, [])

    const onActionEdit = (id) => {
        // getCampsiteById(id, () => open())
        open()
    }

    const onActionDelete = (id) => {
        // deleteCampsiteById(id)
    }

    const rows = campsiteList?.map((element) => {
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
            onConfirm: () => deleteCampsiteById(id),
        })
    }

    return (
        <>
            <Title>Campsite List</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Province</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
                <AddNewModal
                    title={'Form Campsite'}
                    children={<FormCampsite />}
                    close={closeAddNew}
                    opened={openedAddNew}
                />
                <EditModal title={'Form menu'} children={<FormCampsite />} close={close} opened={opened} />
            </Table>
            <Button onClick={openAddNew}>Add Campsite</Button>
        </>
    )
}

export default Campsite
