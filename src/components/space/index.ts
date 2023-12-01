import Vue from "vue";

import space from "./index.vue";

export const MuSpace = {
  install(Vue: Vue.App) {
    // 1. 添加全局方法或属性
    Vue.component("mu-space", space);
  },
};
// 设置install方法导出给main使用
