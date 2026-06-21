<script setup lang="ts">
import { onMounted } from 'vue'
import { StorageControl } from '@/storage/local-storage/local-storage'
import AdminBookingCard from './components/admin-booking-card.vue'
import { bookings } from '@/storage/stores/store.ts'

onMounted(() => {
  bookings.value = StorageControl.loadStorage()
})
</script>

<template>
  <div class="container py-5">
    <div class="d-flex align-items-center mb-3">
      <h3 class="fw-bold text-primary mb-0">Aktif Rezervasyonlar</h3>
      <span class="badge bg-secondary rounded-pill ms-3">
        {{ bookings.length }}
      </span>
    </div>

    <hr class="border-secondary opacity-25 mb-4" />

    <div
      v-if="bookings.length === 0"
      class="text-center text-muted fst-italic py-5 border border-2 border-dashed rounded-4"
    >
      Şu anda aktif rezervasyon yok.
    </div>

    <ul v-else class="list-unstyled d-flex flex-column gap-3">
      <li v-for="booking in bookings" :key="booking.id">
        <AdminBookingCard :booking="booking" />
      </li>
    </ul>
  </div>
</template>
