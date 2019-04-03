<template>
    <div class="AssetCardView">
      <md-card>
        <md-card-header>
          <md-card-media>
            <img class="card__thumbnail" :src="thumbnail" alt="assetType">
          </md-card-media>

          <md-card-header-text>
            <div class="card__id">{{asset.id}}</div>
            <div class="md-title">{{asset.name}}</div>
            <div class="md-subhead">{{asset.project}}</div>
            <div class="md-card-content">{{asset.serialNo}}</div>
          </md-card-header-text>
        </md-card-header>
      </md-card>
    </div>
</template>

<script>
import macImage from '@/assets/mac.png';
import helpImage from '@/assets/help.png';

export default {
  props: {
    asset: Object,
  },
  computed: {
    thumbnail() {
      const { type } = this.asset;
      if (type === 'mac') {
        return macImage;
      }
      return helpImage;
    },
  },
};
</script>

<style lang="scss">
  .md-card {
    margin: 30px;
  }
  .card__thumbnail{
    margin: 0 30px;
  }
  .card__id {
    display: none;
  }
</style>
