import {
    Button, Container, Group, NumberInput, Paper, Select, Text, TextInput, Title
} from "@mantine/core";

import React from "react";
import {connect} from "react-redux";
import {useForm} from "@mantine/form";


const FormCampsite = (props) => {
    const {close, payload, campsiteList, addCampsite, updateCampsiteById} = props;
    const { getInputProps, values, onSubmit} = useForm({
        initialValues: {
            name: payload?.name,
            address: payload?.address,
            province: payload?.province,
        },

        validate: {
            name: (value) => (value.length > 0 ? null : "Name must not be empty"),
            address: (value) => (value.length > 0 ? null : "Address must not be empty"),
            province: (value) => (value.length > 0 ? null : "Province must not be empty")
        },
    })

    const handleSubmit = (value) => {
        if (payload?.id === "") {
            addCampsite(value, () => close());
            return;
        }
        updateCampsiteById(payload?.id, value, () => close());
    };

    return (
        <Paper>
            <form
                onSubmit={onSubmit((value, event) => {
                    // event.preventDefault();
                    handleSubmit(value);
                })}>
                <TextInput
                    withAsterisk
                    label='Name'
                    placeholder='Enter Campsite name'
                    {...getInputProps("name")}
                />
                <TextInput
                    withAsterisk
                    placeholder='Enter Address'
                    label='Address'
                    {...getInputProps("address")}
                />
                <Select
                    withAsterisk
                    label='Province'
                    placeholder='Province'
                    data={[
                        { value: "Jawa Barat", label: "Jawa Barat" },
                        { value: "Jawa Tengah", label: "Jawa Tengah" },
                        { value: "Jawa Timur", label: "Jawa Timur" },
                        { value: "Yogyakarta", label: "Yogyakarta" },

                    ]}
                    {...getInputProps("province")}
                />
                <Button type='submit'>Save</Button>
                <Group position='right' mt={10}>
                    <Button onClick={close}>Cancel</Button>
                </Group>
            </form>
        </Paper>
    );
}

// const mapStateToProps = (state) => ({
//     payload: state.campsite.payload,
//     campsiteList: state.campsite.campsiteList,
// });

export default connect(null, {
    // addCampsite, updateCampsiteById
})(FormCampsite);
