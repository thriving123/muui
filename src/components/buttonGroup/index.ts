// Vue install
import Vue from "vue";

import buttonGroup from "./index.vue";

export const MuButtonGroup = {
  install(Vue: Vue.App) {
    // 1. 添加全局方法或属性
    Vue.component("mu-button-group", buttonGroup);
  },
};
// 设置install方法导出给main使用
