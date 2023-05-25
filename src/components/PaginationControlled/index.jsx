import { Flex, Pagination } from '@mantine/core'
import React from 'react'

const PaginationControlled = ({ activePage, setActivePage, totalPages }) => {
    return (
        <Flex size={'lg'} align={'center'} justify={'center'} mx={'lg'} h={'50vh'}>
            <Pagination value={activePage} onChange={setActivePage} total={totalPages} />
        </Flex>
    )
}

export default PaginationControlled
