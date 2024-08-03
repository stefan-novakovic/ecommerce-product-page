import styled from 'styled-components';

export const StyledListItem = styled.li`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 0.95rem;
   height: 53px;
   color: hsl(219, 9%, 45%);

   & > img {
      display: block;
      height: 100%;
      max-height: 58px;
      width: auto;
      max-width: 58px;
      padding-top: 2px;
      border-radius: 5px;
   }

   div > p:first-of-type {
      line-height: 1.75;
   }

   div > p:last-of-type {
      line-height: 1.5;
      letter-spacing: 0.4px;

      span {
         display: inline-block;
         margin-left: 0.45rem;
         font-weight: 700;
         color: hsl(220, 13%, 13%);
      }
   }

   @media screen and (max-width: 374px) {
      gap: 0.85rem;
      height: auto;

      img {
         padding-top: 0;
      }
   }
`;
