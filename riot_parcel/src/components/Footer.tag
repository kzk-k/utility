<app-footer>
	<style scoped type="stylus">
		:scope { display: block }
		p
			font-size 100%
	</style>

	<p>{ opts.message } - { year }</p>

	<script>
		this.year = (new Date()).getFullYear();
		this.opts = {
			message: 'Get Google Crowler Count'
		}
	</script>
</app-footer>