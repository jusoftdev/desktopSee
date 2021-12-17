const {ipcRenderer} = require('electron')
const appConfig = require('./config')

window.addEventListener('DOMContentLoaded', () => {

    if (appConfig.hideElementsId.length > 0) {
        for (let elementsId = 0; elementsId < appConfig.hideElementsId.length; elementsId++) {
            let hiddenElementsId = document.getElementById(appConfig.hideElementsId[elementsId])
            hiddenElementsId ? hiddenElementsId.style.display = 'none' : console.log
        }
    }

    if (appConfig.hideElementsClass.length > 0) {
        for (let elementsClass = 0; elementsClass < appConfig.hideElementsClass.length; elementsClass++) {
            let hiddenElementsClass = document.getElementsByClassName(appConfig.hideElementsClass[elementsClass])
            hiddenElementsClass ? hiddenElementsClass[0].style.visibility = 'hidden' : console.log
        }
    }

    document.title = appConfig['appName']

    let tryagainbtn = document.getElementById("tryagain")
    tryagainbtn ? tryagainbtn.onclick = runc : false

    function runc() {
        ipcRenderer.send('online-status-changed', true)
    }

})
