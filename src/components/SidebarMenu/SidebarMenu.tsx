import { Menu, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import './SidebarMenuOverride.css';
import useCartContext from '../../hooks/useCartContext';

const SidebarMenu = () => {
   const { openSidebarMenu, setOpenSidebarMenu } = useCartContext();

   type DataType<T> = {
      itemKey: string;
      text: string;
      domEvent: T;
   };

   const handleClick = <T,>(data: DataType<T>) => {
      window.location.href = `/${data.itemKey}`;
   };

   return (
      <Menu
         className="burger-menu"
         width={250}
         side={'left'}
         isOpen={openSidebarMenu}
         onClose={() => setOpenSidebarMenu(false)}
         onClick={handleClick}
      >
         <Item itemKey={'collections'} text={'Collections'}></Item>
         <Item itemKey={'men'} text={'Men'}></Item>
         <Item itemKey={'women'} text={'Women'}></Item>
         <Item itemKey={'about'} text={'About'}></Item>
         <Item itemKey={'contact'} text={'Contact'}></Item>
      </Menu>
   );
};
export default SidebarMenu;