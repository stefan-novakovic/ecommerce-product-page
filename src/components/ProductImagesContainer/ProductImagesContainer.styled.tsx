import styled from 'styled-components';

export const StyledProductImagesContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   max-width: 445px;
   min-height: 565px;
   border-radius: 15px;

   @media screen and (max-width: 767px) {
      max-width: 520px;
      min-height: auto;
   }
`;
