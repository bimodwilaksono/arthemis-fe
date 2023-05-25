import { Button, Group, Paper, Select, TextInput } from '@mantine/core'

import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '@mantine/form'
import { updateUserById, getAllUsers } from '../../pages/Users/state/userAction'

const FormUser = (props) => {
    const { close, payload, updateUserById, getAllUsers } = props
    const { getInputProps, onSubmit } = useForm({
        initialValues: {
            name: payload?.name,
            email: payload?.email,
            role: payload?.role,
        },

        validate: {
            name: (value) => (value.length > 0 ? null : 'Name must not be empty'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            role: (value) => (['User', 'Admin'].includes(value) ? null : 'Role must be User or Admin'),
        },
    })

    const handleSubmit = (value) => {
        updateUserById(payload?.id, value, () => close())
        getAllUsers()
    }

    return (
        <Paper>
            <form
                onSubmit={onSubmit((value, event) => {
                    handleSubmit(value)
                })}
            >
                <TextInput withAsterisk label="Name" placeholder="Enter User name" {...getInputProps('name')} />
                <TextInput withAsterisk placeholder="Enter Email Address" label="Email" {...getInputProps('email')} />
                <Select
                    withAsterisk
                    label="Role"
                    placeholder="Role"
                    data={[
                        { value: 'User', label: 'User' },
                        { value: 'Admin', label: 'Admin' },
                    ]}
                    {...getInputProps('role')}
                />
                <Group position="right" mt={10}>
                    <Button type="submit">Save</Button>
                    <Button onClick={close}>Cancel</Button>
                </Group>
            </form>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    payload: state.user.payload,
    userList: state.user.userList,
})

export default connect(mapStateToProps, {
    updateUserById,
    getAllUsers,
})(FormUser)
