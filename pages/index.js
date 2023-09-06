import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export const  getStaticProps= async ()=>{
  const url = "https://links.papareact.com/pyp"
  const res = await fetch(url).then((res)=>JSON.stringify(res.json()))
 const exploreData = await res.json()
  return {
  props:{
    exploreData,
  }
}
}
export default function Home() {
 
  // console.log(exploreData(),"expolre data")

   return (
    <div>
    <Head className='flex flex-col items-center justify-center min-h-screen py-2'>
      <title>
        Airbnb
      </title>
      </Head>
   <Header />
   {/* banner */}
    <Banner />
    <main className='max-w-7xl mx-a
    px-8 sm:px-16 '>

      <section className='pt-6'>

        <h2 className='text-4xl font-semibold pb-5 '>
        Explore Nearby
        </h2>
      {/* pull data from server */}


      {/* { exploreData && exploreData?.map(item=> {
        <h1>{item.location}</h1>
      })} */}

      </section>
    </main>
    </div>
   
  )
}
