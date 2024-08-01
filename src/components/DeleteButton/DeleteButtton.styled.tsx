import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
   all: unset;
   margin-left: 0.22rem;
   margin-top: 0.22rem;

   &:hover > svg {
      cursor: pointer;
   }

   &:hover > svg path {
      fill: hsl(219, 9%, 45%);
   }
`;
