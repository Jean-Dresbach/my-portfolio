import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { persitedStore, store } from "./redux"
import { Root } from "./Root"

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persitedStore} />
      <Root />
    </ReduxProvider>
  )
}
