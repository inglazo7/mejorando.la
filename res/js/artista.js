(function(){
	var artistInput = $('#artista'),
		button = $('#boton'),
		resultOut = $('#content')

	artistInput.on('keyup', getArtist)
	button.on('click', requestArtist)
	
	function getArtist( evt ){
		// Enter
		if(evt.keycode == 13){
			requestArtist()
		}
	}

	function requestArtist(){
		$.ajax({
			// data: {artist: artistInput.val()},
			data: {
				artist: artistInput.val(),
				api_key: '42f75f939105d2110d6a0daf27db431c',
				format: 'json'
			},
			// url: '/res/data/lastfm.json'
			url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo'
		}).done(fillArtistInfo)
	}

	function fillArtistInfo( jsonData ){ 
		// Gracias a jQuery jsonData es un objeto
		var artist = jsonData.artist,
			html = ''
		
		html += '<h2>' + artist.name + '</h2>'
		html += '<img src="' + artist.image[0]['#text'] + '">'
		html += '<p>' + artist.bio.summary + '</p>'
		
		resultOut.html( html )
	}
}())