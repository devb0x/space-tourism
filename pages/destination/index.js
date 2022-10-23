import React, { Fragment } from "react"
import Head from "next/head"

import DestinationList from "../../components/DestinationList"

function DestinationPage() {

	return (
		<Fragment>
			<Head>
				<title>Pick your Destination</title>
				<meta
					name="description"
					content="Select your future destination."
				/>
			</Head>
			<DestinationList />
		</Fragment>
	)
}

export default DestinationPage