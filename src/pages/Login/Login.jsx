import {
    TextInput, PasswordInput,
    Button, Anchor,
    Paper, Title,
    Text, Container,
    Group, Center
} from "@mantine/core";

export function Login(){
    return (
        <Container size={420} my={40}>
            <Title
                align={"center"}
                sx={(theme) => ({fontFamily: `ff CF, ${theme.fontFamily}`, fontWeight : 900})}
            >
                WELCOME!! สวัสดี
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{'  '}
                <Anchor size="sm" component="button">
                    Create Account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder={"Input Your Email"} required/>
                <PasswordInput label="Password" placeholder="Your password" required mt="md"/>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    )
}