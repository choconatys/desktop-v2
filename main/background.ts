import { app } from "electron";
import serve from "electron-serve";
import path from "path";
import { createWindow } from "./helpers";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const iconPath = path.join(__dirname, "..", "resources", "icon.ico");

  const mainWindow = createWindow("main", {
    width: 1400,
    height: 1000,
    minHeight: 1000,
    minWidth: 1400,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: iconPath,
  });

  mainWindow.setMenu(null);

  if (isProd) {
    await mainWindow.loadURL("app://./signin.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/signin`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});
