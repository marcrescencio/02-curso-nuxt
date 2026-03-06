<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
    <UError 
      :error="error"
      :clear="{
        //color: 'neutral',
        size: 'xl',
        icon: 'tdesign:arrow-left-circle-filled',
        class: 'rounded-full',
        label: 'Voltar para o Início',        
      }"
      :ui="{
        statusCode:'text-9xl font-thin',

      }" 
    />
</template>

