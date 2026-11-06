import React, {useState} from "react";

function SubirImagen() {
  const [archivo, setArchivo] = useState(undefined);
  const [vistaPrevia, setVistaPrevia] = useState('');
  const [cargando, setCargando] = useState(false);

  // 1. Capturar el archivo y generar la vista previa
  const alCambiarArchivo = (e) => {
    const archivoSeleccionado = e.target.files[0];
    if (archivoSeleccionado) {
      setArchivo(archivoSeleccionado);
      // Crea una URL temporal para mostrar la imagen en la pantalla
      setVistaPrevia(URL.createObjectURL(archivoSeleccionado));
    }
  };

  // 2. Enviar el archivo al servidor mediante HTTP POST
  const alEnviar = async (e) => {
    e.preventDefault();
    if (!archivo) return alert('Por favor, selecciona una imagen primero.');

    setCargando(true);

    // Preparar los datos en formato multipart/form-data
    const formData = new FormData();
    formData.append('imagen', archivo); // 'image' es la clave que esperará tu backend o servicio

    try {
      const respuesta = await fetch('https://apiclub.onrender.com/api/actividades', {
        method: 'POST',
        body: formData, // No agregues Content-Type en los headers, fetch lo hace automáticamente
      });

      if (respuesta.ok) {
        const datos = await respuesta.json();
        alert('¡Imagen subida con éxito!');
        console.log(datos);
      } else {
        alert('Error al subir la imagen.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Hubo un problema de conexión.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px'}}>
      <p>Subir Imagen</p>
      <form onSubmit={alEnviar}>
        <input 
          type="file" 
          accept="imagen/*" 
          onChange={alCambiarArchivo} 
        />

        {vistaPrevia && (
          <div style={{ margin: '15px 0' }}>
            <p>Vista previa:</p>
            <img 
              src={vistaPrevia} 
              alt="Preview" 
              style={{ width: '100%', borderRadius: '8px' }} 
            />
          </div>
        )}

        {/* <button 
          type="submit" 
          disabled={cargando || !archivo}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          {cargando ? 'Subiendo...' : 'Subir al Servidor'}
        </button> */}
      </form>
    </div>
  );
}

export default SubirImagen;

