# Sistema de consultas NIP

Este es un proyecto de aplicación web que implementa un sistema de consulta de NIP (Número de Identificación Personal). Proporciona funcionalidades para registrar usuarios, realizar consultas y gestionar detalles de las consultas. El proyecto utiliza __Node.js__ como entorno de ejecución y __Express.js__ como framework de servidor web. La base de datos se maneja con __Sequelize__, y se utiliza el sistema de plantillas __Handlebars__ para las vistas.

## Estructura del Proyecto
El proyecto sigue una estructura de carpetas y archivos organizada. A continuación se detalla la estructura del proyecto:

```console

├── app.js
├── controllers
│   ├── auth.controller.js
│   ├── consult.controller.js
│   ├── consults_detail.controller.js
│   └── user.controller.js
├── database
│   └── config.db.js
├── helpers
│   ├── db-validators.js
│   ├── generar-jwt.js
│   ├── validate-objects.js
│   └── validate-session.js
├── middlewares
│   ├── index.js
│   ├── validate-jwt.js
│   ├── validate-properties.js
│   └── validate-rol.js
├── model
│   ├── brands.js
│   ├── consult.js
│   ├── consults_detail.js
│   ├── methods.js
│   ├── roles.js
│   ├── server.js
│   └── user.js
├── package.json
├── package-lock.json
├── public
│   ├── images
│   └── styles
├── README.md
├── routes
│   ├── auth.routes.js
│   ├── consult.routes.js
│   ├── consultsDetails.routes.js
│   ├── index.routes.js
│   └── user.routes.js
├── src
├── utils
│   └── get-current-date.js
└── views
    ├── home.hbs
    ├── login.hbs
    ├── partials
    │   ├── footer.hbs
    │   ├── header.hbs
    │   └── navbar.hbs
    └── register.hbs

```
- La carpeta config contiene archivos de configuración relacionados con la base de datos y la configuración general de la aplicación.

- La carpeta controllers contiene los controladores de cada entidad, encargados de manejar la lógica de negocio.

- La carpeta database contiene archivos relacionados con la configuración y conexión a la base de datos.

- La carpeta helpers contiene archivos con funciones de ayuda, en este caso db-validators.js para validar la base de datos.

- La carpeta middlewares contiene los middlewares utilizados en la aplicación, como la validación del token JWT y la validación de propiedades.

- La carpeta model contiene los modelos de Sequelize que representan las tablas de la base de datos.

- La carpeta routes contiene los archivos de enrutamiento para cada entidad de la aplicación.

- La carpeta views contiene las plantillas de Handlebars para generar las vistas de la aplicación.

- El archivo app.js es el punto de entrada principal de la aplicación.

- El archivo .env contiene las variables de entorno utilizadas para la configuración de la aplicación.

# Dependencias del Proyecto

El proyecto depende de las siguientes bibliotecas y paquetes:

1. Express.js: Framework de servidor web para Node.js.

2. Sequelize: ORM (Object-Relational Mapping) para interactuar con la base de datos.
3. Handlebars: Sistema de plantillas utilizado para generar las vistas de la aplicación.

3. Dotenv: Biblioteca para cargar variables de entorno desde un archivo .env.

4. Express-validator: Middleware para validar y sanitizar datos en las solicitudes HTTP.

5. JSON Web Token (JWT): Biblioteca para generar y verificar tokens de autenticación.

# Configuración de la Base de Datos

 El proyecto utiliza una base de datos relacional. La configuración de la base de datos se encuentra en el archivo __config.js__ dentro de la carpeta __config__. A continuación se detallan los parámetros de configuración:

- Nombre de la base de datos (__NAME_DB__): 

- Usuario de la base de datos (__USER_DB__): 

- Contraseña de la base de datos (__PASS_DB__)

- Host de la base de datos (__HOST_DB__)

- Puerto de la aplicación (__PORT__)

# Autenticación y Autorización

