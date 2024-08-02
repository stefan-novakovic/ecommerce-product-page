import { useState } from 'react';
import { StyledProductImagesContainer } from './ProductImagesContainer.styled';
import ThumbnailsWrapper from '../../ThumbnailsWrapper/ThumbnailsWrapper';
import PreviewImageWrapper from '../PreviewImageWrapper/PreviewImageWrapper';
import Lightbox from '../Lightbox/Lightbox';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const ProductImagesContainer = () => {
   const [open, setOpen] = useState<boolean>(false);
   const [currImg, setCurrImg] = useState<number>(0);

   return (
      <StyledProductImagesContainer>
         <PreviewImageWrapper currImg={currImg} setOpen={setOpen} />
         <ThumbnailsWrapper currImg={currImg} setCurrImg={setCurrImg} />
         <Lightbox open={open} setOpen={setOpen} currImg={currImg} />

         <ImageCarousel />
      </StyledProductImagesContainer>
   );
};

export default ProductImagesContainer;
