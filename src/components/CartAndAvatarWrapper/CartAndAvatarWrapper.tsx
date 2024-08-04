import { useRef } from 'react';
import { StyledCartAndAvatarWrapper } from './CartAndAvatarWrapper.styled';
import AvatarWrapper from '../AvatarWrapper/AvatarWrapper';
import Cart from '../Cart/Cart';
import CartQtyIndicatorButton from '../CartQtyIndicatorButton/CartQtyIndicatorButton';
import CartButton from '../CartButton/CartButton';

const CartAndAvatarWrapper = () => {
   const cartQtyIndicatorButtonRef = useRef<HTMLButtonElement>(null);
   const cartButtonRef = useRef<HTMLButtonElement>(null);

   return (
      <StyledCartAndAvatarWrapper>
         <CartQtyIndicatorButton cartQtyIndicatorButtonRef={cartQtyIndicatorButtonRef} />
         <CartButton cartButtonRef={cartButtonRef} />
         <Cart cartQtyIndicatorButtonRef={cartQtyIndicatorButtonRef} cartButtonRef={cartButtonRef} />

         <AvatarWrapper />
      </StyledCartAndAvatarWrapper>
   );
};
export default CartAndAvatarWrapper;
