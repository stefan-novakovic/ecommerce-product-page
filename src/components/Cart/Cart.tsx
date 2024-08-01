import useCartContext from '../../hooks/useCartContext';
import { StyledCart } from './Cart.styled';
import ItemList from '../ItemList/ItemList';
import { useEffect, useRef } from 'react';

type Props = {
   qtyIndicatorButtonRef: React.RefObject<HTMLButtonElement>;
   cartButtonRef: React.RefObject<HTMLButtonElement>;
};

const Cart = ({ qtyIndicatorButtonRef, cartButtonRef }: Props) => {
   const { totalQuantity, openCart, setOpenCart } = useCartContext();
   const cartRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handler = (e: MouseEvent) => {
         if (
            !cartRef.current!.contains(e.target as Node) &&
            !qtyIndicatorButtonRef.current!.contains(e.target as Node) &&
            !cartButtonRef.current!.contains(e.target as Node)
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
      <StyledCart $open={openCart} ref={cartRef}>
         <h2>Cart</h2>

         <div>{totalQuantity ? <ItemList /> : <p>Your cart is empty.</p>}</div>
      </StyledCart>
   );
};
export default Cart;
