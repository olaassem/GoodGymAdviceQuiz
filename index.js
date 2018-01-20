
'use strict';


const quizdata =[
{
	advice: "Warming Up",
	options: ["Warming up is a myth. Skip it and head straight to the weight floor.", "Only warm up the body part you will be training for the day while flirting with the front desk staff.", "Warm up with static stretching and avoid any cardio and aerobic sets.","Indulge in a full body dynamic session that includes light cardio and mobility work."],
	correctAnswer: "d",
	correctAdvice: "Indulge in a full body dynamic session that includes light cardio and mobility work.",
	correctimg: ["http://s3.amazonaws.com/br-cdn/temp_images/2014/12/19/00174c0b79f35ea634aeaccb0e9c42d0.gif?1419027909", "gif of a man on an eliptical winking"],
	wrongimg: ["https://sportsetterblog.files.wordpress.com/2016/01/workout-smile.gif?w=900", "gif of a disappointed man's face"]
}, {
	advice: "Squats",
	options: ["Always initiate your squat with your knees tracking inward towards each other.", "Keep your chest lifted and don't let your knees track over your toes.","Lower your chest down and round your back to look at your toes as you squat.","Lift your heels and press through your toes for the added challenge of squat balancing."],
	correctAnswer: "b",
	correctAdvice: "Keep your chest lifted and don't let your knees track over your toes.",
	correctimg: ["https://78.media.tumblr.com/7759d710e6242d942b9df9c47eb4967b/tumblr_otm4biDD1g1qg2p2fo1_400.gif", "gif of a woman with correct squating form"],
	wrongimg: ["https://i.pinimg.com/originals/f2/c5/c3/f2c5c3146988353abd18997c289e29be.gif", "gif of a man falling from heavy squat weight"]
}, {
	advice: "Bench Press",
	options: ["Create momentum by bouncing the bar on your ribcage.", "Tap your feet or flail your legs as you bench press to take pressure off your chest.", "Lift your head off the bench at all times to watch what others are doing.","Move the bar diagonally from your mid-chest over your shoulders as you bench press."],
	correctAnswer: "d",
	correctAdvice: "Move the bar diagonally from your mid-chest over your shoulders as you bench press.",
	correctimg: ["https://i.makeagif.com/media/12-08-2015/wpEdOR.gif" , "funny gif of a man throwing money at his barbell."],
	wrongimg: ["https://media.giphy.com/media/RvxltCJH6P8WI/giphy.gif", "gif of man bouncing barbell on his stomach"]
}, {
	advice: "Deadlift",
	options: ["Keep the bar in contact with your legs while you pull. Don’t shrug or lean back at the top.", "Flare your elbows out and activate your biceps to help pull the weight up.", "As you pull, bang your bar against your knees for stronger knees.", "Roll your shoulders back and overextend your hips forward as you pull the weights up."],
	correctAnswer: "a",
	correctAdvice: "Keep the bar in contact with your legs while you pull. Don’t shrug or lean back at the top.",
	correctimg: ["https://i.imgur.com/JWinLX7.gif", "gif of boy showing off his biceps"],
	wrongimg: ["http://i0.kym-cdn.com/photos/images/original/000/693/567/149.gif", "gif of woman in heels deadlifting and falling."]
}, {
	advice: "Clean & Press",
	options: ["Use your biceps to swing the bar forward 90 degrees in front of you.", "To press, lift the bar straight over your head while arching backwards to keep the pressure in your lower back.", "Lift your bar in a straight line upwards, as if you were performing the exercise facing a wall with no space to swing your bar forward.","As you are lifting the bar and transitioning to press, lift your elbows higher than your shoulders. Ear height is even better!"],
	correctAnswer: "c",
	correctAdvice: "Lift your bar in a straight line upwards, as if you were performing the exercise facing a wall with no space to swing your bar forward.",
	correctimg: ["https://78.media.tumblr.com/a8175559e5555119e857d3d72a0e1145/tumblr_n5d01cJly81sbitb2o1_400.gif", "gif of woman doing a correct clean and press."],
	wrongimg: ["https://thechive.files.wordpress.com/2014/02/hn6bgna.gif?w=400&h=211", "gif of a man falling from clean and press weight"]
}, {
	advice: "Bent Barbell Row",
	options: ["Tilt your neck upwards to stare at your form in the gym mirror.", "Squeeze your shoulder blades together at the top of the row to open up your chest.", "As you row, pull your elbows toward your hands  instead of pulling towards the roof.","Put enough weight on the barbell to ensure you are bending or curving your upper back."],
	correctAnswer: "b",
	correctAdvice:	"Squeeze your shoulder blades together at the top of the row to open up your chest.",
	correctimg: ["https://78.media.tumblr.com/tumblr_m9m30rMFoW1qkktc4o1_500.gif", "gif of men flexing"],
	wrongimg: ["https://i.imgur.com/vGiWttH.gif", "gif of man using rowing machine incorrectly"]
}, {
	advice: "Bicep Curls",
	options: [ "Sway your back and use your shoulders to help you out as the weights get heavier.", "Brace neutral core position, keep your elbows tucked into your sides, and use pure elbow flexion.", "Use extended to curled wrist positions at the top to keep the pressure on your wrist joints.","Flare out your elbows and sway your arms for increased momentum."],
	correctAnswer: "b",
	correctAdvice:"Brace neutral core position, keep your elbows tucked into your sides, and use pure elbow flexion.",
	correctimg: ["https://78.media.tumblr.com/899658115bbbacc77c9abc54e55aaa48/tumblr_oth89werqo1tll8wxo1_500.gif", "gif of a man curling a table."],
	wrongimg: ["https://78.media.tumblr.com/tumblr_m9e726AH9P1qelb7ro1_500.gif", "gif of a man motivating person to workout"]
}, {
	advice: "Stationary Lunge",
	options: ["Set your knee, hip, toes and heel square to front and as you lunge.", "Shift all your body weight to your front knee and toes.", "Keep your front foot and back foot very close together.","As you lunge down, curve and slouch your torso forward towards the floor."],
	correctAnswer: "a",
	correctAdvice: "Set your knee, hip, toes and heel square to front and as you lunge.",
	correctimg: ["https://assets.rbl.ms/10450440/980x.gif", "gif of a man clapping "],
	wrongimg: ["http://forgifs.com/gallery/d/207505-1/Gym-leg-extension-machine-fail.gif", "gif of lady using leg extension machine incorrectly"]
}, {
	advice: "Plank",
	options: ["Keep your head lifted and neck craned forward.", "Allow your torso and head to sag down towards the floor as you fatigue.", "To modify your plank, pike your hips by sticking your bum up in the air.","Keep your core muscles tight and body aligned so that your neck and spine form a straight line."],
	correctAnswer: "d",
	correctAdvice: "Keep your core muscles tight and body aligned so that your neck and spine form a straight line.",
	correctimg: ["https://media.giphy.com/media/uaTkBGIV3Fj3O/giphy.gif", "gif of arnold lifting cats."],
	wrongimg: ["http://i.imgur.com/6BaRC.gif", "gif of lady doing incorrect plank in the kitchen and falling"]
}, {
	advice: "Post-Workout",
	options: ["You're done! Head straight out of the gym and driving your car immediately after lifting heavy weights.", "You're bound to be starving but don’t give in and eat anything for the next two hours.", "Drink water and stretch after a workout to reduce soreness in your muscles and increase flexibility.","While your muscles are still active, this is a great time to do some heavy chores. You could mow the lawn, pull weeds, or  shovel snow."],
	correctAnswer: "c",
	correctAdvice: "Drink water and stretch after a workout to reduce soreness in your muscles and increase flexibility.",
	correctimg: ["https://discourse-cdn.freetls.fastly.net/boingboing/uploads/default/original/3X/3/9/39e5d3a2c30f8cfde0ed56ef566199806e8f09e3.gif", "gif of JCVD doing splits and winking"],
	wrongimg: ["https://i.imgur.com/sKl1I4k.gif", "gif of man using cable machine incorrectly"]
}]



