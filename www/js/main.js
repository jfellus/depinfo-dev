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
