import { contextBridge, ipcRenderer } from 'electron'

export interface ElectronContext {
  sendSyncEvent: (msg: string) => string
}


// As an example, here we use the exposeInMainWorld API to expose the IPC renderer 
// to the main window. They'll be accessible at "window.ipcRenderer".
process.once('loaded', () => {

  const context: ElectronContext = {
    sendSyncEvent: (msg: string) => ipcRenderer.sendSync('sync-event', msg),
  }

  contextBridge.exposeInMainWorld('api', context)
})