//Assign starting counters..
let currentAdviceNumber = 0;
let currentGainsTotal = 0;
let questionProgress = 1;


//Render advice number
function updateProgress(){
	$('.js-advicenumber').text(" " + questionProgress);
}


//Render total gains
function updateGainsTotal(){
	$('.js-gainstotal').text(" " + currentGainsTotal);
}


//Initialise quiz
function startQuiz() {
	$('.startquiz').on('click', function(event) {
		event.preventDefault();
		$('.js-intro, .startquiz').addClass('hidden');
		$('.subheader, .js-quiz').removeClass('hidden');
	});
}


//Renders advice title
function handleAdvice() {
    $('.js-workoutname').text(quizdata[currentAdviceNumber].advice);
  }


function handleQuestionContent(){
	$('#opt1').text(quizdata[currentAdviceNumber].options[0]);
	$('#opt2').text(quizdata[currentAdviceNumber].options[1]);
	$('#opt3').text(quizdata[currentAdviceNumber].options[2]);
	$('#opt4').text(quizdata[currentAdviceNumber].options[3]);
}


function validateOptionChecked (){

	const optionChecked = $('input[name=option]:checked').val();
	const correctValue = (quizdata[currentAdviceNumber].correctAnswer);

	if (optionChecked === correctValue){
		currentGainsTotal++;
		updateGainsTotal();
		console.log(currentGainsTotal);

		$('.correct').removeClass('hidden');
		$('.wrong').addClass('hidden');
		$('.correctimg-js').attr('src', quizdata[currentAdviceNumber].correctimg[0] );
		$('.correctimg-js').attr('alt', quizdata[currentAdviceNumber].correctimg[1] );
 } 
	else { 
		$('.wrong').removeClass('hidden');
		$('.correct').addClass('hidden'); 
		$('.wrongimg-js').attr('src', quizdata[currentAdviceNumber].wrongimg[0] );
		$('.wrongimg-js').attr('alt', quizdata[currentAdviceNumber].wrongimg[1] );
	}
}


