<app>
	<app-contents></app-contents>
	<app-footer></app-footer>






<style scoped type="stylus">
	:scope
		display flex
		flex-wrap wrap
		min-height 100vh
		&::before
			content ""
			position absolute
			top 0
			left 0
			z-index -1
			// filter sepia(100)
			width 100%
			height 100%
			opacity 0.6
			// dist/index.htmlから見てる
			background url(img/test3.jpg) 0 0 no-repeat / cover
</style>
<script>
	import riot from 'riot'
</script>
</app>
