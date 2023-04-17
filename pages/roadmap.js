import Head from 'next/head'
import Image from 'next/image'
import { RoadMapPage } from '../components/roadmapPage/roadmapPage'

export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | RoadMap</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <RoadMapPage/>
    </div>
  )
}