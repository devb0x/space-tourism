import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import classes from './MainNavbar.module.css'
import logo from '../../public/assets/shared/logo.svg'
import hamburger from '../../public/assets/shared/icon-hamburger.svg'
import close from '../../public/assets/shared/icon-close.svg'
import { useRouter } from "next/router"

function MainNavbar() {
	const router = useRouter()

	useEffect(() => {
		console.log(router.pathname)
	}, [])

	const [mobileNavOpen, setMobileNavOpen] = useState(false)
	const links = [
		{
			href: '/',
			number: "00",
			name: 'home'
		},
		{
			href: '/destination',
			number: "01",
			name: "destination"
		},
		{
			href: '/crew',
			number: "02",
			name: "crew"
		},
		{
			href: '/technology',
			number: "03",
			name: "technology"
		}
	]

	const openMobileNav = () => {
		const nav = document.querySelector("#nav")
		setMobileNavOpen(!mobileNavOpen)
		// if (nav.classList)
	}

	return (
		<header className={classes.header}>
			<div className={`${classes['header-logo']}`}>
				<Image src={logo} />
			</div>
			<nav className={`${classes['header-nav']}`}>
				{!mobileNavOpen &&
					<div className={`${classes['header-nav__hamburger']}`} onClick={openMobileNav}>
						<Image src={hamburger} />
					</div>
				}
				{mobileNavOpen &&
					<div className={`${classes['header-nav__close']}`} onClick={openMobileNav}>
						<Image src={close} />
					</div>
				}
				<div  className={classes.strip}/>
				<ul id="nav" className={mobileNavOpen ? `${classes['header-nav__list']}` : `${classes['header-nav__list']} ${classes['hidden']}`}>
					{links.map((link, index) => (
						<li
							key={index}
							className={
								router.pathname === `${link.href}` ?
									`${classes['header-nav__list-item']} ${classes['active']}` :
									`${classes['header-nav__list-item']}`
							}
						>
							<Link href={link.href} >
								<a onClick={openMobileNav}>
									<span className={`${classes['header-nav__list-item-number']}`}>
										{link.number}
									</span>
									{link.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavbar