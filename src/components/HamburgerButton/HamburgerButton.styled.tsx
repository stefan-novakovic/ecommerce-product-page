import styled from 'styled-components';

export const StyledHamburgerButton = styled.button`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 16px;
   height: 15px;
   margin-bottom: 5px;
   background-color: transparent;
   border: none;

   @media screen and (min-width: 768px) {
      display: none;
   }
`;

export const StyledHamburgerBar = styled.div`
   width: 100%;
   height: 3px;
   background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;
