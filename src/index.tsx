import React from 'react';
import ReactDom from 'react-dom/client';
import App from './app/App';
import { initialState } from './app/reducer/reducer';
import Store from './app/Store';

const root = ReactDom.createRoot(document.querySelector('[data-mern-app]') as HTMLElement);
root.render(
    <React.StrictMode>
        <Store {...{ initialState }}>
            <App />
        </Store>
    </React.StrictMode>
);
