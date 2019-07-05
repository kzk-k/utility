<datePicker>
	<div class="input-field">
		<input id="datepickerId-1" type="text" class="datepicker datepicker1">
		<label ref="refTest" for="datepickerId-1" onInput={ checkInputDatepicker }>期間指定</label>
	</div>


	<div class="input-field">
		<input id="datepickerId-2" type="text" class="datepicker datepicker2" value="{ today }">
		<label for="datepickerId-2">期間指定</label>
	</div>


	<style scoped type="stylus">
		.date-text
			&::after
				content '日'
		datepicker
			display flex
			justify-content space-between
		.input-field
			width 48.5%
	</style>

	<script>
		// 期間指定 初期値
		{
			const date = new Date();
			const year = date.getFullYear();
			const month = ( '0' + (date.getMonth() + 1) ).slice(-2);
			const day = ( '0' + (date.getDate()) ).slice(-2);
			this.today = year + '-' + month + '-' + day;
		}

		// datepickerとの組み合わせはoninputに反応しないっぽい
		// console.log(this.refs.refTest.value);　普通のinputTextならvalueが取れる

		document.addEventListener('DOMContentLoaded', function() {
			{
				const elments = document.querySelectorAll('.datepicker');
				const today = new Date();
				const options = {
					autoClose: true,
					setDefaultDate: true,
					maxDate: today,
					selectYears: 1,
					endRange: today,
					showClearBtn: true,
					i18n: {
						months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
						monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
						weekdaysAbbrev:  ["日", "月", "火", "水", "木", "金", "土"],
					},
					format: "yyyy-mm-dd"
				};
				const instances = M.Datepicker.init(elments, options);
			}
		});






		// datepickerが選択されていることを、Btn-sendに通知する


	</script>
</datePicker>