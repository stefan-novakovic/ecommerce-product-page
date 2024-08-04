import styled from 'styled-components';

export const StyledCartButton = styled.button<{ $openCart: boolean }>`
   all: unset;
   padding-top: 2px;

   svg {
      display: block;

      path {
         fill: ${(props) =>
            props.$openCart ? ({ theme }) => theme.colors.veryDarkBlue : ({ theme }) => theme.colors.darkGrayishBlue};
      }
   }

   svg:hover {
      cursor: pointer;
   }

   svg:hover path {
      fill: ${({ theme }) => theme.colors.veryDarkBlue};
   }

   img {
      padding-top: 2px;
   }

   &:focus-visible > svg path {
      fill: ${({ theme }) => theme.colors.veryDarkBlue};
   }
`;
