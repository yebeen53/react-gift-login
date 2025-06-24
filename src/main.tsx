import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GlobalStyles from './emotionstyle';
import '@fontsource/pretendard/variable.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles/>
    <App />
  </StrictMode>,
)
