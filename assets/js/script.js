$(function(){
	
	var note = $('#note'),
		ts = new Date(2013, 10, 13, 15, 20),
		newYear = false;
		console.log(ts);
	
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			//message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			//message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			//message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			//message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			message += 'Cat is in town, lets PAAAARTY!';
			
			note.html(message);
		}
	});
	
});
