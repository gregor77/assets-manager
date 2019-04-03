import { shallowMount } from '@vue/test-utils';

import AssetsManager from '@/views/assets/AssetsPage.vue';
import Assets from '@/components/Assets/Assets.vue';

describe('@/views/assets/AssetsPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AssetsManager, {});
  });

  describe('render', () => {
    it('should has Assets', () => {
      const assets = wrapper.find(Assets);
      expect(assets.exists()).toBeTruthy();
    });
  });
});
