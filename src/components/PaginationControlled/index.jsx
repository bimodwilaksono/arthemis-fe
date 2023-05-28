import { Flex, Pagination } from '@mantine/core'
import React from 'react'

const PaginationControlled = ({
    activePage,
    setActivePage,
    totalPages,
    onFirstPage,
    onLastPage,
    onNextPage,
    onPreviousPage,
}) => {
    return (
        <Flex size={'lg'} align={'center'} justify={'center'} mx={'lg'} h={'50vh'}>
            <Pagination
                value={activePage}
                onChange={setActivePage}
                total={totalPages}
                onFirstPage={onFirstPage}
                onLastPage={onLastPage}
                onNextPage={onNextPage}
                onPreviousPage={onPreviousPage}
            />
        </Flex>
    )
}

export default PaginationControlled
