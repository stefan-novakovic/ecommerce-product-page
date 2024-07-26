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
      margin-bottom: 2.3rem;
   }

   & > p {
      color: hsl(219, 9%, 45%);
      line-height: 1.625;
      margin-bottom: 1.275rem;
   }
`;
