'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiCompass, FiUser } from 'react-icons/fi'

export default function BottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
            <div className="mx-auto flex h-16 max-w-md items-center justify-around">
                <Link
                    href="/explore"
                    className={`flex flex-1 flex-col items-center justify-center space-y-1 ${pathname === '/explore'
                        ? 'text-primary-500'
                        : 'text-gray-500 hover:text-gray-900'
                        }`}
                >
                    <FiCompass className="h-6 w-6" />
                    <span className="text-xs">Explore</span>
                </Link>

                <Link
                    href="/profile"
                    className={`flex flex-1 flex-col items-center justify-center space-y-1 ${pathname === '/profile'
                        ? 'text-primary-500'
                        : 'text-gray-500 hover:text-gray-900'
                        }`}
                >
                    <FiUser className="h-6 w-6" />
                    <span className="text-xs">Profile</span>
                </Link>
            </div>
        </nav>
    )
} 