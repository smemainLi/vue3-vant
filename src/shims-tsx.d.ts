import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}


declare module 'vue/types/vue' {
  interface Vue {
    $momentTime: any,      //格式化时间
    $ListenScroll: any,    //监听scroll
    $Coupon: any,           //优惠券等的请求
    $wx: any,
    $StyleColor: any,
  }
}
