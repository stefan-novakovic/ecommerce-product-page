import { createContext, ReactNode, useState } from 'react';
import CartContextType from './CartContextType';
import { initialState } from './CartContextInitState';

const CartContext = createContext<CartContextType>(initialState);

export const CartProvider = ({ children }: { children?: ReactNode | ReactNode[] }) => {
   const [quantity, setQuantity] = useState<number>(0);
   const [totalQuantity, setTotalQuantity] = useState<number>(0);
   const [openCart, setOpenCart] = useState<boolean>(false);
   const [openSidebarMenu, setOpenSidebarMenu] = useState<boolean>(false);
   return (
      <CartContext.Provider
         value={{
            quantity,
            setQuantity,
            totalQuantity,
            setTotalQuantity,
            openCart,
            setOpenCart,
            openSidebarMenu,
            setOpenSidebarMenu
         }}
      >
         {children}
      </CartContext.Provider>
   );
};

export default CartContext;
