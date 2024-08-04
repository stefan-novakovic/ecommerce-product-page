import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Theme as ThemeProvider } from './theme/Theme';
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <>
         <GlobalStyles />
         <ThemeProvider>
            <App />
         </ThemeProvider>
      </>
   </React.StrictMode>
);
