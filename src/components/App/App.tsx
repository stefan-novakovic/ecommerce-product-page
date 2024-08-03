import { StyledApp } from './App.styled';
import { CartProvider } from '../../context/CartContext';
import Header from '../Header/Header';
import Main from '../Main/Main';

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
