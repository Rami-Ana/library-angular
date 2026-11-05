# LibraryAngular

## Prueba de nivel Angular | Ana Ramírez Moreno 05-11-26

Colección de libros definida localmente en un servicio (array de objetos TypeScript).


### Objetivos del ejercicio

Objetivo: Evaluar la capacidad del desarrollador para construir una aplicación Angular funcional, gestionando una colección de datos local y navegación entre componentes, utilizando Signals para la gestión del estado y siguiendo las mejores prácticas de arquitectura (Servicios, Componentes standalone y Angular Router).


### Tecnologías

- [Angular CLI] version 22.2.3
    - Angular Router 
    - Angular Signal 
    - Angular injection 
- TypeScript
- Vitest

### Prerequisitos

- Node.js 
- Angular CLI (`npm install -g @angular/cli`)


### Arquitecura carpetas
```
budget-app/
├── src/
│   ├── main.ts
│   ├── index.html
│   ├── styles.css
│   └── app/
│       ├── components/
│       │   ├── book-card/     
│       │   ├── book-list/     
│       │   └── book-detail/   
│       ├── interfaces/
│       │   └── book-model.ts
│       ├── core/
│       │   └── services.ts
│       │        └── book-service.ts
│       ├── app.config.ts
│       ├── app.css
│       ├── app.html
│       ├── app.routes.ts
│       └── app.ts
├── public/
├── angular.json
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```


### Instalación

```bash
git clone https://github.com/Rami-Ana/library-angular.git
cd library-angular
npm install
```


### Servidor de desarrollo

```bash
ng serve
```
Y acceder a link `http://localhost:4200/`



### Test

```bash
ng test
```


### GitHub

https://github.com/Rami-Ana/library-angular.git

