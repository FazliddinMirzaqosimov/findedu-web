import React from 'react'
import logo from  './logo.svg'
import Image from 'next/image'
import css from './navbar.module.scss'
import Link from 'next/link'

function Navbar() {
  return (
    <header className={css.navbar}>
        <div className={css.container}>
            <Link href='#'>
                <Image className={css.logo} src={logo} alt='Logo' />
            </Link>

            <nav>
                <ul>
                    <li><Link href={'/'}>O’quv markazlar</Link></li>
                    <li><Link href={'/'}>Loyiha haqida</Link></li>
                </ul>
            </nav>
        </div>
        <div className={css.line}>
            <div className={css.dot}></div>
        </div>
    </header>
  )
}

export default Navbar