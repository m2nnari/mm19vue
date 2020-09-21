import Vue from 'vue/dist/vue.common.js';

import ToDo from './ToDo.vue';
import ModalExample from './ModalExample.vue';
import TabsExample from './TabsExample.vue';
import JsonExample from './JsonExample.vue';
import Search from "./Search.vue";

Vue.component('to-do', ToDo);
Vue.component('modal-example', ModalExample);
Vue.component('tabs-example', TabsExample);
Vue.component('json-example', JsonExample);
Vue.component("search", Search);

let App = new Vue({
    el: '#app',
})