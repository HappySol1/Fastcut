$(document).ready(function() {

    $(".popup").addClass("popup-laizyload");
	$(".popup-window").addClass("popup-laizyload");
	 
	$(".mybyrgerclick").on("click", function() {
	  $(".nav").toggleClass("navshow");
	  $(this).toggleClass("mybyrgerclose");
	});
	$(".popup-contact").on("click", function( event ) {
	  event.preventDefault();
	  $(".nav").toggleClass("navshow");
	  $(".mybyrgerclick").toggleClass("mybyrgerclose");
	  $(".popup").addClass("active");
	});

	$(".popup-window-close").on("click", function( event ){
		event.preventDefault();
		$(".popup").removeClass("active");
	});
	$(".popup-window-send").on("click", function(){
		$(".popup-window-input").each(function(){
			$(this).val("");
		});
		$(".popup").removeClass("active");
	});

	var slider = document.getElementById("myRange");
	var sliderp = document.getElementById("myPRange");
	var output = document.getElementById("demo");
	var poutput = document.getElementById("pdemo");
	if(slider != null){
	output.innerHTML = slider.value; // Display the default slider value
	slider.oninput = function() {
	    output.innerHTML = this.value;
	}
	}
	if(slider != null){
	poutput.innerHTML = slider.value; // Display the default slider value
	sliderp.oninput = function() {
	    poutput.innerHTML = this.value;
	}
	}
	// Update the current slider value (each time you drag the slider handle)
	
	

	// slider.oninput = function() {
	//     poutput.innerHTML = this.value;
	// }
	// sliderp.oninput = function() {
	//     poutput.innerHTML = this.value;
	// }
	$("#myRange").on("input",function(){
		var labels = $(this).val();
		if(window.innerWidth<1025){
			var width = 49;
		}else{
			var width = 95 / labels;
		}
		for (var j = 0; j <= 15; j++) {
			$("label[for='tab_" + j + "']").removeClass("ib");
		}
		for (var i = 1; i <= labels; i++) {
			$("label[for='tab_" + i + "']").css("width",width+"%");
			$("label[for='tab_" + i + "']").addClass("ib");
		}	
	});

	$("#myPRange").on("input",function(){
		
		var labels = $(this).val();
		
		if(window.innerWidth<1025){
			var width = 48;
		}else{
			var width = 95 / labels;
		}
		for (var j = 0; j <= 10; j++) {
			$("label[for='ptab_" + j + "']").removeClass("ib");
		}
		for (var i = 1; i <= labels; i++) {
			$("label[for='ptab_" + i + "']").css("width",width+"%");
			$("label[for='ptab_" + i + "']").addClass("ib");
		}	
	});

	var n = 0;
	$(".tosecbtm").on("click", function(event){
		$(this).addClass("notactive");
		event.preventDefault();
		$(".servicesbtn").addClass("active").addClass("notactive");
		if(n==0){
			$(".socials").addClass("socials-left");
			$(".firstscreen").addClass("desapeared");
			setTimeout(function() {
				$(".firstscreen").addClass("displaynone");
				$(".dontdesapear").removeClass("displaynone")
				setTimeout(function() {
					$(".dontdesapear").removeClass("desapeared");
				}, 200);
				$(".secondscreen-desapear").removeClass("displaynone")
				setTimeout(function() {
					$(".secondscreen-desapear").removeClass("desapeared")
				}, 200);
			}, 500);
			n++;
		}else if(n==1){	
			$(".videotype").remove();
			$(".secondscreen-progressbar-first").addClass("feeld");
			$(this).addClass("notactive");
			$(".secondscreen-desapear").addClass("desapeared");
			if(videotype == "congratulate"){
				setTimeout(function() {
					$(".secondscreen-desapear").addClass("displaynone");
					$(".thirhtscreen-congratulate").removeClass("displaynone")
					setTimeout(function() {
						$(".thirhtscreen-congratulate").removeClass("desapeared");
					}, 200);
				}, 500);
			}else if(videotype == "presentation"){
				setTimeout(function() {
					$(".secondscreen-desapear").addClass("displaynone");
					$(".thirhtscreen-presentation").removeClass("displaynone")
					setTimeout(function() {
						$(".thirhtscreen-presentation").removeClass("desapeared");
					}, 200);
				}, 500);
			}else if(videotype == "installation"){
				setTimeout(function() {
					$(".secondscreen-desapear").addClass("displaynone");
					$(".thirhtscreen-installation").removeClass("displaynone")
					setTimeout(function() {
						$(".thirhtscreen-installation").removeClass("desapeared");
					}, 200);
				}, 500);
			}else if(videotype == "subs"){
				setTimeout(function() {
					$(".secondscreen-desapear").addClass("displaynone");
					$(".thirhtscreen-subs").removeClass("displaynone")
					setTimeout(function() {
						$(".thirhtscreen-subs").removeClass("desapeared");
					}, 200);
				}, 500);
			}
			
			n++;
		}else if(n==2){
			$(this).addClass("sendmail");
			createstring();
			$(".secondscreen-progressbar-sec").addClass("feeld");
			$(".thirhtscreen-congratulate").addClass("desapeared");
			$(".thirhtscreen-presentation").addClass("desapeared");
			$(".thirhtscreen-installation").addClass("desapeared");
			$(".thirhtscreen-subs").addClass("desapeared");
			setTimeout(function() {
				$(".thirhtscreen-congratulate").addClass("displaynone");
				$(".thirhtscreen-presentation").addClass("displaynone");
				$(".thirhtscreen-installation").addClass("displaynone");
				$(".thirhtscreen-subs").addClass("displaynone");
				$(".forthscreen").removeClass("displaynone")
				setTimeout(function() {
					$(".forthscreen").removeClass("desapeared");
				}, 200);
			}, 500);
			$(this).text("Получить результат");
			n++;
		}else if(n==3){
			$(".secondscreen-progressbar-thirht").addClass("feeld");
			$(this).text("наши Работы");
			// $(this).removeClass("sendmail");
			$(this).removeClass("notactive");
			setTimeout(function() {
				$('.secondscreen-progressbar-thirht-end').css("background","#49A0DE");
			}, 1650);
			$(".forthscreen").addClass("desapeared");
			setTimeout(function() {
			$(".forthscreen").addClass("displaynone")
				$(".fifthscreen").removeClass("displaynone")
				setTimeout(function() {
					$(".fifthscreen").removeClass("desapeared");
				}, 200);
			}, 500);
			n++;
		}else if(n==4){
			window.open(this.href, "_self");
		}
	});
	var sourcelink= "";
	var usermail = "";
	var videotype='none';
	var it = 0;
	function checklist(){
			if(sourcelink != "" || usermail != ""){
				$(".costbtn").removeClass("notactive");
				console.log(sourcelink);
				sourcelink = "";
		}
	}

	$(".thirhtscreen-input").on("input",function(){
		if(it == 0){
			sourcelink = $(this).val();
			checklist();
			it++
		}
	});

	$(".forthscreen-mail").on("input",function(){
		usermail = $(this).val();
		checklist();
	});

	$('input[type=radio][name=voisee]').change(function() {
	    if (this.value == 'voiseneed') {
	        $(".tabs-div-right-ozv").removeClass("tabs-div-right-ozv-dn");
	    }
	    else if (this.value == 'voisenotneed') {
	       $(".tabs-div-right-ozv").addClass("tabs-div-right-ozv-dn");
	    }
	});
	$('input[type=radio][name=text]').change(function() {
	    if (this.value == 'textneed') {
	        $(".tabs-div-right-text").removeClass("tabs-div-right-text-dn");
	    }
	    else if (this.value == 'textnotneed') {
	       $(".tabs-div-right-text").addClass("tabs-div-right-text-dn");
	    }
	});
	
	$(".videotype").on("click", function(){
		videotype = $(this).attr('data-videotype');
		$(".costbtn").removeClass("notactive");
		$(".portfoliomain-item").each(function(){
			// console.log(this);
			$(this).removeClass("active");
		});
		$(this).addClass("active");
	});
     
	function createstring(){
		var cvideotype;
		cvideotype = 0;
		var maintext = "";
		if($(".congratulate-maininput").val() != ""){
		var congvois = "";
		var congtext = "";
		$(".sendmail").on("click", function(){
			$(".this").removeClass("sendmail");
			maintext+= " Заказ на видео-поздравление";
			maintext+= "<br>Название:" + $(".congratulate-cst-title").val();
			if($(".congratulate-cst-voice").prop('checked')) { 
				maintext+="<br>Закадровый голос нужен";
				congvois = "Текст озвучки:<br>";
			}
			if($(".congratulate-cst-text").prop('checked')) { 
				maintext+="<br>Текст в видео нужен";
				congtext = "Добавить текст:<br>";
			}
			var slides = $("#myRange").val();
			maintext+="<br>Общие пожелания:<br>" + $(".congratulate-cst-textarea").val();
			maintext+="<br><br>Колличество фрагментов видео:" + slides;
			for (var i = 0; i < slides; ){
				i++
				maintext+="<br><br>СЛАЙД" + i +"<br>"+ $(".congratulate-cst-tab-" + i + " .tabs-div-textarea").val() + "<br><br>" + congvois + $(".congratulate-cst-tab-" + i + " .tabs-div-right-ozv .tabs-div-right-textarea").val()+ "<br><br>" + congtext +  $(".congratulate-cst-tab-" + i + " .tabs-div-right-ozv .tabs-div-right-textarea").val();
			}	
			maintext+="<br>ИМЯ:" + $(".forthscreen-input-name").val() + "<br>ТЕЛЕФОН:" + $(".forthscreen-input-phone").val() + "<br>ПОЧТА:" + $(".forthscreen-input-mail").val() + "<br><br><br>ССЫЛКА:" + $(".congratulate-maininput").val();
			console.log(maintext);
			posttt();
		});
		}else if($(".presentation-maininput").val() != ""){
		$(".sendmail").on("click", function(){
			$(".this").removeClass("sendmail");
			maintext+= " Заказ на видео-презентацию";
			maintext+= "<br>Название:" + $(".presentation-cst-title").val();
			if($(".presentation-cst-inf").prop('checked')) { 
				maintext+="<br>Нужна инфогрфика";
				congvois = "Текст озвучки:<br>";
			}
			var slides = $("#myPRange").val();
			maintext+="<br>Общие пожелания:<br> " + $(".presentation-cst-textarea").val();
			maintext+="<br><br>Колличество cлайдов видео:" + slides;
			for (var i = 0; i < slides; ){
				i++
				maintext+="<br><br>СЛАЙД" + i +"<br>"+ $("div#ptxt_" + i + " .tabs-div-textarea").val() + "<br>";
            }
			maintext+="<br>ИМЯ:" + $(".forthscreen-input-name").val() + "<br>ТЕЛЕФОН:" + $(".forthscreen-input-phone").val() + "<br>ПОЧТА:" + $(".forthscreen-input-mail").val() + "<br><br><br>ССЫЛКА:" + $(".presentation-maininput").val();
			console.log(maintext);
			posttt();
			});
		}else if($(".installation-maininput").val() != ""){
			$(".sendmail").on("click", function(){
				$(".this").removeClass("sendmail");
				maintext+= " Заказ на монтаж";
				maintext+= "<br> Название:" + $(".installation-cst-title").val();
				if($("#installation1").prop('checked')) { 
					maintext+= "<br>Отрезать фрагмент";
				}
				if($("#installation2").prop('checked')) { 
					maintext+= "<br>Наложить логотип";
				}
				if($("#installation3").prop('checked')) { 
					maintext+= "<br>Приклеить заставку";
				}
				maintext+= "<br>Описание:<br>" + $(".installation-cst-textarea").val();
				maintext+= "<br>Общие пожелания:<br>" + $(".installation-cst-textarea2").val();

				maintext+="<br><br>ИМЯ:" + $(".forthscreen-input-name").val() + "<br>ТЕЛЕФОН:" + $(".forthscreen-input-phone").val() + "<br>ПОЧТА:" + $(".forthscreen-input-mail").val() + "<br><br><br>ССЫЛКА:" + $(".installation-maininput").val();
				console.log(maintext);
				posttt();
			});
		}else if($(".subs-maininput").val() != ""){
			$(".sendmail").on("click", function(){
				$(".this").removeClass("sendmail");
				maintext+= " Заказ на добавление субтитров";
				maintext+= "<br>Название:" + $(".subs-cst-title").val();
				maintext+= "<br>Описание:<br>" + $(".subs-cst-textarea").val();
				maintext+= "<br>Общие пожелания:<br>" + $(".subs-cst-textarea2").val();
				maintext+="<br>ИМЯ:" + $(".forthscreen-input-name").val() + "<br>ТЕЛЕФОН:" + $(".forthscreen-input-phone").val() + "<br>ПОЧТА:" + $(".forthscreen-input-mail").val() + "<br><br><br>ССЫЛКА:" + $(".subs-maininput").val();
				console.log(maintext);
				posttt();
			});
		}
		function posttt(){
			$.ajax({
				type: "POST",
				url: "http://fastcut.ru/wp-content/themes/fastcut/pmail.php",
				data: maintext,
			});
		}
	}





















window.scrollTo(0,0);
});
