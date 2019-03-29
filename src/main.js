import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import router from './router'
Vue.config.productionTip = false

Vue.use(vueResource)

// 自定义指令、无参、无值
Vue.directive('rainbow', {
    bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});
// 自定义指令、有参、有值
Vue.directive('theme', {
    bind(el, binding, vnode) {
        if (binding.value == 'wide') {
            el.style.maxWidth = "1260px";
        } else if (binding.value == 'narrow') {
            el.style.maxWidth = "560px";
        }
        if (binding.arg == 'column') {
            el.style.background = "#6677cc";
            el.style.padding = "20px";
        }
    }
});

// 自定义过滤器   将title 改为大写
Vue.filter('to-uppercase', value => {
    return value.toUpperCase();
})

Vue.filter('snippet', value => {
    return value.slice(0, 100) + "...";
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')