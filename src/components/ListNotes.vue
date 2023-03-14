<template>
    <div> 
        <transition-group class="p-0" tag="ul" enter-active-class="animate__animated animate__slideInUp" leave-active-class="animate__animated animate__slideOutRight">
            <li v-for="(nota, index) in local" :key=nota.fecha>
                <NoteTemplate :data="nota" :index="index" @eliminar="traerLocal" :key="index" @editarDestacado="traerLocal" @editarEstado="traerLocal"/>
                <v-divider></v-divider>
            </li>
        </transition-group>         
    </div>
</template>

<script>
import NoteTemplate from '@/components/NoteTemplate.vue'
export default {
    name: 'List-Notes',
    components: {
        NoteTemplate
    },
    data() {
        return {
            local: [],
        }   
    },
    mounted() {
        this.traerLocal()
    },
    updated() {
        if (!this.local) {
            this.$emit("no-data", {texto:"Crea nuevas notas",ver: true})
        } else if (!this.local.length) {
            this.$emit("no-data", {texto:"No hay notas que mostrar",ver: true})
        }
    },
    methods: {
        traerLocal() {
            this.local = JSON.parse(localStorage.getItem("notas"))
        }
    },
}
</script>

<style>
li {
    list-style: none;
}

.position-relative{
    background-color: #ffff99;
}
</style>