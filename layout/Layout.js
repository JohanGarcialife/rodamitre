import Header from '@/components/Header/Header'
import Footer from '@/components/footer/Footer'
import React from 'react'

export default function Layout(props) {
    const {children} = props
  return (
    <div>       
        <Header className="absolute top-0 z-40"/>
        {children}
        <Footer />
    </div>
  )
}
