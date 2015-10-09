$('section').horizon({
	scrollDuration: 300
});


// start text shuffle
americaDays()

function americaDays() {
	// days in america
	setTimeout(function(){
		$('#test1').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()
	},1000);
	setTimeout(function(){
		// Shuffle the container with custom text
		$('#test2').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()		
	},1900);
	europeDays()
}

function europeDays() {
	// days in europe
	setTimeout(function(){
		$('#test1').shuffleLetters({
			'text': 'DAYS SPENT IN EUROPE: ' 
		})	
		$('#test2').toggleClass('hidden')
	},4500);
	setTimeout(function(){
		$('#test2').toggleClass('hidden')
		$('#test2').shuffleLetters({
			'text': '16' 
		})
	}, 5400);
}

// runs in if statement of horizonScroll.js line 113
function londonDays() {
	if( $('#london-time span:first-child').hasClass('hidden') ) {
		// text for nights in london
		setTimeout(function(){
			$('#london-time span:first-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()
		},1000);
		setTimeout(function(){
			// number for nights in london
			$('#london-time span:last-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()		
		},1900);
		return x = true
	}
}
// runs in if statement of horizonScroll.js line 113
function athensDays() {
	if( $('#athens-time span:first-child').hasClass('hidden') ) {
		// text for nights in athens
		setTimeout(function(){
			$('#athens-time span:first-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()
		},1000);
		setTimeout(function(){
			// number for nights in athens
			$('#athens-time span:last-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()		
		},1900);
		return x = true
	}
}

// runs in if statement of horizonScroll.js line 113
function romeDays() {
	if( $('#rome-time span:first-child').hasClass('hidden') ) {
		// text for nights in rome
		setTimeout(function(){
			$('#rome-time span:first-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()
		},1000);
		setTimeout(function(){
			// number for nights in rome
			$('#rome-time span:last-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()		
		},1900);
		return x = true
	}
}
// runs in if statement of horizonScroll.js line 113
function parisDays() {
	if( $('#paris-time span:first-child').hasClass('hidden') ) {
		// text for nights in paris
		setTimeout(function(){
			$('#paris-time span:first-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()
		},1000);
		setTimeout(function(){
			// number for nights in paris
			$('#paris-time span:last-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()		
		},1900);
		return x = true
	}
}
// runs in if statement of horizonScroll.js line 113
function amsterdamDays() {
	if( $('#amsterdam-time span:first-child').hasClass('hidden') ) {
		// text for nights in amsterdam
		setTimeout(function(){
			$('#amsterdam-time span:first-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()
		},1000);
		setTimeout(function(){
			// number for nights in amsterdam
			$('#amsterdam-time span:last-child').toggleClass('hidden').css('visibility', 'visible').shuffleLetters()		
		},1900);
		return x = true
	}
}

