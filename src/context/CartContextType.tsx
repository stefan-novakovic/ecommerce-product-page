import { Dispatch } from 'react';

type CartContextType = {
   quantity: number;
   setQuantity: Dispatch<React.SetStateAction<number>>;
   totalQuantity: number;
   setTotalQuantity: Dispatch<React.SetStateAction<number>>;
   openCart: boolean;
   setOpenCart: Dispatch<React.SetStateAction<boolean>>;
   openSidebarMenu: boolean;
   setOpenSidebarMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default CartContextType;
