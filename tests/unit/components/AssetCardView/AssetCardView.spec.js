import Vue from 'vue';
import VueMaterial from 'vue-material';
import { shallowMount } from '@vue/test-utils';

import AssetCardView from '@/components/AssetCardView/AssetCardView.vue';
import macImage from '@/assets/mac.png';
import helpImage from '@/assets/help.png';

Vue.use(VueMaterial);

describe('@/components/AssetCardView/AssetCardView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AssetCardView, {
      propsData: {
        asset: {
          id: 1,
          name: 'Chernobyl',
          project: '2Sprint',
          serialNo: '1234567',
        },
      },
    });
  });

  describe('render', () => {
    it('should render name, project, serialNo', () => {
      expect(wrapper.find('.card__id').text()).toEqual('1');
      expect(wrapper.find('.md-title').text()).toEqual('Chernobyl');
      expect(wrapper.find('.md-subhead').text()).toEqual('2Sprint');
      expect(wrapper.find('.md-card-content').text()).toEqual('1234567');
    });

    describe('card thumbnail by type', () => {
      it('should thumbnail is mac when type is mac', () => {
        wrapper.setProps({ asset: { type: 'mac' } });

        expect(wrapper.find('.card__thumbnail').attributes('src')).toEqual(macImage);
      });

      it('should thumbnail is not mac when type is mac', () => {
        wrapper.setProps({ asset: { type: 'not mac' } });

        expect(wrapper.find('.card__thumbnail').attributes('src')).toEqual(helpImage);
      });
    });
  });
});
