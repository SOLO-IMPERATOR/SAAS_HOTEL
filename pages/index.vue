<script setup lang="ts">
import { TooltipProvider} from 'reka-ui';
import { Dot } from 'lucide-vue-next';
import { rooms } from '~/components/room';

</script>

<template>
  <div class="container mt-5">
      <h1>Список номеров</h1>

      <table class="table table-hover">
         <thead>
        
            <tr>
               <td>#</td>
               <td>№ / Название комнаты</td>
               <td>Этаж</td>
               <td >Статус</td>
               <td>События</td>
            </tr>
         </thead>
         <tbody>
            <tr v-for="room in rooms">
               <td><RoomContextMenu :roomID="room.id"><div>{{ room.id }}</div></RoomContextMenu></td>
               <td><div>{{ room.name }}</div></td>
               <td><div>Этаж {{ room.floor }}</div></td>
               <td>
                  <TooltipProvider>
                  <UTooltip
                  text="с 09.05.25 по 11.06.25"
                  ><div class="d-flex align-items-center">
                     <template v-if="room.status === 'rent'">
                        <Dot :size="40" style="color: red;" />
                        Занята
                     </template>
                     <template v-if="room.status === 'free' ">
                        <Dot :size="40" style="color: green;" />
                        Свободна
                     </template>
                    <template v-if="room.status === 'fix' ">
                        <Dot :size="40" style="color: peru;" />
                        На ремонте
                     </template>
                  </div>
               
               </UTooltip>
                  </TooltipProvider>
               </td>
               <td></td>
            </tr>
         </tbody>
      </table>

  </div>
</template>
