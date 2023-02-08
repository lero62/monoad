import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import htmlbeautify from "gulp-html-beautify";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fileInclude())
		// Если надо зжатые картинки Webp
		// .pipe(
		// 	app.plugins.if(
		// 		app.isBuild,
		// 		webpHtmlNosvg()
		// 	)
		// )
		.pipe(htmlbeautify({
			indentSize: 3,
			indent_with_tabs: true,
			preserve_newlines: true,
			max_preserve_newlines: 1,
		}))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())
}