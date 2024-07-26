import styled from 'styled-components';

export const StyledProductQtyButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: hsl(223, 64%, 98%);
   width: 100%;
   max-width: 158px;
   border-radius: 8px;

   & > button {
      all: unset;
      padding: 1.05rem;
      cursor: pointer;
   }

   & > button:hover svg path,
   & > button:focus-visible svg path {
      fill: #ffac6a;
   }

   & > button:active svg path {
      fill: #ff7307;
   }

   & > button:first-child svg {
      margin-bottom: 4px;
   }

   & > div {
      padding: 0.25rem;
      font-weight: 700;
   }
`;
