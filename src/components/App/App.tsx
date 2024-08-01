import { StyledApp } from './App.styled';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { CartProvider } from '../../context/CartContext';

function App() {
   return (
      <StyledApp>
         <CartProvider>
            <Header />
            <Main />
         </CartProvider>
      </StyledApp>
   );
}

export default App;
