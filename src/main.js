// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import createClient from 'webdav';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});

const client = createClient(
	'http://localhost/remote.php/webdav',
	'username',
	'password'
);

client.getDirectoryContents('/').then(function(contents) {
	console.log(contents);
});
