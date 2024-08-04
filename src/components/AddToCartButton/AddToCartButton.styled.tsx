import styled from 'styled-components';

export const StyledAddToCartButton = styled.button`
   all: unset;
   display: flex;
   justify-content: center;
   gap: 0.75rem;
   width: 100%;
   padding: 1.05rem;
   font-weight: 700;
   background-color: ${({ theme }) => theme.colors.orange};
   color: ${({ theme }) => theme.colors.veryDarkBlue};
   border-radius: 8px;

   &:hover,
   &:focus-visible {
      background-color: ${({ theme }) => theme.colors.paleOrange};
      cursor: pointer;
   }

   @media screen and (max-width: 767px) {
      padding: 1.15rem 0;
      border-radius: 12px;
   }
`;
