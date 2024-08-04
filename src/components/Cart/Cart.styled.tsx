import styled from 'styled-components';

export const StyledCart = styled.div<{ $open: boolean }>`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-62.5%, 14%);
   display: ${(props) => (props.$open ? 'block' : 'none')};
   min-height: 256px;
   width: 360px;
   border-radius: 10px;
   z-index: 1000;
   box-shadow: 0 25px 30px -10px ${({ theme }) => theme.colors.cartBoxShadow};
   background-color: ${({ theme }) => theme.colors.white};

   & > h2 {
      font-size: 1rem;
      font-weight: 700;
      padding: 1.5rem 1.5rem 1.7rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottomLightGray};
      letter-spacing: -0.15px;
   }

   & > div {
      display: flex;
      min-height: calc(256px - 67.2px);

      & > p {
         display: flex;
         flex-grow: 1;
         justify-content: center;
         align-items: center;
         font-weight: 700;
         padding-bottom: 0.65rem;
         color: ${({ theme }) => theme.colors.darkGrayishBlue};
      }
   }

   @media screen and (max-width: 1365px) {
      transform: translate(-92%, 14%);
   }

   @media screen and (max-width: 418px) {
      top: 0%;
      left: 100%;
      transform: translate(-95.25%, 22%);
   }

   & > h2 {
      padding: 1.25rem 1.5rem 1.7rem;
   }

   @media screen and (max-width: 374px) {
      width: 300px;
   }
`;
