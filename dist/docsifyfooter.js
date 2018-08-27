/*!
 * docsifyfooter
 * v1.0.0
 * https://github.com/sbaerlocher/docsify.docsifyfooter.git
 * (c) 2018 Simon Baerlocher
 * MIT license
 */

function docsifyfooter(hook) {
    var footer = [
        '<hr/>',
        '<footer>',
        '<span>&copy; 2018 <a href="' + $docsify.nameLink + '">' + $docsify.name + '</a></span>',
        '<span> | </span>',
        '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
        '</footer>'
    ].join('');

    hook.afterEach(function (html) {
        return html + footer;
    });
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyfooter].concat(window.$docsify.plugins || []);
