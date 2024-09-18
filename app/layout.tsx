import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationDrawer } from "@/components/navigation-drawer"

const optima = localFont({
    src: "./fonts/optima.woff",
    variable: '--optima'
});

const title = localFont({
    src: "./fonts/title.otf",
    variable: '--title'
});

export const metadata: Metadata = {
    title: "Armada Legacy",
};

const fighter = localFont({
    src: "./fonts/fighter-keyword.ttf",
    variable: '--fighter'
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${title.variable} ${optima.variable} ${fighter.variable} antialiased`}>
                <NavigationDrawer />
                <main>{children}</main>
            </body>
        </html>
    );
}
