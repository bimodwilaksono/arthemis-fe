import React, {useEffect} from "react";
import {ActionIcon, Button, Flex, Table, Text, Title, Tooltip} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {modals} from "@mantine/modals"
import {IconEdit, IconTrash} from "@tabler/icons-react";

const data = [
    {checkInDate : null, checkOutDate : null, user : null, campsite : null}
]

const Order = (props) => {
    const { orderList, getAllOrder, getOrderById, deleteOrderById } = props;
    const [opened, {open, close}] = useDisclosure(false);
    const [openedAddNew, {open : {}, close : {}}] = useDisclosure(false);

    useEffect(() => {

    }, [])

    const onActionEdit = (id) => {

    }

    const onActionDelete = (id) => {

    }

    const rows = orderList?.map((element) => {
        return (
            <tr key={element.id}>
                <td>{element.checkInDate}</td>
                <td>{element.checkOutDate}</td>
                <td>{element.user}</td>
                <td>{element.campsite}</td>
                <td>
                    <Flex>
                        <Tooltip label='Edit'>
                            <ActionIcon onClick={() => onActionEdit(element.id)}>
                                <IconEdit />
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label='Delete'>
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
            title: "Delete Order",
            centered: true,
            children: (
                <Text size='sm'>
                    Are you sure you want to delete order? This action is destructive.
                </Text>
            ),
            labels: { confirm: "Delete Order", cancel: "Cancel" },
            confirmProps: { color: "red" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => deleteOrderById(id),
        });
    };

    return (
        <>
            <Title>Order List</Title>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            <Button onClick={openedAddNew}>Add Menu</Button>
        </>
    )
}

export default Order