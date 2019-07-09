<inputUrl>
	<div class="input-field">
		<i class="material-icons prefix">textsms</i>
		<input type="text" id="inputUrl" ref="inputUrl" onInput={ urlInputCompleted }>
		<label for="inputUrl">URLを入力</label>
	</div>

	<style scoped type="stylus">
		:scope
			display block
			flex 1
		.material-icons
			margin-top 0.5rem
		label
			height 2rem
	</style>
	<script>
		// tag.jsからのパス
		const export_function = require('./script.js');

		urlInputCompleted() {
			let inputUrlValue = export_function.getValue('#inputUrl');

			if (inputUrlValue !== '') {
				console.log('test')
			}
			this.update();
		}
	</script>
</inputUrl>