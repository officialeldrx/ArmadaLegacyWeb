import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationDrawer } from "@/components/navigation-drawer"

const optima = localFont({
    src: "./fonts/optima.woff",
});

const title = localFont({
    src: "./fonts/title.otf",
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
            <body className={`${title.className} antialiased`}>
                <NavigationDrawer />
                <main>{children}</main>
            </body>
        </html>
    );
}
