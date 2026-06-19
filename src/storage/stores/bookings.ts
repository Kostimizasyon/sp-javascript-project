// stores/bookings.ts
import { ref } from 'vue'
import { StorageControl } from '@/storage/local-storage/local-storage'
import type { Booking } from '@/templates/booking'

export const madebookings = ref<Booking[]>([])
export const bookings = ref<Booking[]>(StorageControl.loadStorage())
