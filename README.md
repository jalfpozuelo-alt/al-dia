# Al Día

Primera versión local de una revista personal de actualidad, diseñada para iPhone y responsive.

## Qué incluye

- Portada con 5 claves del día.
- Navegación por Portada, Mundo, Ciencia + tech, Salud y Estudios.
- Modo “En 60 segundos”.
- Feed con filtros por sección.
- Salud separada en evidencia clínica, alertas/regulación y enfoques emergentes.
- Modo oscuro persistente.
- Contenido de ejemplo claramente marcado como `DEMO`.
- Manifiesto PWA para instalar como app web.

## Ejecutar localmente

Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor estático.

## Conectar Google Apps Script

La app intenta cargar noticias reales desde `config.js` mediante `fetch` al pulsar “Actualizar” y al abrir la app. La URL proporcionada ya está configurada, pero actualmente responde `Función de script no encontrada: doGet`, por lo que la app muestra el contenido DEMO y el estado de conexión lo indica claramente.

1. Despliega el script REVISTA DIARIA como Web App (`/exec`).
   El despliegue debe incluir una función global `doGet(e)`; el endpoint actual no la incluye o apunta a otra versión del proyecto.
2. Haz que `doGet()` devuelva JSON y añada `Access-Control-Allow-Origin` para el dominio de GitHub Pages (o usa un proxy backend seguro).
3. Define el contrato con un array de objetos que incluya `title`/`titulo`, `summary`/`resumen`, `category`/`seccion`, `url`/`enlace`, `time`/`fecha` y opcionalmente `minutes`/`tiempoLectura`.
4. Sustituye `apiUrl` en `config.js` por la URL pública del Web App y vuelve a publicar.

No se guardan claves ni credenciales en el navegador. Si el Apps Script necesita autenticación privada, no debe exponerse un token en `config.js`: será necesario añadir un proxy serverless con secreto (por ejemplo Cloudflare Worker) o convertir el endpoint en una fuente pública de solo lectura.

`config.example.js` contiene un ejemplo de configuración. El fallback DEMO se mantiene para que la app siga siendo revisable si el endpoint está caído o no devuelve el formato esperado.

## GitHub privado `al-dia`

El repositorio está publicado en GitHub Pages. Para conectar datos reales todavía hace falta la URL `/exec` del Web App REVISTA DIARIA y confirmar que permite CORS desde GitHub Pages.
