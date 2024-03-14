import { Button } from '@/components/ui/button'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


type Props = {}

export default function Category({ }: Props) {
    return (
        <div>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3 hover:">
                    <NavigationMenuLink asChild className='p-0'>
                        <Button asChild variant={'link'}>
                            <Link href={'/'} className='flex items-center gap-x-3 text-secondary-foreground'>
                                <ChevronRight className='w-3 h-3' />
                                Product
                            </Link>
                        </Button>
                    </NavigationMenuLink>
                </li>
                <li className="row-span-3 hover:">
                    <NavigationMenuLink asChild className='p-0'>
                        <Button asChild variant={'link'}>
                            <Link href={'/'} className='flex items-center gap-x-3 text-secondary-foreground'>
                                <ChevronRight className='w-3 h-3' />
                                Product
                            </Link>
                        </Button>
                    </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                    <NavigationMenuLink asChild className='p-0'>
                        <Button asChild variant={'link'}>
                            <Link href={'/'} className='flex items-center gap-x-3 text-secondary-foreground'>
                                <ChevronRight className='w-3 h-3' />
                                Product
                            </Link>
                        </Button>
                    </NavigationMenuLink>
                </li>
            </ul>
        </div>
    )
}