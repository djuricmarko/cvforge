<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <section class="flex h-full items-center justify-center">
    <div class="flex w-full flex-col items-center gap-10">
      <h1 class="text-center text-6xl font-light">
        Craft a standout CV effortlessly <br> using advanced AI technology.
      </h1>
      <p class="text-center text-xl text-gray-600">
        Let us help you showcase your skills, experience, and personality to land your dream job.
      </p>
      <Button class="w-40">Get started now</Button>
    </div>
  </section>
  <section class="h-screen py-20">
    <RouterLink to="/template/1" v-slot="{ navigate }">
      <div @click="navigate" class="w-fit border-2 p-2 hover:border-black">
        <img class="h-56" src="/images/CV-1.svg" alt="cv_template">
      </div>
    </RouterLink>
  </section>
</template>
