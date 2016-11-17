 var welcomeMessage = "Hello guys! I hope that with this website you will get to learn about me a little bit and maybe we can work together as a team";
 
 var skills = ["HTML", "CSS", "Java", "SQL", "Agile", "JSP", "Struts"];

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
 			"description": "Java, SQL, HTML and CSS programmer and tester."
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
			"title":"animals",
			"date": "jul - 2016",
			"description": "A web page that simulates a card of a game similar to Hearthstone or Magic the gathering"
		},

		{
			"title": "portfolio",
			"date": "oct - 2016",
			"description": "A web page describing a little bit of yourself and one that you can show some web techniques"
		}

	],
	"display": function () {
		for(var i = 0; i < projects.allProjects.length; i++) {
			$("#projects").append(HTMLprojectStart);
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
 	   	"location": "São Carlos, BR",
 	   	"course": ["Computer Science"]
 	   },
 	   {
 	   	"name": "Alura",
 	   	"location": "São Paulo",
 	   	"course": ["TDD", "Object Orientation", "Hibernate"]
 	   },
 	   {
 	   	"name": "Udacity",
 	   	"location": "São Paulo",
 	   	"couse": ["Front-End Developer Nanodegree"]
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
	 	var skill = HTMLskills.replace('%data%', bio.skills[6]);
	 	$("#skills").append(skill);
	 }
 }

 function displayWork() {
	 for(job in work.jobs) {
	 	$("#workExperience").append(HTMLworkStart);
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
 projects.display();
 $("#mapDiv").append(googleMap);


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