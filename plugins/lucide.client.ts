import { createIcons, icons } from 'lucide'

export default defineNuxtPlugin(() => {
  onMounted(() => {
    createIcons({ icons })
  })
})