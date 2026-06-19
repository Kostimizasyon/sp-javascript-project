<script setup lang="ts">
import { ref } from 'vue'
import type { Booking } from '@/templates/booking'
import { StorageControl } from '@/storage/local-storage/local-storage'
import { madebookings } from '@/storage/stores/bookings'

const props = defineProps<{
  booking: Booking
}>()

const isEditing = ref(false)
const editForm = ref<Omit<Booking, 'id'>>({ ...props.booking })

function handleDelete(): void {
  madebookings.value.splice(props.booking.id, 1)
  StorageControl.deleteFromStorage(props.booking.id)
}

function handleSave(): void {
  const updatedBooking: Booking = {
    id: props.booking.id,
    ...editForm.value,
  }
  madebookings.value[props.booking.id] = updatedBooking
  StorageControl.editStorage(props.booking.id, updatedBooking)
  isEditing.value = false
}

function cancelEdit(): void {
  editForm.value = { ...props.booking }
  isEditing.value = false
}
</script>

<template>
  <div class="card border-0 shadow-sm rounded-4 h-100">
    <div class="card-body p-4 d-flex flex-column gap-2">
      <div v-if="!isEditing" class="d-flex flex-column gap-2">
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

        <div class="mt-auto pt-3 border-top d-flex justify-content-end gap-2">
          <button
            class="btn btn-outline-secondary rounded-pill px-3 py-1 fw-semibold btn-sm"
            @click="isEditing = true"
          >
            Edit
          </button>
          <button
            class="btn btn-outline-danger rounded-pill px-3 py-1 fw-semibold btn-sm"
            @click="handleDelete"
          >
            Delete
          </button>
        </div>
      </div>

      <div v-else class="w-100">
        <h4 class="card-title fw-bold text-primary mb-3">Edit Booking</h4>

        <form @submit.prevent="handleSave" class="d-flex flex-column gap-2">
          <div class="row g-2">
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Title</label>
              <input
                v-model="editForm.title"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Name</label>
              <input
                v-model="editForm.name"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-12">
              <label class="form-label small fw-semibold text-secondary mb-1">Room</label>
              <input
                v-model="editForm.place"
                type="text"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-6">
              <label class="form-label small fw-semibold text-secondary mb-1">Date</label>
              <input
                v-model="editForm.date"
                type="date"
                class="form-control form-control-sm"
                required
              />
            </div>
            <div class="col-6">
              <label class="form-label small fw-semibold text-secondary mb-1">Time</label>
              <input
                v-model="editForm.time"
                type="time"
                class="form-control form-control-sm"
                required
              />
            </div>
          </div>

          <div class="d-flex justify-content-end gap-2 mt-3 pt-2 border-top">
            <button
              type="button"
              class="btn btn-sm btn-link text-secondary text-decoration-none"
              @click="cancelEdit"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-sm btn-primary rounded-pill px-3">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
