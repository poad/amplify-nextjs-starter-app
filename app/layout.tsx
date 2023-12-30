'use client'
import { Inter } from 'next/font/google'
import './globals.css'

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './aws-config';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

const inter = Inter({ subsets: ['latin'] })

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default withAuthenticator(RootLayout)