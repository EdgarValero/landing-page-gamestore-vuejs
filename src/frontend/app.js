import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

//JQuery and Popper.js
import 'jquery';
import 'popper.js';

//Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

//Bootstrap and Styles
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./public/assets/css/style.css";

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faTwitter, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

//Views
import Home from './views/Home.vue';
import VideoGames from './views/VideoGames.vue';
import Sucursals from './views/Sucursals.vue';
import Contact from './views/Contact.vue';
import Error404 from './views/Error404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/videogames",
            component: VideoGames
        },
        {
            path: "/sucursals",
            component: Sucursals
        },
        {
            path: "/contact",
            component: Contact
        },
        {
            path: "*",
            component: Error404
        }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');