import { shallowMount } from '@vue/test-utils';

import Assets from '@/components/Assets/Assets.vue';
import AssetCardView from '@/components/AssetCardView/AssetCardView.vue';

describe('@/components/Assets/Assets', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Assets, { stubs: ['md-autocomplete'] });
    wrapper.setData({
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
    });
  });

  describe('render', () => {
    it('should render AssetCardView with props(id, name, serialNo, project)', () => {
      const assetCardViews = wrapper.findAll(AssetCardView);
      expect(assetCardViews.length).toEqual(3);
      expect(assetCardViews.wrappers[0].props('asset')).toEqual({
        id: 1,
        type: 'iMac',
        name: 'Sydney',
        project: '2SPRINT',
        serialNo: 'C02SJ04QGQ17',
        checkDate: new Date(2019, 3, 5),
        user: 'Rhyno',
      });
      expect(assetCardViews.wrappers[1].props('asset')).toEqual({
        id: 2,
        type: 'iMac',
        name: 'Ankara',
        project: 'MSS',
        serialNo: 'C02R807EGQ17',
        checkDate: new Date(2019, 2, 5),
        user: 'Dann',
      });
      expect(assetCardViews.wrappers[2].props('asset')).toEqual({
        id: 3,
        type: 'iMac',
        name: 'Houston',
        project: 'E-STORE',
        serialNo: 'C02SJ041GQ17',
        checkDate: new Date(2019, 1, 20),
        user: 'Iaan',
      });
    });
  });

  describe('event', () => {
    it('should append selectedAssetId, when isChecked is true', () => {
      wrapper.findAll(AssetCardView).wrappers[0].vm.$emit('mergeSelectedId', '1', true);
      expect(wrapper.vm.selectedIds).toEqual(['1']);

      wrapper.findAll(AssetCardView).wrappers[0].vm.$emit('mergeSelectedId', '2', true);
      expect(wrapper.vm.selectedIds).toEqual(['1', '2']);
    });

    it('should remove selectedAssetId, when isChecked is false', () => {
      wrapper.findAll(AssetCardView).wrappers[0].vm.$emit('mergeSelectedId', '1', true);
      wrapper.findAll(AssetCardView).wrappers[0].vm.$emit('mergeSelectedId', '2', true);
      wrapper.findAll(AssetCardView).wrappers[0].vm.$emit('mergeSelectedId', '3', true);
      wrapper.findAll(AssetCardView).wrappers[0].vm.$emit('mergeSelectedId', '2', false);

      expect(wrapper.vm.selectedIds).toEqual(['1', '3']);
    });
  });
});
