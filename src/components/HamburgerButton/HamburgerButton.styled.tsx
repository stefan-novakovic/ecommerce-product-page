import styled from 'styled-components';

export const StyledHamburgerButton = styled.button`
   display: none;
   flex-direction: column;
   justify-content: space-between;
   width: 16px;
   height: 15px;
   margin-bottom: 5px;
   background-color: transparent;
   border: none;

   @media screen and (max-width: 767px) {
      display: flex;
   }
`;

export const StyledHamburgerBar = styled.div`
   width: 100%;
   height: 3px;
   background-color: hsl(219, 9%, 45%);
`;
