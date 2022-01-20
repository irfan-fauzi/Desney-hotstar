import { fetchDetail, fetchReviews } from "../../utils/fetch-ssr"
import { DetailDesktop, DetailMobile, LayoutDetail } from '../../components'


export async function getServerSideProps({params}) {
  const reqDetail = await fetchDetail(params.id)
  const reviews = await fetchReviews(params.id)
  if(reqDetail.success == false || reviews.success == false) {
    return {
      notFound: true
    }
  }
  return {
    props: {reqDetail, reviews}
  }
}

const Detail = ({reqDetail, reviews}) => {
  
  return (
    <LayoutDetail>
      <div className='lg:hidden block'>
        <DetailMobile reqDetail={reqDetail} />
      </div>
      <div className='hidden lg:block'>
        <DetailDesktop reqDetail={reqDetail} reviews={reviews} />
      </div>
    </LayoutDetail>
  )
}

export default Detail
