import styled from 'styled-components';

export const StyledCartAndAvatarWrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.35rem;
   border-bottom: 6px solid transparent;

   @media screen and (min-width: 768px) {
      gap: 1.75rem;
   }

   @media screen and (min-width: 1152px) {
      gap: 2.85rem;
      border-bottom: 7px solid transparent;
   }
`;
