<script setup lang="ts">
import type { Booking } from '@/templates/booking'
import { StorageControl } from '@/storage/local-storage/local-storage'
import { madebookings, bookings } from '@/storage/stores/bookings'

const props = defineProps<{
  booking: Booking
}>()

function handleDelete(): void {
  StorageControl.deleteFromStorage(props.booking.id)
  madebookings.value.splice(props.booking.id, 1)
  bookings.value.splice(props.booking.id, 1)
}
</script>

<template>
  <div class="card border-0 shadow-sm rounded-4 h-100">
    <div class="card-body p-4 d-flex flex-column gap-2">
      <h4 class="card-title fw-bold text-primary mb-3">
        {{ booking.title }}
      </h4>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-semibold">Name</span>
        <span class="text-dark">{{ booking.name }}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-semibold">Room</span>
        <span class="text-dark">{{ booking.place }}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-secondary fw-semibold">Date</span>
        <span class="text-dark">{{ booking.date }}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-secondary fw-semibold">Time</span>
        <span class="text-dark">{{ booking.time }}</span>
      </div>

      <div class="mt-auto pt-3 border-top d-flex align-items-center gap-2">
        <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-medium me-auto">
          ID: #{{ booking.id }}
        </span>

        <button
          class="btn btn-outline-danger btn-sm rounded-pill px-3 fw-semibold"
          @click="handleDelete"
        >
          Terminate
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-primary-subtle {
  background-color: #e0e7ff !important;
  color: #4338ca !important;
}
</style>