El proyecto implementa un sistema de autenticación y autorización utilizando tokens JWT. Al registrarse e iniciar sesión, los usuarios reciben un token JWT que deben incluir en las solicitudes posteriores para acceder a las rutas protegidas. El token se verifica utilizando el middleware __validarJWT__ en las rutas correspondientes.

Además, se utiliza el middleware __isAdminRole__ para verificar que el usuario tenga el rol de administrador antes de acceder a ciertas rutas protegidas.

# Controladores
- __auth.controller.js__: Contiene los controladores relacionados con la autenticación de usuarios, como el inicio de sesión (login).

- __consult.controller.js__: Contiene los controladores relacionados con las consultas, como el registro de una nueva consulta (__postConsult__).

- __consults_detail.controller.js__: Contiene los controladores relacionados con los detalles de las consultas, como el registro de un nuevo detalle de consulta (__postConsultDetail__) y la obtención de los detalles de una consulta por ID (__getConsultDetailId__).

- __user.controller.js__: Contiene los controladores relacionados con los usuarios, como el registro de un nuevo usuario (__postUser__).

# Middlewares

- __validate-jwt.js__: Middleware que verifica la autenticidad y validez del token JWT en las solicitudes entrantes.
- __validate-properties.js__: Middleware que valida las propiedades de las solicitudes utilizando las reglas definidas en los controladores.
- __validate-rol.js__: Middleware que verifica que el usuario tenga un rol de administrador antes de permitir el acceso a ciertas rutas.

# Modelos de Sequelize

- __consult.js__: Define el modelo de la tabla __Consults__ en la base de datos. Contiene propiedades como __Consult_Id__, __Consult_UserID__, __Consult_Date__ y __Consult_Total__.

- __consult_details.js__: Define el modelo de la tabla __Consults_detail__ en la base de datos. Contiene propiedades como __CD_Id__, __CD_ConsultID__, __CD_BradID__, __CD_MethodID__, __CD_ReferenceNum__ y __CD_NIP__.

- __user.js__: Define el modelo de la tabla Users en la base de datos. Contiene propiedades como __User_Id__, __User_RolID__, __User_Name__, __User_Password__ y __User_Status__.

# Rutas

- __auth.routes.js__: Define las rutas relacionadas con la autenticación, como la ruta de inicio de sesión __('/login')__.

- __consult.routes.js__: Define las rutas relacionadas con las consultas, como la ruta para registrar una nueva consulta __( ' / ' )__.

- __consultsDetails.routes.js__: Define las rutas relacionadas con los detalles de las consultas, como la ruta para obtener los detalles de todas las consultas __( ' / ' )__ y la ruta para obtener los detalles de una consulta por ID __( ' /:id ' )__.

- __index.routes.js__: Define la ruta de inicio __( ' / ' )__.

- __user.routes.js__: Define las rutas relacionadas con los usuarios, como la ruta para registrar un nuevo usuario __( ' / ' )__.

# Vistas

El proyecto utiliza el sistema de plantillas Handlebars para generar las vistas. Las plantillas se encuentran en la carpeta views, y se utilizan archivos parciales en la carpeta partials para la reutilización de elementos comunes en las vistas.

# Punto de Entrada

El archivo app.js es el punto de entrada principal de la aplicación. En este archivo se cargan las variables de entorno del archivo .env, se crea una instancia del servidor y se inicia la escucha en el puerto especificado.

# Scripts de Inicio
Para iniciar la aplicación, ejecuta el siguiente comando en la terminal:

Copy code
```console
node app.js
```
Esto iniciará el servidor y comenzará a escuchar las solicitudes en el puerto especificado en el archivo de configuración.

Esta es la documentación completa del proyecto basada en la información proporcionada. Recuerda ajustarla y personalizarla según tus necesidades y estructura específica del proyecto.


## Contacto

Si tiene alguna pregunta o comentario sobre el proyecto, puede contactarme a través de:

- LinkedIn: https://www.linkedin.com/in/luis-alfredo-luna-villa-411708219/
