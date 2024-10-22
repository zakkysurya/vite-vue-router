<template>
  <h1>Main Page</h1>
  <br />
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    |
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
  <br />
  <router-view></router-view>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
