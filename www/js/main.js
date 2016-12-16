function load_article(article) {
	$("#menu").addClass("close"); setTimeout(function(){$("#menu").removeClass("close");},1000);
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


	$("#update-2").click(function(){
		$.get( "update.php", function( data ) {
			console.log(data);
			//location.reload();
		});
	});

	$("#publish-2").click(function(){
		$.get( "publish.php", function( data ) {
			console.log(data);
			//location.href = "https://depinfo.u-cergy.fr/depinfo-release";
		});
	});

		$("#update").click(function(){
			$.get( "update.php", function( data ) {
				//console.log(data);
				location.reload();
			});
		});

		$("#publish").click(function(){
			$.get( "publish.php", function( data ) {
				//console.log(data);
				location.href = "https://depinfo.u-cergy.fr/depinfo-release";
			});
		});
});
