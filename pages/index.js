import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
  <Head>
    <title>Next.js Starter!</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main>
    <input type="text" id="name" name="name" />
    <input type="text" id="password" name="password" />
  </main>

  <Footer />
</div>
  )
}
