import { Fragment, useState } from "react"

import classes from './Technology.module.css'

import data from '../../data/data.json'
import MainTitle from "../layout/MainTitle"

const Technology = () => {
	const [technology, setTechnology] = useState(data.technology[0])

	return (
		<Fragment>
			<div className={`${classes['technology-bg']}`}/>
			<div className={classes.technology}>

				<MainTitle number={"03"} title={"space launch 101"} />
				<div className={classes.container}>
					<picture style={{
						display: 'flex'
					}}>
						<source
							srcSet={technology.images.landscape}
							media="(max-width: 1439px)"
							className={classes.img}
						/>
						<img
							src={technology.images.portrait}
							alt={technology.name}
							className={classes.img}
						/>
					</picture>
					<div className={`${classes['btn-wrapper']}`}>
						{data.technology.map((el, index) => (
							<button
								role="button"
								key={index}
								className={
									data.technology[index].name === technology.name ? `${classes['btn']} ${classes['active']}` : `${classes['btn']}`
								}
								onClick={() => {
									setTechnology(data.technology[index])
								}}
							>
								{index + 1}
							</button>
						))}
					</div>
					<div className={`${classes['technology-text']}`}>
						<div className={`${classes['technology-text__intro']}`}>
							the terminology...
						</div>
						<h2 className={`${classes['technology-text__title']}`}>
							{technology.name}
						</h2>
						<div className={`${classes['technology-text__description']}`}>
							{technology.description}
						</div>
					</div>
				</div>

			</div>
		</Fragment>
	)
}

export default Technology