import styled from 'styled-components';

export const StyledAddToCartButton = styled.button`
   all: unset;
   width: 100%;
   background-color: hsl(26, 100%, 55%);
   color: hsl(220, 13%, 13%);
   font-weight: 700;
   padding: 1.05rem;
   border-radius: 8px;
   display: flex;
   justify-content: center;
   gap: 0.75rem;

   &:hover,
   &:focus-visible {
      background-color: #ffac6a;
      cursor: pointer;
   }
`;
