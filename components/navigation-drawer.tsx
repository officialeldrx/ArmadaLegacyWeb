'use client'

import * as React from "react"
import { Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const navigationItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
]

export function NavigationDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => setIsOpen(!isOpen)

    React.useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    return (
        <>
            <div className="w-full bg-card flex gap-4 p-4 sticky top-0 z-10 border-b">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDrawer}
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
            <div
                className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            <div
                className={`fixed top-0 left-0 h-full w-[300px] sm:w-[400px] bg-card z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                aria-label="Navigation menu"
                role="dialog"
                aria-modal="true"
            >
                <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                </div>
                <nav className="px-4 py-2">
                    <ul className="space-y-2">
                        {navigationItems.map((item) => (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className="block py-2 px-4 text-lg hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}