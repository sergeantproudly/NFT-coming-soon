document.addEventListener('DOMContentLoaded', function() {
	var cal_button = document.getElementById('calendar-button');
	var cal_modal = document.getElementById('calendar-modal');
	var cal_modal_close = cal_modal.querySelector('.close');

	cal_button.addEventListener('click', function() {
		cal_button.classList.add('act');
		cal_modal.classList.add('visible');
	});

	cal_modal_close.addEventListener('click', function() {
		cal_modal.classList.remove('visible');
		cal_button.classList.remove('act');
	});

	document.body.addEventListener('mouseup', function(e) {
		if (!e) e = window.event;
		if (e.target.closest('#calendar-modal') == null
			&& cal_modal.classList.contains('visible')) {
			cal_modal_close.click();
		}
	});

	document.body.addEventListener('keyup', function(e) {
		if (!e) e = window.event;
		var key = e.keyCode || e.which;
		if (key == 27) {
			if (e.target.closest('#calendar-modal') == null
				&& cal_modal.classList.contains('visible')) {
				cal_modal_close.click();
			}
		}
	});

	// countdown
	var $countdown = document.getElementById('countdown');
	var $days = $countdown.querySelector('.days');
	var $hours = $countdown.querySelector('.hours');
	var $minutes = $countdown.querySelector('.minutes');

	if ($countdown.getAttribute('data-date')) {
		var current_date = new Date($countdown.getAttribute('data-date'));
	} else {
		var current_date = new Date();
	}
	var deadline = new Date(2021, 10, 10, 20);
	var timerId = null;

	function countdownTimer() {
	    var diff = deadline - current_date;
	    if (diff <= 0) {
	      clearInterval(timerId);
	      window.location.reload(true);
	    }
	    var days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	    //var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	    $days.textContent = days < 10 ? '0' + days : days;
	    $hours.textContent = hours < 10 ? '0' + hours : hours;
	    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
	    //$seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
	}
	
	if (deadline - new Date() > 0) {
		countdownTimer();
		timerId = setInterval(countdownTimer, 1000);
	} else {
		setTimeout(function() {
			window.location.reload(true);
		}, 60000);
	}
});