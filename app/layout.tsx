import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Openmovies',
    description: 'An open source movie information database',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div id="root" className="min-h-screen bg-gray-200">
                    {children}
                </div>
            </body>
        </html>
    );
}
