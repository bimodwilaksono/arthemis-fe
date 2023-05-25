import { Modal } from "@mantine/core";
import React from "react";

const AddNewModal = ({ children, title, close, opened }) => {
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={title}
                fullScreen
                transitionProps={{ transition: "fade", duration: 200 }}>
                {React.cloneElement(children, { close: close })}
            </Modal>
        </>
    );
};

export default AddNewModal;