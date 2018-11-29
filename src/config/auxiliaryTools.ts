import Vue from 'vue'
class $JumpDownload {

  constructor() {
    const u = navigator.userAgent,
      isAndroid = u.indexOf('Android') > 1 || u.indexOf('Adr') > 1,
      isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      urls = {
        /* 'android': 'http://ftp-apk.pcauto.com.cn/pub/autoclub-5000-autowapDL1.apk', */
        'android': 'http://www1.pcauto.com.cn/app/20141120/pcautoapp/index.html',
        'ios': 'https://itunes.apple.com/cn/app/zhong-guo-che-you-hui/id640447959',
        'other': 'http://www1.pcauto.com.cn/app/20141120/pcautoapp/index.html'
      };
    window.location.href = isAndroid ? urls.android : isIOS ? urls.ios : urls.other;
  }

}

Vue.prototype.$JumpDownload = $JumpDownload;

export default Vue;