import { ipcMain } from 'electron'

export const initReceiver = () => {
  // // https://www.electronjs.org/docs/latest/api/ipc-main/#sending-messages
  ipcMain.on('async-event', (event, arg: any) => {
    console.log('received async message')
    event.reply('async-reply', 'some response')
  })

  ipcMain.on('sync-event', (event, arg) => {
    console.log(`Received message ${arg}`)
    event.returnValue = 'some sync response'

  })

}