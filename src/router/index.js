import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Detail from '../pages/detail'
import Index from '../pages/index'
import Product from '../pages/product'
import Cart from '../pages/cart'
import Order from '../pages/order'
import OrderConfirm from '../pages/orderConfirm'
import OrderList from '../pages/orderList'
import OrderPay from '../pages/orderPay'
import AliPay from '../pages/alipay'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
        path: 'detail/:id',
        name: 'detail',
        component: Detail
    }, {
        path: 'index',
        name: 'index',
        component: Index
    }, {
        path: 'product/:id',
        name: 'product',
        component: Product
    }]
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/order',
    name: 'order',
    component: Order,
    children: [{
        path: 'list',
        name: 'list',
        component: OrderList
    }, {
        path: 'pay',
        name: 'pay',
        component: OrderPay
    }, {
        path: 'confirm',
        name: 'confirm',
        component: OrderConfirm
    }, {
        path: '/alipay',
        name: 'alipay',
        component: AliPay
    }]
}]

const router = new VueRouter({
    routes
})

export default router