console.log('exercises.js connect.')

// Global variables

$input = $('#input')
$output = $('#output p')
$runBtn = $('#run')

// Janky solution
// $runBtn.on('click', function() {
// 	$output.text(`${eval($input.val())}`)
// })

$runBtn.on('click', function() {
	$.ajax({
		type: 'POST',
		url: 'https://api.hackerearth.com/v3/code/run/',
		data: {
			client_secret: f9b2f2ccf14ecad5c5119bc986c9d96f7598191a,
			source:'function hello(){return "Hello"} hello();',
			// source:'$input.val()',
			lang: 'JAVASCRIPT'
		}
	}).then( 
		function(data){
			$output.text(data)
		}
	)
})
