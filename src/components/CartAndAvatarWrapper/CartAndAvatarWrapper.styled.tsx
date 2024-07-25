import styled from 'styled-components';

export const StyledCartAndAvatarWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2.85rem;
   border-bottom: 7px solid transparent;

   button {
      all: unset;
      padding-top: 2px;

      svg {
         display: block;
      }

      svg:hover {
         cursor: pointer;
      }

      svg:hover path {
         cursor: pointer;
         fill: hsl(220, 13%, 13%);
      }

      img {
         display: block;
         padding-top: 2px;
      }
   }
`;
