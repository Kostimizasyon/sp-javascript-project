<script setup lang="ts">
import { Navigator } from '@/router'
</script>

<template>
  <div class="d-flex justify-content-center align-items-center mt-3 gap-2">
    <button
      id="home"
      :class="Navigator.getRoute() === '/' ? 'btn-primary' : 'btn-outline-primary'"
      class="btn rounded-pill px-4 py-2"
      @click="Navigator.navigateToUser()"
    >
      User Page
    </button>

    <button
      id="admin"
      :class="Navigator.getRoute() === '/admin' ? 'btn-primary' : 'btn-outline-primary'"
      class="btn rounded-pill px-4 py-2"
      @click="Navigator.navigateToAdmin()"
    >
      Admin Panel
    </button>
  </div>
</template>
