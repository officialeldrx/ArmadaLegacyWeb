import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationDrawer } from "@/components/navigation-drawer"
import { Analytics } from "@vercel/analytics/react"

const optima = localFont({
    src: "./fonts/optima.woff",
    variable: '--optima'
});

const title = localFont({
    src: "./fonts/title.otf",
    variable: '--title'
});

const fighter = localFont({
    src: "./fonts/fighter-keyword.ttf",
    variable: '--fighter'
});

const logo = localFont({
    src: "./fonts/logo.ttf",
    variable: '--logo'
});

export const metadata: Metadata = {
    title: "Armada Legacy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Analytics />
            </head>

            <body className={`${title.variable} ${optima.variable} ${fighter.variable} ${logo.variable} antialiased`}>

                <NavigationDrawer />
                <main className="h-screen w-full pt-[53px] overflow-y-auto flex justify-center z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
