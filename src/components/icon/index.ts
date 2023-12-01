import Vue from "vue";

import icon from "./index.vue";

export const MuIcon = {
  install(Vue: Vue.App) {
    // 1. 添加全局方法或属性
    Vue.component("mu-icon", icon);
  },
};
// 设置install方法导出给main使用
