import Head from 'next/head'
import Image from 'next/image'
import { TeamPage } from '../components/teamPage/teamPage'

export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | Team</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <TeamPage/>
    </div>
  )
}