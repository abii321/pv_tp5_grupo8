import { App } from '../App.jsx'
import { Home } from '../views/Home.jsx'
//import { Contactos } from "../views/Lista.jsx";
//import { DetalleContacto } from "../views/Agregar.jsx";
import { AcercaDe } from '../views/AcercaDe.jsx'
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter ([
    { 
        path:'/', 
        element: <App/>,
        children: [
            { index: true, element: <Home/>}, // equivale al path 
            { path: '/acercade', element: <AcercaDe/>},
            {/**{ path:'/contactos', element: <Agregar/>},
            { path:'/contactos/:id', element: <DetalleContacto/>}**/}
        ]
    }
]);