import { useState } from 'react';
import { StyledProductImagesContainer } from './ProductImagesContainer.styled';
import PreviewImageWrapper from '../PreviewImageWrapper/PreviewImageWrapper';
import Lightbox from '../Lightbox/Lightbox';
import ThumbnailsWrapper from '../ThumbnailsWrapper/ThumbnailsWrapper';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const ProductImagesContainer = () => {
   const [open, setOpen] = useState<boolean>(false);
   const [currImg, setCurrImg] = useState<number>(0);

   return (
      <StyledProductImagesContainer>
         <PreviewImageWrapper currImg={currImg} setOpen={setOpen} />
         <Lightbox open={open} setOpen={setOpen} currImg={currImg} />
         <ThumbnailsWrapper currImg={currImg} setCurrImg={setCurrImg} />

         <ImageCarousel />
      </StyledProductImagesContainer>
   );
};

export default ProductImagesContainer;
