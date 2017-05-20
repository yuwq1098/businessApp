 <template>

    <div class="G-toast">
        <transition name="toast">
	        <div class="G-toast-box" :class="toastClass" v-show="show" style="style">
                <p class="G-toast-con" v-html="text"></p>
			</div>
        </transition>
    </div>

</template>

<script>
    /*
		G-toast提示框有四种状态：
			success text warn error 

		设置的props：
			style 自定义样式
			vlaue 自定义提示信息
			time 动画时间 默认2500ms
			type success text warn error 
			text 实际挂载显示在toast上的文本信息

	*/
    export default {
    	props:{
			style: String,
			value: String,
		    time: {
		        type: Number,
		        default: 2500
		    },
		    type: {
		        type: String,
		        default: 'success'
		    },
		    text: String,
		},
		// 数据
		data () {
		    return {
		        show: false
		    }
		},
		// vue实例创建时
		created () {
			//当监听到有值时
		    if (this.value&&!this.value.trim=="") {
		        this.show = true
		    }
		},
		// 属性计算
		computed: {
			//提示框的样式类
		    toastClass () {
			    return {
			        'G-toast_warn': this.type === 'warn',
			        'G-toast_error': this.type === 'error',
			        'G-toast_success': this.type === 'success',
			        'G-toast_text': this.type === 'text',
			    }
		    },
		},
		// 数据变化侦听
		watch: {
		    show (val) {
		        if (val) {
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

