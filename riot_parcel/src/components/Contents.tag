<app-contents>
	<todo></todo>
	<div class="card">
		<div class="card-content">
			<inputUrl></inputUrl>
		</div>
	</div>
	<datePicker show={ isInputUrl }></datePicker>

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
		this.isInputUrl = false;
		changeInput() {
			if ($(this).val() !== undefined) {
				this.isInputUrl = true;
			}
		}

	</script>
</app-contents>