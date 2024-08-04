import { StyledProductButtonsWrapper } from './ProductButtonsWrapper.styled';
import ProductQtyButtonsWrapper from '../ProductQtyButtonsWrapper/ProductQtyButtonsWrapper';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductButtonsWrapper = () => {
   return (
      <StyledProductButtonsWrapper>
         <ProductQtyButtonsWrapper />
         <AddToCartButton />
      </StyledProductButtonsWrapper>
   );
};
export default ProductButtonsWrapper;
