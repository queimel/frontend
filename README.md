# Nivelación Front End

## Configuración proyecto

### Instalacion nodeJS, NVM y NPM

Para hacer una configuración básica de nuestro proyecto necesitamos tener instalados en nuestra máquina:

* **nodeJS** : Es un entorno de ejecución de JavaScript. Para instalar nodeJS en Linux visita este [link](https://nodejs.org/es/download/package-manager/#distribuciones-de-linux-basadas-en-debian-y-ubuntu)

* **NPM**: Es un manejador de paquetes que permite compatir y distribuir codigo; manejar dependencias en un proyecto, etc. Vienes instalado por defecto con nodeJS, pero si quieres puedes consultar su [Instalación](https://www.npmjs.com/get-npm)

* **NVM**: Manejador de versiones de nodeJS; Nos permite tener varias versiones de nodeJS instaladas en nuestra maquina para poder usar una u otra segun las necesidades de un proyecto especifico. [Instalación](https://github.com/creationix/nvm)

## Inicializar proyecto

Antes de inicializar nuestro proyecto, comprobemos que tenemos lo basico instalado:

Para comprobar:

* nodeJS: 
 `node --version` -->
 `v7.4.0`

 * NPM: 
 `npm --version` -->
 `4.0.5`

* NVM: 
 `nvm --version` -->
 `0.33.8`


Para inicializar el proyecto con NPM, creamos un package.json para indicar información y dependencias del proyecto a crear. Esto se hace ejecutando el comando `npm init`

    $ npm init
    package name: (nombre del peoyecto)
    version: (1.0.0) // version del proyecto
    description: // una breve descripcion
    entry point: (index.js) // el punto de acceso a nuestra app
    test command: // el comando con el cual ejecutaremos test
    git repository: // url del repo de git
    keywords: // palabras claves
    author: // autor
    license: (ISC)$ // tipo de licencia

