import styled from 'styled-components';

export const StyledProductTextContainer = styled.div`
   width: 100%;
   max-width: 445px;
   padding: 1.5rem 1.45rem;

   & > h2 {
      margin-bottom: 0.825rem;
      font-size: 0.725rem;
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
      letter-spacing: 2.15px;
   }

   & > h3 {
      margin-bottom: 1rem;
      font-size: 1.75rem;
      line-height: 1.15;
      letter-spacing: 0px;
      color: ${({ theme }) => theme.colors.veryDarkBlue};
   }

   & > p {
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      line-height: 1.65;
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
   }

   @media screen and (min-width: 768px) {
      padding: 3.85rem 0.05rem;

      & > h2 {
         margin-bottom: 1.25rem;
         font-size: 0.8rem;
      }

      & > h3 {
         margin-bottom: 2.15rem;
         font-size: 2.75rem;
         line-height: 1.085;
         letter-spacing: -0.085px;
      }

      & > p {
         margin-bottom: 1.45rem;
         font-size: 1rem;
         line-height: 1.625;
      }
   }
`;
