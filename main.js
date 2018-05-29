const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function () {
    //Create window
    mainWindow = new BrowserWindow({});
    //Load html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    //Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});


//Create menu template
const mainMenuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Add Item'
                },
                {
                    label: 'Clear Item'
                },
                {
                    label: 'Quit',
                    accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                    click() {
                        app.quit()
                    }
                }
            ]
        }
    ]
;