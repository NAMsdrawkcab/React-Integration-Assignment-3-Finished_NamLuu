import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import JokeTypesContainer from './containers/JokeTypesContainer';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <HomeContainer />
            },
            {
                path: "/jokeTypes",
                element: <JokeTypesContainer />
            }
        ]
    }
])
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router ={router} />
    </React.StrictMode>
)