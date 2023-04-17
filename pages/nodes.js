import Head from 'next/head'
import Image from 'next/image'
import { Node } from '../components/nodes/nodes.js'

export default function Team() {
  return (
    <div>
      <Head>
        <title>Flux | Nodes</title>
        <meta name="description" content="official website of flux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Node/>
    </div>
  )
}