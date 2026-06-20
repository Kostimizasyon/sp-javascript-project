<script setup lang="ts">
import RoutePill from './pages/components/route-pill.vue'
import { StorageControl } from '@/storage/local-storage/local-storage'
import { bookings, madebookings } from '@/storage/stores/store.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

function resetAll(): void {
  StorageControl.clearStorage()
  StorageControl.initStorage()
  bookings.value = []
  madebookings.value = []
  router.replace(router.currentRoute.value.fullPath)
}
</script>

<template>
  <div>
    <header class="bg-primary bg-gradient text-white py-3 mb-4 shadow-sm">
      <div class="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div class="d-flex align-items-center gap-3">
          <div
            class="bg-white bg-opacity-25 rounded-3 p-2 d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-calendar2-check fs-4"></i>
          </div>
          <div>
            <h1 class="h5 mb-0 fw-bold">SP Bookings</h1>
            <div class="small opacity-75">Simple meeting booking demo</div>
          </div>
        </div>

        <div class="d-flex flex-column align-items-end gap-2">
          <button class="btn btn-sm btn-outline-light rounded-pill px-3" @click="resetAll">
            <i class="bi bi-arrow-counterclockwise me-1"></i>Reset to Demo Data
          </button>
        </div>
      </div>
    </header>
    <RoutePill />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
