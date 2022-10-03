import React from "react"
import Image from "next/image"

import classes from './MainNavbar.module.css'
import logo from '../../public/assets/shared/logo.svg'
import hamburger from '../../public/assets/shared/icon-hamburger.svg'
import close from '../../public/assets/shared/icon-close.svg'

function mainNavbar() {

	return (
		<header className={classes.header}>
			<div>
				<Image src={logo} />
			</div>
			<nav>
				<div>
					<Image src={hamburger} />
				</div>
				<ul>
					<li>
						<a href="#">
							<span>00</span>
							home
						</a>
					</li>
					<li>
						<a href="#">
							<span>01</span>
							destination
						</a>
					</li>
					<li>
						<a href="#">
							<span>02</span>
							crew
						</a>
					</li>
					<li>
						<a href="#">
							<span>03</span>
							technology
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default mainNavbar