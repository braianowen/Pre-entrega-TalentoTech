# Pre Entrega - Gestor de Productos

Este proyecto es un gestor de productos que interactúa con la API de FakeStore.

## Requisitos

- Node.js
- npm

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

## Uso

El programa se ejecuta desde la terminal usando los siguientes comandos:

### Ver todos los productos
```bash
npm run inicio GET productos
```

### Ver un producto específico
```bash
npm run inicio GET productos/1
```

### Crear un producto
```bash
npm run inicio POST productos "Camiseta" 29.99 "ropa"
```

### Eliminar un producto
```bash
npm run inicio DELETE productos/1
```