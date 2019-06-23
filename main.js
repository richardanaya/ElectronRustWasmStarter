const electron = require("electron");
electron.app.on("ready", () => {
  let window = new electron.BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: __dirname + "/preload.js"
    }
  });
  window.loadURL(`file://${__dirname}/index.html`);
});
