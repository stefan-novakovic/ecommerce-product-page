import styled from 'styled-components';

export const StyledMain = styled.main`
   padding: 5.65rem 3rem;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;

   @media screen and (max-width: 1279px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3.25rem 0;
   }

   @media screen and (max-width: 500px) {
      padding: 0;
   }
`;
