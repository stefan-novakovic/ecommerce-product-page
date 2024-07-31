import { StyledPreviewImageWrapper } from './PreviewImageWrapper.styled';

type Props = {
   currImg: number;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PreviewImageWrapper = ({ currImg, setOpen }: Props) => {
   const img: string = new URL(`../../assets/images/image-product-${currImg + 1}.jpg`, import.meta.url).href;

   return (
      <StyledPreviewImageWrapper onClick={() => setOpen(true)}>
         <img src={img} alt="" />
      </StyledPreviewImageWrapper>
   );
};
export default PreviewImageWrapper;
