// Global variables



 var  $output = $('#output p'),
    $runBtn = $('#run')

// Janky solution
// $runBtn.on('click', function() {
// 	$output.text(`${eval($input.val())}`)
// })

// Helpers

function formatJS(JS){
	return JS
}

$runBtn.on('click', function() {
	var source = formatJS($('#input').val())
	$.ajax({
		type: 'POST',
		url: '/exercises',
		data: {
			source: source
			// piggyback tests on post request
		}
	}).then( 
		function(data){
			$output.html(JSON.parse(data).run_status.output_html)
		
			// for each test, compare what came back to
			// what was expected
			// update DOM (either show submit or don't)
		}
	)
})
