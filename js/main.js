let	url = 'https://talaikis.com/api/quotes/random/',
    xhrbtn = document.querySelector('.xhr'),
    fetchbtn = document.querySelector('.fetch'),
    jqbtn = document.querySelector('.jq'),
	axiosbtn = document.querySelector('.axios'),
	result = document.querySelector('.quote');


// xhr

xhrbtn.addEventListener('click', function(){
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState  == 4 && xhr.status == 200) {
			let quote = JSON.parse(xhr.responseText);
			
			result.innerText = `${quote.quote} - ${quote.author}`;
		}
	}
	xhr.open('GET', url);
	xhr.send();
});

// fetch

fetchbtn.addEventListener('click', function(){
	fetch(url)
	.then(function(req){
		req.json().then(function(data){
			result.innerText = `${data.quote} - ${data.author}`;
		})
	})
	.catch(function(){
		alert('ERROR!');
	})
});

// jQuery

$('.jq').click(function(){
	$.getJSON(url)
	.done(function(res){
		$('.quote').text(res.quote + ' - ' + res.author);
	})
	.fail(function(){
		alert('JQ ERROR!');
	})
});

// Axios

axiosbtn.addEventListener('click', function(){
	axios.get(url)
	.then(function(res){
		result.innerText = `${res.data.quote} - ${res.data.author}`;
	})
	.catch(function(){
		alert('Axios ERROR!');
	})
});