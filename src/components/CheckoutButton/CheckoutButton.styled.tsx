import styled from 'styled-components';

export const StyledCheckoutButton = styled.button`
   all: unset;
   display: block;
   width: 100%;
   margin-right: 2rem;
   padding: 1.2rem 0 1.05rem;
   font-weight: 700;
   text-align: center;
   background-color: hsl(26, 100%, 55%);
   color: hsl(220, 13%, 13%);
   border-radius: 10px;

   &:hover,
   &:focus-visible {
      background-color: #ffac6a;
      cursor: pointer;
   }
`;
