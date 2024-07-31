import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';
import { StyledThumbnailsWrapper } from './ThumbnailsWrapper.styled';

type Props = {
   currImg: number;
   setCurrImg: React.Dispatch<React.SetStateAction<number>>;
};

const ThumbnailsWrapper = ({ currImg, setCurrImg }: Props) => {
   const thumbnailsArray = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

   return (
      <StyledThumbnailsWrapper>
         {thumbnailsArray.map((thumbnail, i) => {
            return (
               <button className={currImg === i ? 'selected' : ''} key={`thumbnail${i}`} onClick={() => setCurrImg(i)}>
                  <img src={thumbnail} alt="" />
               </button>
            );
         })}
      </StyledThumbnailsWrapper>
   );
};
export default ThumbnailsWrapper;
