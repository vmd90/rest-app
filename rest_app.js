

function search()
{
	var id = $('#id-input').val();
	var aurl = 'http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/'+id+'/opportunities';
	//console.log(aurl);
	$.ajax({
		url: aurl,
		method: 'GET',
		dataType: 'json',

		success: function (data) {
			$('#result').html('<strong>No. of vacancies: '+data.length+'</strong>');
		},
		error: function () {
			alert('Error');
		}
	});
}

$('button').click(function() {
	search();
});