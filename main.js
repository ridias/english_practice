const electron = require("electron")
const url = require("url")
const path = require("path")
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let childWindow;

app.on("ready", function(){
    mainWindow = createWindow("index.html", 800, 600);
    mainWindow.on("closed", function(){
        app.quit();
    })
})

function createWindow(pageHTML, widthValue, heightValue){
    let windowTask = new BrowserWindow({
        width: widthValue,
        height: heightValue
    });

    windowTask = loadWindow(pageHTML, windowTask);
    return windowTask;
}

function createModalWindow(pageHTML, widthValue, heightValue){
    let windowTask = new BrowserWindow({
        width: widthValue,
        height: heightValue,
        parent: mainWindow,
        modal: true
    })

    windowTask = loadWindow(pageHTML, windowTask);
    return windowTask
}

function loadWindow(pageHTML, windowTask){
    windowTask.loadURL(url.format({
        pathname: path.join(__dirname + "/views/", pageHTML),
        protocol: "file:",
        slashes: true
    }));

    //Menu.setApplicationMenu(null);
    return windowTask;
}

ipcMain.on("logout", function(){
    mainWindow = loadWindow("login.html", mainWindow);
});