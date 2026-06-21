import type { Booking } from '@/templates/booking'

let latestIndex: number = 0

const dummyData: Array<Booking> = [
  {
    id: 0,
    title: 'Sprint Planlama',
    name: 'Aylin Kaya',
    place: 'Toplantı Odası A',
    date: '2026-06-23',
    time: '09:00',
  },
  {
    id: 1,
    title: 'Müşteri Sunumu',
    name: 'Mert Demir',
    place: 'Yönetim Odası',
    date: '2026-06-24',
    time: '14:00',
  },
  {
    id: 2,
    title: 'Bire Bir Kontrol',
    name: 'Zeynep Aksoy',
    place: 'Toplantı Odası 1',
    date: '2026-06-25',
    time: '11:00',
  },
  {
    id: 3,
    title: 'Tasarım İncelemesi',
    name: 'Can Yılmaz',
    place: 'Toplantı Odası B',
    date: '2026-06-26',
    time: '13:30',
  },
]

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
    console.log('Depolamaya eklendi')
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
    latestIndex = 0
  }

  static seedDummyData(): void {
    this.clearStorage()
    dummyData.forEach((booking) => this.addToStorage(booking))
  }

  static initStorage(): void {
    if (localStorage.getItem('booking-0') === null) {
      this.seedDummyData()
    } else {
      latestIndex = dummyData.length
    }
  }
}
