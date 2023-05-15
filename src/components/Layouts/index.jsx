import React from "react";
import { NavbarMinimalColored } from "../NavBar";
import { AppShell } from "@mantine/core";

const Layouts = ({ children }) => {
    return <AppShell navbar={<NavbarMinimalColored />}>{children}</AppShell>;
};

export default Layouts;
