

function setUpCalendar(page) {
    page.find('.calendar').each( function () {
	console.log("setUpCalendar each...");
	addCalendarTable($(this),cal);
	reportDaysOutsideCalendar($(this),cal);    
    });

}

function weekLabel(weekNum) {
 // returns HTML content of <td> element at start of week
    return 'Week ' + weekNum +  
	'<ul>' +
	'<li><a href="{{site.weekly_google_calendar_prefix}}' +
	weekNum + '">agenda</a></li>' +
	'<li><a href="/lectures/week' + weekNum + '">lectures</a></li>' +
	'</ul>';
}

function linkToLecture(mm,dd,week) {
    return '<a href="/lectures/week' + week + '/' + mm + dd +'/">' +
	mm + '/' + dd +
	'</a>';
}

function dayLabel(thisDay, week) {
    // thisDay is a momentjs instance
    mm = thisDay.format("MM");
    dd = thisDay.format("DD");    
    ddd = thisDay.format("ddd");
    if  ( ["Mon","Tue","Wed","Thu","Fri"].indexOf(ddd) == -1 &&
	  ! ( thisDay.isSame(moment(cal.startDate))) )
	return mm + "/" + dd; // plain old date
    else
	return linkToLecture(mm,dd,week);

}


function addCalendarTable(elem,cal) {
    

    var numWeeksDataAttribute = elem.data("num-weeks");
    var startWeekDataAttribute = elem.data("start-week");

    
    var startDay = moment(cal.startDate);
    var startWeek = startWeekDataAttribute || 1;
    var numWeeks = numWeeksDataAttribute || cal.numWeeks;

    console.log("startDay.format('YYYY/MM/DD')=" + startDay.format('YYYY/MM/DD'));
    console.log("startWeek=" + startWeek);
    console.log("numWeeks=" + numWeeks);
    
    var thisDay = startDay;
    
    elem.empty();
    elem.append('<table >');
    elem.find('table').append( '<tr><th>&nbsp;</th><th>S</th><th>M</th><th>T</th><th>W</th><th>R</th><th>F</th><th>S</th></tr>');

    for(var week=1;week<=cal.numWeeks; week++){
	var inRange = ( week >= startWeek && week < (startWeek + numWeeks) );
	if ( inRange) {
	    elem.find('table').append( '<tr data-week-num="' + week +'" />')
	    var thisWeeksTrSelector = 'table tr[data-week-num="' + week + '"]';
	    elem.find(thisWeeksTrSelector).append('<td class="week">' + weekLabel(week) + '</td>');
	}
	for (var day=1; day<=7; day++) {
	    if ( inRange ) {
		var thisDateFormatted = thisDay.format("MM/DD");
		var cal_mmdd = $('<div class="cal_mmdd">' +
				 dayLabel(thisDay,week) +
				 '</div>');
		var assignments = getAssignments(cal,thisDateFormatted);
		var td = $('<td/>')
		    .append(cal_mmdd)
		    .append(assignments)
		    .attr('data-mmdd',thisDateFormatted)
		elem.find(thisWeeksTrSelector).append(td);
	    } // inRange
	    thisDay = thisDay.add(1,'days');
	} // for days
    } // for weeks 
} // function



function reportDaysOutsideCalendar(page,cal) {
    if (cal.days_outside_calendar.length > 0) {
	$(page).find('#calendar').append(  '<div class="calendar-errors" />' );
	$(page)
	    .find('#calendar div.calendar-errors')
	    .append("<h2>Warning: there were some calendar errors:</h2>");
	for (var i=0, len=cal.days_outside_calendar.length; i<len; i++) {
	    $(page)
		.find('div.calendar-errors')
		.append("<p><code>" + JSON.stringify(cal.days_outside_calendar[i]) + "</p>");
	}
    }
}

$(document).on('pageinit','[data-role=page]', function(){
    console.log("calendar.js: pageinit");
    setUpCalendar($(this));
    populateAssignmentElements($(this));    
    console.log("calendar.js: pageinit done");
});

