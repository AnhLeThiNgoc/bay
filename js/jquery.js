jQuery(document).ready(function($)
{

	$('#bird2').pan({
		fps: 30, // Frame/s fps cang nho thi chuyen dong se cang giat
		speed: 2, // toc do di chuyen cua vat the
		dir: 'left' //huong chuyen dong left: phai -> trai va nguoc lai
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
	diem[2] = parseInt( $('#qua3').attr('score') );
	diem[3] = parseInt( $('#qua4').attr('score') );
	diem[4] = parseInt( $('#qua5').attr('score') );
	// diem[5] = parseInt( $('#qua6').attr('score') );

	

	tongdiem = parseInt( $('#score').attr('diem') );
	tg = parseInt( $('#time').attr('time') );

	$('#qua1').click(function(){
		tongdiem = tongdiem + diem[0];
		document.getElementById("score").innerHTML = tongdiem ;
		$('#qua1').hide();
		$('#qua1').show(4000);

	});

	$('#qua2').click(function(){
		tongdiem = tongdiem + diem[1];
		document.getElementById("score").innerHTML = tongdiem ;
	});
	
	$('#qua3').click(function(){
		tongdiem = tongdiem + diem[2];
		document.getElementById("score").innerHTML = tongdiem ;
	});

	$('#qua4').click(function(){
		tongdiem = tongdiem + diem[3];
		document.getElementById("score").innerHTML = tongdiem ;
	});

	$('#qua5').click(function(){
		tongdiem = tongdiem + diem[4];
		document.getElementById("score").innerHTML = tongdiem ;
	});
	
	
	var timer = null;
	var xh = 0;
	var an = 0;
	function tick() {
		
		tg++;
	};
	function start() {
		tg++;
		$('#time').text(tg);
		if (tg == 60) {
			alert('het gio');
			tg = 0;
			return;
		};
		timer = setTimeout(start, 1000);
		setInterval(function(){
		for (var i = 0; i < diem.length; i++) {

 		$('#qua'+i).pan({
			fps: 30, // Frame/s fps cang nho thi chuyen dong se cang giat
 			speed: 2, // toc do di chuyen cua vat the
			dir: 'left' //huong chuyen dong left: phai -> trai va nguoc lai
		});
 		 $('#qua'+i).sprite({
		 	fps: 30, 		
		 	no_of_frames: 1 // so khung hinh trong buc anh
 		 });

		 $('#qua'+i).spRandom({ // Bay tu do trong khoang cach duoi day
		 	top: 70, // cao toi da
			left: 100 +i*100,
			right: 200 + i*100,
			bottom: 800, // 
			speed: 4000, //toc do di chuyen giua cac diem
			pause: 2000 // thoi gian ngung giua cac diem
		});
		$('#qua'+i).fadeIn(1000,$).fadeOut(1000);
	};

	},200);
	};
	
	$('#start').click(start);

});