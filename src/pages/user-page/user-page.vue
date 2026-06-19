<script setup lang="ts">
import { StorageControl } from '@/storage/local-storage/local-storage'
import type { Booking } from '@/templates/booking'
import { ref } from 'vue'
import UserBookingCard from '@/pages/user-page/components/user-booking-card.vue'
import { madebookings } from '@/storage/stores/bookings'

let latestIndex: number = 0

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
  console.log('Hello world!')
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
          <h3 class="mb-4 text-primary fw-bold">New Booking</h3>

          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="title" class="form-label fw-semibold text-secondary">Title</label>
              <input
                id="title"
                v-model="form.title"
                type="text"
                class="form-control"
                required
                placeholder="e.g. Weekly Sync"
              />
            </div>

            <div class="mb-3">
              <label for="name" class="form-label fw-semibold text-secondary">Your Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-control"
                required
                placeholder="John Doe"
              />
            </div>

            <div class="mb-3">
              <label for="place" class="form-label fw-semibold text-secondary">Room / Place</label>
              <input
                id="place"
                v-model="form.place"
                type="text"
                class="form-control"
                required
                placeholder="Conference Room A"
              />
            </div>

            <div class="row">
              <div class="col-6 mb-4">
                <label for="date" class="form-label fw-semibold text-secondary">Date</label>
                <input id="date" v-model="form.date" type="date" class="form-control" required />
              </div>

              <div class="col-6 mb-4">
                <label for="time" class="form-label fw-semibold text-secondary">Time</label>
                <input id="time" v-model="form.time" type="time" class="form-control" required />
              </div>
            </div>

            <button type="submit" class="btn btn-primary rounded-pill w-100 py-2 fw-bold">
              Add Booking
            </button>
          </form>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="card border border-2 border-dashed shadow-sm rounded-4 p-4">
          <h3 class="mb-4 text-secondary fw-bold px-2">Recent Bookings</h3>

          <ul class="list-unstyled d-flex flex-column gap-3">
            <li v-if="madebookings.length === 0" class="text-muted fst-italic px-2">
              No bookings made yet.
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
