// declaring jobs, projects, bio and education data arrays
var work = {
    "jobs": [{
        "employer": "Fred Hutch",
        "title": "Software Development Engineer II",
        "location": "Seattle, WA",
        "dates": "2016- Current",
        "url": "https://www.fredhutch.org/en.html",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "employer": "Fred Hutch",
        "title": "System Analyst/Programmer II",
        "location": "Seattle, WA",
        "dates": "2015- Current",
        "url": "https://www.fredhutch.org/en.html",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "employer": "Fred Hutch",
        "title": "Program Manager",
        "location": "Seattle, WA",
        "dates": "2013- 2015",
        "url": "https://www.fredhutch.org/en.html",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "employer": "University of Washington",
        "title": "Research Scientist",
        "location": "Seattle, WA",
        "dates": "2011- 2013",
        "url": "http://www.uwmedicine.org/",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]
};
var projects = {
    "projects": [{
        "title": "Oncoscape",
        "dates": "2015 -Current",
        "description": "Seattle Tumor Translational Research (STTR) assists cancer researchers and clinicians to extract biological meaning through the development of custom software solutions. The rapid growth of both public datasets and analytic methods presents challenges and opportunities. To maximize impact researchers often need to enlist the support of biostatisticians, data scientists and software engineers that specialize in cloud technologies. To help mitigate these challenges, STTR has built a cloud-based platform called Oncoscape.  Our solution allows users to upload clinical and molecular data; leverage industry standard analytic libraries; augment with NCI sponsored datasets and visualize with dozens of novel online interactive tools. Our mission is to accelerate your science.",
        "images": ["images/resourcesOncoscape.png"],
        "url": "https://oncoscape.v3.sttrcancer.org/"

    }, {
        "title": "Hicor-IQ",
        "dates": "2017- Current",
        "description": "A single resource to be used by payers, providers, and researchers for information about what matters in cancer care: quality and cost.",
        "images": ["images/hicor.png"],
        "url": "https://hicoriq.org/#/"

    }, {
        "title": "STTRConnect",
        "dates": "2015- Current",
        "description": "An externally facing website for finding experts and resources within the computational, biological, or clinical fields of biomedical research.",
        "images": ["http://resources.sttrcancer.org/photos/member.jpg", "http://resources.sttrcancer.org/photos/resources.jpg"],
        "url": "http://resources.sttrcancer.org/member-connect"

    }]
};

var bio = {
    "name": "Gretchen Krenn",
    "role": "Programmer",

    "contacts": {
        "moblie": "206-331-2720",
        "email": "gidget5169@gmail.com",
        "github": "@grettygoose",
        "location": "Seattle, WA"
    },
    "welcomeMessage": "Cancer Researcher -- Front-End-Developer -- Dog Lover -- Traveluster",
    "skills": ["HTML", "CSS (Scss)", "Bootstrap" ,"JQuery", "GitHub", "CraftCMS", "D3"],
    "biopic": "images/gretty.jpg",


};

var education = {
    "schools": [{
        "name": "Saint Ambrose University",
        "location": "Davenport, IA",
        "degree": "BS",
        "majors": ["Cell Biology"],
        "dates": "Graduated 2007",
        "url": "http://www.sau.edu/"
    }, {
        "name": "University of Washington",
        "location": "Seattle, WA",
        "degree": "CompSci Certification",
        "majors": ["SQL Server Development"],
        "dates": "Graduated 2015",
        "url": "https://www.pce.uw.edu/certificates/sql-server-development"
    }],

    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "2017-Current",
        "url": "https://www.udacity.com/"
    }]
};

// rendering bio as encapsulation
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.moblie));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    // if (bio.skills.length > 0) {
    //     $("#header").append(HTMLskillsStart);

    //     for (i in bio.skills) {
    //         $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    //     }
    // }
    for (var i in formattedContactInfo) {
        $("#topContacts, #footerContacts").append(formattedContactInfo[i]);
    }
};
bio.display();


// Code CORRECTION new forEach loop
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedEmployerLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedEmployerLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });
};
work.display();


// Code CORRECTION new forEach loop
projects.display = function() {
    projects.projects.forEach(function(project) {
        formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
        formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedHTMLprojectTitle)
            .append(formattedHTMLprojectDates)
            .append(formattedHTMLprojectDescription);
        project.images.forEach(function(image) {
            formattedHTMlprojectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedHTMlprojectImage);
        });


    });
};
projects.display();


// Code CORRECTION new forEach loop
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);

    });

    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);

    });
};
education.display();

// render google map
$("#mapDiv").append(googleMap);