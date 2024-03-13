import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function Categories({ }: Props) {
    const categories = [
        'Home',
        'Products',
    ]

    return (
        <div className='flex gap-2'>
            {categories.map((category, index) => {
                return (
                    <Button
                        key={index}
                        variant={'link'}
                    >
                        {category}
                    </Button>
                )
            })}
        </div>
    )
}