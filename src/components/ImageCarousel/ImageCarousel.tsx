import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StyledImageCarousel } from './ImageCarousel.styled';
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';

const ImageCarousel = () => {
   return (
      <StyledImageCarousel>
         <Carousel showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
         </Carousel>
      </StyledImageCarousel>
   );
};
export default ImageCarousel;
