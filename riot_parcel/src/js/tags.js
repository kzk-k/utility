import riot from 'riot'
riot.tag2('app', '<app-contents></app-contents> <app-footer></app-footer>', 'app,[data-is="app"]{ display: flex; flex-wrap: wrap; min-height: 100vh; } app::before,[data-is="app"]::before{ content: ""; position: absolute; top: 0; left: 0; z-index: -1; width: 100%; height: 100%; opacity: 0.6; background: url("img/test3.jpg") 0 0 no-repeat/cover; }', '', function(opts) {
});

riot.tag2('btn-send', '<button disabled class="myBtnColor waves-effect waves-light btn btn-large" type="submit"> <i class="material-icons right">send</i>送信 </button>', 'btn-send,[data-is="btn-send"]{ display: block; } btn-send .btn-large,[data-is="btn-send"] .btn-large{ padding: 0 56px; font-size: 1.2rem; } btn-send .btn-large i,[data-is="btn-send"] .btn-large i{ font-size: 1.3rem; }', '', function(opts) {
});
riot.tag2('app-contents', '<todo></todo> <form action=""> <div class="card"> <div class="card-content"> <inputurl check-input-url="{urlInputCompleted}"></inputUrl> </div> </div> <div class="card"> <div class="card-content"> <datepicker></datePicker> </div> </div> <div class="center-align"> <btn-send></btn-send> </div> </form>', 'app-contents,[data-is="app-contents"]{ display: block; padding: 3.2rem; } @media screen and (min-width: 992px) { app-contents,[data-is="app-contents"]{ width: 1000px; } }', '', function(opts) {
		this.show_flg = false;

		var export_function = require('./script.js');

		this.urlInputCompleted = function() {
			let inputUrlValue = export_function.getValue('#inputUrl');

			if (inputUrlValue !== '') {
				this.showDisplay = true;
			} else {
				this.showDisplay = false;
			}
			this.update();
		}.bind(this)
});
riot.tag2('datepicker', '<div class="input-field"> <input id="datepickerId-1" type="text" class="datepicker datepicker1"> <label ref="refTest" for="datepickerId-1" oninput="{checkInputDatepicker}">期間指定</label> </div> <div class="input-field"> <input id="datepickerId-2" type="text" class="datepicker datepicker2" riot-value="{today}"> <label for="datepickerId-2">期間指定</label> </div>', 'datepicker .date-text::after,[data-is="datepicker"] .date-text::after{ content: \'日\'; } datepicker { display: flex; justify-content: space-between; } datepicker .input-field,[data-is="datepicker"] .input-field{ width: 48.5%; }', '', function(opts) {

		{
			const date = new Date();
			const year = date.getFullYear();
			const month = ( '0' + (date.getMonth() + 1) ).slice(-2);
			const day = ( '0' + (date.getDate()) ).slice(-2);
			this.today = year + '-' + month + '-' + day;
		}

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

});
riot.tag2('app-footer', '<p>{opts.message} - {year}</p>', 'app-footer,[data-is="app-footer"]{ align-self: flex-end; width: 100%; padding: 0.8rem 3.2rem; color: #fff; } @media screen and (min-width: 992px) { app-footer,[data-is="app-footer"]{ width: 1000px; margin: 0 auto; text-align: right; } }', '', function(opts) {
		this.year = (new Date()).getFullYear();
		this.opts = {
			message: 'Get Google Crowler Count'
		}
});
riot.tag2('inputurl', '<div class="input-field"> <i class="material-icons prefix">textsms</i> <input type="text" id="inputUrl" oninput="{opts.checkInputUrl}"> <label for="inputUrl">URLを入力</label> </div>', 'inputurl,[data-is="inputurl"]{ display: block; flex: 1; } inputurl .material-icons,[data-is="inputurl"] .material-icons{ margin-top: 0.5rem; } inputurl label,[data-is="inputurl"] label{ height: 2rem; }', '', function(opts) {
});
riot.tag2('todo', '<div class="card blue-grey darken-1"> <div class="card-content white-text"> <span class="card-title">つくるもの</span> <p>各媒体のURLを入力したら、日毎または月別でGoogleのクローラーがまわってきた件数を取得するツール</p> <ul class="collection blue-grey-text text-darken-4"> <li class="collection-item">・入力欄</li> <li class="collection-item">・日別・月別の指定 ⇒それぞれ期間指定ができる</li> <li class="collection-item">・確定ボタン</li> <li class="collection-item">・URL入力欄を10件まで増やせるように</li> <li class="collection-item">・件数を表示する箇所</li> <li class="collection-item">・CSV出力ボタン</li> </ul> </div> </div>', 'todo .collection-item:nth-child(-n+3),[data-is="todo"] .collection-item:nth-child(-n+3){ text-decoration: line-through; }', '', function(opts) {
});