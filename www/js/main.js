function load_article(article) {
	if(!article) article = "pages/main.html";
	else article = "pages/articles/"+article+".html";
	$.get(article, function( res ) {
  		$( "#content" ).html( res );
	});
}


function open_article(article) {
	$( "#content" ).html( "" );
	document.getElementById("page").className = article ? "expanded" : "";
	load_article(article);
}


window.onhashchange = function() {
	var hash = location.hash.substr(1);
	if(!hash || hash==='/') return open_article();
	if(hash[hash.length-1]==='/') hash += "index";
	open_article(hash);
}
