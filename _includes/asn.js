// asn.js

// TODO: Rewrite in JQuery.  Add unit tests
function pointCount(n) {
  var text = n.data;
  // look for (x pts) where x is some sequence of [0-9]+
  // save the result of [0-9]+ in result[1]
  var pointRegExp = /\([ ]*([0-9]+)[ ]*pt[s]?[ ]*\)/i;  
  var result = pointRegExp.exec(text);
  return result ? parseInt(result[1]) : 0; 
  // if there was a match, result is truthy
  // if there was a match, numeric part is in result[1]
  // otherwise result is 0 points
}

// TODO: Rewrite in JQuery 
function countPoints(n) {                     // n is a Node 
  if (n.nodeType == 3 /*Node.TEXT_NODE*/)   // Check if n is a Text object
    return pointCount(n);                 // If so, parse its text and return number of points
  // Otherwise, iterate through n's children, totalling up the points
  var numpoints = 0; 
  for(var m = n.firstChild; m != null; m = m.nextSibling)  {
     numpoints += countPoints(m);  
  }
  return numpoints;   // Return total of all children's points
}


$(document).ready(function(){

    console.log("asn.js: ready");


    $('.page-break-before').each(function() {
	var prev = $(this).prev();
	var $div = $("<div>", {class: "pagebreak"});
	prev.append($div);
	$('.hwk-page-header-template').first().clone().appendTo($div);
	$('.hwk-name-header-template').first().clone().appendTo($div);
	prev.css('margin-bottom','0');
    });


    $('td.page-num').each(function(i) {
	var pageNum = i+1;
	$(this).html(pageNum); // re-calculate page numbers
	$(this).data("pageNum",pageNum);
	if (pageNum % 2==0) {
	    $(this).parents(".pagebreak").find(".hwk-name-header-table").css("display","none");
	}
    });
    
    
    if ($(this).find(".pointCount").length > 0 ) {
      var total = countPoints(document.body);
      $(this).find(".pointCount").html(total);
    }
    
    console.log("asn.js: done");
});
