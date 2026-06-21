// Rezervasyon store'u
import { ref } from 'vue'
import { StorageControl } from '@/storage/local-storage/local-storage'
import type { Booking } from '@/templates/booking'

export const madebookings = ref<Booking[]>([])
export const bookings = ref<Booking[]>(StorageControl.loadStorage())

export const timeSlots = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
]

export const rooms = [
  'Toplantı Odası A',
  'Toplantı Odası B',
  'Toplantı Odası 1',
  'Toplantı Odası 2',
  'Yönetim Odası',
]
