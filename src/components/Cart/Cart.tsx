import { useEffect, useRef } from 'react';
import { StyledCart } from './Cart.styled';
import useCartContext from '../../hooks/useCartContext';
import ItemList from '../ItemList/ItemList';

type Props = {
   cartQtyIndicatorButtonRef: React.RefObject<HTMLButtonElement>;
   cartButtonRef: React.RefObject<HTMLButtonElement>;
};

const Cart = ({ cartQtyIndicatorButtonRef, cartButtonRef }: Props) => {
   const { totalQuantity, openCart, setOpenCart } = useCartContext();
   const cartRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handler = (e: MouseEvent) => {
         if (
            !cartRef.current!.contains(e.target as Node) &&
            !cartButtonRef.current!.contains(e.target as Node) &&
            !cartQtyIndicatorButtonRef.current!.contains(e.target as Node)
         ) {
            setOpenCart(false);
         }
      };

      document.addEventListener('mousedown', handler);
      return () => {
         document.removeEventListener('mousedown', handler);
      };
   });

   return (
      <StyledCart ref={cartRef} $open={openCart}>
         <h2>Cart</h2>

         <div>{totalQuantity ? <ItemList /> : <p>Your cart is empty.</p>}</div>
      </StyledCart>
   );
};
export default Cart;
