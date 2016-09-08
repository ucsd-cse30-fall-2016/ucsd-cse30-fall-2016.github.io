var dates = {
    "hwk": [
	{% for asn in site.hwk %}
	{
	    "num" : "{{ asn.num }}",
	    "ready" :  "{{ asn.ready }}",
	    "desc" :  "{{ asn.desc }}",
	    "assigned" :  "{{ asn.assigned }}",
	    "due" :  "{{ asn.due }}",
	    "url" :  "{{ asn.url }}",
		{% if asn.resubmit %}
		"resubmit" : "{{ asn.resubmit }}",
		{% endif %}
	},
	{% endfor %}
    ],
    "lab": [
	{% for asn in site.lab %}
	{
	    "num" : "{{ asn.num }}",
	    "ready" :  "{{ asn.ready }}",
	    "desc" :  "{{ asn.desc }}",
	    "assigned" :  "{{ asn.assigned }}",
	    "due" :  "{{ asn.due }}",
	    "url" :  "{{ asn.url }}",
	},
	{% endfor %}
    ],

    "lectures": [
	{% for lecture in site.lectures %}
	{
	    "url" : "{{ lecture.url }}",
	    "path" : "{{ lecture.path }}",
	    "week" : "{{ lecture.week }}",
	    "lecture_date" :  "{{ lecture.lecture_date }}",
	    "topic" :  "{{ lecture.topic }}",
	    "desc" :  "{{ lecture.desc }}",
	},
	{% endfor %}
    ],

    
};

var cal = {
    numWeeks : {{ site.num_weeks }},
    startDate : moment("{{site.start_date}}"),
    days : {},
    days_outside_calendar : []
};

function traverseDates(dates) {
    var thisDay = moment(cal.startDate);
    var mmdd = thisDay.format("MM/DD");
    for (var i = 1, len = cal.numWeeks; i <= len; i++) {
	for (var j=1; j<=7; j++) {
	    cal.days[mmdd] = [];
	    thisDay = thisDay.add(1,"days");
	    mmdd = thisDay.format("MM/DD");	    
	}
    }
    for (var i = 0, len = dates.hwk.length; i < len; i++) {
	processHwkOrLab(dates.hwk[i],"hwk");
    }
    for (var i = 0, len = dates.lab.length; i < len; i++) {
	processHwkOrLab(dates.lab[i],"lab");
    }
}


function isHwkOrLabAssignment(hwkOrLab) {
    return hwkOrLab.hasOwnProperty('num') &&
	hwkOrLab.hasOwnProperty('ready') &&
	hwkOrLab.hasOwnProperty('desc') &&
 	hwkOrLab.hasOwnProperty('assigned') &&
	hwkOrLab.hasOwnProperty('due') ;
}

function processHwkOrLab(item,which) {
    if (which!="hwk" && which!="lab") {
	reportError("processHwkorLab: second param must be hwk or lab: " + which);
	return;
    }
    if (!isHwkOrLabAssignment(item)) {
	reportError("processHwkOrLab: problem with item" + JSON.stringify(item));
    }

    mmdd_assigned = moment(item.assigned).format("MM/DD");
    mmdd_due = moment(item.due).format("MM/DD");

	mmdd_resubmit = null;
	if (item.resubmit) {
		mmdd_resubmit = moment(item.resubmit).format("MM/DD");

		var resubmit = {"asn_type" : which, "date_type" : "resubmit", "value": JSON.stringify(item)};
		pushToFirstIfArrayElseSecond(resubmit,
									 cal.days[mmdd_resubmit],
									 cal.days_outside_calendar);
	}

    var assigned = {"asn_type" : which, "date_type" : "assigned", "value": JSON.stringify(item) };
    pushToFirstIfArrayElseSecond(assigned,cal.days[mmdd_assigned],cal.days_outside_calendar);

    var due = {"asn_type" : which, "date_type" : "due", "value": JSON.stringify(item)};
    pushToFirstIfArrayElseSecond(due,cal.days[mmdd_due],cal.days_outside_calendar);


    
}



