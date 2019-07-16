var gulp			= require('gulp');
var connect			= require('gulp-connect-php');
var browserSync		= require('browser-sync');
var plumber			= require('gulp-plumber');
var notify			= require('gulp-notify');
var cache			= require('gulp-cached');
var changed			= require('gulp-changed');
var gulpif			= require('gulp-changed');

// css
var stylus			= require('gulp-stylus');
var cssbeautify		= require('gulp-cssbeautify');
var autoprefixer	= require('gulp-autoprefixer');
var please			= require('gulp-pleeease');
var progeny			= require('gulp-progeny');
var wait			= require('gulp-wait');

// html
var pug				= require('gulp-pug');
// js
var babel			= require('gulp-babel');

var dir = {
	pug: './pug/**/*.pug',
	html: ['./pug/**/*.pug', '!' + './pug/**/_*.pug'],
	styl: './stylus/**/*.styl',
	css: './dest/**/*.css',
	babel: './babel/**/*.js',
	js: './dest/**/*.js'
}

var dest = './dest/'


gulp.task('babel', function() {
	return gulp.src(dir.babel)
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('stylus', function() {
	return gulp.src(dir.styl)
		.pipe(wait(500))
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(cache('stylus'))
		.pipe(progeny())
		.pipe(changed(dir.styl))
		.pipe(stylus())
		.pipe(autoprefixer({
			browsers: ['last 2 version', '> 5%', 'ie >= 10', 'Android >= 4.4'],
			cascade: true
		}))
		.pipe(cssbeautify({
			indent: '\t'
		}))
		.pipe(gulp.dest(dest))
		.pipe(browserSync.stream());
});


gulp.task('html', function() {
	return gulp.src(dir.html)
	.pipe(plumber({
		errorHandler: notify.onError('Error: <%= error.message %>')
	}))
	.pipe(pug({
		basedir: './pug/',
		pretty: '\t'
	}))
	.pipe(gulp.dest(dest))
});


gulp.task('connect-sync', function() {
	connect.server({
		port: 8001,
		base: './dest'
	}, function () {
		browserSync({
			proxy: 'localhost:8001',
			ghostMode: false,
			reloadDelay: 2000,
			startPath: './sp/jobs/'
		});
	});
});


gulp.task('reload', function () {
	browserSync.reload();
});


// ファイル更新監視
gulp.task('default', ['connect-sync'], function() {
	gulp.watch(dir.pug, ['html', 'reload']);
	gulp.watch(dir.styl, ['stylus']);
	gulp.watch(dir.css + '**/*.css');
	gulp.watch(dir.babel, ['babel']);
	// gulp.watch(dir.js, ['reload']);
});