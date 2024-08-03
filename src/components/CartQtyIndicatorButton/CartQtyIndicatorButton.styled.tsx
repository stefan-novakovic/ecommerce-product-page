import styled from 'styled-components';

export const StyledCartQtyIndicatorButton = styled.button<{ $totalQuantity: number }>`
   all: unset;
   position: absolute;
   top: 9px;
   left: 8px;
   display: ${(props) => (props.$totalQuantity ? 'block' : 'none')};
   padding: 1px 7px;
   font-size: 0.625rem;
   color: white;
   background-color: hsl(26, 100%, 55%);
   border-radius: 50%;
   cursor: pointer;

   &:hover ~ button > svg path {
      fill: hsl(220, 13%, 13%);
   }
`;
