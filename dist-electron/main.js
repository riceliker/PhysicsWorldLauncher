import { BrowserWindow, app } from "electron";
import path from "path";
//#region electron/main.ts
var win;
function createWindow() {
	win = new BrowserWindow({
		width: 1e3,
		height: 700,
		webPreferences: { contextIsolation: true }
	});
	if (process.env.NODE_ENV === "development") win.loadURL("http://localhost:5173");
	else win.loadFile(path.join(__dirname, "../dist/index.html"));
}
app.whenReady().then(createWindow);
//#endregion
