import { MantineProvider } from "@mantine/core";

export const theme = {
    colorSchema: "dark",
};

export function ThemeProvider({ children }) {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            {children}
        </MantineProvider>
    );
}
