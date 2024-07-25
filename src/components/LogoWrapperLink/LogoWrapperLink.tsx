import { StyledLogoWrapperLink } from './LogoWrapperLink.styled';
import logoImg from '../../assets/images/logo.svg';

const LogoWrapperLink = () => {
   return (
      <StyledLogoWrapperLink href="/">
         <img src={logoImg} alt="Logo" />
      </StyledLogoWrapperLink>
   );
};
export default LogoWrapperLink;
