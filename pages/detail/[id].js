import Image from 'next/image'
import { BsStarFill, BsFillBookmarksFill } from 'react-icons/bs'
import CONFIG from '../../utils/config/config'
import { fetchDetail } from "../../utils/fetch-ssr"
import { DetailMobile, Gap, Layout, LayoutDetail } from '../../components'



export async function getServerSideProps({params}) {
  const reqDetail = await fetchDetail(params.id)
  if(reqDetail.success == false) {
    return {
      notFound: true
    }
  }
  return {
    props: {reqDetail}
  }
}

const Detail = ({reqDetail}) => {
  
  const star = [1,2,3,4,5]

  return (
    <LayoutDetail>
      <div className='lg:hidden block'>
        <DetailMobile reqDetail={reqDetail} />
      </div>
      <div className='hidden lg:block'>
        <section className='relative'>
          <div className='container-image relative after:content-[""] after:absolute after:bg-black after:w-full after:top-10 after:h-full after:opacity-80'>
            <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.backdrop_path} className='inside-img' layout='fill' />
            
          </div>
          <div className='absolute w-full top-[10rem] px-[3rem]'>
            <div className='flex gap-10'>
              <div className=''>
                <img src={CONFIG.BASE_IMAGE_URL + reqDetail.poster_path} className='w-[300px]' />
              </div>
              <div className='w-7/12'>
                <p className='text-white text-3xl'>{reqDetail.title}</p>
                <Gap className='h-3' />
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-2 '>
                    {star.map(el => (
                      <BsStarFill className={star.indexOf(el) > 3 ? `text-white` : `text-red-400`} />
                    ))}
                  </div>
                  <p className='text-gray-400 font-bold'>{reqDetail.vote_average}</p>
                </div>
                <Gap className='h-2' />
                <div className='flex gap-4'>
                  {reqDetail.genres.map(genre => (
                    <p key={genre.id} className='text-gray-100 uppercase text-[0.8rem]'>{genre.name}</p>
                  ))}
                </div>
                <Gap className='h-2' />
                <p className='text-white'>{reqDetail.overview}</p>
                <Gap className='h-10' />
                <p className='text-white'>Production by :</p>
                <div className='flex items-end gap-4'>
                  {
                    reqDetail.production_companies.map(el => (
                      <div key={el.id} className='mt-3 bg-red-400 p-2 rounded-lg'>
                        <img src={CONFIG.BASE_IMAGE_URL + el.logo_path} alt="logo" className={el.logo_path ? `w-[9rem] block` : `hidden`}/>
                        
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
         
        </section>
      </div>
    </LayoutDetail>
  )
}

export default Detail
