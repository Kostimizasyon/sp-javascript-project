import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'
import { StorageControl } from './storage/local-storage/local-storage.ts'
import { bookings } from './storage/stores/store.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

StorageControl.initStorage()
bookings.value = StorageControl.loadStorage()

app.mount('#app')
