import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
   all: unset;
   margin-top: 0.45rem;
   margin-left: 0.22rem;

   &:hover > svg {
      cursor: pointer;
   }

   &:hover > svg path {
      fill: hsl(219, 9%, 45%);
   }

   @media screen and (max-width: 374px) {
      margin-top: 0;
      margin-left: 0;
   }
`;
