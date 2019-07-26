import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    // {
    //     path: '/',
    //     redirect: '/index'
    // },
    {
        path: '/',
        component: () => import('./view/index'),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'user',
        component: () => import('./view/user'),
        meta: {
            title: '会员中心'
        }
    },
    {
        name: 'address',
        component: () => import('./view/address'),
        meta: {
            title: '收货地址'
        }
    },
    {
        name: 'address_edit',
        component: () => import('./view/address_edit'),
        meta: {
            title: '修改收货地址'
        }
    },
    {
        name: 'order',
        component: () => import('./view/order'),
        meta: {
            title: '订单列表'
        }
    },
    {
        name: 'coupon',
        component: () => import('./view/coupon'),
        meta: {
            title: '我的优惠券'
        }
    },
    {
        name: 'search',
        component: () => import('./view/search'),
        meta: {
            title: '搜索结果'
        }
    },
    {
        name: 'collect',
        component: () => import('./view/collect'),
        meta: {
            title: '我的收藏'
        }
    },
    {
        name: 'classify',
        component: () => import('./view/classify'),
        meta: {
            title: '商品分类'
        }
    },
    {
        name: 'cart',
        component: () => import('./view/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        component: () => import('./view/goods'),
        meta: {
            title: '商品详情'
        }
    }
]

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};