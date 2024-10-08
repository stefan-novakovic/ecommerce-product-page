import styled from 'styled-components';

export const StyledPreviewImageWrapper = styled.div`
   display: none;
   width: 100%;
   border-radius: 15px;
   cursor: pointer;

   & > img {
      width: 100%;
      height: auto;
      border-radius: 15px;
   }

   @media screen and (min-width: 768px) {
      display: block;
   }
`;
