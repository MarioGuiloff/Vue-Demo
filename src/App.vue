<template>
  <v-app>
    <v-main>
      <!-- <login/> -->
      <!-- <singup/> -->
      <!-- <todo/> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import Login from './components/Auth/Login';
//import Singup from './components/Auth/Singup';
//import Todo from './components/Todo';

export default {
  name: 'App',

  // components: {
  //   //Singup,
  //   Todo,
  // },

  data: () => ({
    //
  }),
};
</script>