import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  const title = 'Lost in Language'
  const handleScroll = () => {
    console.log('scroll')
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="CIU265 Interaction Design Project, class of 2021. Chalmers University of Technology"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="iframe">
        <iframe
          src="https://scratch.mit.edu/projects/587264731/embed"
          allowtransparency="true"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}
