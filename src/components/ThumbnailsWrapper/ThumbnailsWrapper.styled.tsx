import styled from 'styled-components';

export const StyledThumbnailsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 1.85rem;
   width: 100%;
   border-radius: 10px;

   & > button {
      all: unset;
      display: block;
      border-radius: 10px;
      cursor: pointer;

      img {
         display: block;
         width: auto;
         height: 88px;
         border-radius: 10px;
      }
   }

   & > button:hover img,
   & > button:focus-visible img {
      filter: opacity(0.675);
   }

   & > button:active img {
      filter: opacity(0.5);
   }

   & > button.selected {
      outline: 3px solid hsl(26, 100%, 55%);

      img {
         filter: opacity(0.25);
      }
   }

   @media screen and (max-width: 767px) {
      display: none;
   }
`;
