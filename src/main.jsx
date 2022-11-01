import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './components/AppContext'
import "./main.css"

import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'https://api.spacex.land/graphql/',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Provider value={client}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>
)
