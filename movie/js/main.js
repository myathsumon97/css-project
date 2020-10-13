$("document").ready(function(){
	$('#searchForm').on('submit',(event) => {
		let searchText =$('#searchText').val();
		getMovie(searchText);
		event.preventDefault();
	})
});	
	function getMovie(searchText)
	{
		axios.get('http://www.omdbapi.com/?s='+searchText + '&apikey=9be27fce').then((response) => {
	    console.log(response);
	    let movies = response.data.Search;
	    let output = '';
	    $.each(movies, (index , movie) =>{
	    	output += `<div class="col-md-3">
	    	<div class="well text-center">
	    	<img src="${movie.Poster}" alt="" />
	    	<h5>${movie.Title}</h5>
	    	<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">
	    	</div>
	    	</div>
	    	`;
	    })
	    $('#movies').html(output);
	  })
		.catch((err) =>{
			console.log(err);
	   });

	}

	function movieSelected(id)
	{
		sessionStorage.setItem('movieId',id);
		window.location = 'move.html';
		return false;
	}
	// function getMovie(){
	// 	let movieId = sessionStorage.getItem('movieId');
	// 	axios.get('http://www.omdbapi.com/?i='+movieId + '&apikey=9be27fce').then((response) => {
	//     console.log(response);
	//     let movie = response.data;
	//     let output = `<div class="row">
	//     				<div class="col-md-4">
	//     				<img src="${movie.Poster}" class="thumbnail">
	//     				</div>
	//     				<div class="col-md-8">
	//     				<h2>${movie.Title}</h2>
	//     				<ul class="list-group">
	//     				<li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
	//     				<li class="list-group-item"><strong>Released:</strong>${movie.Released}</li>
	//     				<li class="list-group-item"><strong>Rated:</strong>${movie.Rated}</li>
	//     				<li class="list-group-item"><strong>IMDB Rated:</strong>${movie.imdbRating}</li>
	//     				<li class="list-group-item"><strong>Director:</strong>${movie.Director}</li>
	//     				<li class="list-group-item"><strong>Writer:</strong>${movie.Writer}</li>
	//     				<li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>
	//     				</ul>
	//     				</div>
	//     				<div class="row">
	//     				<div class="well">
	//     				<h3>Plot</h3>
	//     				${movie.Plot}
	//     				<hr>
	//     				<a href="http://imdb.com/title/${movie.imdbID}" target"_blank" class="btn btn-primary">
	//     				<a href="move.html" class="btn btn-default">Go Back to Search
	//     				</div>
	//     				</div>`
	//   })
	// 	.catch((err) =>{
	// 		console.log(err);
	//    });
	// }
