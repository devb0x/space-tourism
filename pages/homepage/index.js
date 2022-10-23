import { Fragment } from "react"
import classes from './Homepage.module.css'
import { useRouter } from "next/router"

function Homepage() {
	const router = useRouter()

	const navigate = () => {
		return router.push('/destination')
	}

	return (
		<Fragment>
			<div className={`${classes['homepage-bg']}`} />
			<div className={classes.homepage}>
				<h1 className={`${classes['title']}`}>
					so, you want to travel to <br/>
					<strong>space</strong>
				</h1>
				<div className={`${classes['text']}`}>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of
					on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
				</div>
				<button
					className={classes.btn}
					onClick={navigate}
				>
					Explore
				</button>
			</div>
		</Fragment>
	)
}

export default Homepage