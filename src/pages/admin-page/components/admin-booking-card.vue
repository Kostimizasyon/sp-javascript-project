<script setup lang="ts">
import type { Booking } from '@/templates/booking'
import { StorageControl } from '@/storage/local-storage/local-storage'
import { madebookings, bookings } from '@/storage/stores/store'

const props = defineProps<{ booking: Booking }>()

function handleDelete(): void {
  StorageControl.deleteFromStorage(props.booking.id)
  madebookings.value.splice(props.booking.id, 1)
  bookings.value.splice(props.booking.id, 1)
}
</script>

<template>
  <div class="card rounded-4 h-100">
    <div class="card-body p-4 d-flex flex-column gap-2">
      <h4 class="card-title fw-bold text-primary mb-3">{{ booking.title }}</h4>

      <div
        v-for="[label, value] in [
          ['Name', booking.name],
          ['Room', booking.place],
          ['Date', booking.date],
          ['Time', booking.time],
        ]"
        :key="label"
        class="d-flex justify-content-between align-items-center"
      >
        <span class="text-secondary fw-semibold">{{ label }}</span>
        <span class="text-dark">{{ value }}</span>
      </div>

      <div class="mt-auto pt-3 border-top d-flex align-items-center gap-2">
        <span class="badge bg-primary-subtle rounded-pill px-3 py-2 fw-medium me-auto">
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
.card {
  border-color: #e2e8f0 !important;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.2s ease;
}
.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.13) !important;
}
.bg-primary-subtle {
  background-color: #e0e7ff !important;
  color: #4338ca !important;
}
</style>
