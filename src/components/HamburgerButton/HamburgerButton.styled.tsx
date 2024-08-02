import styled from 'styled-components';

export const StyledHamburgerButton = styled.button`
   flex-direction: column;
   justify-content: space-between;
   margin-bottom: 5px;
   background-color: transparent;
   border: none;
   width: 16px;
   height: 15px;
   display: none;

   @media screen and (max-width: 767px) {
      display: flex;
   }
`;

export const StyledHamburgerBar = styled.div`
   width: 100%;
   height: 3px;
   background-color: hsl(219, 9%, 45%);
`;
