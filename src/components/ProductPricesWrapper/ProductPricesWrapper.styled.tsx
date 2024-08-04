import styled from 'styled-components';

export const StyledProductPricesWrapper = styled.div`
   margin-bottom: 1.625rem;

   & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.025rem;
      margin-bottom: 0.675rem;

      & > h2 {
         font-size: 1.75rem;
         font-weight: 700;
         color: ${({ theme }) => theme.colors.veryDarkBlue};
         letter-spacing: 1px;
      }

      & > p {
         margin-top: 6px;
         padding: 0.31rem 0.65rem 0.19rem;
         font-size: 0.955rem;
         font-weight: 700;
         background-color: ${({ theme }) => theme.colors.veryDarkBlue};
         color: ${({ theme }) => theme.colors.white};
         border-radius: 5px;
         letter-spacing: 0.05px;
      }
   }

   & > del {
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
      font-weight: 700;
   }

   @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.8rem;
   }

   & > del {
      display: flex;
      align-items: center;
      padding-bottom: 0.685rem;
      letter-spacing: 0.5px;
   }
`;
