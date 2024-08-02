import styled from 'styled-components';

export const StyledProductTextContainer = styled.div`
   width: 100%;
   max-width: 445px;
   padding: 3.85rem 0.05rem;

   & > h2 {
      color: hsl(219, 9%, 45%);
      font-size: 0.8rem;
      letter-spacing: 2.15px;
      margin-bottom: 1.25rem;
   }

   & > h3 {
      color: hsl(220, 13%, 13%);
      font-size: 2.75rem;
      letter-spacing: -0.085px;
      line-height: 1.085;
      margin-bottom: 2.15rem;
   }

   & > p {
      color: hsl(219, 9%, 45%);
      line-height: 1.625;
      margin-bottom: 1.45rem;
   }

   @media screen and (max-width: 767px) {
      padding: 1.5rem 1.45rem;

      & > h2 {
         font-size: 0.725rem;
         margin-bottom: 0.825rem;
      }

      & > h3 {
         font-size: 1.75rem;
         letter-spacing: 0px;
         line-height: 1.15;
         margin-bottom: 1rem;
      }

      & > p {
         font-size: 0.95rem;
         line-height: 1.65;
         margin-bottom: 1.5rem;
      }
   }
`;
