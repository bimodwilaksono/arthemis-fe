import { Button, Group, Paper, Select } from '@mantine/core'

import React from 'react'
import { connect } from 'react-redux'
import { useForm } from '@mantine/form'
import { updateOrderById } from '../../pages/Order/state/orderAction'

const now = new Date()

const isValidCheckIn = (checkInDate) => {
    const dateCheckIn = new Date(checkInDate)
    return dateCheckIn.getDate() === now.getDate()
}

const isValidCheckOut = (checkOutDate, isCheckIn) => {
    const dateCheckOut = new Date(checkOutDate)
    return now.getDate() <= dateCheckOut.getDate() && isCheckIn
}

const FormOrder = (props) => {
    const { close, payload, updateOrderById, page } = props
    const { getInputProps, onSubmit } = useForm({
        initialValues: {
            checkInStatus: payload?.isCheckIn,
            checkOutStatus: payload?.isCheckOut,
        },

        validate: {
            checkInStatus: (value) =>
                [true, false].includes(value) ? null : 'CheckInStatus must be Already or Not yet',
        },
    })
    const handleSubmit = (value) => {
        const newPayload = {
            isCheckIn: Object.is(value?.checkInStatus, null) ? payload?.isCheckIn : value?.checkInStatus,
            isCheckOut: Object.is(value?.checkOutStatus, null) ? payload?.isCheckOut : value?.checkOutStatus,
            // checkInDate: payload?.checkInDate,
            // checkOutDate: payload?.checkOutDate,
            // userId: payload?.user?.id,
            // campsiteId: payload?.campsite?.id,
        }
        updateOrderById(payload?.id, newPayload, () => close(), page)
    }
    return (
        <Paper>
            <form
                onSubmit={onSubmit((value, event) => {
                    handleSubmit(value)
                })}
            >
                <Select
                    label="CheckIn Status"
                    placeholder="CheckIn Status"
                    data={[
                        { value: false, label: 'Not yet' },
                        { value: true, label: 'Already' },
                    ]}
                    maxDropdownHeight={280}
                    dropdownPosition="bottom"
                    disabled={!isValidCheckIn(payload?.checkInDate)}
                    {...getInputProps('checkInStatus')}
                />
                <Select
                    label="CheckOut Status"
                    placeholder="CheckOut Status"
                    data={[
                        { value: false, label: 'Not yet' },
                        { value: true, label: 'Already' },
                    ]}
                    maxDropdownHeight={280}
                    dropdownPosition="bottom"
                    disabled={!isValidCheckOut(payload?.checkOutDate, payload?.isCheckIn)}
                    {...getInputProps('checkOutStatus')}
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
    payload: state.order.payload,
    orderList: state.order.orderList,
})

export default connect(mapStateToProps, {
    updateOrderById,
})(FormOrder)
