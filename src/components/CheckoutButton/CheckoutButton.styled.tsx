import styled from 'styled-components';

export const StyledCheckoutButton = styled.button`
   all: unset;
   display: block;
   width: 100%;
   margin-right: 2rem;
   padding: 1.2rem 0 1.05rem;
   font-weight: 700;
   text-align: center;
   background-color: ${({ theme }) => theme.colors.orange};
   color: ${({ theme }) => theme.colors.veryDarkBlue};
   border-radius: 10px;

   &:hover,
   &:focus-visible {
      background-color: ${({ theme }) => theme.colors.paleOrange};
      cursor: pointer;
   }
`;
