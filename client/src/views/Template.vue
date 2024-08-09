<script setup lang="ts">
import { h, Ref, ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/toast';
import BasicTemplate from '@/components/templates/BasicTemplate.vue';

type FormValues = {
  name: string,
  position: string
}

const formValues: Ref<FormValues> = ref({} as FormValues);

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}));

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  });
});

function handleFormChange(e: Event) {
  const { value, name } = e?.target as HTMLInputElement;
  formValues.value = {
    [name]: value,
    ...formValues.value,
  } as FormValues;
}
</script>

<template>
  <div class="flex flex-col gap-10 pb-5">
    <div class="flex h-fit justify-center rounded-xl bg-gray-900 p-5">
      <BasicTemplate :values="formValues"/>
    </div>
    <form class="w-2/3 space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Ime i prezime</FormLabel>
          <FormControl>
            <Input
              @keydown="handleFormChange"
              type="text"
              placeholder="Vase ime i prezime"
              v-bind="componentField"
              v-model="formValues.name"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="position">
        <FormItem>
          <FormLabel>Zanimanje</FormLabel>
          <FormControl>
            <Input
              @keydown="handleFormChange"
              type="text"
              placeholder="Zanimanje"
              v-bind="componentField"
              v-model="formValues.position"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">
        Create your CV
      </Button>
    </form>
  </div>
</template>
