import { StyledProductPricesWrapper } from './ProductPricesWrapper.styled';
import { ProductType } from '../../data/products';

const ProductPricesWrapper = ({ price, oldPrice }: ProductType) => {
   return (
      <StyledProductPricesWrapper>
         <div>
            <h2>{`$${price?.toFixed(2)}`}</h2>
            <p>50%</p>
         </div>

         <del>{`$${oldPrice?.toFixed(2)}`}</del>
      </StyledProductPricesWrapper>
   );
};
export default ProductPricesWrapper;
