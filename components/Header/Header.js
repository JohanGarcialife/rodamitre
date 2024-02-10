import React, { useEffect, useState } from 'react'

import Topbar from './topbar/Topbar'
import Menu from './menu/Menu'

export default function Header(props) {
    const {show, setShow} = props
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 720) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    return (
        <>
           { scrolled === false ? <div className='absolute top-0 w-full z-50'>            
                <div className='px-12'>
                    <Topbar show={show} setShow={setShow} />
                    <Menu />
                </div>
            </div> : <div className='fixed bg-azul/75 top-0 w-full z-50'>            
                <div className='px-12'>
                    <Topbar show={show} setShow={setShow} />
                    <Menu />
                </div>
            </div>}
        </>
    )
}
