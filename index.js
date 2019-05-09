const { app, BrowserWindow } = require('electron');

// In development or production?
const DEV_MODE = true;

// Window object
let win;

// Electron finished init & ready to create browser window
app.on('ready', createWindow);

// Quit when all windows closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    } // macOS
});

app.on('activate', () => {
    if(mainWindow === null) {
        createWindow();
    } // macOS
});

/**
 * Create the browser window object.
 */
function createWindow() {

    // Browser window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load html file
    win.loadFile('index.html');

    // Dev tools
    if(DEV_MODE) {
        win.webContents.openDevTools();
    }

    // Window closed
    win.on('closed', () => {
        // Dereference windows
        win = null;
    });
}