function choiceSubmit() {
	$('.submit').on('click', function(event) {
		event.preventDefault();	
		
    	let optChecked = jQuery("input[name=option]:checked").val();
    	if(!optChecked){
    		alert("Yeh, you're gonna have to choose an option.");

    	} else {
			$('.js-quiz').addClass('hidden');
			$('.js-feedback').removeClass('hidden');
			$('.js-corradvicechoice').text(quizdata[currentAdviceNumber].correctAdvice);
		
		validateOptionChecked ();
		}
	});
}



function nextQuestion(){
	$('.next').on('click', function(event) {
		event.preventDefault();
		$('.js-feedback').addClass('hidden');
		$('.js-quiz').removeClass('hidden');
 		$('input[name=option]').prop('checked', false);

		currentAdviceNumber++;
		questionProgress++;

		updateProgress();
		handleAdvice(); 
		handleQuestionContent();
		finalSubmit();
	});
}


//Change submit btn text on last q
function finalSubmit(){
	if (questionProgress === quizdata.length) {
		$('.next').addClass('hidden');
		$('.finalsubmit').removeClass('hidden');
	}
}


//Render final feedback pg
function finalFeedback(){
	$('.finalsubmit').on('click', function(event) {
		event.preventDefault();
		$('.js-feedback, .js-workoutname').addClass('hidden');
		$('.js-finalpg').removeClass('hidden');
	});
}


//Reload quiz 
function rePlay(){
	$('.replay').on('click', function(event) {
		event.preventDefault();
		window.location.reload(true);
  });
}



//Document Ready Function
function loadQuiz(){
	updateProgress();
	updateGainsTotal();
	startQuiz();
	handleAdvice();
	handleQuestionContent();
	validateOptionChecked();
	choiceSubmit();
	nextQuestion();
	finalSubmit();
	finalFeedback();
	rePlay();

}

loadQuiz();
