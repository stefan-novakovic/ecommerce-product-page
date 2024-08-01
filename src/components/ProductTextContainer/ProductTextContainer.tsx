import ProductButtonsWrapper from '../ProductButtonsWrapper/ProductButtonsWrapper';
import ProductPricesWrapper from '../ProductPricesWrapper/ProductPricesWrapper';
import { StyledProductTextContainer } from './ProductTextContainer.styled';
import { products, ProductType } from '../../data/products';

const ProductTextContainer = () => {
   const product: ProductType | undefined = products.find((product) => product.sku === 'product-1');

   return (
      <StyledProductTextContainer>
         <h2>SNEAKER COMPANY</h2>
         <h3>{product?.name}</h3>
         <p>{product?.desc}</p>

         <ProductPricesWrapper price={product?.price} oldPrice={product?.oldPrice} />
         <ProductButtonsWrapper />
      </StyledProductTextContainer>
   );
};
export default ProductTextContainer;
