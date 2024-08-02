import styled from 'styled-components';

export const StyledProductButtonsWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;

   @media screen and (max-width: 767px) {
      flex-direction: column;
   }
`;
