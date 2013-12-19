jQuery(document).ready(function($)
{
	$('#bird2').pan({
		fps: 30, // Frame/s fps cang nho thi chuyen dong se cang giat
		speed: 2, // toc do di chuyen cua vat the
		dir: 'left' //huong chuyen dong left: phai -> trai va nguoc lai
	});

	$('#qua1').pan({
		fps: 30, // Frame/s fps cang nho thi chuyen dong se cang giat
		speed: 2, // toc do di chuyen cua vat the
		dir: 'down' //huong chuyen dong left: phai -> trai va nguoc lai
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
	// $('#bird2').sprite({
	// 	fps: 30,
	// 	no_of_frames: 1
	// });
	// $('#bird2').spRandom ({
	// 	top: 30,
	// 	left: 600,
	// 	right: 250,
	// 	bottom: 140,
	// 	speed: 3000,
	// 	pause: 2000
	// });
	$('#ocean').pan({
		fps: 30,
		speed: 2,
		dir: 'left'
	});
	var value = 0;
	$('#start').click(function(){
		for (var i = 0; i < 10000; i++) {
			document.getElementById("time").innerHTML = i;
		};
		
		
	});
	
	
	
	// tinh diem
	var diem = new Array();
	var tong = 0;

	diem[0] = parseInt( $('#qua1').attr('score') );
	diem[1] = parseInt( $('#qua2').attr('score') );

	ham = parseInt( $('#score').attr('diem') );
	tg = parseInt( $('#time').attr('time') );

	// alert(sum(diem));
	$('#qua1').click(function(){

	});
	
	$('#qua1').click(function(){
		document.getElementById("score").innerHTML = ham + 5;
		ham = ham+5;
		
	});

	$('#qua2').click(function(){
		ham = ham + 2;
		document.getElementById("score").innerHTML = ham ;
		
	});
	var timer = null;
	function tick() {
		tg++;
	};
	function start() {
		tg ++;
		$('#time').text(tg);
		if (tg == 3) {
			alert('het gio');
			tg = 0;
			return;
		};
		timer = setTimeout(start, 1000);
	};
	
	$('#start').click(start);

});