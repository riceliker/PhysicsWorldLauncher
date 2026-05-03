import { app, BrowserWindow } from 'electron'
import path from 'path'

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 720,
    minHeight: 540,
    resizable: true,
    frame: true,
    webPreferences: { contextIsolation: true }
  })

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173')
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // When mouse clicked windows
  win.on('resize', () => {
    if (!win || win.isDestroyed()) return;
    const [width, height] = win.getSize();
    win.webContents.send('window:resize', { width, height });
  });

  // When mouse not clicked windows
  win.on('will-resize', (_, rect) => {
    const { width, height } = rect;
  });
}

app.whenReady().then(createWindow)