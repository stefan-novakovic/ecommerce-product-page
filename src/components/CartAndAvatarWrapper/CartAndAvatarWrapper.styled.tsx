import styled from 'styled-components';

export const StyledCartAndAvatarWrapper = styled.div<{ $totalQuantity: number; $openCart: boolean }>`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2.85rem;
   border-bottom: 7px solid transparent;

   & > button:last-of-type {
      all: unset;
      padding-top: 2px;

      svg {
         display: block;
      }

      svg path {
         fill: ${(props) => (props.$openCart ? 'hsl(220, 13%, 13%)' : 'hsl(219, 9%, 45%)')};
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
   }

   & > button:first-of-type {
      all: unset;
      position: absolute;
      top: 9px;
      left: 8px;
      padding: 1px 7px;
      border-radius: 50%;
      color: white;
      background-color: hsl(26, 100%, 55%);
      font-size: 0.625rem;
      cursor: pointer;
      display: ${(props) => (props.$totalQuantity ? 'block' : 'none')};
   }

   & > button:first-of-type:hover ~ button:last-of-type > svg path {
      fill: hsl(220, 13%, 13%);
   }

   @media screen and (max-width: 1152px) {
      gap: 1.75rem;
   }

   @media screen and (max-width: 767px) {
      border-bottom: 6px solid transparent;
      gap: 1.35rem;
   }
`;
