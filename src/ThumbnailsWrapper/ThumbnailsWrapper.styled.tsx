import styled from 'styled-components';

export const StyledThumbnailsWrapper = styled.div`
   width: 100%;
   border-radius: 10px;
   display: flex;
   justify-content: space-between;
   gap: 1.85rem;

   button {
      all: unset;
      cursor: pointer;
      display: block;
      border-radius: 10px;

      img {
         display: block;
         width: auto;
         height: 88px;
         border-radius: 10px;
      }
   }

   button:hover img,
   button:focus-visible img {
      filter: opacity(0.675);
   }

   button:active img {
      filter: opacity(0.5);
   }

   button.selected {
      outline: 3px solid hsl(26, 100%, 55%);

      img {
         filter: opacity(0.25);
      }
   }
`;
