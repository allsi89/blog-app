<template>
  <div id="app">
    <v-app>
      <!-- <v-navigation-drawer app> -->
        <!-- -->
      <!-- </v-navigation-drawer> -->

      <v-app-bar app>
        <!-- -->
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-content class="custom-styling">
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="center">
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.center{
  display: flex;
 
  justify-content: center;
}
.custom-styling{
   background-color: rgb(182, 233, 216);
}
</style>
