<script setup lang="ts">
import type { ContextMenuItem } from '@nuxt/ui'
import { rooms } from './room';

const props = defineProps<{
    roomID: number
}>();

const items = ref<ContextMenuItem[][]>([
  [
    {
      label: 'Дашборд',
      icon: 'i-lucide-calendar-days',
      onSelect: () => navigateTo(`/room/${props.roomID}`),
    }
  ], 
  [
    {
      label: 'Бронь номера',
      icon: 'i-lucide-calendar-days',
    }
  ], 
  [
    {
      label: "История событий",
      icon: "i-lucide-history"
    }
  ]
])
</script>

<template>
  <UContextMenu
    class="room_context_menu"
    :items="items"
  >
    <slot></slot>
  </UContextMenu>
</template>
<style>
  .room_context_menu{
    cursor: pointer;
  }
</style>
