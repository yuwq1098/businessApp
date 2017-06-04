import App from './App'

// 定义组件
const example__color = r => require.ensure([], () => r(require('./components/example/color.vue')), 'color')
const example__red = r => require.ensure([], () => r(require('./components/example/red.vue')), 'red')
const example__blue = r => require.ensure([], () => r(require('./components/example/blue.vue')), 'blue')
const example__black = r => require.ensure([], () => r(require('./components/example/black.vue')), 'black')
const example__white = r => require.ensure([], () => r(require('./components/example/white.vue')), 'white')
const example__gray = r => require.ensure([], () => r(require('./components/example/gray.vue')), 'gray')
const example__orange = r => require.ensure([], () => r(require('./components/example/orange.vue')), 'orange')
const example__green = r => require.ensure([], () => r(require('./components/example/green.vue')), 'green')


const welcome = r => require.ensure([], () => r(require('./components/welcome/welcome.vue')), 'welcome')
const login = r => require.ensure([], () => r(require('./components/login/login.vue')), 'login')
const register = r => require.ensure([], () => r(require('./components/register/register.vue')), 'register')
const step1 = r => require.ensure([], () => r(require('./components/register/step1.vue')), 'step1')
const step2 = r => require.ensure([], () => r(require('./components/register/step2.vue')), 'step2')
const step3 = r => require.ensure([], () => r(require('./components/register/step3.vue')), 'step3')
const help = r => require.ensure([], () => r(require('./components/help/usinghelp.vue')), 'help')
const clue = r => require.ensure([], () => r(require('./components/clue/clue.vue')), 'clue')
const my_clue = r => require.ensure([], () => r(require('./components/clue/my_clue.vue')), 'my_clue')
const buy_clue = r => require.ensure([], () => r(require('./components/clue/buy_clue.vue')), 'buy_clue')
const contacts_list = r => require.ensure([], () => r(require('./components/contacts/list.vue')), 'contacts_list')
const contacts_details = r => require.ensure([], () => r(require('./components/contacts/details.vue')), 'contacts_details')
const contacts_edit = r => require.ensure([], () => r(require('./components/contacts/edit.vue')), 'contacts_edit')
const my_clue_details = r => require.ensure([], () => r(require('./components/clue/my_clue_details.vue')), 'my_clue_details')
const buy_clue_details = r => require.ensure([], () => r(require('./components/clue/buy_clue_details.vue')), 'buy_clue_details')
const sold_clue = r => require.ensure([], () => r(require('./components/clue/sold_clue.vue')), 'sold_clue')
const member = r => require.ensure([], () => r(require('./components/member/member.vue')), 'member')
const recharge = r => require.ensure([], () => r(require('./components/member/recharge.vue')), 'recharge')
const message = r => require.ensure([], () => r(require('./components/member/message.vue')), 'message')
const recharge_record = r => require.ensure([], () => r(require('./components/member/recharge_record.vue')), 'recharge_record')
const agreement = r => require.ensure([], () => r(require('./components/member/agreement.vue')), 'agreement')




// 定义路由
export default [{
	path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        {
        	path: '',
            redirect: '/welcome'
	    },
	    {
	        path: '/welcome',
	        component: welcome
	    },
	    {
	        path: '/login',
	        component: login
	    },
	    {
	        path: '/register',
	        component: register,
	        redirect: '/register/step1',
            children: [
                {
                    path: 'step1',
	                component: step1,
	                meta: {
	                	step: 1,
	                }
	            },
	            {
                    path: 'step2',
	                component: step2,
	                meta: {
	                	step: 2,
	                }
	            },
	            {
                    path: 'step3',
	                component: step3,
	                meta: {
	                	step: 3,
	                }
	            },
            ],
	    },
	    {
	        path: '/clue',
	        component: clue,
	        redirect: '/clue/myClue',
	        children: [
	            {
                    path: 'myClue',
	                component: my_clue,
	            },
	            {
                    path: 'buyClue',
	                component: buy_clue,
	            },
            ]
	    },
	    {
	        path: '/contactsDetails',
	        component: contacts_details
	    },
	    {
	        path: '/contacts',
	        component: contacts_list
	    },
	    {
            path: '/contactsEdit',
            component: contacts_edit
	    },
	    {
            path: '/clueDetailsMy',
            component: my_clue_details
	    },
	    {
            path: '/clueDetailsBuy',
            component: buy_clue_details
	    },
	    {
            path: '/sold',
            component: sold_clue
	    },
	    {
            path: '/member',
            component: member
	    },
	    {
            path: '/recharge',
            component: recharge
	    },
	    {
            path: '/rechargeRecord',
            component: recharge_record
	    },
	    {
            path: '/agreement',
            component: agreement
	    },
	    {
	        path: '/help',
	        component: help
	    },
	    {
	        path: '/color',
	        component: example__color
	    },
	    {
	        path: '/red',
	        component: example__red
	    },
	    {
	        path: '/blue',
	        component: example__blue
	    },
	    {
	        path: '/black',
	        component: example__black
	    },
	    {
	        path: '/white',
	        component: example__white
	    },
	    {
	        path: '/gray',
	        component: example__gray
	    },
	    {
	        path: '/orange',
	        component: example__orange
	    },
	    {
	        path: '/green',
	        component: example__green
	    }    
	]
}]
