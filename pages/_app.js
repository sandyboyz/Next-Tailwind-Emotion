import React from 'react'
import '../styles/index.css'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}