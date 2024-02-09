import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

export default function Footer() {
  return (
    <div className='px-20 py-12 bg-azul flex items-center justify-between'>
        <div>
            <p className='text-sm'>© 2016 All rights reserved.</p>
        </div>
        <div>
            <div className='flex items-center gap-4'>
            <p className='text-sm'>SEGUINOS EN: </p>
            <FaFacebookF />
            <FaTwitter />
            <FaDribbble />
            <TiSocialGooglePlus />
            </div>
        </div>
    </div>
  )
}
