$(document).ready(function()
{
	$('#message').focus();
	
	$('#post-btn').click(function(){
		if($('#message').value().trim() != ''){
			var ele = document.getElementById('message').val() + "</br>";
			var img = <img src ='http://i.imgur.com/87kIXSN.jpg'>
			var post = img + ele;
			$('#wall').prepend(post);
		}
	})
});