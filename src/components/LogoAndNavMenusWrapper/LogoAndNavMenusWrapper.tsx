import { StyledLogoAndNavMenusWrapper } from './LogoAndNavMenusWrapper.styled';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import LogoAndNavWrapper from '../LogoAndNavWrapper/LogoAndNavWrapper';

const LogoAndNavMenusWrapper = () => {
   return (
      <StyledLogoAndNavMenusWrapper>
         <HamburgerButton />
         <SidebarMenu />
         <LogoAndNavWrapper />
      </StyledLogoAndNavMenusWrapper>
   );
};
export default LogoAndNavMenusWrapper;
