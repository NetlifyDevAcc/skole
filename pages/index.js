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
    <label htmlFor="name">Navn:</label>
    <input type="text" id="name" name="name" />

    <br />

    <label htmlFor="password">Kodeord:</label>
    <input type="text" id="password" name="password" />

    <br />

    <button type="submit" id="submit-btn">Login</button>

    <br />

    <label htmlFor="display-text" id="display-label"></label>
  </main>

  <Footer />
</div>
  )
}
