import React from 'react'
import Logo from './_component/logo'
import Categories from './_component/categories'

type Props = {}

export default function NavBar({ }: Props) {
    return (
        <nav className='fixed w-full h-24 flex gap-x-5 items-center bg-primary-foreground'>
            <Logo />
            <Categories />
        </nav>
    )
}