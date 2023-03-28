import Link from 'next/link'
import React from 'react'

const GoToTop = () => {
    return (
        <div className='sticky bottom-4'>
            <Link href="#hero">
                <div>GoToTop</div>
            </Link>
        </div>
    )
}

export default GoToTop