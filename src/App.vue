<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
  
    <div class="wrapper">
      
      <nav>
        <h2>Choose a city from the list or search by name</h2>
        <RouterLink to="/weather/city">Search from list</RouterLink>
        <RouterLink to="/weather/search">Search by name</RouterLink>
      </nav>

    </div>
</header>

  <RouterView />
</template>

<style scoped>

.logo {
  display: flex;
  margin: 0 auto 2rem;
  border-radius: 150px;
}

nav {
  width: 100%;
  font-size: 12px;
  margin: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {

  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
        align-content: center;
        gap: 10px;

  }

  nav {

    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

</style>
