<template>
    <div id="app">
        <transition 
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave" 
            mode="out-in"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    require('./common/vendor/zepto.min.js');
    require('./common/vendor/velocity/velocity.js');
    export default {
    	data() {
    		return {
    			show: true,
			    fadeInDuration: 1000,
			    fadeOutDuration: 1000,
			    maxFadeDuration: 1500,
			    stop: false
    		}
    	},
    	mounted() {
    		this.show = false;
            setTimeout(() => {
                console.log($("#welcome").attr("class"));
                console.log(Velocity);
            }, 2000);
        },
        components: {

        },
        methods: {
		    beforeEnter: function (el) {
		        el.style.opacity = 0
		    },
		    enter: function (el, done) {
		        var vm = this;
		        Velocity(el,
			        { opacity: 1 },
			        {
				        duration: this.fadeInDuration,
				        complete: function () {
				            done()
				            if (!vm.stop) vm.show = false
				        }
			        }
		        )
		    },
		    leave: function (el, done) {
		        var vm = this
			    Velocity(el,
			        { opacity: 0 },
			        {
			            duration: this.fadeOutDuration,
			            complete: function () {
				            done()
				            vm.show = true
			            }
			        }
			    )
		    }
		}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import './common/css/reset'
    @import './common/css/app'
    .list-complete-item {
	    transition: all 1s;
	    display: inline-block;
	    margin-right: 10px;
	}
	.list-complete-enter, .list-complete-leave-to {
	    opacity: 0;
	    transform: translateY(30px);
	}
	.list-complete-leave-active {
	    position: absolute;
	}
</style>