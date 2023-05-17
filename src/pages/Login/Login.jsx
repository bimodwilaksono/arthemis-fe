import {
    TextInput,
    PasswordInput,
    Button,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const { login } = props;
    const { getInputProps, onSubmit } = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            password: (value) => (value.length > 0 ? null : "Password can not be empty"),
        },
    });

    const handleSubmit = (value) => {
        login(value, () => navigate("/"));
    };
    return (
        <Container size={420} my={40}>
            <Title
                align={"center"}
                sx={(theme) => ({ fontFamily: `ff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                WELCOME!! สวัสดี
            </Title>
            <Text color='dimmed' size='sm' align='center' mt={5}>
                Do not have an account yet?{"  "}
                <Anchor size='sm' component='button' onClick={() => {}}>
                    Create Account
                </Anchor>
            </Text>

            <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                <form
                    onSubmit={onSubmit((value, event) => {
                        event.preventDefault();
                        handleSubmit(value);
                    })}>
                    <TextInput
                        label='Email'
                        placeholder={"Input Your Email"}
                        required
                        {...getInputProps("email")}
                    />
                    <PasswordInput
                        label='Password'
                        placeholder='Your password'
                        required
                        mt='md'
                        {...getInputProps("password")}
                    />
                    <Button fullWidth mt='xl' type='submit'>
                        Sign in
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
});

export default connect(mapStateToProps, { login })(Login);
