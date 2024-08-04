import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const Theme = ({ children }: { children?: ReactNode | ReactNode[] }) => {
   const theme = {
      colors: {
         orange: 'hsl(26, 100%, 55%)',
         paleOrange: 'hsl(26, 100%, 71%)',
         veryDarkBlue: 'hsl(220, 13%, 13%)',
         darkGrayishBlue: 'hsl(219, 9%, 45%)',
         lightGrayishBlue: 'hsl(223, 64%, 98%)',
         white: 'hsl(0, 0%, 100%)',
         black: 'hsl(0, 0%, 0%)',

         cartBoxShadow: 'hsla(219, 9%, 45%, 0.35)',
         borderBottomLightGray: 'hsla(220, 14%, 75%, 0.3);'
      }
   };

   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
