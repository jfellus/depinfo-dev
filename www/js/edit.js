var editorElt = null;

function sel() {
	if (window.getSelection) return window.getSelection();
	return null;
}

function selection_apply_title() {
	var selection = sel();
	if (!selection.rangeCount) return;

	var range = selection.getRangeAt(0);
	var c = range.startContainer;
	var h1 = document.createElement("h1");
	h1.innerHTML = c.textContent;
	c.parentNode.replaceChild(h1, c);
}

function selection_apply_h2() {
	var selection = sel();
	if (!selection.rangeCount) return;

	var range = selection.getRangeAt(0);
	var c = range.startContainer;
	var h2 = document.createElement("h2");
	h2.innerHTML = c.textContent;
	c.parentNode.replaceChild(h2, c);
}


function selection_apply_h3() {
	var selection = sel();
	if (!selection.rangeCount) return;

	var range = selection.getRangeAt(0);
	var c = range.startContainer;
	var h3 = document.createElement("h3");
	h3.innerHTML = c.textContent;
	c.parentNode.replaceChild(h3, c);
}

function selection_apply_a() {
	var selection = sel();
	if (!selection.rangeCount) return;

	var range = selection.getRangeAt(0);
	var c = range.startContainer;
	var a = document.createElement("a");
	a.innerHTML = c.textContent;
	var href = prompt("HREF = ");
	a.setAttribute("href", href);
	c.parentNode.replaceChild(a, c);
}


function selection_apply_bloc() {
	var selection = sel();
	if (!selection.rangeCount) return;
	var range = selection.getRangeAt(0);
	var c = range.cloneContents();
	console.log(c);
	var div = document.createElement("div");
	div.setAttribute("class", "bloc");
	div.appendChild(c);
	range.deleteContents();
	range.insertNode(div);
}

function ajouter_image() {
	var selection = sel();
	if (!selection.rangeCount) return;
	range = selection.getRangeAt(0);
	range.insertNode($("<img src='img/img.png'>").get(0));
}

function caret_gointo(elt) {
	var range = document.createRange();
	var s = sel();
	range.setStart(elt, 0);
	range.collapse(true);
	s.removeAllRanges();
	s.addRange(range);
}

function ajouter_ul() {
	var selection = sel();
	if (!selection.rangeCount) return;
	range = selection.getRangeAt(0);
	var x = $("<ul><li></li></ul>");
	range.insertNode(x.get(0));
	var li = x.find("li").get(0);
	caret_gointo(li);
}



function ajouter_ol() {
	var selection = sel();
	if (!selection.rangeCount) return;
	range = selection.getRangeAt(0);
	var x = $("<ol><li></li></ol>");
	range.insertNode(x.get(0));
	var li = x.find("li").get(0);
	caret_gointo(li);
}

function update_editor(elt) {
	$("#editor").find(".only-for").hide();
	$("#editor").find(".only-for."+elt.tagName).show();
	editorElt = elt;
}

function selection_image_class(cls) {
	$(editorElt).toggleClass("right");
}

function edit_save() {
	var article = document.location.hash.substr(1);
	if(article[article.length-1]=='/') article += "index";
	article += '.html';
	// alert(tinymce.get("content").getContent());
	$.post( "cgi-bin/save.php", {
		content: tinymce.get("content").getContent(),
		article: article
	},function( data ) {
		console.log(data)
	});
}


document.addEventListener("mousedown", function(e) {
	var elt = event.srcElement;
	if(!document.querySelector("#content").contains(elt)) return;
	update_editor(elt);
	$("#img_catalog:visible").fadeOut();
}, false);

document.addEventListener("dblclick", function(e) {
	var elt = event.srcElement;
	if(!document.querySelector("#content").contains(elt)) return;
	if(elt.tagName == "IMG") show_img_catalog();
}, false);

function onPaste(e) {
	var content;
	e.preventDefault();
	if( e.originalEvent.clipboardData )
	content = (e.originalEvent || e).clipboardData.getData('text/html');
	else if( window.clipboardData )
	content = window.clipboardData.getData('Html');

	var div = document.createElement("div");
	div.innerHTML = content;
	$(div).find("*").removeAttr("style");
	var selection = sel();
	if (!selection.rangeCount) return;

	var range = selection.getRangeAt(0);
	$(div).children().each(function() { range.insertNode(this); });
}

