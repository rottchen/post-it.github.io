<template>
  <div>
    <h2 class="titulo my-4 mb-5 pb-2">Crear nueva nota</h2>
    <CreateNote/>
  </div>
</template>

<script>
import CreateNote from '../components/CreateNote'

export default {
  name: 'Create-view',
  components: {
    CreateNote,
  },
}
</script>
