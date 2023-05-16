import {
    TextInput, PasswordInput,
    Button, Anchor,
    Paper, Title,
    Text, Container,
    Group, Center
} from "@mantine/core";

export function Register(){
    return (
        <Container size={420} my={40}>
            <Title
                align={"center"}
                sx={(theme) => ({fontFamily: `ff CF, ${theme.fontFamily}`, fontWeight : 900})}
            >
                JOIN สวัสดี
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Already have an account?{'  '}
                <Anchor size="sm" component="button">
                    Log in to your Account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Username" placeholder={"Input Your Username"} required/>
                <TextInput label="Email" placeholder={"Input Your Email"} required mt="md"/>
                <PasswordInput label="Password" placeholder="Your password" required mt="md"/>
                <PasswordInput label="Rewrite password" placeholder="Your password" required mt="md"/>
                <Button fullWidth mt="xl">
                    Sign up
                </Button>
            </Paper>
        </Container>
    )
}