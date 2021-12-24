import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify - Listen to your Heart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
        {/* Center */}
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}
