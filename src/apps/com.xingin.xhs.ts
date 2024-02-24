import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 1,
      name: '通知提示-通知权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      rules: [
        {
          matches: '@ImageView <2 FrameLayout >2 [text^="打开通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13195753', //com.xingin.xhs.index.v2.IndexActivityV2
            'https://i.gkd.li/i/13222356', //com.xingin.xhs.notification.NotificationAuthorizationTranslucentActivity
            'https://i.gkd.li/i/13256145', //com.huawei.android.launcher.unihome.UniHomeLauncher
            'https://i.gkd.li/i/13255627', //com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity
          ],
        },
        {
          matches: '@ImageView <2 FrameLayout - [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13250418',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true] <2 FrameLayout +3 FrameLayout > Button[text="立即安装"]',
          snapshotUrls: 'https://i.gkd.li/i/13246890',
        },
        {
          actionMaximumKey: 0,
          matches:
            '@ImageView[clickable=true] <2 FrameLayout +3 FrameLayout > Button[text="立即参与内测"]',
          snapshotUrls: 'https://i.gkd.li/i/13741680',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '分段广告-信息流广告',
      desc: '长按"赞助"/"广告"标识的卡片-点"不感兴趣"',
      quickFind: true,
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: [
        {
          key: 0,
          action: 'longClick',
          name: '长按"赞助"/"广告"卡片',
          matches:
            '@FrameLayout[clickable=true] > LinearLayout TextView[text="赞助"||text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13455503',
            'https://i.gkd.li/i/13470690',
          ],
        },
        {
          preKeys: 0,
          name: '点"不感兴趣"',
          matches:
            'RecyclerView > @LinearLayout > TextView[text="不喜欢该内容"]',
          snapshotUrls: 'https://i.gkd.li/i/13455500',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-优惠券弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xingin.reactnative.ui.XhsReactTranslucentActivity',
          quickFind: true,
          matches:
            '@ImageView[visibleToUser=true] < * -2 * > [text="你有新人券待领取"]',
          snapshotUrls: 'https://i.gkd.li/i/14391484',
        },
      ],
    },
  ],
});
