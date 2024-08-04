import { StyledHeader } from './Header.styled';
import CartAndAvatarWrapper from '../CartAndAvatarWrapper/CartAndAvatarWrapper';
import LogoAndNavMenusWrapper from '../LogoAndNavMenusWrapper/LogoAndNavMenusWrapper';

const Header = () => {
   return (
      <StyledHeader>
         <LogoAndNavMenusWrapper />
         <CartAndAvatarWrapper />
      </StyledHeader>
   );
};
export default Header;
