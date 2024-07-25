import { StyledNav } from './Nav.styled';

const Nav = () => {
   const navItemsArray: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

   return (
      <StyledNav>
         <ul>
            {navItemsArray.map((item) => (
               <li key={item}>
                  <a href="/">{item}</a>
               </li>
            ))}
         </ul>
      </StyledNav>
   );
};
export default Nav;
