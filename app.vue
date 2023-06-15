<template>
  <nav>
    <NuxtLink to="/" id="title">Turtleman</NuxtLink>
    <NuxtLink class="right" to="/Projects" >Projects</NuxtLink>
    <NuxtLink class="right" to="/Projects">Login</NuxtLink>
  </nav>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
  body{
    margin: 0;
    font-family: sans-serif;
  }
  nav{
    background-color: gray;
    padding: 1svw;
    & a:not(:first-child){
      padding-left: 1svw;
    }
  }
  a{
    color: black;
    text-decoration: none;
  }
  .right{
    float: right;
  }
  #title{
    font-weight: bold;
  }
</style>