// Used to cal.days[date], but fail over to
//  the cal.days_outside_calendar as a backup

function pushToFirstIfArrayElseSecond(obj, first, second) {
    if ( first instanceof Array) {
	first.push(obj);
    } else {
	second.push(obj);
    }
}

function reportError(error_message) {
    console.log(error_message);
}


function setUpDates() {
    var startDate = cal.startDate;
    var startDayOfWeek = startDate.format("ddd");

    if (startDayOfWeek != "Sun") {
	reportError("Error: site.start_date is not a Sunday.  Instead, it is: " + startDayOfWeek);
	return;
    }

    traverseDates(dates);
}

function getAssignments(cal,mmdd) {
    // console.log("getAssignments, mmdd=" + mmdd);
    var div = $("<div />")
	.addClass("cal-assignments")
	.attr("data-mmdd",mmdd);
    if ( (typeof(cal.days[mmdd]) === undefined)
	 || (! cal.days[mmdd] instanceof Array )
	 || ( typeof(cal.days[mmdd].length) === undefined ) ) {
	div.text("error: " + mmdd);
    } else if (cal.days[mmdd].length != 0) {
	// There are some assignments
	for (var i=0,len=cal.days[mmdd].length; i<len; i++) {
	    var item=cal.days[mmdd][i];
	    $("<div />")
		.attr("data-asn-type",item.asn_type)
		.attr("data-date-type",item.date_type)
	    	.attr("data-date-value",item.value)
		.appendTo(div);
	}
    }
    // console.log("getAssignments done... mmdd=" + mmdd);    
    return div;    
}

function setUpAssignments(page,mm_slash_dd) {
    console.log("setUpAssignments: mm_slash_dd: " + mm_slash_dd);
    page.find("#add-assignments-here").empty();
    page.find("#add-assignments-here").append(getAssignments(cal,mm_slash_dd));    
    console.log("setUpAssignments: done");
}

function populateAssignmentElements(elem) {

    elem.find('.cal-assignments div').each(function() {
	console.log(".cal-assignments empty()...");
	$(this).empty();
    });
    
    elem.find('.cal-assignments div[data-asn-type="hwk"]').each(function() {
	var hwk = ($(this).data("date-value"));
	if (hwk.ready=="true") {
	    $(this).addClass("ready");
	} else {
	    $(this).addClass("not-ready");
	}
	var link = $('<a />')
	    .attr('href',hwk.url)
	    .attr('data-ajax','false')
	    .text(hwk.num)
	    .appendTo($(this));
	$(this).addClass("hwk");
    });
    
    elem.find('.cal-assignments div[data-asn-type="lab"]').each(function() {
	var asn = $(this).data("date-value");
	if (asn.ready=="true") {
	    $(this).addClass("ready");
	} else {
	    $(this).addClass("not-ready");
	}
	var link = $('<a />')
	    .attr('href',asn.url)
	// .attr('data-ajax','false')
	    .text(asn.num)
	    .appendTo($(this));
	$(this).addClass("lab");
    });

    
    elem.find('.cal-assignments div[data-date-type="due"]').each(function() {
			var asn = ($(this).data("date-value"));
			$(this).append(" due " + moment(asn.due).format("hh:mma") );
    });
    
    elem.find('.cal-assignments div[data-date-type="assigned"]').each(function() {
			$(this).append(" assigned");
    });

    elem.find('.cal-assignments div[data-date-type="resubmit"]').each(function() {
			var asn = ($(this).data("date-value"));
			$(this).append(" resubmission<br>due " + moment(asn.resubmit).format("hh:mma") );
    });
    
}

$(document).on('pageinit','[data-role=page]', function(){
    console.log("dates.js: document is ready");
    setUpDates($(this));
    console.log("dates.js: done");
});
