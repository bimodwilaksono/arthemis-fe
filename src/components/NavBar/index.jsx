import { useState } from 'react'
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core'
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantine/ds'
import { constants } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../common/state/authAction'

const { ROUTES } = constants

const useStyles = createStyles((theme) => ({
    link: {
        width: rem(50),
        height: rem(50),
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
        opacity: 0.85,

        '&:hover': {
            opacity: 1,
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
                0.1
            ),
        },
    },

    active: {
        opacity: 1,
        '&, &:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
                0.15
            ),
        },
    },
}))

function NavbarLink({ icon: Icon, label, active, onClick }) {
    const { classes, cx } = useStyles()
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon size="1.2rem" stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    )
}

const mockdata = [
    { icon: IconHome2, label: 'Home', link: '/' },
    // { icon: IconGauge, label: 'Dashboard', link: ROUTES. },
    { icon: IconDeviceDesktopAnalytics, label: 'Campsite', link: ROUTES.CAMPSITE },
    { icon: IconCalendarStats, label: 'Order', link: ROUTES.ORDER },
    { icon: IconUser, label: 'Users', link: ROUTES.USERS },
    // { icon: IconFingerprint, label: 'Security' },
    // { icon: IconSettings, label: 'Settings' },
]

function NavbarMinimalColored(props) {
    const navigate = useNavigate()
    const { token, logout } = props
    const [active, setActive] = useState(2)

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={(event) => {
                event.preventDefault()
                setActive(index)
                navigate(link.link)
            }}
        />
    ))

    const onActionLogout = (e) => {
        e.preventDefault()
        logout()
        navigate(ROUTES.LOGIN)
    }

    return (
        <Navbar
            height={'100vh'}
            width={{ base: 80 }}
            p="md"
            sx={(theme) => ({
                backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
            })}
        >
            <Center>
                <MantineLogo type="mark" inverted size={30} />
            </Center>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink
                        icon={IconLogout}
                        label="Logout"
                        onClick={(event) => {
                            onActionLogout(event)
                        }}
                    />
                </Stack>
            </Navbar.Section>
        </Navbar>
    )
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
})

export default connect(mapStateToProps, { logout })(NavbarMinimalColored)
