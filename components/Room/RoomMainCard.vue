<script setup lang="ts">

import { type Room } from '~/types/room';
const props = defineProps<{
    currentRoom: Room
}>();

</script>

<template>
      <UCard class="col-4 main_card">
            <span class="h3">{{ currentRoom?.type }} : {{ currentRoom?.name  }}</span>
            <ul>
                <li  v-if="currentRoom?.rating" class="d-flex gap-1">Рейтинг: 
                    <template v-for="i in currentRoom.rating">
                         <Star :size="20" :fill="`yellow`" />
                    </template>
                </li>
                <li class="d-flex">Статус: {{ currentRoom?.status }} </li>
            </ul>
        </UCard>
</template>
