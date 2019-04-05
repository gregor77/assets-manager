import { shallowMount } from '@vue/test-utils';

import Assets from '@/components/Assets/Assets.vue';
import AssetCardView from '@/components/AssetCardView/AssetCardView.vue';

describe('@/components/Assets/Assets', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Assets, {
      stubs: ['md-autocomplete'],
    });
  });

  it('should render AssetCardView with props(id, name, serialNo, project)', () => {
    wrapper.setData({
      assets: [
        {
          id: 1,
          name: 'Sydney',
          project: '2Spring',
          serialNo: '123',
        },
        {
          id: 2,
          name: 'Ankara',
          project: '2Spring',
          serialNo: '456',
        },
        {
          id: 3,
          name: 'Houston',
          project: '2Spring',
          serialNo: '789',
        },
      ],
    });

    const assetCardViews = wrapper.findAll(AssetCardView);
    expect(assetCardViews.length).toEqual(3);
    expect(assetCardViews.wrappers[0].props('asset')).toEqual({
      id: 1,
      name: 'Sydney',
      project: '2Spring',
      serialNo: '123',
    });
    expect(assetCardViews.wrappers[1].props('asset')).toEqual({
      id: 2,
      name: 'Ankara',
      project: '2Spring',
      serialNo: '456',
    });
    expect(assetCardViews.wrappers[2].props('asset')).toEqual({
      id: 3,
      name: 'Houston',
      project: '2Spring',
      serialNo: '789',
    });
  });
});
