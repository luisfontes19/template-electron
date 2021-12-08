

import { Button } from '@mui/material'
//import { ipcRenderer } from 'electron';
import React from 'react'
import CustomTreeView from './Treeview'

const App = () => {
  const { api } = window

  const onClick = () => {
    api.sendSyncEvent('test')
  }

  return <div>
    Hi From App

    < CustomTreeView />
    <Button onClick={onClick}>Click Me</Button>
  </div >
}

export default App