// Vue install
import Vue from "vue";

import button from "./index.vue";

export const MuButton = {
  install(Vue: Vue.App) {
    // 1. 添加全局方法或属性
    Vue.component("mu-button", button);
  },
};
// 设置install方法导出给main使用
