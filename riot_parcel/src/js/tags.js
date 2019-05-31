import riot from 'riot'
riot.tag2('app', '<app-contents></app-contents> <app-footer></app-footer>', 'app,[data-is="app"]{ display: flex; flex-wrap: wrap; min-height: 100vh; } app::before,[data-is="app"]::before{ content: ""; position: absolute; top: 0; left: 0; z-index: -1; width: 100%; height: 100%; opacity: 0.6; background: url("img/test3.jpg") 0 0 no-repeat/cover; }', '', function(opts) {
});

riot.tag2('app-contents', '<div class="card blue-grey darken-1"> <div class="card-content white-text"> <span class="card-title">つくるもの</span> <p>各媒体のURLを入力したら、日毎または月別でGoogleのクローラーがまわってきた件数を取得するツール</p> <ul class="collection blue-grey-text text-darken-4"> <li class="collection-item">・入力欄</li> <li class="collection-item">・日別・月別の指定 ⇒それぞれ期間指定ができる</li> <li class="collection-item">・確定ボタン</li> <li class="collection-item">・件数を表示する箇所</li> <li class="collection-item">・CSV出力ボタン</li> </ul> </div> <div class="card-action"> <a href="#">This is a link</a> <a href="#">This is a link</a> </div> </div> <projectlist></projectList> <a class="waves-effect waves-light btn">button</a> <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>', 'app-contents,[data-is="app-contents"]{ display: block; flex: 1; padding: 3.2rem; }', '', function(opts) {
});
riot.tag2('app-footer', '<p>{opts.message} - {year}</p>', 'app-footer,[data-is="app-footer"]{ align-self: flex-end; width: 100%; padding: 0.8rem 3.2rem; text-align: right; color: #fff; }', '', function(opts) {
	this.year = (new Date()).getFullYear();
	this.opts = {
		message: 'Get Google Crowler Count'
	}
});
riot.tag2('projectlist', '<div class="row"> <ul class="col l3 collection"> <li class="collection-item" each="{group, index in group1}"> <input type="radio" name="group{index}" riot-value="{group1[index].projectUrl}"> <label for="group{index}">{group1[index].projectName}</label> </li> </ul> </div>', 'projectlist,[data-is="projectlist"]{ display: block; flex: 1; } projectlist .collection,[data-is="projectlist"] .collection{ width: 100%; } projectlist .collection.col,[data-is="projectlist"] .collection.col{ padding: 0; }', '', function(opts) {

	this.groupNames = ['1課', '2課', '3課', '4課'];
	this.group1 = [
		{
			projectName: 'Nuno',
			projectUrl: 'https://test.jp/'
		},
		{
			projectName: 'Jhon',
			projectUrl: 'https://test2.jp/'
		},
	];

});