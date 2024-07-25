import { StyledHeader } from './Header.styled';
import LogoAndNavWrapper from '../LogoAndNavWrapper/LogoAndNavWrapper';
import CartAndAvatarWrapper from '../CartAndAvatarWrapper/CartAndAvatarWrapper';

const Header = () => {
   return (
      <StyledHeader>
         <LogoAndNavWrapper />
         <CartAndAvatarWrapper />
      </StyledHeader>
   );
};
export default Header;
