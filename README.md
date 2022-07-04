Prueba técnica Backend

proyecto:

El proyecto registra y muestra los  productos, también filtra las categorías.

tegnologias: 

Es desarrollado con node.js y express la base de datos es mongodb atlas. Se modeló la base de datos con mongoose

Configuración de comandos:

Clone el repositorio e instale las dependencias

<pre>git clone https://github.com/joseyzambranov/prueba_backend.git
<span class="pl-c1">cd</span> prueba_backend</pre>

<pre>npm install</pre>


Acceso localmente:

Contecte us usuario de mongodb atlas https://www.mongodb.com/atlas/database


<td class="leafygreen-ui-7razhx">mongodb+srv://&lt;my-name&gt;:&lt;password&gt;@cluster0.tjbqj.mongodb.net/?retryWrites=true&amp;w=majority</td> 


cree un archivo .env gregue MONGO_CONNECT = su-usuario-mongodb-atlas


<pre>npm start</pre>


llamar todos los productos realice una peticion GET al http://localhost:5000/api/product

llamar los productos por categoría ingrese en el body "category":"footwear" y realice la peticiónET al http://localhost:5000/api/product:

image.png

Para crear un nuevo productos ingrese en el body un objeto con , title, desc, categories, price y realice una peticion POST al http://localhost:5000/api/product 

image.png



