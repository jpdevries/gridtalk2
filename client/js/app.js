

	$.ajax({
		url: "http://localhost:8080/users",
		method: "GET"
	})
		.done(function( resdata ){
			console.log(resdata);
		})
		.fail(function(err){
			console.log(err);
		});





//users signup


 $("#submitDataBttn").on('click', function() {
 		console.log(data);

 // 	$.ajax({
	//   method: "POST",
	//   url: "/",
	//   data: { username: "", useremail: "", password: ""}
	// })
	//   .done(function( msg ) {
	//     alert( "User created " + msg );
	//   });


// 	var params = {
// 		method: "GET",
// 		url: "localhost:3000/users"
// 	}

// 	$.ajax(params, function(response){

// 	});

 });

//REGISTRATION PAGE SUBMIT BUTTON ACTION
$("#registerDataBttn").on('click', function(event) {
	event.preventDefault();

	var userName = $("input[name='username']").val();
	var userEmail = $("input[name='useremail']").val();
	var userPass = $("input[name='password']").val();

	var formData = {
		user: userName,
		password: userPass,
		email: userEmail
	}

	console.log(userName);
	console.log(userEmail);
	console.log(userPass);



	$.ajax({
            type: "POST",
            url: "/",
            data: formData  
        })

		.done(function() {
	    	alert( "User created");
	 	});









});



//NEW POST MUSTACHE JS TEMPLATE

//Get post data from front end and submit it to the database with ajax call

$("#post-input").submit(function(event) {
	event.preventDefault();//prevents the page from refreshing after clicking the submit button

	var content = $("input[name='message']").val();

	var postData = {
		content: content
	}

	// console.log(postData);

	$.ajax({
            type: "POST",
            url: "/",
            data: postData  
        })

		.done(function() {
	    	console.log("Post Created :" + postData);
	 	});

	$("#post-input")[0].reset(); // clear form fields
});

//Get post data from database and display it into the DOM using mustache.js template

	$("#refresh-board").on('click', function(event) {


		$.get( "/", function( data ) {
	  		$( ".result" ).html( data ); 
	  		alert( "Load was performed." );
		});


		//or

		$.get( "test.php", function( data ) {
		  $( "body" )
		    .append( "Name: " + data.name ) // John
		    .append( "Time: " + data.time ); //  2pm
		}, "json" );


	});

// var postTemplate = {
// 	author:,
// 	message:,
// 	createdOn:
// }






