# Autenticacion

En esta seccion aprenderemos a
crear un sistema de inicio de
sesion utilizando NextJs y NextAuth
por el momento la version de NextAuth esta
en un proceso de migracion por lo que la version
que estare utilizando es la beta.

**Version utilizada** : `next-auth: 5.0.0-beta.20`

## Instalacion

Primero, instala NextAuth utilizando el siguiente comando.

```bash
pnpm add next-auth@beta
```

## Configuracion inicial

Despues de la instalacion de Next-auth
deberas de definir una variable de entorno
llamada `AUTH_SECRET`. Puedes generarla
ejecutando la siguiente instruccion en tu terminal.

```bash
openssl rand -base64 33
```

## Archivo de configuracion

Crea un archivo en la raíz de tu proyecto.
Personalmente, prefiero llamarlo `auth.config.ts.`
En este archivo, definiremos una serie de
configuraciones necesarias para utilizar NextAuth.

> [!NOTE] Si necesitas de informacion adicional estoy basando
> en este tutorial de [NextJS](https://nextjs.org/learn/dashboard-app/adding-authentication)

### Definir el archivo de autenticacion

A continuación, define la configuración básica de autenticación:

```auth.config.ts
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
};
```

Podemos utilizar la opcion pages para especificar nuestras,
rutas de login y register o paginas de error, esto no
es requerido pero deberas utilizarlo si requires crear un login y
register de manera personalizada.
Con esto NextAuth puede redirigir a estas paginas.

**Explicacion del codigo:**

pages: Aquí se configuran las rutas personalizadas para
las páginas de autenticación.

signIn: Define la ruta /auth/login como la página
de inicio de sesión personalizada.

newUser: Define la ruta /auth/new-account como
la página para la creación de una nueva cuenta.

Si copiaste el código anterior, es posible que el
linter te marque un error. Esto se debe a que,
al definir la variable de tipo NextAuthConfig,
se requieren configuraciones adicionales.
Para solucionar esto, añadiremos la opción providers.

## Agregar Providers de Autenticacion

Se debe configurar los providers de la aplicacion
en este caso usaremos nuestras propias crendenciales
por el momento tu codigo deberia lucir así:

```ts
//auth.config.ts

import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [],
};
```

## Autenticacion basada en credenciales

Ahora debemos de definir algunas configuraciones
en el providers en este caso estaremos utilizando
nuestras propias credenciales que tendremos en una
base de datos y validaremos a travez de un formulario.

Dentro de nuestro archivo de configuracion
debemos de agregar los siguiente para que
funcionen nuestras credenciales.

## Definir nuestras credenciales

Para definir un logueo con credenciales propias de nuestra
base de datos deberemos de configurar el provider como el siguiente ejemplo:

```ts
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(7) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        // Buscar el correo del usuario en la base de datos
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!user) return null;

        // Comparar nuestra contrasena
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) return null;

        const { password: _, ...rest } = user;

        // Regresar la data del usuario
        return rest;
      },
    }),
  ],
};
```

Asumo que notaste la importacion de prisma
y si has seguido los pasos tendras el error
de que el modulo de prisma no se encuentra
esto es por que no tienes configurado
tu base de datos ni tu schema
