import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <Provider store = {store}>
            <CssBaseline />
            <App />
        </Provider>
    </>
);