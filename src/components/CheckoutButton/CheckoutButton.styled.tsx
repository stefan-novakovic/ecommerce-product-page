import styled from 'styled-components';

export const StyledCheckoutButton = styled.button`
   all: unset;
   display: block;
   width: 100%;
   background-color: hsl(26, 100%, 55%);
   color: hsl(220, 13%, 13%);
   font-weight: 700;
   padding: 1.15rem 0 1.1rem;
   border-radius: 10px;
   text-align: center;
   margin-right: 2rem;

   &:hover,
   &:focus-visible {
      background-color: #ffac6a;
      cursor: pointer;
   }
`;
