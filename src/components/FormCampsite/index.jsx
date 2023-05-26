import { Button, Group, Paper, Select, TextInput, FileInput } from '@mantine/core'

import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '@mantine/form'
import { updateCampById, getAllCampsites, createNewCamp } from '../../pages/Campsite/state/campsiteAction'

const FormCampsite = (props) => {
    const { close, payload, updateCampById, createNewCamp } = props
    const { getInputProps, onSubmit } = useForm({
        initialValues: {
            name: payload?.name,
            address: payload?.address,
            province: payload?.province,
            file: payload?.file,
        },

        validate: {
            name: (value) => (value.length > 0 ? null : 'Name must not be empty'),
            address: (value) => (value.length > 0 ? null : 'Address must not be empty'),
            province: (value) =>
                ['Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Yogyakarta'].includes(value)
                    ? null
                    : 'Province must not be empty',
        },
    })

    const handleSubmit = (value) => {
        if (!Object.hasOwn(payload, 'id')) {
            const newPayload = {
                name: value?.name,
                address: value?.address,
                province: value?.province,
                file: value?.file,
            }
            createNewCamp(newPayload, () => close())
            return
        }
        updateCampById(payload?.id, value, () => close())
    }

    return (
        <Paper>
            <form
                onSubmit={onSubmit((value, event) => {
                    handleSubmit(value)
                })}
            >
                <TextInput withAsterisk label="Name" placeholder="Enter Campsite name" {...getInputProps('name')} />
                <TextInput withAsterisk placeholder="Enter Address" label="Address" {...getInputProps('address')} />
                <Select
                    withAsterisk
                    label="Province"
                    placeholder="Province"
                    data={[
                        { value: 'Jawa Barat', label: 'Jawa Barat' },
                        { value: 'Jawa Tengah', label: 'Jawa Tengah' },
                        { value: 'Jawa Timur', label: 'Jawa Timur' },
                        { value: 'Yogyakarta', label: 'Yogyakarta' },
                    ]}
                    maxDropdownHeight={280}
                    dropdownPosition="bottom"
                    {...getInputProps('province')}
                />
                <FileInput label="Image" placeholder="Image of Campsite" {...getInputProps('file')} />
                <Group position="right" mt={10}>
                    <Button type="submit">Save</Button>
                    <Button onClick={close}>Cancel</Button>
                </Group>
            </form>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    payload: state.camp.payload,
    campList: state.camp.campList,
})

export default connect(mapStateToProps, {
    updateCampById,
    getAllCampsites,
    createNewCamp,
})(FormCampsite)
