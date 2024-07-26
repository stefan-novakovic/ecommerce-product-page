import AddToCartButton from '../AddToCartButton/AddToCartButton';
import ProductQtyButtonsWrapper from '../ProductQtyButtonsWrapper/ProductQtyButtonsWrapper';
import { StyledProductButtonsWrapper } from './ProductButtonsWrapper.styled';

const ProductButtonsWrapper = () => {
   return (
      <StyledProductButtonsWrapper>
         <ProductQtyButtonsWrapper />
         <AddToCartButton />
      </StyledProductButtonsWrapper>
   );
};
export default ProductButtonsWrapper;
