
import { ElectronContext } from './renderer/preload'

declare global {
  interface Window {
    api: ElectronContext
  }
}