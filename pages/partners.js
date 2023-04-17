import Head from 'next/head'
import Image from 'next/image'
import { PartnersPage } from '../components/partnersPage/partnersPage'

export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | Partners</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <PartnersPage/>
    </div>
  )
}