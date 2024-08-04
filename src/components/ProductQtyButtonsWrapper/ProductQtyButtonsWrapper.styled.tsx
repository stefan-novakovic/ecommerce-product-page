import styled from 'styled-components';

export const StyledProductQtyButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 158px;
   background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
   border-radius: 8px;

   & > button {
      all: unset;
      padding: 1.05rem;
      cursor: pointer;
   }

   & > button:hover svg path,
   & > button:focus-visible svg path {
      fill: ${({ theme }) => theme.colors.paleOrange};
   }

   & > button:active svg path {
      fill: ${({ theme }) => theme.colors.orange};
   }

   & > button:first-child svg {
      margin-bottom: 4px;
   }

   & > div {
      padding: 0.25rem;
      font-weight: 700;
   }

   @media screen and (max-width: 767px) {
      max-width: none;

      & > button {
         padding: 1.15rem 1.55rem 1.05rem;
      }
   }
`;
