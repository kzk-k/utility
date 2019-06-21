$(function() {
	function changeFileName(input) {
		const target = $('.js-fileName');
		target.text('ファイルを選択して下さい');

		input.on('change', function() {
			let fileName = this.files[0].name;
			target.text(fileName);
		});
	}
	changeFileName($('.js-inputFile'));
});