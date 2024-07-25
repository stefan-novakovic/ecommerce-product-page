import { StyledLogoAndNavWrapper } from './LogoAndNavWrapper.styled';
import LogoWrapperLink from '../LogoWrapperLink/LogoWrapperLink';
import Nav from '../Nav/Nav';

const LogoAndNavWrapper = () => {
   return (
      <StyledLogoAndNavWrapper>
         <LogoWrapperLink />
         <Nav />
      </StyledLogoAndNavWrapper>
   );
};
export default LogoAndNavWrapper;
