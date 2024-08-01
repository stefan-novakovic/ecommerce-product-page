import styled from 'styled-components';

export const StyledListItem = styled.li`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   gap: 0.95rem;
   height: 53px;

   img {
      display: block;
      height: 100%;
      width: auto;
      border-radius: 5px;
   }

   & > div > p:first-of-type {
      line-height: 1.75;
   }

   & > div > p:last-of-type {
      line-height: 1.5;
      letter-spacing: 0.4px;

      & > span {
         display: inline-block;
         margin-left: 0.15rem;
         font-weight: 700;
      }
   }
`;
