import { ReviewComment } from ".."
import { Gap, InfoTambahan, ListActors } from "../.."
import ImageHeader from "./image-header"
import TitleGenreSinopsis from "./title-genre-sinopsis"

const DetailMobile = () => {
  
  return (
    <section>
      <article>
        <ImageHeader />
      </article>
      <article className="relative -top-5">
        <TitleGenreSinopsis />
      </article>
      <article className="bg-white">
        <Gap className='h-5' />
        <ListActors />
        <Gap className='h-5' />
        <div className="px-4">
          <InfoTambahan />
          <Gap className='h-5' />
          <ReviewComment />
        </div>
        <Gap className='h-5' />
      </article>      
    
    </section>
  )
}

export default DetailMobile
