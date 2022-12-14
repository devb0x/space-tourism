import MainNavbar from "./MainNavbar"
import classes from './Layout.module.css'
import { Fragment } from "react"

function Layout(props) {

	return (
		<Fragment>
			<MainNavbar />
			<main className={classes.main}>{props.children}</main>
		</Fragment>
	)
}

export default Layout