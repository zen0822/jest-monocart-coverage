<template>
  <div>
    {{ props.className }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
})
</script>
