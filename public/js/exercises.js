// Global variables
 var $output = $('#output p'),
     $runBtn = $('#run'),
     $submitBtn = $('#submit'),
     $testBtn = $('#run-tests'),
	 $tests = $('.test'),
	 $invocations = $('.invocation'),
	 $expectations = $('.expectation'),
	 $results = $('.result')

// Helpers

function formatJS(JS){
	// replace 'console.log' with print for the api
	return JS.replace('console.log', 'print')
}

function formatForTests(JS){
	var result = JS.replace('console.log', 'print')
		result += '\nprint("BEGIN TESTS")'
	for (var i = 0; i < $tests.length; i++) {
		result += '\nprint('+ $invocations.eq(i).text() + ')'
	}
	return result
}

function unpackTests(JSON){
	var result = JSON.split('\n'),
		testSwitch = false,
		console = ''
		tests = []
	for (var i = 0; i < result.length; i++) {
		if (testSwitch) {
			tests.push(result[i])
		} else if (result[i] === 'BEGIN TESTS') {
			testSwitch = true
		} else {
			console += result[i] + '\n'
		}
	}
	return [console, tests]
}

// Tab in textarea

$(document).delegate('#input', 'keydown', function(e) {
  if(event.keyCode===9){
  	var v = this.value,
  	    s = this.selectionStart,
  	    e = this.selectionEnd
  	this.value = v.substring(0, s) + '  ' + v.substring(e)
  	this.selectionStart = this.selectionEnd=s+2
  	return false
  }
})

// Button functions

$runBtn.on('click', function() {
	var source = formatJS($('#input').val())
	$runBtn.prop('disabled', true)
	$.ajax({
		type: 'POST',
		url: '/exercises',
		data: {
			source: source
		}
	}).then( 
		function(data){
			$output.html(JSON.parse(data).run_status.output_html)
			$runBtn.prop('disabled', false)
		}
	)
})

$testBtn.on('click', function() {
	$testBtn.prop('disabled', true)
	var source = formatForTests($('#input').val())
	console.log('source',source)
	$.ajax({
		type: 'POST',
		url: '/exercises',
		data: {
			source: source
		}
	}).then( 
		function(data){
			console.log('data', unpackTests(JSON.parse(data).run_status.output))
			var unpackedData = unpackTests(JSON.parse(data).run_status.output),
			    passingCount = 0
			// put the console log part in the output
			$output.html(unpackedData[0])
			// check the rest as tests
			for (var i = 0; i < unpackedData[1].length; i++) {
				// change the results value
				$results.eq(i).text(unpackedData[1][i])
				// check to see if the result matches what was expected
				console.log('result', $('.result').eq(i).text())
				console.log('expectation', $('.expectation').eq(i).text())
				if ($('.result').eq(i).text() === $('.expectation').eq(i).text()) {
					$tests.eq(i).addClass('passing')
					passingCount ++
				} else {
					$tests.eq(i).removeClass('passing')
				}
			}
			if (passingCount === unpackedData[1].length) {
				$submitBtn.prop('disabled', false)
				$('#tests').addClass('passing')
			} else {
				$('#tests').removeClass('passing')
				$submitBtn.prop('disabled', true)
			}
			$testBtn.prop('disabled', false)
		}
	)
})
