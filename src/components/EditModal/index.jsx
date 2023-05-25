import React from "react";
import { Modal } from "@mantine/core";

const EditModal = ({ children, title, close, opened }) => {
    return (
        <>
            <Modal opened={opened} onClose={close} title={title} centered>
                {React.cloneElement(children, { close: close })}
            </Modal>
        </>
    );
};

export default EditModal;