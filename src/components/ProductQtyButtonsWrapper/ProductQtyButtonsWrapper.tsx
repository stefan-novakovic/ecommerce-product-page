import { StyledProductQtyButtonsWrapper } from './ProductQtyButtonsWrapper.styled';
import useCartContext from '../../hooks/useCartContext';
import QtyIncrementButton from '../QtyIncrementButton/QtyIncrementButton';
import QtyDecrementButton from '../QtyDecrementButton/QtyDecrementButton';

const ProductQtyButtonsWrapper = () => {
   const { quantity, setQuantity } = useCartContext();

   return (
      <StyledProductQtyButtonsWrapper>
         <QtyIncrementButton quantity={quantity} setQuantity={setQuantity} />
         <div>{quantity}</div>
         <QtyDecrementButton quantity={quantity} setQuantity={setQuantity} />
      </StyledProductQtyButtonsWrapper>
   );
};
export default ProductQtyButtonsWrapper;
