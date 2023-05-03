# Entorno de trabajo:

Este repositorio ha sido creado con el proposito de tener un entorno listo para trabajar sin la necesidad de estar descargando e importando dependencias, lo unico necesario será descargar la carpeta **node_modules**.

El entorno de trabajo esta construido con el empaquetador **Vite**, la libreria  **react** y el framework de css **bootstrap**. También tendrá a su disposicion _custom Hooks_ y componentes personalizados y reutilizables que permite un flujo de trabajo mas rapido y eficiente.

## Instalacion básica:

** **
1. Creacion del proyecto con el empaquetador **Vite** y la libreria **React**:

        npm create vite my-vue-app -- --template react

2. Descarga e instalacion del preprocesador **SASS**:

        npm i --save-dev sass
    
    Importamos el archivo principal de sass en el **main.jsx**
        
        import './scss/index.scss'

3. Descarga e instalacion de el framework bootstrap:
        
        npm  i --save-dev bootstrap

     Creamos un archivo custom.scss en donde importamos bootstrap, también modificaremos algunas variables de **bootstrap** y guardaremos nuestras propias variables, 

    directorio: **src/scss**
        
        /* Variables */
        @import '../../node_modules/bootstrap/scss/bootstrap.scss';
    
4. Descargar e instalar la dependencia de **purgecss** que nos permitirá reducir nuestro css quitando las clases no utilizadas en bootstrap
        
        npm i --save-dev vite-plugin-purgecss

   importar la dependecia en **vite.config.js** y colocando la configuracion de purgecss en defineConfig:

        //Plugins...

        import htmlPurge from 'vite-plugin-purgecss';
        
        export default defineConfig({
                plugins: [
                react(),
                htmlPurge({
                content: ["./src/**/*.jsx", "./src/**/*.scss"],
                        }),
                ],
        })

## **Jest** y **React Testing Library**:
**     ** 

Estas librerias son las que usaremos para hacer las pruebas en nuestros componentes, custom hooks, y helpers de nuestros proyectos:

1. Descargar de las dependencias necesarias:

        npm i --save-dev jest babel-jest @babel/preset-env @babel/preset-react 

        npm i --save-dev @testing-library/react @types/jest jest-environment-jsdom
        
   Instalamos whatwg-fetch para no tener problemas en hacer pruebas en componentes que use Fetch api:
        
        npm i --save-dev whatwg-fetch

2. Actualizar los scripts del **package.json**:
        
        "scripts: {
            ...
            "test": "jest --watchAll"
        }
3. Crear la configuración de babel babel.config.cjs

        module.exports = {
          presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
                ],
        };

4. crea el jest.config.cjs

        module.exports = {
         testEnvironment: 'jest-environment-jsdom',
         setupFiles: ['./jest.setup.js']
        }

5. Crea el jest.setup.js
        
        import 'whatwg-fetch'; 

## React Ruoter:
** **

1. Empezaremos con la descarga de react router

        npm install react-router-dom 

2. Creamos la carpeta **src/routes** donde esta nuestro componente **RouterApp.jsx** que almacenara todas nuestras rutas.

3. Importamos _**react-router-dom**_ en nuestro componente *RouterApp.jsx*:

        import {
        createBrowserRouter,
        RouterProvider,
        } from "react-router-dom";

4. Creamos nuestras rutas: 

        const router = createBrowserRouter([
          {
            path: "/",
            element: '<App>',
          },
        ]);

5. retornamos el _hight component_  **RouterProvider**  en nuestro componente de rutas **RouterApp.jsx**
        
        <RouterProvider router={router} />

6. Colocamos nuestro componente en nuestro **main.jsx**

        
        ReactDOM.createRoot(document.getElementById('root')).render(
         <React.StrictMode>
         <RouterApp/>
         </React.StrictMode>,
        )
