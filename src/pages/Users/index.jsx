import React, {useEffect} from "react";
import {ActionIcon, Button, Flex, Table, Text, Title, Tooltip} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {modals} from "@mantine/modals"
import {IconEdit, IconTrash} from "@tabler/icons-react";

const data = [
    {name: null, email: null, role: null}
]

const User = (props) => {
    const {userList, getAllUser, getUserById, deleteUserById} = props;
    const [opened, {open, close}] = useDisclosure(false);
    const [openedAddNew, {open : {}, close : {}}] = useDisclosure(false);

    useEffect(() => {

    }, [])

    const rows = userList?.map((element) => {
        return (
            <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.role}</td>
            </tr>
        )
    })

    return (
        <>
            <Title>User List</Title>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </>
    )
}

export default User
