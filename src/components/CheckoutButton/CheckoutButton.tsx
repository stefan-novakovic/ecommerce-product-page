import { StyledCheckoutButton } from './CheckoutButton.styled';
import useCartContext from '../../hooks/useCartContext';

const CheckoutButton = () => {
   const { setTotalQuantity, setCheckout } = useCartContext();

   const handleCheckout = () => {
      // checkout simulation
      setTotalQuantity(0);
      setCheckout(true);

      setTimeout(() => {
         setCheckout(false);
      }, 2500);
   };
   return <StyledCheckoutButton onClick={handleCheckout}>Checkout</StyledCheckoutButton>;
};
export default CheckoutButton;
