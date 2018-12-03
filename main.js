const { app, BrowserWindow } = require('electron')


// Crea la ventan principal
function createWindow() {
  // Crea la ventana del navegador.
  win = new BrowserWindow({ width: 800, height: 480 })
  
  // y carga el archivo ndex.html de la aplicación.
  win.loadFile('index.html')

  // Abre las herramientas de desarrollo (DevTools).
  win.webContents.openDevTools()

  // Emitido cuando la ventana es cerrada.
  win.on('closed', () => {
    // Elimina la referencia al objeto window, normalmente  guardarías las ventanas
    // en un vector si tu aplicación soporta múltiples ventanas, este es el momento
    // en el que deberías borrar el elemento correspondiente.
    win = null
  })

}

// Cuando electron esté listo, inicia la aplicación
app.on('ready', createWindow)

// Sal cuando todas las ventanas hayan sido cerradas.
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  // En macOS es común volver a crear una ventana en la aplicación cuando el
  // icono del dock es clicado y no hay otras ventanas abiertas.
  if (win === null) {
    createWindow()
  }
})

// En este archivo puedes incluir el resto del código del proceso principal de
// tu aplicación. También puedes ponerlos en archivos separados y requerirlos aquí.