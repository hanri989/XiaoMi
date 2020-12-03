import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(config => {
    if (config.status == 0) {
        return config.data
    } else if (config.status == 10) {
        window.location.href = '/#/login'
    } else {
        alert(config.msg)
    }
}, )

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')