<app-footer>
	<p>{ opts.message } - { year }</p>







	<style scoped type="stylus">
		:scope
			align-self flex-end
			width 100%
			padding 0.8rem 3.2rem
			color #fff
			@media screen and (min-width: 992px) {
				width 1000px
				margin 0 auto
				text-align right
			}
	</style>


	<script>
		this.year = (new Date()).getFullYear();
		this.opts = {
			message: 'Get Google Crowler Count'
		}
	</script>
</app-footer>