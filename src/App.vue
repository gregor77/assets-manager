<template>
  <div id="app" class="page-container">
    <md-app id="md-app" md-mode="fixed">
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Act Asset Manager</span>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer id="navigation" :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_assets</md-icon>
            <span class="md-list-item-text">
              <router-link to="/">Assets</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>mob_to_about</md-icon>
            <span class="md-list-item-text">
              <router-link to="/about">About</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menuVisible: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#md-app {
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
