import styled from 'styled-components';

export const StyledProductImagesContainer = styled.section`
   width: 100%;
   max-width: 445px;
   min-height: 565px;
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 767px) {
      min-height: auto;
      max-width: 520px;
   }
`;
