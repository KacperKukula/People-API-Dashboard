import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.scss'

import { appConfig } from './conf/appConfig.ts'
import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './theme.ts'

appConfig.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={mainTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);