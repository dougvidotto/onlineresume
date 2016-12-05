var bio = {
    "name": "Douglas Carvalho",
    "role": "Web developer",
    "contacts": {
        "mobile": "11991950371 (Brazil)",
        "email": "doug.vidotto@gmail.com",
        "twitter": "@douglasVidotto",
        "github": "https://github.com/dougwebcrafter",
        "location": "São Paulo"
    },
    "welcomeMessage": "Hello guys! With this website I hope I can show you a little bit of what I already did and what I can do as a web developer." +
        " Also, I am eager to join a nice team with passion about technology and that enjoys to use them to solve people\'s everyday problems",
    "skills": ["HTML", "CSS", "Java", "TDD", "SQL", "Agile"],
    "biopic": "images/profile.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var profilePic = HTMLbioPic.replace("%data%", bio.biopic);
        var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);



        $("#header").append(welcomeMessage);
        $("#topContacts").prepend(contactMobile);
        $("#topContacts").prepend(contactEmail);
        $("#topContacts").prepend(contactTwitter);
        $("#topContacts").prepend(contactGithub);
        $("#topContacts").prepend(contactLocation);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").prepend(profilePic);



        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skill = HTMLskills.replace('%data%', bio.skills[i]);
            $("#skills").append(skill);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "FAPESP",
        "title": "System Analyst",
        "location": "São Paulo",
        "dates": "In progress",
        "description": "Java programmer, Tester, Technical documentation"
    }, {
        "employer": "Itaú Unibanco",
        "title": "System Analyst",
        "location": "São Paulo",
        "dates": "September - 2011 to July - 2012",
        "description": "Project Manager, Technical documentation"
    }, {
        "employer": "Freeddom",
        "title": "System Analyst",
        "dates": "August - 2010 to September - 2011",
        "location": "São Paulo",
        "description": "Java programmer"
    }],
    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

            $(".work-entry:last").append(workEmployer + workTitle);

            var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].description);
            var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(workDates);
            $(".work-entry:last").append(workLocation);
            $(".work-entry:last").append(workDescription);
        }
    }
};

var projects = {
    "projects": [{
            "title": "Animals",
            "dates": "jun 2016 - jul 2016",
            "description": "A web page that simulates a card of a game similar to Hearthstone or Magic the gathering",
            "images": ["images/chameleon-small.jpg"]
        },

        {
            "title": "Arcade Game",
            "dates": "aug 2016 - oct 2016",
            "description": "A game created in javascript of a chicken trying to cross the street avoiding all obstacles",
            "images": ["images/arcade-small.jpg"]
        }

    ],
    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(projectTitle);
            var projectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(projectDate);
            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(projectDescription);

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(projectImage);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Universidade Federal de São Carlos",
        "location": "São Carlos, SP",
        "degree": "Computer Science",
        "majors": ["CS"],
        "dates": "2007(Mar) - 2011(Aug)",
        "url": "http://www.ufscar.br"
    }],
    "onlineCourses": [{
        "title": "Object Orientation with Java",
        "school": "Alura",
        "dates": "2010(Sept) - 2011(Jul)",
        "url": "https://www.alura.com.br/"
    }, {
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "dates": "2016(Apr) - In Progress",
        "url": "https://www.udacity.com"
    }],
    display: function() {
        /*Schools*/
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

            $(".education-entry:last").append(schoolName + schoolDegree);

            var schoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(schoolDate);
            $(".education-entry:last").append(schoolLocation);

            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(schoolMajor);
            }
        }

        /*Online Courses*/
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var k = 0; k < education.onlineCourses.length; k++) {
            var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
            var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
            $(".education-entry:last").append(courseTitle + courseSchool);

            var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
            $(".education-entry:last").append(courseDates);

            var courseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
            $(".education-entry:last").append(courseURL);
        }


    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

$("#work-experience-button").click(function() {
    if (!$("#work-entries").hasClass("entries-show")) {
        $("#work-entries").addClass("entries-show");
    } else {
        $("#work-entries").removeClass("entries-show");
    }
});

$("#projects-button").click(function() {
    if (!$("#project-entries").hasClass("entries-show")) {
        $("#project-entries").addClass("entries-show");
    } else {
        $("#project-entries").removeClass("entries-show");
    }
});

$("#education-button").click(function() {
    if (!$("#education-entries").hasClass("entries-show")) {
        $("#education-entries").addClass("entries-show");
    } else {
        $("#education-entries").removeClass("entries-show");
    }
});