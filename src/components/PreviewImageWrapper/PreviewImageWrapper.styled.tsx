import styled from 'styled-components';

export const StyledPreviewImageWrapper = styled.div`
   width: 100%;
   border-radius: 15px;
   cursor: pointer;

   & > img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 15px;
   }

   @media screen and (max-width: 767px) {
      display: none;
   }
`;
