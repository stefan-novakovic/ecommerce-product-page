import styled from 'styled-components';

export const StyledCart = styled.div<{ $open: boolean }>`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-49.2%, 14%);
   min-height: 256px;
   width: 360px;
   border-radius: 10px;
   box-shadow: 0 25px 30px -10px hsla(219, 9%, 45%, 0.35);
   background-color: white;
   display: ${(props) => (props.$open ? 'block' : 'none')};

   & > h2 {
      font-size: 1rem;
      font-weight: 700;
      padding: 1.5rem 1.5rem 1.7rem;
      border-bottom: 1px solid hsla(220, 14%, 75%, 0.3);
      letter-spacing: -0.15px;
   }

   & > div {
      display: flex;
      min-height: calc(256px - 67.2px);

      & > p {
         display: flex;
         flex-grow: 1;
         justify-content: center;
         align-items: center;
         font-weight: 700;
         padding-bottom: 0.65rem;
         color: hsl(219, 9%, 45%);
      }
   }
`;
