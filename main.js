const {app, BrowserWindow, webContents, ipcMain, Menu} = require('electron')
const path = require('path')
const MainMenuapp = require('./menu-config')
const RightMenuapp = require('./right-menu-config')
const appConfig = require('./config')

let mainWindow

let mainMenu = Menu.buildFromTemplate(MainMenuapp)

let rightMenu = Menu.buildFromTemplate(RightMenuapp)

function createWindow() {
    mainWindow = new BrowserWindow({
        width: appConfig['width'],
        height: appConfig['height'],
        minWidth: appConfig['minWidth'],
        minHeight: appConfig['minHeight'],
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    Menu.setApplicationMenu(mainMenu)

    mainWindow.webContents.on('context-menu', e => {
        rightMenu.popup(mainWindow)
    })

    loadWebContent()

}


function loadWebContent() {
    mainWindow.loadFile(path.join(__dirname, 'public/loading.html'))

    let wc = mainWindow.webContents

    wc.once('did-finish-load', () => {
        mainWindow.loadURL(appConfig['websiteUrl'])
    })

    wc.on('did-fail-load', (error, code) => {
        //console.log(code)
        mainWindow.loadFile(path.join(__dirname, 'public/offline.html'))
    })
}

ipcMain.on('online-status-changed', (event, status) => {
    if (status === true) {
        loadWebContent()
    }
})

module.exports = (pageId) => {
    if (pageId === 'home') {
        loadWebContent()
    } else {
        mainWindow.loadFile(path.join(__dirname, `public/${pageId}.html`))
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
