import { StyledHeader } from './Header.styled';
import LogoAndNavWrapper from '../LogoAndNavWrapper/LogoAndNavWrapper';
import CartAndAvatarWrapper from '../CartAndAvatarWrapper/CartAndAvatarWrapper';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

const Header = () => {
   return (
      <StyledHeader>
         <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <HamburgerButton />
            <SidebarMenu />
            <LogoAndNavWrapper />
         </div>

         <CartAndAvatarWrapper />
      </StyledHeader>
   );
};
export default Header;
