import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Upload from '@/components/Upload';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/upload',
            name: 'Upload',
            component: Upload
        }
    ]
});
