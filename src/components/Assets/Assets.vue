<template>
    <div class="Assets">
      <md-autocomplete
        v-model="selectedProject"
        :md-options="projects"
        md-layout="box"
        md-dense>
        <label>Select Project</label>
      </md-autocomplete>

      <div class="md-layout md-gutter md-alignment-center">
        <div v-for="(asset, index) in assets"
             :key="index"
              class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <AssetCardView v-bind:asset="asset" />
        </div>
      </div>
    </div>
</template>

<script>
import AssetCardView from '../AssetCardView/AssetCardView.vue';

export default {
  components: {
    AssetCardView,
  },
  data() {
    return {
      selectedProject: '',
      projects: [
        '2SPRINT',
        'MSS',
        'Cello',
        'E-STORE',
      ],
      assets: [
        {
          id: 1,
          type: 'iMac',
          name: 'Sydney',
          project: '2SPRINT',
          serialNo: 'C02SJ04QGQ17',
          checkDate: new Date(2019, 3, 5),
          user: 'Rhyno',
        },
        {
          id: 2,
          type: 'iMac',
          name: 'Ankara',
          project: 'MSS',
          serialNo: 'C02R807EGQ17',
          checkDate: new Date(2019, 2, 5),
          user: 'Dann',
        },
        {
          id: 3,
          type: 'iMac',
          name: 'Houston',
          project: 'E-STORE',
          serialNo: 'C02SJ041GQ17',
          checkDate: new Date(2019, 1, 20),
          user: 'Iaan',
        },
      ],
    };
  },
};
</script>
