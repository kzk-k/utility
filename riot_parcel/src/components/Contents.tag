<app-contents>
	<todo></todo>
	<div class="card">
		<div class="card-content">
			<inputUrl check-input-url="{ urlInputCompleted }"></inputUrl>
		</div>
	</div>

	<!--  <div class="card" show="{ showDisplay }">  -->
	<div class="card">
		<div class="card-content">
			<datePicker></datePicker>
		</div>
	</div>

	<div class="center-align">
		<btn-send></btn-send>
	</div>

	<style scoped type="stylus">
		:scope
			display block
			flex 1
			padding 3.2rem
	</style>
	<script>
		this.show_flg = false;

		// tag.jsからのパス
		var export_function = require('./script.js');

		urlInputCompleted() {
			let inputUrlValue = export_function.getValue('#inputUrl');

			if (inputUrlValue !== '') {
				this.showDisplay = true;
			} else {
				this.showDisplay = false;
			}
			this.update();
		}
	</script>
</app-contents>