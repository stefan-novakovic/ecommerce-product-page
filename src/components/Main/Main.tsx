import ProductImagesContainer from '../ProductImagesContainer/ProductImagesContainer';
import ProductTextContainer from '../ProductTextContainer/ProductTextContainer';
import { StyledMain } from './Main.styled';

const Main = () => {
   return (
      <StyledMain>
         <ProductImagesContainer />
         <ProductTextContainer />
      </StyledMain>
   );
};
export default Main;
