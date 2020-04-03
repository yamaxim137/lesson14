window.onload = function () {

	if(localStorage.getItem('bkground') !== null){
		document.getElementsByTagName('body')[0].style.background = localStorage.getItem('bkground');
	}
	
	// getElementsByTagName('')
	document.getElementById('green').onclick = function(){
		localStorage.setItem('bkground','green');
		document.getElementsByTagName('body')[0].style.background = 'green';	
	}

	document.getElementById('red').onclick = function(){
		localStorage.setItem('bkground','red');
		document.getElementsByTagName('body')[0].style.background = 'red';	
	}

	document.getElementById('log').onchange = function(){
		localStorage.setItem('user',{'login': document.getElementById('log').value});
		document.getElementsByTagName('body')[0].style.background = 'red';	
	}


}