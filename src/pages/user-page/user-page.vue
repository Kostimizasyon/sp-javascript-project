<script setup lang="ts">
import { StorageControl } from '@/storage/local-storage/local-storage'
import type { Booking } from '@/templates/booking'
import { ref } from 'vue'
import UserBookingCard from '@/pages/user-page/components/user-booking-card.vue'
import { madebookings, rooms, timeSlots } from '@/storage/stores/store'

let latestIndex: number = 4

const form = ref<Omit<Booking, 'id'>>({
  title: '',
  name: '',
  place: '',
  date: '',
  time: '',
})

function handleSubmit(): void {
  const newBooking: Booking = {
    id: latestIndex++,
    ...form.value,
  }
  console.log('Merhaba dünya!')
  madebookings.value.push(newBooking)
  StorageControl.addToStorage(newBooking)

  form.value = { title: '', name: '', place: '', date: '', time: '' }
}
</script>

<template>
  <div class="container">
    <hr class="my-3" />

    <div class="row justify-content-center gap-5">
      <div class="col-12 col-lg-5">
        <div class="card border border-2 border-dashed shadow-sm rounded-4 p-4">
          <h3 class="mb-4 text-primary fw-bold">Yeni Rezervasyon</h3>

          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="title" class="form-label fw-semibold text-secondary">Başlık</label>
              <input
                id="title"
                v-model="form.title"
                type="text"
                class="form-control"
                required
                placeholder="örn. Haftalık Eşleştirme"
              />
            </div>

            <div class="mb-3">
              <label for="name" class="form-label fw-semibold text-secondary">Adınız</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-control"
                required
                placeholder="Ahmet Yılmaz"
              />
            </div>

            <div class="mb-3">
              <label for="place" class="form-label fw-semibold text-secondary">Oda / Yer</label>
              <select id="place" v-model="form.place" class="form-select" required>
                <option value="" disabled>Bir oda seçin</option>
                <option v-for="room in rooms" :key="room" :value="room">{{ room }}</option>
              </select>
            </div>

            <div class="row">
              <div class="col-6 mb-4">
                <label for="date" class="form-label fw-semibold text-secondary">Tarih</label>
                <input id="date" v-model="form.date" type="date" class="form-control" required />
              </div>

              <div class="col-6 mb-4">
                <label for="time" class="form-label fw-semibold text-secondary">Saat</label>
                <select id="time" v-model="form.time" class="form-select" required>
                  <option value="" disabled>Bir saat seçin</option>
                  <option v-for="slot in timeSlots" :key="slot" :value="slot">{{ slot }}</option>
                </select>
              </div>
            </div>

            <button type="submit" class="btn btn-primary rounded-pill w-100 py-2 fw-bold">
              Rezervasyon Ekle
            </button>
          </form>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="card border border-2 border-dashed shadow-sm rounded-4 p-4">
          <h3 class="mb-4 text-secondary fw-bold px-2">Son Rezervasyonlar</h3>

          <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-if="madebookings.length === 0" class="text-muted fst-italic px-2">
              Henüz rezervasyon yapılmadı.
            </li>

            <li v-for="booking in madebookings" :key="booking.id">
              <UserBookingCard :booking="booking" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
