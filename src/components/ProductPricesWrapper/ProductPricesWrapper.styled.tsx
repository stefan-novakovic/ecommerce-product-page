import styled from 'styled-components';

export const StyledProductPricesWrapper = styled.div`
   margin-bottom: 1.625rem;

   & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.025rem;
      margin-bottom: 0.675rem;

      & > p:first-child {
         color: hsl(220, 13%, 13%);
         font-weight: 700;
         font-size: 1.75rem;
         letter-spacing: 1px;
      }

      & > p:last-child {
         background-color: hsl(220, 13%, 13%);
         color: white;
         font-weight: 700;
         font-size: 0.955rem;
         letter-spacing: 0.05px;
         padding: 0.31rem 0.65rem 0.19rem;
         border-radius: 5px;
         margin-top: 6px;
      }
   }

   & > del {
      color: hsl(219, 9%, 45%);
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
