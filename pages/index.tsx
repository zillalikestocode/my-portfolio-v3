import type { NextPage } from 'next'
import Main from '../components/Main'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { useRecoilValue } from 'recoil'
import { sidebar } from '../atoms/sidebar'
import Sidebar from '../components/Sidebar'
import { AnimatePresence } from 'framer-motion'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  const side = useRecoilValue(sidebar)
  return (
    <div className="min-h-screen md:px-10 ">
      <Head>
        <title>Emmanuel Ngoka</title>
      </Head>
    
      <main className="text-white">
        <Header />
        <AnimatePresence>{side && <Sidebar />}</AnimatePresence>
        <Main />
        <Projects />
      </main>
    </div>
  )
}

export default Home
