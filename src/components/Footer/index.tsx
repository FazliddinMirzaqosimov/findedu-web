import React from 'react'
import Image from 'next/image'
import css from './footer.module.scss'
import logo from './logo.svg'
import Link from 'next/link'
import fc from './fc.svg'
import ig from './ig.svg'
import tg from './tg.svg'
import yt from './yt.svg'


function Footer() {
  return (
    <footer className={css.footer}>
        <div className={`container ${css.container}`}>
            <Link href='#'>
                <Image src={logo} alt='Footer-logo'/>
            </Link>

            <nav>
                <ul className={css.mainLinks}>
                    <li><Link href={'#'}>Asosiy</Link></li>
                    <li><Link href={'#'}>O’quv markazlar</Link></li>
                    <li><Link href={'#'}>Loyiha haqida</Link></li>
                </ul>
                <ul className={css.mainLinks}>
                    <li><Link href={'#'}>Bog’lanish</Link></li>
                    <li><Link href={'#'}>Izoh qoldirish</Link></li>
                    <li><Link href={'#'}>Boshqa loyihalar</Link></li>
                </ul>

                <div className={css.right}>
                    <ul className={css.links}>
                        <li><Link href={'#'}>IT</Link></li>
                        <li><Link href={'#'}>Matematika</Link></li>
                        <li><Link href={'#'}>Marketing</Link></li>
                        <li><Link href={'#'}>SAT</Link></li>
                    </ul>

                    <ul className={css.links}>
                        <li><Link href={'#'}>Ingliz tili</Link></li>
                        <li><Link href={'#'}>SMM</Link></li>
                        <li><Link href={'#'}>Dizayn</Link></li>
                        <li><Link href={'#'}>Kimyo</Link></li>
                    </ul>
                </div>
            </nav>

            <div className={css.social}>
                <div className={css.left}>
                    <p>© 2023 Findedu. All Rights Reserved.</p>
                    <ul>
                        <li><Link href={'#'}>Privacy</Link></li>
                        <li><Link href={'#'}>Cookies</Link></li>
                    </ul>
                </div>

                <ul className={css.socials}>
                    <li><Link href={'#'}><Image src={fc} alt="Facebook"/></Link></li>
                    <li><Link href={'#'}><Image src={ig} alt="Instagram"/></Link></li>
                    <li><Link href={'#'}><Image src={tg} alt="Telegram"/></Link></li>
                    <li><Link href={'#'}><Image src={yt} alt="YouTube"/></Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer