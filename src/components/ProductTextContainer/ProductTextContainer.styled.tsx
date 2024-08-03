import styled from 'styled-components';

export const StyledProductTextContainer = styled.div`
   width: 100%;
   max-width: 445px;
   padding: 3.85rem 0.05rem;

   & > h2 {
      margin-bottom: 1.25rem;
      font-size: 0.8rem;
      color: hsl(219, 9%, 45%);
      letter-spacing: 2.15px;
   }

   & > h3 {
      margin-bottom: 2.15rem;
      font-size: 2.75rem;
      color: hsl(220, 13%, 13%);
      line-height: 1.085;
      letter-spacing: -0.085px;
   }

   & > p {
      margin-bottom: 1.45rem;
      color: hsl(219, 9%, 45%);
      line-height: 1.625;
   }

   @media screen and (max-width: 767px) {
      padding: 1.5rem 1.45rem;

      & > h2 {
         font-size: 0.725rem;
         margin-bottom: 0.825rem;
      }

      & > h3 {
         margin-bottom: 1rem;
         font-size: 1.75rem;
         line-height: 1.15;
         letter-spacing: 0px;
      }

      & > p {
         margin-bottom: 1.5rem;
         font-size: 0.95rem;
         line-height: 1.65;
      }
   }
`;
