// vue��������ļ�
import Vue from 'vue'
import App from './App'
//��������ģ�� vue-resource
import VueResource from 'vue-resource'
//·��
import router from './router/router'
//Fastclick(����ƶ���300s�ӳ��¼�)
import Fastclick from './plugins/fastclick'

//����debugģʽ
Vue.config.debug = true;

//����vue-resource
Vue.use(VueResource);

// ·�����ᴴ��һ�� App ʵ�������ҹ��ص�ѡ��� #app ƥ���Ԫ���ϡ�
new Vue({
	el: '#app',
	router,
	Fastclick,
	template: '<App/>',
	components: { App }
})