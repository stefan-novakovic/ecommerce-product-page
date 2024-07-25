import styled from 'styled-components';

export const StyledNav = styled.nav`
   ul {
      font-size: 0.95rem;
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.925rem;

      li {
         border-bottom: 5px solid transparent;

         a:any-link {
            text-decoration: none;
            display: grid;
            height: 107px;
            place-content: center;
            letter-spacing: -0.1px;
            padding: 0 0.15rem 0.1875rem 0.005rem;
            color: hsl(219, 9%, 45%);
         }
      }

      li:hover {
         border-bottom: 5px solid hsl(26, 100%, 55%);
      }

      li:hover a:any-link {
         color: hsl(220, 13%, 13%);
      }
   }
`;
