<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="mx-auto max-w-7xl antialiased">
    <header class="flex items-center justify-between py-5">
      <div class="flex items-center gap-5">
        <img class="h-8" src="/android-chrome-512x512.png" alt="logo">
        <RouterLink class="text-xl font-bold" to="/">CV Forge</RouterLink>
      </div>
      <nav class="flex items-center gap-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <Button>Login/Sign Up</Button>
      </nav>
    </header>
    <main class="h-[calc(100vh-80px)]">
      <RouterView/>
    </main>
  </div>
</template>
