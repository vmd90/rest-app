
function search()
{
	var id = $('#user-id-input').val();
	console.log(id);
	$.ajax({
		url: 'http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/'+id+'/opportunities',
		type: 'GET',
		success: function (data) {
			$('#result').html(data);
		},
		error: function (data) {
			alert(data);
		}
	});
}