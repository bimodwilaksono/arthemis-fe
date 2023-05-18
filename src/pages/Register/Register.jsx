import {
    TextInput, PasswordInput,
    Button, Anchor,
    Paper, Title,
    Text, Container,
    Group, Center
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { connect } from 'react-redux'
import { register } from '../../common/state/authAction'

export function Register(props){
    const navigate = useNavigate()
    const {register} = props;
    const { getInputProps, onSubmit } = useForm({
        initialValues: {
            name: "",
            email: '',
            password: '',
        },

        validate: {
            name: (value) => (value.length > 0 ? null : 'Name can not be empty'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length > 0 ? null : 'Password can not be empty'),
        },
    })

    const handleSubmit = (value) => {
        register(value, () => navigate('/'))
    }

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
                <form onSubmit={onSubmit((value, event) => {
                        event.preventDefault()
                        handleSubmit(value)
                    })}>
                    <TextInput label="Name" placeholder={"Input Your name"} required {...getInputProps('name')}/>
                    <TextInput label="Email" placeholder={"Input Your Email"} required mt="md" {...getInputProps('email')}/>
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" {...getInputProps('password')}/>
                    <Button type="submit" fullWidth mt="xl">
                        Sign up
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
})

export default connect(mapStateToProps, { register })(Register)
