import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Logo({ }: Props) {
    return (
        <Link href={'/'}>
            <div
                className='bg-white rounded-full pl-2'
            >
                <Image
                    alt='logo'
                    src='/ducky.svg'
                    width={70}
                    height={70}
                />
            </div>
        </Link>
    )
}