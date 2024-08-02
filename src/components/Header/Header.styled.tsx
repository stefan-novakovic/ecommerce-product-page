import styled from 'styled-components';

export const StyledHeader = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   min-height: 113px;
   background-color: white;
   border-bottom: 1px solid hsla(220, 14%, 75%, 0.3);

   @media screen and (max-width: 1152px) {
      padding-inline: 0.75rem;
   }

   @media screen and (max-width: 767px) {
      min-height: 68px;
      padding-inline: 1.5rem;
   }
`;
