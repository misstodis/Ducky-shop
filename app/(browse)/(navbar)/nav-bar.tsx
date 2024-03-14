'use client';
import React from 'react'
import Logo from './_component/logo'
import Categories from './_component/categories'
import Category from './_component/category'

type Props = {}

export default function NavBar({ }: Props) {
    return (
        <nav className='fixed w-full h-24 flex gap-x-5 items-center bg-primary-foreground'>
            <Logo />
            <Categories>
                <h1 className='font-semibold lg:text-2xl pl-6 pt-6 pb-0 pr-6'>
                    product category
                </h1>
                <Category />
            </Categories>
        </nav>
    )
}