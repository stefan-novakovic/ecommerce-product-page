import { StyledNav } from './Nav.styled';

const Nav = () => {
   const navItemsArray: string[] = ['collections', 'men', 'women', 'about', 'contact'];

   return (
      <StyledNav>
         <ul>
            {navItemsArray.map((item) => (
               <li key={item}>
                  {/* <a href={item === 'collections' ? '/' : `/${item}`}> */}
                  <a href={item === 'collections' ? '/' : '/'}>
                     {item.slice(0, 1).toUpperCase().concat(item.slice(1).toLowerCase())}
                  </a>
               </li>
            ))}
         </ul>
      </StyledNav>
   );
};
export default Nav;
