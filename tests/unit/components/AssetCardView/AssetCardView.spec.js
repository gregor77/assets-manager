import Vue from 'vue';
import VueMaterial from 'vue-material';
import { mount, shallowMount } from '@vue/test-utils';
import { subMonths } from 'date-fns';

import AssetCardView from '@/components/AssetCardView/AssetCardView.vue';

Vue.use(VueMaterial);

jest.mock('@/assets/mac.png', () => 'mac image');
jest.mock('@/assets/help.png', () => 'help image');

describe('@/components/AssetCardView/AssetCardView', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AssetCardView, {
      propsData: {
        asset: {
          id: 1,
          type: 'iMac',
          name: 'Chernobyl',
          project: '2Sprint',
          serialNo: '1234567',
          checkDate: new Date(2019, 3, 5),
          user: 'rhyno',
        },
      },
    });
  });

  describe('render', () => {
    it('should render name, project, serialNo', () => {
      expect(wrapper.find('.card__id').text()).toEqual('1');
      expect(wrapper.find('.md-title').text()).toEqual('Chernobyl');
      expect(wrapper.find('.md-subhead').text()).toEqual('2Sprint / rhyno');
      expect(wrapper.find('.md-card-content').text()).toEqual('SN : 1234567');
    });

    describe('thumbnail', () => {
      it('should show mac image when type is matched to mac', () => {
        expect(wrapper.find('.card__thumbnail').attributes('src')).toEqual('mac image');
      });

      it('should help image when type is not matched to mac', () => {
        wrapper.setProps({ asset: { type: 'not iMac' } });

        expect(wrapper.find('.card__thumbnail').attributes('src')).toEqual('help image');
      });
    });

    describe('check date', () => {
      it('should show check date', () => {
        expect(wrapper.findAll('.card__check-date > span').at(1).text())
          .toEqual('2019-04-05');
      });

      it('should apply card--not-checked and warning message, when check date not define', () => {
        wrapper.setProps({ asset: { checkDate: undefined } });

        expect(wrapper.find('.card--not-checked').exists()).toBeTruthy();
        expect(wrapper.findAll('.card__check-date > span').at(0).text()).toEqual('Recently not checked');
      });

      it('should apply card--not-checked, when checkDate is not same month', () => {
        const now = new Date(2019, 3, 5);
        const before2Month = subMonths(now, 1);
        wrapper.setProps({ asset: { checkDate: before2Month } });

        expect(wrapper.find('.card--not-checked').exists()).toBeTruthy();
        expect(wrapper.findAll('.card__check-date > span').at(0).text()).toEqual('Recently not checked');
      });
    });
  });

  describe('event', () => {
    describe('checkbox', () => {
      const spyEmit = jest.fn();
      let mountedWrapper;

      beforeEach(() => {
        mountedWrapper = mount(AssetCardView, {
          propsData: {
            asset: {
              id: '1',
              checkDate: new Date(),
            },
          },
        });
        mountedWrapper.vm.$emit = spyEmit;
      });

      afterEach(() => {
        mountedWrapper.vm.$emit.mockClear();
      });

      it('should emit parent listener "selectedAssetId", when isChecked is true', () => {
        mountedWrapper.find('input[type="checkbox"]').trigger('click');

        expect(spyEmit).toBeCalledWith('mergeSelectedId', '1', true);
      });

      it('should not emit parent listener "selectedAssetId", when isChecked is false', () => {
        mountedWrapper.setData({ isChecked: true });

        mountedWrapper.find('input[type="checkbox"]').trigger('click');

        expect(spyEmit).toBeCalledWith('mergeSelectedId', '1', false);
      });
    });
  });
});
