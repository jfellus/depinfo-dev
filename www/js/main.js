function load_article(article) {
	$("#menu").addClass("close"); setTimeout(function(){$("#menu").removeClass("close");},1000);
	$("#content").html("<div class='loading'></div>");
	if(!article) article = "pages/articles/main.html";
	else article = "pages/articles/"+article+".html";
	$.get(article, null, function( res ) {
		$( "#content" ).html( res );
		replaceElem("#content div.iframe", "iframe");

		if(typeof tinymce !== "undefined") {
			if(tinymce.get('content')) tinymce.get('content').setContent($("#content").html());
		}
	}).error(function(res) {
		$ ("#content").html("<h1 class='article-not-found'>Article introuvable : "+article+"</h1>");
	}, "html");
	$("#menu").removeClass("on");
}


function open_article(article) {
	$( "#content" ).html( "" );
	document.getElementById("page").className = article ? "expanded" : "";
	load_article(article);
}


var curhash = null;
window.onhashchange = function() {
	var hash = location.hash.substr(1);
	if(!hash || hash==='/') return open_article();
	if(hash[hash.length-1]==='/') hash += "index";
	if(hash == curhash) return;
	curhash = hash;
	open_article(hash);
} 


$(function(){
	window.onhashchange();

	// Sort news
	$(".news").detach().sort(function(a,b) {
		return parseInt($(a).find("span.prio").text()) < parseInt($(b).find("span.prio").text());
	}).appendTo("#news");

});




// UTILS

function replaceElem(targetId, replaceWith){
  $(targetId).each(function(){
    var attributes = concatHashToString(this.attributes);
    var replacingStartTag = '<' + replaceWith + attributes +'>';
    var replacingEndTag = '</' + replaceWith + '>';
    $(this).replaceWith(replacingStartTag + $(this).html() + replacingEndTag);
  });
}

/**
 * This function concats the attributes of old elements
 */
function concatHashToString(hash){
  var emptyStr = '';
  $.each(hash, function(index){
    emptyStr += ' ' + hash[index].name + '="' + hash[index].value + '"';
  });
  return emptyStr;
}
