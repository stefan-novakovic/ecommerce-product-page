import { createContext, ReactNode, useState } from 'react';
import CartContextType from './CartContextType';

const initialState = {
   quantity: 0,
   setQuantity: () => {},
   totalQuantity: 0,
   setTotalQuantity: () => {},
   openCart: false,
   setOpenCart: () => {}
};

const CartContext = createContext<CartContextType>(initialState);

type ProviderProps = {
   children?: ReactNode | ReactNode[];
};

export const CartProvider = ({ children }: ProviderProps) => {
   const [quantity, setQuantity] = useState<number>(0);
   const [totalQuantity, setTotalQuantity] = useState<number>(0);
   const [openCart, setOpenCart] = useState<boolean>(false);
   return (
      <CartContext.Provider value={{ quantity, setQuantity, totalQuantity, setTotalQuantity, openCart, setOpenCart }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartContext;
