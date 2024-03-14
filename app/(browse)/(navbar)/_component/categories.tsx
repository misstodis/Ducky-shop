'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import Category from './category';
import Link from 'next/link';
type Props = {
    children: React.ReactNode;
}

export default function Categories({
    children,
}: Props) {
    const categories = [
        'Home',
        'Products',
    ]

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink >
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-transparent data-[state=open]:bg-transparent data-[state=closed]:bg-transparent' >
                        Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {children}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}