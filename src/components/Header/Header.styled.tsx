import styled from 'styled-components';

export const StyledHeader = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   min-height: 68px;
   padding-inline: 1.5rem;
   background-color: ${({ theme }) => theme.colors.white};
   border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottomLightGray};

   @media screen and (min-width: 768px) {
      padding-inline: 0.75rem;
   }

   @media screen and (min-width: 1152px) {
      min-height: 113px;
      padding-inline: 0;
   }
`;
