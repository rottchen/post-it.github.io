<template>
  <v-app>
    <v-main>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid p-0">
            <a class="navbar-brand" href="#">Post it!</a>
            <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="d-flex justify-content-between">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" exact>Notas</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/crear" class="nav-link" exact>Crear</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <router-view class="container"/>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {
    fetch("https://brunorottchen.000webhostapp.com/index.php")
      .then(response => response.json())
      .then(data => {
        localStorage.categorias = JSON.stringify(data)
      })
      .catch(err => console.log(err))
  
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

:root {
  --color-primary: black;
}

.router-link-exact-active {
  color: var(--color-primary)!important;
}

.v-application ul {
  padding-left: 0 !important;
}

.v-application a {
  color: unset!important;
}

.titulo {
  color: var(--color-primary);
}

.navbar-brand{
    font-family: 'Atma', sans-serif;
    font-weight: bold;
}

.navbar-toggler {
  width: 20px;
  height: 20px;
  position: relative;
  transition: .5s ease-in-out;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none;
  border: 0;
}

.form-nota textarea:focus{
    background-color: #ffff99;
    border: 2px solid var(--color-primary);
    box-shadow: 5px 5px var(--color-primary);
    transition: 0.3s;
}

.form-nota textarea{
    background-color: #ffff99;
}

.form-notas{
    background-color: #ffff99;
}

.navbar-toggler span {
  margin: 0;
  padding: 0;
}

.toggler-icon {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--color-primary);
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.middle-bar {
  margin-top: 0px;
}

.navbar-toggler .top-bar {
  margin-top: 0px;
  transform: rotate(135deg);
}

.navbar-toggler .middle-bar {
  opacity: 0;
  filter: alpha(opacity=0);
}

.navbar-toggler .bottom-bar {
  margin-top: 0px;
  transform: rotate(-135deg);
}

.navbar-toggler.collapsed .top-bar {
  margin-top: -20px;
  transform: rotate(0deg);
}

.navbar-toggler.collapsed .middle-bar {
  opacity: 1;
  filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .bottom-bar {
  margin-top: 20px;
  transform: rotate(0deg);
}

.navbar-toggler.collapsed .toggler-icon {
  background: var(--color-primary);
}

</style>
