import type { Booking } from '@/templates/booking'

let latestIndex: number = 0

export class StorageControl {
  static loadStorage(): Array<Booking> {
    if (latestIndex == 0) return []
    const bookings: Array<Booking> = []
    for (let i: number = 0; i < latestIndex; i++) {
      const item: string = this.getFromStoreage(i)
      if (item != '') bookings[i] = JSON.parse(item) as Booking
    }
    return bookings
  }

  static addToStorage(booking: Booking): void {
    console.log('Added to storage')
    localStorage.setItem(`booking-${latestIndex}`, JSON.stringify(booking))
    latestIndex++
  }

  static editStorage(index: number, newValue: Booking): void {
    localStorage.setItem(`booking-${index}`, JSON.stringify(newValue))
  }

  static deleteFromStorage(index: number): void {
    localStorage.removeItem(`booking-${index}`)
  }

  static getFromStoreage(index: number): string {
    return localStorage.getItem(`booking-${index}`) || ''
  }

  static clearStorage(): void {
    localStorage.clear()
  }
}
