require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './App.scss'
import './assets/main.css'
import { StrictMode } from "react";

const appElement = document.getElementById('app') as HTMLElement;
const root = createRoot(appElement);

root.render(
    <App />
);