import Image from 'next/image'
import Head from 'next/head'
import { BannerCarousel, Header } from '../components'
import API_ENDPOINT from '../utils/config/api-endpoint'

export default function Home(props) {
  
  return (
    <>
      <Head>
        <title>Desney clone</title>
      </Head>
      <div className='min-h-screen bg-gray-900'>
        <Header />
        <BannerCarousel nowPlaying={props.nowPlaying} />
      </div>
    </>
  )
}

const fetchNowPlaying = async () => {
  try {
    const res = await fetch(API_ENDPOINT.NOW_PLAYING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.log(`ada masalah now playing ${error}`)
  }
}

const fetchUpcoming = async () => {
  try {
    const res = await fetch(API_ENDPOINT.UPCOMING)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.log(`ada masalah fetch upcoming : ${error}`)
  }
}

export const getStaticProps = async () => {
  const nowPlaying = await fetchNowPlaying()
  const upComing = await fetchUpcoming()
  return {
    props : {
       nowPlaying,
       upComing
    }
  }
}