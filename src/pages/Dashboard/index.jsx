import React, { useEffect, useState } from 'react'
import { createStyles, Text, rem, Flex } from '@mantine/core'
import { connect } from 'react-redux'
import { getAllTotalData } from './state/dashBoardAction'

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: rem(32),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

function transformData(totalCampsites, totalUsers, totalOrders) {
    const data = [
        {
            title: 'Total camp',
            stats: totalCampsites,
            description: `Total camps for now is ${totalCampsites}`,
        },
        {
            title: 'Total users',
            stats: totalUsers,
            description: `Total users for now is ${totalUsers}`,
        },
        {
            title: 'Total orders',
            stats: totalOrders,
            description: `Total orders for now is ${totalOrders}`,
        },
    ]

    return data
}

function Dashboard(props) {
    const { classes } = useStyles()
    const { getAllTotalData, totalCampsites, totalOrders, totalUsers } = props
    useEffect(() => {
        getAllTotalData()
    }, [])

    const data = transformData(totalCampsites, totalUsers, totalOrders)
    const stats = data?.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ))
    return (
        <Flex align={'center'} justify={'center'} h={'75vh'}>
            <div className={classes.root}>{stats}</div>
        </Flex>
    )
}

const mapStateToProps = (state) => ({
    totalCampsites: state.dashboard.totalCampsite,
    totalOrders: state.dashboard.totalOrder,
    totalUsers: state.dashboard.totalUser,
})
export default connect(mapStateToProps, { getAllTotalData })(Dashboard)
