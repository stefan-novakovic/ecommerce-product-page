import styled from 'styled-components';

export const StyledAvatarWrapper = styled.div`
   width: 100%;
   max-width: 50px;
   height: auto;
   aspect-ratio: 50/50;
   border-radius: 50%;

   &:hover,
   &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.orange};
      outline-offset: -2px;
      cursor: pointer;
   }

   img {
      width: 100%;
      height: auto;
   }

   @media screen and (max-width: 767px) {
      max-width: 24px;
   }
`;
