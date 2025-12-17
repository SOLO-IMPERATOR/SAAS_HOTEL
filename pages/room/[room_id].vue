<script setup lang="ts">
import { rooms } from '~/components/room';
import { type Room } from '~/types/room';

const { room_id } = useRoute().params as {room_id: string};
const roomsByTypes = rooms as Room[];
const currentRoom: ComputedRef<Room | undefined> = computed(() =>
  roomsByTypes.find(room => room.id === Number(room_id))
);

</script>

<template>
    <div v-if="currentRoom" class="container-sm">
        <RoomMainCard
        :currentRoom="currentRoom"
        ></RoomMainCard>

        <UCard class="col-4 main_card">
            <span class="h3">Инвентарь комнаты:</span>
            <ul>
                <li v-for="inventory in currentRoom?.inventory" class="d-flex gap-1">
                    <i :class="inventory.icon" ></i>

                    <span>{{ inventory.name }}</span>
                    <span v-if="inventory.status == 'OK'" class="text-green-400">
                        Работает/В наличии
                    </span>
                    <span v-if="inventory.status == 'BROKEN'" class="text-orange-400">
                        Неисправно
                    </span>
                    <span v-if="inventory.status == 'NO'" class="text-red-500">
                        Отсутсвует
                    </span>
                    
                </li>
            </ul>
        </UCard>
    </div>
</template>

<style scoped>
    .main_card{
        background: white;
    }
</style>


