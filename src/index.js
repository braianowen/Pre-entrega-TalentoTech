// Importaciones necesarias
import { obtenerProductos, obtenerProducto, crearProducto, eliminarProducto } from './servicios/apiServicio.js';

const validarArgumentos = (argumentos) => {
    // Verificar que haya al menos método y ruta
    if (argumentos.length < 2) return false;

    const [metodo, ruta] = argumentos;
    
    // Verificar que el método sea válido
    if (!['GET', 'POST', 'DELETE'].includes(metodo.toUpperCase())) return false;
    
    // Verificar que la ruta comience con 'productos'
    if (!ruta.toLowerCase().startsWith('productos')) return false;
    
    // Verificar que haya datos para POST
    if (metodo.toUpperCase() === 'POST' && argumentos.length < 5) return false;
    
    return true;
};

// Función para procesar los argumentos
const procesarComando = (argumentos) => {
    const metodo = argumentos[0].toUpperCase();
    const ruta = argumentos[1].toLowerCase();
    const datos = argumentos.slice(2);
    return { metodo, ruta, datos };
};

// Función principal que maneja la ejecución del programa
const ejecutarPrograma = async () => {
    try {
        const argumentos = process.argv.slice(2);
        
        if (!validarArgumentos(argumentos)) {
            console.error('Error: Debes proporcionar un comando válido');
            console.log('Ejemplos de uso:');
            console.log('npm run inicio GET productos');
            console.log('npm run inicio GET productos/1');
            console.log('npm run inicio POST productos "Camiseta" 29.99 "ropa"');
            console.log('npm run inicio DELETE productos/1');
            process.exit(1);
        }

        // Procesar el comando
        const { metodo, ruta, datos } = procesarComando(argumentos);
        
        let resultado;
        switch (metodo) {
            case 'GET':
                if (ruta.includes('/')) {
                    const id = ruta.split('/')[1];
                    resultado = await obtenerProducto(id);
                } else {
                    resultado = await obtenerProductos();
                }
                break;
            case 'POST':
                resultado = await crearProducto(datos);
                break;
            case 'DELETE':
                const id = ruta.split('/')[1];
                if (!id) {
                    throw new Error('ID de producto no proporcionado');
                }
                resultado = await eliminarProducto(id);
                break;
            default:
                throw new Error('Método no soportado');
        }

        console.log('Resultado:', JSON.stringify(resultado, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

ejecutarPrograma(); 