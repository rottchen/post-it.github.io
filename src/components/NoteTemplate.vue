<template>
    <div class="mb-3 border">
        <div class="p-1 border-bottom d-flex justify-content-between">
            <p class="estado py-1 px-2 m-0 fw-bold" :style="estaPendiente == 'finalizada' ? 'color: green;' : 'color: rgb(238, 118, 74);'">{{ data.estado}}</p>
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    class="my-auto me-2"
                    color="black"
                    size="23"
                    dense
                    @click="cambiarEstado"
                  >
                  {{ icons.mdiSwapHorizontal }}
                  </v-icon>
                </template>
                <span>Cambiar estado</span>
              </v-tooltip>
        </div>
        <div class="p-4 pb-1 position-relative">
            <h3 class="h2">{{ data.titulo}}</h3>
            <h4 class="fs-6 mb-4">{{ data.categoria}}</h4>
            <p class="text-secondary">{{ data.contenido }}</p>
            <input class="destacado" type="checkbox" @change="destacar" :checked="estaDestacado" />
        </div>
        <div class="d-flex text-center">
            <div class="fondo-primario w-50 fondo-primario text-white py-2">
                <router-link :to='"/editar/" + data.titulo + "/" + data.categoria + "/" + data.contenido' class="text-decoration-none text-white">Editar</router-link>
            </div>
            <div class="bg-danger w-50 fondo-primario text-white py-2">
                <a href="#" class="text-decoration-none text-white" @click="eliminar">Eliminar</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mdiSwapHorizontal } from '@mdi/js'

export default {    
    name: 'Note-Template',
    props: ["data", "index"],
    data: () => ({
      icons: {
        mdiSwapHorizontal
      },
    }),
    methods: {
        destacar(e) {
            let local = JSON.parse(localStorage.getItem("notas"))
            let estado = e.target.checked
            if (estado) {
                local[this.index].destacado = true;
            } else {
                local[this.index].destacado = false;
            }
            localStorage.notas = JSON.stringify(local)
            this.$emit("editarDestacado")
        },
        cambiarEstado() {
            let local = JSON.parse(localStorage.getItem("notas"))
            if (local[this.index].estado === "pendiente") {
                local[this.index].estado = "finalizada";
            } else {
                local[this.index].estado = "pendiente"
            }
            localStorage.notas = JSON.stringify(local)
            this.$emit("editarEstado")
        },
        eliminar() {
            let local = JSON.parse(localStorage.getItem("notas"))
            local.forEach((item, index) => {
                if (item.fecha == this.data.fecha) {
                    local.splice(index, 1)
                }
            })
            localStorage.notas = JSON.stringify(local)
            this.$emit("eliminar") 
        },
    },
    computed: {
        estaDestacado() {
            return this.data.destacado
        },
        estaPendiente() {
            return this.data.estado
        }
    }
}
</script>

<style>

.fondo-primario {
    background-color: var(--color-primary);
}

.destacado {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 2px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
}

.destacado:checked {
    background-color: #dc3545;
}
</style>