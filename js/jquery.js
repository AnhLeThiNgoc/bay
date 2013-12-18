jQuery(document).ready(function($)
{
	$('#cloud').pan({
		fps: 30, // Frame/s fps cang nho thi chuyen dong se cang giat
		speed: 2, // toc do di chuyen cua vat the
		dir: 'right' //huong chuyen dong left: phai -> trai va nguoc lai
	});

	$('#bird1').sprite({
		fps: 12,
		no_of_frames: 3 // so khung hinh trong buc anh
	});

	$('#bird1').spRandom({ // Bay tu do trong khoang cach duoi day
		top: 70, // cao toi da
		left: 100,
		right: 200,
		bottom: 340, // 
		speed: 4000, //toc do di chuyen giua cac diem
		pause: 2000 // thoi gian ngung giua cac diem
	});

	$('#bird1').isDraggable({ // Neu Drag hoat dong phai them Jquery Ui vao
		start: function() { // khi kich chuot vao doi tuong va keo
			// cac su kien dian ra
			$('#bird1').fadeTo('fast', 0.7);
		},
		stop: function() { // khi bo chuot ra
			// cac su kien dien ra
			$('#bird1').fadeTo('fast', 1);
			$('#bird1').find("p").html("Keo em di ...");
		},
		drag: function() { // trong qua tring keo
			// cac su kien dien ra
			$('#bird1').find("p").html("Hay keo em di that xa...")
		}
	});
	$('#bird2').sprite({
		fps: 12,
		no_of_frames: 3
	});
	$('#bird2').spRandom ({
		top: 30,
		left: 600,
		right: 250,
		bottom: 140,
		speed: 3000,
		pause: 2000
	});
	$('#ocean').pan({
		fps: 30,
		speed: 2,
		dir: 'left'
	});

	// $('#button').anidg({
	// 	frameWidth: 100,
	// 	frameHeight: 100,
	// 	speed: 100,
	// 	totalFrames: 19
	// });

	// $('#start').click(function(){
	// 	$('#cloud').spStart();
	// 	return false;
	// });
	// $('#pause').click(function(){
	// 	$('#cloud').pause();
	// 	return false;
	// });
	// $('#stop').click(function(){
	// 	$('id^='').spStop();
	// 	return false;
	// });


});