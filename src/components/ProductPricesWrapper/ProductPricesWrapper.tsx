import { StyledProductPricesWrapper } from './ProductPricesWrapper.styled';
import { ProductType } from '../../data/products';

const ProductPricesWrapper = ({ price, oldPrice }: ProductType) => {
   return (
      <StyledProductPricesWrapper>
         <div>
            <p>{`$${price?.toFixed(2)}`}</p>
            <p>50%</p>
         </div>

         <del>{`$${oldPrice?.toFixed(2)}`}</del>
      </StyledProductPricesWrapper>
   );
};
export default ProductPricesWrapper;
