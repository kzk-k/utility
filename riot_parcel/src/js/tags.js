import riot from 'riot'
riot.tag2('app', '<test></test> <app-footer></app-footer>', 'app,[data-is="app"]{ display: block; min-height: 100vh; } app::before,[data-is="app"]::before{ content: ""; position: absolute; top: 0; left: 0; z-index: -1; width: 100%; height: 100%; opacity: 0.6; background: url("img/test3.jpg") 0 0 no-repeat/cover; }', '', function(opts) {
});
riot.tag2('app-footer', '<p>{opts.message} - {year}</p>', 'app-footer,[data-is="app-footer"]{ display: block; } app-footer p,[data-is="app-footer"] p{ font-size: 100%; }', '', function(opts) {
		this.year = (new Date()).getFullYear();
		this.opts = {
			message: 'Get Google Crowler Count'
		}
});
riot.tag2('test', '<p class="test">各媒体のURLを入力したら、日毎または月別でGoogleのクローラーがまわってきた件数を取得するツール</p> <ul class="list"> <li class="item">・入力欄</li> <li>・日別・月別の指定 ⇒それぞれ期間指定ができる</li> <li>・確定ボタン</li> <li>・件数を表示する箇所</li> <li>・CSV出力ボタン</li> </ul> <a class="waves-effect waves-light btn">button</a> <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>', 'test,[data-is="test"]{ display: block; } test { color: #ff0; } test .test { color: #f00; }', '', function(opts) {
});