<datePicker>
<div class="input-field">
	<input id="datepickerId-1" type="text" class="datepicker datepicker1" onInput={ checkInputDatepicker }>
	<label for="datepickerId-1">期間指定</label>
	{test.value}
</div>

<div class="input-field">
	<input id="datepickerId-2" type="text" class="datepicker datepicker2">
	<label for="datepickerId-2">期間指定</label>
</div>
	

<style scoped type="stylus">
	.date-text
		&::after
			content '日'
</style>

<script>
	$(document).ready(function() {
		let today = new Date();
		$('.datepicker').datepicker({
			setDefaultDate: true,
			maxDate: today,
			endRange: today,
			showClearBtn: true,
			i18n: {
				months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				weekdaysAbbrev:  ["日", "月", "火", "水", "木", "金", "土"],
			},
			format: "yyyy-m-d",
		});
	});

	// datepickerが選択されていることを、Btn-sendに通知する
	checkInputDatepicker() {
		<!--  console.log("test");  -->
		<!--  console.log(opts.obs);  -->
	}


</script>
</datePicker>