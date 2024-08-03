import { StyledCartQtyIndicatorButton } from './CartQtyIndicatorButton.styled';
import useCartContext from '../../hooks/useCartContext';

type Props = {
   cartQtyIndicatorButtonRef: React.RefObject<HTMLButtonElement>;
};

const CartQtyIndicatorButton = ({ cartQtyIndicatorButtonRef }: Props) => {
   const { setOpenCart, totalQuantity } = useCartContext();
   return (
      <StyledCartQtyIndicatorButton
         ref={cartQtyIndicatorButtonRef}
         $totalQuantity={totalQuantity}
         onClick={() => setOpenCart((prev) => !prev)}
         tabIndex={-1}
      >
         {totalQuantity}
      </StyledCartQtyIndicatorButton>
   );
};
export default CartQtyIndicatorButton;
