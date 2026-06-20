<script setup lang="ts">
import { ref } from 'vue'
import type { Booking } from '@/templates/booking'
import { StorageControl } from '@/storage/local-storage/local-storage'
import { madebookings, rooms, timeSlots } from '@/storage/stores/store'

const props = defineProps<{ booking: Booking }>()

const isEditing = ref(false)
const editForm = ref<Omit<Booking, 'id'>>({ ...props.booking })

function handleDelete(): void {
  madebookings.value.splice(props.booking.id, 1)
  StorageControl.deleteFromStorage(props.booking.id)
}

function handleSave(): void {
  const updated: Booking = { id: props.booking.id, ...editForm.value }
  madebookings.value[props.booking.id] = updated
  StorageControl.editStorage(props.booking.id, updated)
  isEditing.value = false
}

function cancelEdit(): void {
  editForm.value = { ...props.booking }
  isEditing.value = false
}
</script>

<template>
  <div class="card rounded-4 h-100">
    <div class="card-body p-4 d-flex flex-column gap-2">
      <template v-if="!isEditing">
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
      </template>

      <template v-else>
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
              <select v-model="editForm.place" class="form-select form-select-sm" required>
                <option v-for="room in rooms" :key="room" :value="room">{{ room }}</option>
              </select>
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
              <select v-model="editForm.time" class="form-select form-select-sm" required>
                <option v-for="time in timeSlots" :key="time" :value="time">{{ time }}</option>
              </select>
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
      </template>
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
</style>
