import { Recursive } from 'next/font/google'
import './globals.css'
import './tailwindimports.css'

const inter = Recursive({ style: ['normal'],weight:['400','600','800'],subsets:['latin'] })

export const metadata = {
  title: 'Inventory Management System',
  description: 'Welcome to IvMgmt - Your One-Stop Destination for Ration Store Supplies. Discover a wide range of essential food and supply items, manage your inventory efficiently, and track sales and purchases with our user-friendly Inventory Management System. Serving your community with quality products and convenience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
