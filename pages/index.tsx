import Head from 'next/head'
import useAuth from '../hooks/useAuth'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Essentials/Footer'
import Navbar from '../components/Essentials/Navbar'
import Row from '../components/RowData/Row'
import RowAnime from '../components/RowData/AnimeRow'
import YoutubeRow from '../components/RowData/YoutubeRow'
import requests from '../utilitites/constants'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalItem'
import Modal from '../components/Essentials/Modal'

const Home = (props: any) => {
  // console.log(props.amazonSeries)

  const { loading } = useAuth()
  // const showModal = useRecoilValue(modalState) 

  if (loading) return null

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#000000] to-[#434343]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Banner
          randomSeries={props.randomSeries}
          moviesByPopularity={props.moviesByPopularity}
        />

        <section
          className="space-y-16 
                      mt-[50vh] md:mt-72 lg:mt-32"
        >
          <Row title="Series By Popularity" data={props.seriesByPopularity} />
          <Row title="Movies By Popularity" data={props.moviesByPopularity} />
          <RowAnime
            title="Anime By Popularity"
            data={props.animeByPopularity.data}
          />

          <Row title="Trending Amazon Series" data={props.amazonOriginals} />
          <Row title="Trending Netflix Series" data={props.netflixOriginals} />
          <Row title="Trending Hotstar Series" data={props.hotstarOriginals} />

          <YoutubeRow
            title="Trending Youtube Videos"
            data={props.youtubeTrendingVideos}
          />
        </section>
      </main>

    {/* {showModal && <Modal />} */}

      <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const resRandom = await fetch(`${requests.randomSeries}`)
  const randomSeries = await resRandom.json()

  const resAmazon = await fetch(`${requests.amazonSeriesByNetwork}`)
  const amazonOriginals = await resAmazon.json()

  const resNetflix = await fetch(`${requests.netflixSeriesByNetwork}`)
  const netflixOriginals = await resNetflix.json()

  const resHotstar = await fetch(`${requests.hotstarSeriesByNetwork}`)
  const hotstarOriginals = await resHotstar.json()

  const resTopAnime = await fetch(`${requests.animeByPopularity}`)
  const animeByPopularity = await resTopAnime.json()

  const resMovieByPopularity = await fetch(`${requests.moviesByPopularity}`)
  const moviesByPopularity = await resMovieByPopularity.json()

  const resSeriesByPopularity = await fetch(`${requests.seriesByPopularity}`)
  const seriesByPopularity = await resSeriesByPopularity.json()

  const resTrendingYoutube = await fetch(`${requests.youtubeTrendingVideos}`)
  const youtubeTrendingVideos = await resTrendingYoutube.json()

  return {
    props: {
      randomSeries: randomSeries.results || null,
      animeByPopularity: animeByPopularity || null,
      moviesByPopularity: moviesByPopularity.results || null,
      seriesByPopularity: seriesByPopularity.results || null,
      amazonOriginals: amazonOriginals.results || null,
      netflixOriginals: netflixOriginals.results || null,
      hotstarOriginals: hotstarOriginals.results || null,
      youtubeTrendingVideos: youtubeTrendingVideos.items || null,
    },
  }
}
