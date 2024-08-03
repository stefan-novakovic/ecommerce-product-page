import styled from 'styled-components';

export const StyledCartButton = styled.button<{ $openCart: boolean }>`
   all: unset;
   padding-top: 2px;

   svg {
      display: block;

      path {
         fill: ${(props) => (props.$openCart ? 'hsl(220, 13%, 13%)' : 'hsl(219, 9%, 45%)')};
      }
   }

   svg:hover {
      cursor: pointer;
   }

   svg:hover path {
      fill: hsl(220, 13%, 13%);
   }

   img {
      display: block;
      padding-top: 2px;
   }

   &:focus-visible > svg path {
      fill: hsl(220, 13%, 13%);
   }
`;
