import styled from 'styled-components';

export const StyledThumbnailsWrapper = styled.div`
   display: none;
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
      outline: 3px solid ${({ theme }) => theme.colors.orange};

      img {
         filter: opacity(0.25);
      }
   }

   @media screen and (min-width: 768px) {
      display: flex;
   }
`;