function do_upload_img() {
	var formData = new FormData($('#img_catalog_form')[0]);
	$.ajax({
		url: 'cgi-bin/upload_img.php',
		type: 'POST',
		success: function(data) {
			console.log(data);
			show_img_catalog();
		},
		error: function(data) { console.error(data); },
		data: formData,
		cache: false,
		contentType: false,
		processData: false
	});
}

function show_img_catalog() {
	$("#img_catalog:hidden").fadeIn();
	$.get( "cgi-bin/img_catalog.php", {},function( data ) {
		$("#img_catalog").html(
			'<form id="img_catalog_form" action="#" method="post" enctype="multipart/form-data">'+
			'<input type="file" name="img" onchange="do_upload_img()">' +
			'</form>' +
			data.split("\n").map(function(x){
				if(x==='.' || x === '..') return "";
				return "<img src='img/"+x+"' onclick='edit_set_img_src(\"img/"+x+"\")'>";
			})
		);
	});
}

function edit_set_img_src(src) {
	if(editorElt.tagName === "IMG") {
		$(editorElt).attr("src", src);
	}
}

// jQuery general purpose, unoptimized, delegated listener
$(document).on('paste', '[contenteditable]', onPaste);
$(function() {
	$(".only-for").hide();
})

function add_news() {
	var idd = (new Date()).getTime();
	$('<div class="news" idd="'+ idd+".html" +'" contentEditable="true"><p><a href="#news/2"></a></p>'+
	'<span class="prio"></span>'+
	'<h3>News title</h3>' +
	'<p>News content</p>' +
	'<p><a href="#news/'+idd+'" class="read-more">Lire la suite...</a></p></div>' +
	"<button onclick='save_news(this)' style='width:100%;margin-bottom:00px;'>&uarr; Save this news</button>" +
	"<button onclick='delete_news(this)' style='background:#ffaaaa;width:100%;margin-bottom:50px;'>&uarr; Delete this news</button>"
)
.insertBefore($("#add_news"));
}

function save_news(elt) {
	var x = $(elt).prev();
	if(!x.attr("idd")) return;
	if(!x.find("span.prio").length) x.append('<span class="prio"></span>');
	x.find("span.prio").text($(elt).next().next().val());
	$.post( "cgi-bin/save_news.php", {
		content: x.html(),
		news: x.attr("idd")
	},function( data ) {
		console.log(data)
		location.reload();
	});
}

function delete_news(elt) {
	var x = $(elt).prev().prev();
	if(!x.attr("idd")) return;
	$.post( "cgi-bin/delete_news.php", {
		news: x.attr("idd")
	},function( data ) {
		console.log(data);
		location.reload();
	});
}



$(function() {
	window.onhashchange();

	$("#publish-2").click(function(){
		$.get( "publish.php", function( data ) {
			console.log(data);
		});
	});

	$("#publish").click(function(){
		$.get( "publish.php", function( data ) {
			//console.log(data);
			location.href = "https://depinfo.u-cergy.fr/";
		});
	});

});


function show_dev() {

	tinymce.init({
		selector: '#content',
		height: '70vh',
		menubar: false,
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table contextmenu paste code'
		],
		toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
		content_css: ['style/main.css','style/articles.css', 'style/edit.css', 'style/font-benchnine.css', '//fonts.googleapis.com/css?family=Raleway']
	});

	if($(".news").eq(0).attr("contentEditable") != "true") {
		$(".news").attr("contentEditable", "true");
		$(
			"<button onclick='save_news(this)' style='width:100%;margin-bottom:00px;'>&uarr; Save this news</button>"+
			"<button onclick='delete_news(this)' style='background:#ffaaaa;width:100%;margin-bottom:00px;'>&uarr; Delete this news</button>" +
			"Priorité : <input class='prio' style='margin-bottom:50px;'></input>"
		).insertAfter($(".news"));

		$(".news").each(function(){
			$(this).next().next().next().val($(this).find("span.prio").text());
		});

		$("td.right").append("<button id='add_news' onclick='add_news()' style='width:100%;'>Add news</button>");
	}

}
