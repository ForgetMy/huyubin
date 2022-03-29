import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import "./style/index.css" //全局样式
import myplugin from "./plugins/myplugin"
Vue.use(myplugin) //使用自定义插件
Vue.use(ElementUI); 
Vue.config.productionTip = false;
// 拦截ajax
if(process.env.NODE_ENV==='development'){
  require("./mock")
}
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)