import { StyledProductPricesWrapper } from './ProductPricesWrapper.styled';

const ProductPricesWrapper = () => {
   return (
      <StyledProductPricesWrapper>
         <div>
            <p>$125.00</p>
            <p>50%</p>
         </div>

         <del>$250.00</del>
      </StyledProductPricesWrapper>
   );
};
export default ProductPricesWrapper;
