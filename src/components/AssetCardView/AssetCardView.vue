<template>
    <div class="card">
      <md-card md-with-hover v-bind:class="{ 'card--not-checked': !isRecentlyChecked }" >
        <md-card-header>
          <md-checkbox
            class="md-checkbox"
            v-model="isChecked"
            :click="selectId(asset.id)">
          </md-checkbox>
          <md-card-media>
            <img class="card__thumbnail" :src="thumbnail" alt="assetType">
          </md-card-media>

          <md-card-header-text>
            <div class="card__id">{{asset.id}}</div>
            <div class="md-title">{{asset.name}}</div>
            <div class="md-subhead">{{`${asset.project} / ${asset.user}`}}</div>
            <div class="md-card-content">{{`SN : ${asset.serialNo}`}}</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-content v-if="isRecentlyChecked" class="card__check-date">
          <span>check date : </span>
          <span>{{formattedCheckDate}}</span>
        </md-card-content>
        <md-card-content v-else class="card__check-date">
          <span>Recently not checked</span>
        </md-card-content>
      </md-card>
    </div>
</template>

<script>
import { format, isSameMonth } from 'date-fns';
import macImage from '@/assets/mac.png';
import helpImage from '@/assets/help.png';

export default {
  props: {
    asset: Object,
  },
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    thumbnail() {
      const { type } = this.asset;
      if (type === 'iMac') {
        return macImage;
      }
      return helpImage;
    },
    isRecentlyChecked() {
      const { checkDate } = this.asset;
      if (!!checkDate === false) {
        return false;
      }
      return isSameMonth(new Date(), checkDate);
    },
    formattedCheckDate() {
      const { checkDate } = this.asset;
      return format(checkDate, 'YYYY-MM-DD');
    },
  },
  methods: {
    selectId(selectedAssetId) {
      this.$emit('mergeSelectedId', selectedAssetId, this.isChecked);
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    margin-top: 10px;
  }
  .md-card-media {
    margin-right: 10px;
  }
  .md-card-header-text {
    margin-left: 30px;
    text-align: left;
  }
  .md-card-content {
    padding: 0;
  }
  .md-checkbox {

  }
  .card--not-checked {
    background: yellow;
  }
  .card__id {
    display: none;
  }
  .card__check-date {
    padding: 0 10px 10px 10px;
  }
</style>
