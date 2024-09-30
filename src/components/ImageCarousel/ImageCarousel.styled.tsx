import styled from 'styled-components';

export const StyledImageCarousel = styled.div`
   display: block;

   & > div > div > button {
      z-index: 999 !important;
   }

   @media screen and (min-width: 768px) {
      display: none;
   }
`;
