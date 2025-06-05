// URL base de la API
const URL_BASE = 'https://fakestoreapi.com';

// Obtener todos los productos
export const obtenerProductos = async () => {
    const respuesta = await fetch(`${URL_BASE}/products`);
    return await respuesta.json();
};

// Obtener un producto por ID
export const obtenerProducto = async (id) => {
    const respuesta = await fetch(`${URL_BASE}/products/${id}`);
    return await respuesta.json();
};

// Crear un nuevo producto
export const crearProducto = async (datos) => {
    const [titulo, precio, categoria] = datos;
    const producto = {
        title: titulo,
        price: parseFloat(precio),
        category: categoria
    };
    
    const respuesta = await fetch(`${URL_BASE}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });
    
    return await respuesta.json();
};

// Eliminar un producto
export const eliminarProducto = async (id) => {
    const respuesta = await fetch(`${URL_BASE}/products/${id}`, {
        method: 'DELETE'
    });
    return await respuesta.json();
}; 