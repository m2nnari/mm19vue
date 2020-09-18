import Vue from "vue/dist/vue.common.js";

import Message from "./Message.vue";
import vueCommon from "vue/dist/vue.common.js";
vueCommon.component("message", Message);
let  app = new Vue ({
    el: "#app"
})