// const electron = require('electron');
// const { ipcRenderer } = electron;

// export default function send(sql: string) {
//     return new Promise((resolve) => {
//         ipcRenderer.once('asynchronous-reply', (_, arg) => {
//             resolve(arg);
//         });
//         ipcRenderer.send('asynchronous-message', sql);
//     });
// }
