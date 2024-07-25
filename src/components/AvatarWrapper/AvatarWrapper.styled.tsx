import styled from 'styled-components';

export const StyledAvatarWrapper = styled.div`
   width: 100%;
   height: auto;
   max-width: 50px;
   aspect-ratio: 50/50;
   border-radius: 50%;

   &:hover {
      outline: 2px solid hsl(26, 100%, 55%);
      outline-offset: -2px;
      cursor: pointer;
   }

   img {
      display: block;
      width: 100%;
      height: auto;
   }
`;
