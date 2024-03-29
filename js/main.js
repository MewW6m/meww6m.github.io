(function($) {
	"use strict";
	/*------------- preloader js --------------*/
	$(window).on('load', function() { // makes sure the whole site is loaded
			$('.preloder-wrap').fadeOut(); // will first fade out the loading animation
			$('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(150).css({
				'overflow': 'visible'
			})
		})
		/*--
			Scroll Up
		------------------------*/
	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="fa fa-chevron-up"></i>',
	});
})(jQuery);
// 置き換え
var spans = document.getElementById("intro-spans");
if(window.innerWidth < 480) {
	spans.innerHTML = spans.innerHTML.replace(/>\/</g, "><br><")
}
// Chart.js
var ctx1 = document.getElementById("myChart1");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.getElementById("myChart3");
var ctx4 = document.getElementById("myChart4");
var colorSet = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	aqua: '',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};
var color = Chart.helpers.color;
var defaultSettings = {
	type: 'radar',
	data: {
		datasets: [{
			label: "Working(Year)",
			backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
			borderColor: colorSet.red,
			borderWidth: 1,
			pointRadius: 1,
			pointBackgroundColor: colorSet.red,
		}, {
			label: "Private(Year)",
			backgroundColor: color(colorSet.blue).alpha(0.5).rgbString(),
			borderColor: colorSet.blue,
			borderWidth: 1,
			pointRadius: 1,
			pointBackgroundColor: colorSet.blue,
		}]
	},
	options: {
		title: {
			display: true,
			fontSize: 15,
			fontColor: "white"
		},
		legend: {
			position: 'bottom',
			labels: {
				fontColor: "white"
			}
		},
		scale: {
			ticks: {
				display: true,
				max: 3,
				maxTicksLimit: 10,
				fontColor: "white",
				backdropColor: 'transparent' // should render black behind the text
			},
			pointLabels: {
				fontSize: 10,
				fontColor: "white"
			},
			angleLines: {
				display: true,
				color: "orange"
			},
			gridLines: {
				display: true,
				color: "orange"
			}
		},
		gridLines: {
			display: false
		},
		responsive: true,
		maintainAspectRatio: true
	}
}
var setting1 = JSON.parse(JSON.stringify(defaultSettings));
//setting1.options.title.text = "ProgrammingLanguage"
setting1.data.labels = ['HTML/CSS/JS', 'PHP', 'Python', 'VB.net', 'JAVA', 'SQL', 'Typescript', 'Go']
setting1.data.datasets[0].data = [4, 1, 1, 2, 1.5, 2, 0.5, 0.5]
setting1.data.datasets[1].data = [5, 1, 3, 2, 2, 4, 0.5, 0]
var myRadarChart1 = new Chart(ctx1, setting1);
var setting2 = JSON.parse(JSON.stringify(defaultSettings));
//setting2.options.title.text = "FrameWork"
setting2.data.labels = ['Django', 'Flask', 'Jquery', 'React', 'Bootstrap', 'ASP.net', "Spring"]
setting2.data.datasets[0].data = [0.5, 0, 1, 0, 1, 1, 1.5]
setting2.data.datasets[1].data = [2, 1, 2, 1, 2, 1, 1]
var myRadarChart2 = new Chart(ctx2, setting2);
var setting3 = JSON.parse(JSON.stringify(defaultSettings));
//setting3.options.title.text = "SystemProcess"
setting3.data.labels = ['RD','BD','DD','PG','UT','IT','Rel.']
setting3.data.datasets[0].data = [0.5, 2, 2, 1.5, 2.5, 2.5, 2]
setting3.data.datasets[1].data = [0, 1, 1, 4, 0, 0, 0]
var myRadarChart3 = new Chart(ctx3, setting3);
var setting4 = JSON.parse(JSON.stringify(defaultSettings));
//setting4.options.title.text = "DevTools"
setting4.data.labels = ['Git', 'SVN', 'Docker', 'Hyper-V', 'VMWare/VirtualBox', 'shell/cmd/PS', 'Vim', 'Swagger']
setting4.data.datasets[0].data = [2, 3, 1, 2, 0, 3, 0.5, 1]
setting4.data.datasets[1].data = [4, 0, 0, 1, 1, 5, 3, 1]
var myRadarChart4 = new Chart(ctx4, setting4);
$('.bio-charts .f_section_title').on('click', function() {
	$('#t1').css("display", "none");
	$('#t2').css("display", "inherit");
	$('#yearspan').html("( 2015 ~ 2025 )");
	setting1.options.scale.ticks.max = 6;
	setting2.options.scale.ticks.max = 6;
	setting3.options.scale.ticks.max = 6;
	setting4.options.scale.ticks.max = 6;
	setting1.data.datasets[0].data = [4, 1, 2, 2, 4,0,1,1]
	setting1.data.datasets[1].data = [4, 1, 3, 2, 1, 1,1,1]
	setting2.data.datasets[0].data = [0, 0, 0, 0, 0, 1, 0.5]
	setting2.data.datasets[1].data = [2, 1, 1, 0.5, 1, 1, 0]
	setting3.data.datasets[0].data = [1, 3, 4, 4, 4, 3, 2]
	setting3.data.datasets[1].data = [0, 2, 2, 6, 2, 2, 0]
	setting4.data.datasets[0].data = [0, 2, 0.5, 2, 0, 0, 2, 0]
	setting4.data.datasets[1].data = [3, 0, 0, 1, 1, 4, 1, 3]
	var myRadarChart1 = new Chart(ctx1, setting1);
	var myRadarChart2 = new Chart(ctx2, setting2);
	var myRadarChart3 = new Chart(ctx3, setting3);
	var myRadarChart4 = new Chart(ctx4, setting4);
});

$('a[data-target="#careerdetail"]').on('click', function(e){
	$('#careerTitle').text($(this).parent().parent().children('.career-title').text());
	$('#careerSubTitle').text($(this).parent().parent().children('.career-sub-title').text());
	$('#careerContent').children().html($(this).parent().parent().children('.career-content').html());
});
