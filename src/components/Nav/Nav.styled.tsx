import styled from 'styled-components';

export const StyledNav = styled.nav`
   & > ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.925rem;
      font-size: 0.95rem;
      list-style-type: none;

      li {
         border-bottom: 5px solid transparent;

         a:any-link {
            display: grid;
            place-content: center;
            height: 107px;
            text-decoration: none;
            padding: 0 0.15rem 0.1875rem 0.005rem;
            color: hsl(219, 9%, 45%);
            letter-spacing: -0.1px;
         }
      }

      li:hover {
         border-bottom: 5px solid hsl(26, 100%, 55%);
      }

      li:hover a:any-link {
         color: hsl(220, 13%, 13%);
      }
   }

   @media screen and (max-width: 767px) {
      display: none;
   }
`;
