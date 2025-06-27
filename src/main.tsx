import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import App from '@/App.tsx'
import GlobalStyles from '@/emotionstyle.tsx';
import '@fontsource/pretendard/400.css';
import category from '../mockdata';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

console.log(category);
