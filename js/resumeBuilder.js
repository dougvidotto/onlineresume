 var welcomeMessage = "Hello guys! With this website I hope I can show you a little bit of what I already did and what I can do as a web developer." +
 					  " Also, I am eager to join a nice team with passion about technology and that enjoys to use them to solve people\'s everyday problems";
 
 var skills = ["HTML", "CSS", "Java", "TDD", "SQL", "Agile"];

 var bio = {
 	"name": "Douglas Carvalho",
 	"role": "Web developer",
 	"contacts": {
 		"mobileNumber": "11991950371 (Brazil)",
 		"email": "doug.vidotto@gmail.com",
 		"twitter": "@douglasVidotto",
 		"github": "https://github.com/dougwebcrafter",
 		"location": "São Paulo"
 	},
 	"pictureURL": "images/profile.jpg",
 	"welcomeMessage": welcomeMessage,
 	"skills": skills
 };

 var work = {
 	"jobs": 
 	[
 		{
 			"employer": "FAPESP",
 			"title": "System Analyst",
 			"date": "current",
 			"location": "São Paulo",
 			"description": "Java programmer and tester"
 		},
 		{
 			"employer": "Itaú Unibanco",
 			"title": "System Analyst",
 			"date": "September - 2011 to July - 2012",
 			"location": "São Paulo",
 			"description": "Project Manager, Technical documentation"
 		},
 		{
 			"employer": "Freeddom",
 			"title": "System Analyst",
 			"date": "August - 2010 to September - 2011",
 			"location": "São Paulo",
 			"description": "Java programmer"
 		}
	]};

var projects = {
	"allProjects": 
	[
		{
			"title":"Animals",
			"date": "jul - 2016",
			"description": "A web page that simulates a card of a game similar to Hearthstone or Magic the gathering"
		},

		{
			"title": "Portfolio",
			"date": "oct - 2016",
			"description": "A web page describing a little bit of yourself and one that you can show some web techniques"
		}

	],
	display: function () {
		for(var i = 0; i < projects.allProjects.length; i++) {
			$("#project-entries").append(HTMLprojectStart);
			var projectTitle = HTMLprojectTitle.replace("%data%", projects.allProjects[i].title);
			$(".project-entry:last").append(projectTitle);
			var projectDate = HTMLprojectDates.replace("%data%", projects.allProjects[i].date);
			$(".project-entry:last").append(projectDate);
			var projectDescription = HTMLprojectDescription.replace("%data%", projects.allProjects[i].description);
			$(".project-entry:last").append(projectDescription);
		}
	}
};

 var education = {
 	"schools": 
 	[
 	   {
 	   	"name": "Universidade Federal de São Carlos",
 	   	"location": "São Carlos, SP",
 	   	"course": ["Computer Science"],
 	   	"date": "2007(Mar) - 2011(Aug)"
 	   },
 	   {
 	   	"name": "Alura",
 	   	"location": "São Paulo",
 	   	"course": ["TDD", "Object Orientation", "Hibernate"],
 	   	"date": "2010(Sept) - 2011(Jul)"
 	   },
 	   {
 	   	"name": "Udacity",
 	   	"location": "São Paulo",
 	   	"course": ["Front-End Developer Nanodegree"],
 	   	"date":"2016(Apr) - Current"
 	   }
 	]
 };

 function displayBio() {
 	 var formattedName = HTMLheaderName.replace("%data%", bio.name);
	 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	 var profilePic    = HTMLbioPic.replace("%data%", bio.pictureURL);
	 var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	 $("#header").prepend(welcomeMessage);
	 $("#header").prepend(formattedRole); 
	 $("#header").prepend(formattedName);
	 $("#header").prepend(profilePic);
	 $("#header").append(HTMLskillsStart);

	 if(bio.skills.length > 0) {	
	 	var skill = HTMLskills.replace('%data%', bio.skills[0]);
	 	$("#skills").append(skill);
	 	var skill = HTMLskills.replace('%data%', bio.skills[1]);
	 	$("#skills").append(skill);
	 	var skill = HTMLskills.replace('%data%', bio.skills[2]);
	 	$("#skills").append(skill);
	 	var skill = HTMLskills.replace('%data%', bio.skills[3]);
	 	$("#skills").append(skill);
	 	var skill = HTMLskills.replace('%data%', bio.skills[4]);
	 	$("#skills").append(skill);
	 	var skill = HTMLskills.replace('%data%', bio.skills[5]);
	 	$("#skills").append(skill);
	 }
 }

 function displayWork() {
	 for(job in work.jobs) {
	 	$("#work-entries").append(HTMLworkStart);
	 	var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 	var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	 	$(".work-entry:last").append(workEmployer + workTitle);

	 	var workDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
	 	var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	 	var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	 	

		$(".work-entry:last").append(workDate);
		$(".work-entry:last").append(workLocation);
		$(".work-entry:last").append(workDescription);
	 }	
 }

 function displayEducation() {
 	for(school in education.schools) {
 		$("#education-entries").append(HTMLschoolStart);
 		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
 		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].course);
 		
 		$(".education-entry:last").append(schoolName + schoolDegree);

 		var schoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
 		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(schoolDate); 		
		$(".education-entry:last").append(schoolLocation);
 	}
 }

 function displayInternationalizeButton() {
 	$("#main").append(internationalizeButton);
 }

 function inName() {
 	var names = bio.name.split(" ");
 	var firstLetter = names[0].slice(0, 1).toUpperCase();
 	var firstName = firstLetter + names[0].slice(1, names[0].length);
 	var secondName = names[1].toUpperCase();

 	return firstName + " " + secondName;
 }

 displayInternationalizeButton();
 displayBio();
 displayWork();
 displayEducation();
 projects.display();
 $("#mapDiv").append(googleMap);

 $("#work-experience-button").click(function() {
 	if(!$("#work-entries").hasClass("entries-show")) {
 		$("#work-entries").addClass("entries-show");
 	} else {
 		$("#work-entries").removeClass("entries-show");
 	}
 });

 $("#projects-button").click(function() {
 	if(!$("#project-entries").hasClass("entries-show")) {
 		$("#project-entries").addClass("entries-show");
 	} else {
 		$("#project-entries").removeClass("entries-show");
 	}
 });

$("#education-button").click(function() {
 	if(!$("#education-entries").hasClass("entries-show")) {
 		$("#education-entries").addClass("entries-show");
 	} else {
 		$("#education-entries").removeClass("entries-show");
 	}
 });

 /*$("#header").prepend(profilePicture);
 $("#header").append(welcomeMessage);
 
 $("#workExperience").append(employer);
 $("#workExperience").append(workTitle);
 $("#workExperience").append(workDate);
 $("#workExperience").append(workLocation);
 $("#workExperience").append(workDescription);

 $("#education").append(schoolName);
 $("#education").append(schoolYears);
 $("#education").append(schoolCity);*/