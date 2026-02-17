import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "GoVio - Smart Transport Management System | Real-time Bus Tracking",
    description: "GoVio provides intelligent transport management solutions for schools, universities, corporate companies, and transport operators. Real-time tracking, route optimization, and comprehensive analytics.",
    keywords: "transport management, bus tracking, fleet management, school transport, corporate transport, GPS tracking, route optimization",
    authors: [{ name: "GoVio" }],
    icons: {
        icon: [
            { url: '/assests/logo/govio_icon.png', sizes: 'any' },
            { url: '/assests/logo/govio_icon.png', sizes: '32x32', type: 'image/png' },
            { url: '/assests/logo/govio_icon.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: '/assests/logo/govio_icon.png',
        shortcut: '/assests/logo/govio_icon.png',
    },
    openGraph: {
        title: "GoVio - Smart Transport Management System",
        description: "Real-time bus tracking & transport management for organizations",
        type: "website",
        locale: "en_US",
        images: ['/assests/logo/govio_icon.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "GoVio - Smart Transport Management System",
        description: "Real-time bus tracking & transport management for organizations",
        images: ['/assests/logo/govio_icon.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "vNW6kfI36m8Az64J6oDApcHvatYLcEbFgXZrQ-khz6M",
    },
};

import CursorFollower from "@/components/CursorFollower";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="antialiased">
                <CursorFollower />
                {children}
            </body>
        </html>
    );
}
