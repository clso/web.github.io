function getQueryParams(qs) {
    //by http://stackoverflow.com/a/1099670
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}

window.pars = getQueryParams(document.location.search);

function exthas(name){
	return typeof(window.external) !== 'undefined' && (name in window.external);
}