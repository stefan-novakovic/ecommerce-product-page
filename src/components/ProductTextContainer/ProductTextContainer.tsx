import ProductButtonsWrapper from '../ProductButtonsWrapper/ProductButtonsWrapper';
import ProductPricesWrapper from '../ProductPricesWrapper/ProductPricesWrapper';
import { StyledProductTextContainer } from './ProductTextContainer.styled';

const ProductTextContainer = () => {
   return (
      <StyledProductTextContainer>
         <h2>SNEAKER COMPANY</h2>
         <h3>Fall Limited Edition Sneakers</h3>
         <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
         </p>

         <ProductPricesWrapper />
         <ProductButtonsWrapper />
      </StyledProductTextContainer>
   );
};
export default ProductTextContainer;
