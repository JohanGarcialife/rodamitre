import React, { useState } from 'react'

import Topbar from './topbar/Topbar'
import Menu from './menu/Menu'

export default function Header(props) {
    const {show, setShow} = props

    return (
        <div className='absolute top-0 w-full z-10'>            
            <div className='px-12'>
                <Topbar show={show} setShow={setShow} />
                <Menu />
            </div>
        </div>
    )
}
