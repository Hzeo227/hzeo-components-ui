/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const compontent: DefineComponent
  export default compontent
}
