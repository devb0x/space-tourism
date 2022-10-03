import { Fragment } from "react"
import Head from 'next/head'

import Homepage from "./homepage"

function Home() {

  return (
    <Fragment>
      <Head>
        <title>Space Tourism</title>
        <meta
          name="description"
          content="Browse space destinations!"
        />
      </Head>
      <Homepage />
    </Fragment>
  )
}

export default Home