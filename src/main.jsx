import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <NextUIProvider>
        {/* <main className="dark text-foreground bg-background"> */}
          <App />
        {/* </main> */}
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
