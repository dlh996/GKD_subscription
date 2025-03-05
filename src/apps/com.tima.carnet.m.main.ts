import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tima.carnet.m.main',
  name: '钛马星',
  groups: [
    {
      key: 2,
      name: '全屏广告-每日弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.tima.carnet.m.main.lib.common.dialog.TimaLoadingDialog',
        'com.tima.carnet.m.main.app.main.NoticeActivity',
        'com.tima.carnet.m.main.app.main.MainActivity',
        'com.tima.carnet.m.main.LaunchActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '[text="今天内不显示"][checked=false]',
          exampleUrls: 'https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d',
          snapshotUrls: [
            'https://i.gkd.li/i/12654432',
            'https://i.gkd.li/i/13507746',
            'https://i.gkd.li/i/13508074',
            'https://i.gkd.li/i/13508041',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: '@ImageButton[clickable=true] - [text="今天内不显示"]',
          exampleUrls: 'https://e.gkd.li/66af6710-ec2e-472b-a589-cac40ac6ea6d',
          snapshotUrls: [
            'https://i.gkd.li/i/12654432',
            'https://i.gkd.li/i/13507746',
            'https://i.gkd.li/i/13508074',
            'https://i.gkd.li/i/13508041',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-设备界面顶部广告',
      activityIds: '.app.main.MainActivity',
      rules: [
        {
          key: 1,
          matches: [
            '[vid="fl_ad_banner"] >n @Image[text.length=0] < View[parent.childCount!=2]',
            '[vid="fl_ad_banner"] >n [desc^="dislike"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13508030', //古老的快照没有VID属性
            'https://i.gkd.li/i/13508115',
            'https://i.gkd.li/i/19080764',
          ],
        },
        {
          key: 3,
          preKeys: [1],
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13508102',
        },
        {
          key: 4, //有时存在加载不出来的情况
          preKeys: [1],
          action: 'back',
          matches:
            'ListView[id="com.byted.pangle:id/tt_filer_words_lv"][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13508072',
        },
      ],
    },
  ],
});
