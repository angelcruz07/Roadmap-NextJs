# Server components

Introduccion a react server components
en next Js.

Por defecto cuando trabajamos en un proyecto de Next13
o superior todos nuestros componentes seran renderizados
del lado del servidor esto significa que tendremos
una mejora de rendimiento ya que el servidor se encargara
de la mayor carga y cache de nuestra apicacion web.

Como ya mencione todos nuestros componentes seran renderizados
del lado del servidor si nosotros no lo especificamos con una
directiva.

Por ejemplo un archivo dentro de nuestro proyecto con la
extension .jsx o .tsx tendran por defecto la siguiente directiva,

`"use server"`

Esto no significa que espeficamente al crear un archivo esta directiva
se escribira si no que nuestros archivos de componente seran
del lado del servidor. pero de igual manera lo podras especificar
poniento la anterior directiva al pricipio del archivo.

quieres aprender mas sobre el server side rendering en la documentacion
de Next

[Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
