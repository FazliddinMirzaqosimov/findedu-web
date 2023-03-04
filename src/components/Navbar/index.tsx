import React from 'react'
import logo from  './logo.svg'
import Image from 'next/image'
import Button from '../Button'
import css from './navbar.module.scss'
import Link from 'next/link'

function Navbar() {
  return (
    <header className={css.navbar}>
        <div className={css.container}>
            <Image className={css.logo} src={logo} alt='Logo' />

            <nav>
                <ul>
                    <li><Link href={'/'}>O’quv markazlar</Link></li>
                    <li><Link href={'/'}>Loyiha haqida</Link></li>
                </ul>
                <Button label='Kirish' type='secondary' border='full' />
                <Button label='Ro’uhatdan o’tish' type='primary' border='full' />
            </nav>
        </div>
        <div className={css.line}>
            <div className={css.dot}></div>
        </div>
    </header>
  )
}

export default Navbar