import React from 'react'
import NavBar from './(navbar)/nav-bar'

type Props = {
    children: React.ReactNode
}

export default function layout({
    children
}: Props) {
    return (
        <>
            <NavBar />
            <div className='h-full pt-28'>
                {children}
            </div>
        </>
    )
}