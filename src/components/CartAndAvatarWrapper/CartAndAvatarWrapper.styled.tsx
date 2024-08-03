import styled from 'styled-components';

export const StyledCartAndAvatarWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2.85rem;
   border-bottom: 7px solid transparent;

   @media screen and (max-width: 1152px) {
      gap: 1.75rem;
   }

   @media screen and (max-width: 767px) {
      border-bottom: 6px solid transparent;
      gap: 1.35rem;
   }
`;
