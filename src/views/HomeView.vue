<template>
  <div>
    <h2 class="titulo my-4 mb-5 pb-2">Todas las notas</h2>
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <v-alert dense type="success" v-if="nueva">Nota guardada con exito</v-alert>
    </transition>
    <ListNotes @no-data="nodata = $event"/>
    <div class="text-center py-5 my-5" v-if="nodata.ver">
      <p class="text-secondary mt-5 pt-5">{{nodata.texto}}</p>
      <img class="img-fluid px-5 mb-5" src="../assets/anota.png" alt="">
    </div>
    <BtnCreateNote/>
  </div>
</template>

<script>
import BtnCreateNote from '@/components/BtnCreateNote.vue'
import ListNotes from '@/components/ListNotes.vue'
  export default {
    name: 'Home-view',
    components: {
      ListNotes,
      BtnCreateNote
    },
    data() {
      return {
        nodata: {},
        nueva: false
      }
    },
  }
</script>
