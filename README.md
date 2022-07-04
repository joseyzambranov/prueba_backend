Prueba técnica Backend

Hola soy jose zambrano este es mi portafolio ------> https://josezambrano.netlify.app/

proyecto:

El proyecto registra , muestra los productos y filtra las categorías.

tegnologias: 

Es desarrollado con node.js y express la base de datos es mongodb atlas. Se modeló la base de datos con mongoose

Configuración de comandos:

Clone el repositorio e instale las dependencias:

<pre>git clone https://github.com/joseyzambranov/prueba_backend.git
<span class="pl-c1">cd</span> prueba_backend</pre>

<pre>npm install</pre>


Acceso localmente:

Contecte us usuario de mongodb atlas https://www.mongodb.com/atlas/database


<td class="leafygreen-ui-7razhx">mongodb+srv://&lt;my-name&gt;:&lt;password&gt;@cluster0.tjbqj.mongodb.net/?retryWrites=true&amp;w=majority</td> 


cree un archivo .env gregue MONGO_CONNECT = su-usuario-mongodb-atlas

Corra la aplicacion:

<pre>npm start</pre>


Para llamar todos los productos realice una peticion GET al http://localhost:5000/api/product

Para llamar los productos por categoría ingrese en el body "category":"footwear" y realice la peticiónET al http://localhost:5000/api/product:

![Screenshot](imgget.jng)

Para crear un nuevo productos ingrese en el body un objeto con , title, desc, categories, price y realice una peticion POST al http://localhost:5000/api/product 

![Screenshot](imgpost.png)


Accede al proyecto deployado en replit:

https://pruebabackend.joseyzambranov.repl.co/api/product/


muchas gracias!







