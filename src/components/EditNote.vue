<template>
    <div>
        <div>
            <form @submit.prevent class="mb-5 form-nota">
                <div class="mb-3">
                    <label for="titulo" class="form-label">Titulo</label>
                    <input type="text" class="form-control" id="titulo" v-model="data.titulo">
                    <p class="text-danger mt-1 pt-1 fs-6" v-if="this.mostrarErrores">{{ this.errores.titulo }}</p>
                </div>
                <div class="mb-3">
                    <label for="categoria" class="form-label">Categoria</label>
                    <select class="form-select" id="categoria" v-model="data.categoria">
                        <option selected disabled>Selecciona una categoria</option>
                <option v-for="item in categorias" :value="item.value" :key="item.value">{{item.contenido}}</option>
                    </select>
                    <p class="text-danger mt-1 pt-1 fs-6" v-if="this.mostrarErrores">{{ this.errores.categoria }}</p>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" v-model="data.contenido"></textarea>
                    <p class="text-danger mt-1 pt-1 fs-6" v-if="this.mostrarErrores">{{ this.errores.contenido }}</p>
                </div>
                <div class="mb-3">
                    <input type="submit" value="Guardar" class="btn fondo-primario text-white" @click="guardar">
                </div>
            </form>
            <div v-if="data.titulo.length || data.categoria.length || data.contenido.length">
                <h2 class="titulo mb-3 fs-5">Previsualizacion</h2>
                <div class="mb-3 border">
                    <div class="p-4">
                        <h3 class="h2">{{ data.titulo }}</h3>
                        <h4 class="fs-6 mb-4">{{ data.categoria }}</h4>
                        <p>{{ data.contenido }}</p>
                    </div>
                </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name: 'Edit-Note',
    data() {
        return {
            data: {
                id : this.$route.params.titulo,
                titulo: this.$route.params.titulo,
                categoria: this.$route.params.categoria,
                contenido: this.$route.params.contenido,
            },
            errores: {
                titulo: "",
                categoria: "",
                contenido: "",
            },
            mostrarErrores: false,
            categorias: []
        }
    },
    methods: {
      guardar() {

          if(!this.data.titulo) {
              this.errores.titulo = "El titulo es obligatorio."
          } else {
              this.errores.titulo = ""
          }

          if (!this.data.categoria) {
              this.errores.categoria = "Debes seleccionar una categoria."
          } else {
              this.errores.categoria = ""
          }

          if (!this.data.contenido) {
              this.errores.contenido = "Este campo no puede quedar vacio."
          } else {
              this.errores.contenido = ""
          }

          if (!this.data.titulo.length || !this.data.categoria.length || !this.data.contenido.length) {
              this.mostrarErrores = true
          } else {

            let local = JSON.parse(localStorage.getItem("notas"))
              local.forEach((item) => {
                if (item.titulo == this.data.id) {
                    item.titulo = this.data.titulo
                    item.categoria = this.data.categoria
                    item.contenido = this.data.contenido
                }
                })
                localStorage.notas = JSON.stringify(local)
              this.$router.push("/")
          }     
        },
    },
    mounted() {
        this.categorias = JSON.parse(localStorage.getItem("categorias"))
    }
}
</script>

<style>
textarea {
    height: 250px;
  }
  .form-nota input[type="submit"]{
    background-color: var(--color-primary);
  }
  
  .form-nota input[type="text"]:focus{
    border: 3px solid var(--color-primary);
    box-shadow: none
  }
  
  .form-nota select:focus{
    border: 3px solid var(--color-primary);
    box-shadow: none
  }
  
  .form-nota textarea:focus{
    border: 3px solid var(--color-primary);
    box-shadow: none
  }

</style>