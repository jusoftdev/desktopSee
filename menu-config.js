module.exports = [
    {
        label: 'desktopSee',
        submenu: [
            {
                label: 'Home', click: () => {
                    require('./main')("home")
                }
            },
            {
                label: 'About', click: () => {
                    require('./main')("about")
                }
            },
            {role: 'quit'},
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
        ]
    },
    {
        label: 'View',
        submenu: [
            {role: 'reload'},
            {role: 'zoomIn'},
            {role: 'zoomOut'},
        ]
    },
]
