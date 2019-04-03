<template>
    <div class="Assets">
      <div v-for="(asset, index) in assets" :key="index">
        <AssetCardView v-bind:asset="asset" />
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
      assets: [
        {
          id: 1,
          type: 'mac',
          name: 'Sydney',
          project: '2Sprint',
          serialNo: '123',
        },
        {
          id: 2,
          type: 'mac',
          name: 'Ankara',
          project: '2Sprint',
          serialNo: '456',
        },
        {
          id: 3,
          type: 'mac',
          name: 'Houston',
          project: '2Sprint',
          serialNo: '789',
        },
      ],
    };
  },
};
</script>
