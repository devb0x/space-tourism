import React, { Fragment, useState } from "react"

import classes from './DestinationList.module.css'

import data from '../../data/data.json'
import MainTitle from "../layout/MainTitle"

const DestinationList = () => {
	const [destination, setDestination] = useState(data.destinations[0])

	return (
		<Fragment>
			<div className={`${classes['destination-bg']}`}/>
			<div className={classes.destination}>
				<MainTitle number={"01"} title={"pick your destination"} />
				<img
					src={destination.images.png}
					alt={destination.name}
					className={classes.img}
				/>
				<div className={`${classes['card']}`}>
					<ul className={`${classes['list']}`}>
						{data.destinations.map((el, index) =>
							<li
								key={index}
								className={
									data.destinations[index].name === destination.name ? `${classes['list-item']} ${classes['active']}` : `${classes['list-item']}`
							}
								onClick={() => setDestination(data.destinations[index])}
							>
								{el.name}
							</li>
						)}
					</ul>

					<h2 className={`${classes['card-name']}`}>
						{destination.name}
					</h2>
					<div className={`${classes['card-description']}`}>
						{destination.description}
					</div>
					<div className={`${classes['card-divider']}`}/>
					<footer className={`${classes['card-footer']}`}>
						<div className={`${classes['card-distance']}`}>
							avg.distance
							<div className={`${classes['card-value']}`}>
								{destination.distance}
							</div>
						</div>
						<div className={`${classes['card-travel']}`}>
							est. travel time
							<div className={`${classes['card-value']}`}>
								{destination.travel}
							</div>
						</div>
					</footer>
				</div>
			</div>
		</Fragment>
	)
}

export default DestinationList