function load_article(article) {
	$("#menu").addClass("close"); setTimeout(function(){$("#menu").removeClass("close");},500);
	$("#content").html("<div class='loading'></div>");
	if(!article) article = "pages/main.html";
	else article = "pages/articles/"+article+".html";
	$.get(article, function( res ) {
  		$( "#content" ).html( res );
	}).error(function(res) {
		$ ("#content").html("<h1 class='article-not-found'>Article introuvable : "+article+"</h1>");
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


$(function(){
	window.onhashchange();
});
