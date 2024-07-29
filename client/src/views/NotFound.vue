<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center gap-5">
    <h1 class="text-5xl">404</h1>
    <p>Oops, we couldn't find that page.</p>
    <RouterLink to="/">Go to home</RouterLink>
  </div>
</template>
