import styled from 'styled-components';

export const StyledProductButtonsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   @media screen and (min-width: 768px) {
      flex-direction: row;
   }
`;
