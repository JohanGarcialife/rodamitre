import Header from '@/components/Header/Header'
import Footer from '@/components/footer/Footer'
import React from 'react'

export default function Layout(props) {
    const {children} = props
  return (
    <div>       
        <Header />
        {children}
        <Footer />
    </div>
  )
}
