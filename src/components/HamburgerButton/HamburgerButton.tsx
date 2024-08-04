import { StyledHamburgerBar, StyledHamburgerButton } from './HamburgerButton.styled';
import useCartContext from '../../hooks/useCartContext';

const HamburgerButton = () => {
   const { setOpenSidebarMenu } = useCartContext();

   return (
      <StyledHamburgerButton onClick={() => setOpenSidebarMenu((prev) => !prev)}>
         <StyledHamburgerBar />
         <StyledHamburgerBar />
         <StyledHamburgerBar />
      </StyledHamburgerButton>
   );
};
export default HamburgerButton;
