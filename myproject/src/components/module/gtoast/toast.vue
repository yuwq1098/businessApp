 <template>

    <div class="G-toast">
        <transition name="toast">
	        <div class="G-toast-box" :class="toastClass" v-show="show" style="style">
                <p class="G-toast-con" v-html="say"></p>
			</div>
        </transition>
    </div>

</template>

<script>
    /*
		alert提醒框有四种状态：
			success[1] info[2] warning[3] error[4] 

		设置的props：
			type 提醒框类型 默认为1 
			timer 动画时间 默认300ms
			title 提示信息 '这里有一个消息要提示'

	*/
    export default {
    	props:{
			style: String,
			value: Boolean,
		    time: {
		        type: Number,
		        default: 2000
		    },
		    type: {
		        type: String,
		        default: 'success'
		    },
		    text: String,
		    position: String
		},
		// 数据
		data () {
		    return {
		        show: false
		    }
		},
		// vue实例创建时
		created () {
		    if (this.value) {
		        this.show = true
		    }
		},
		// 属性计算
		computed: {
		    toastClass () {
			    return {
			        'G-toast_warn': this.type === 'warn',
			        'G-toast_error': this.type === 'error',
			        'G-toast_success': this.type === 'success',
			        'G-toast_text': this.type === 'text',
			    }
		    },
		    say() {
                return this.text;
		    }
		},
		// 数据变化侦听
		watch: {
		    show (val) {
		        if (val) {
		        	console.log("重新载入")
		        	clearTimeout(this.timeout)
			        this.timeout = setTimeout(() => {
			            this.show = false
			        }, this.time)
			    }
		    },
		    value (val) {
		    	this.text = val
			    this.show = val
		    }
		}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './toast.styl'
</style>