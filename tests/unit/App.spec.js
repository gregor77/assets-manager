import Vue from 'vue';
import VueMaterial from 'vue-material';
import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';

Vue.use(VueMaterial);

describe('@/App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      stubs: ['router-link', 'router-view'],
    });
  });

  describe('event', () => {
    it('should show navigation menus when hamburger is clicked', () => {
      wrapper.setData({ menuVisible: false });
      expect(wrapper.find('#navigation').props('mdActive')).toBeFalsy();

      wrapper.setData({ menuVisible: true });
      expect(wrapper.find('#navigation').props('mdActive')).toBeTruthy();
    });
  });
});
