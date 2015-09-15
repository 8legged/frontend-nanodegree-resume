
var bio = {
  "name": "Jason Niemi",
  "role": "Web Developer",
  "contacts": {
    "mobile": "206-321-5094",
    "email": "john@example.com",
    "github": "johndoe",
    "location": "Seattle"
  },
  "bioPic": "url placeholder",
  "welcomeMessage": "My welcome message",
  "skills": [
    "skill1", "skill2", "skill3"
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "employer1",
      "title" : "title1",
      "location" : "Hawaii",
      "dates" : "1900 - 2025 (1)",
      "description" : "111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo unde eveniet eligendi, repudiandae dolore molestias eum nemo architecto alias sunt dolorum modi, illo quae expedita tempora culpa facere illum."
    },
    {
      "employer" : "employer2",
      "title" : "title2",
      "location" : "Seattle",
      "dates" : "2000 - 2099 (2)",
      "description" : "222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo ipsum sint, ut omnis voluptate dolores, dicta quidem fugiat quas eligendi quia qui, id recusandae, architecto cum ratione esse labore!"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "my title1",
      "dates" : "2039 (1)",
      "description" : "some description1",
      "images" : ["../images/197x148.gif", "../images/197x148.gif"]
    },
    {
      "title" : "my title2",
      "dates" : "2039 (2)",
      "description" : "some description2",
      "images" : ["http://placehold.it/50x50?text=image+1", "http://placehold.it/50x50?text=image+2"]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Code Fellows",
      "location": "Seattle",
      "degree": "JavaScript Boot Camp",
      "majors": ["1st major"],
      "dates" : "2/2014 - 4/2014",
      "url" : "https://www.codefellows.org/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
        {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);

// WORK
// Iterate over all jobs in the work object
for (var job in work.jobs) {
    // append them to HTMLworkStart
  $("#workExperience").append(HTMLworkStart);
  // format each job's employer...
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  // and each job title
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  // concatenate the formatted objects and append them to the page
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}

// WORK LOCATIONS
  // Write a function called locationizer(work_obj). It must take in the work object.
  //   locationizer(work_obj) must return an array of the locations in work.
  //   Use .push() to add values to the array.
  //   ALREADY IN HELPER.JS - COMMENTING OUT

function locationizer(work_obj) {
  var locationArray = [];
  for (var job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}


// EDUCATION
education.display = function() {
  for (var school in education.schools) {

    $("#education").append(HTMLschoolStart); // '<div class="education-entry"></div>'
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree); // '<a href="#">%data%' + ' -- %data%</a>'
    $(".education-entry:last").append(formattedSchoolDates); // '<div class="date-text">%data%</div>'
    $(".education-entry:last").append(formattedSchoolLocation); // '<div class="location-text">%data%</div>'
    $(".education-entry:last").append('<div style="clear: both;"></div>'); /* jshint ignore:line */
    $(".education-entry:last").append(formattedSchoolMajor); // '<em><br>Major: %data%</em>'
  }
  $("#education").append(HTMLonlineClasses); // '<h3>Online Classes</h3>'
  for (var course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart); // '<div class="education-entry"></div>'

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    $(".education-entry:last").append(formattedOnlineTitle); // '<a href="#">%data%'
    $(".education-entry:last").append(formattedOnlineSchool); // ' - %data%</a>'
    $(".education-entry:last").append(formattedOnlineDates); // '<div class="date-text">%data%</div>'
    $(".education-entry:last").append(formattedURL); // '<br><a href="#">%data%</a>'
  }
};
education.display();

// INTERNATIONALIZATION
/*
.append() internationalizeButton to the main div
Create a function called inName() that takes in a string of two names and
returns an internationalized version that looks like so: Cameron PITTMAN.
*/
function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);


// ENCAPSULATING FUNCTIONS
/*
Encapsulate display() within the projects object
projects.display() should .append() all of your projects information to the
projects section
Hint: you'll need to start each new project with an HTMLprojectStart
*/
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();


// MAPS
// Add a map
$("#mapDiv").append(googleMap);

// Can you extend the resume's Google Map?
// I think this will be looking for my understanding of scope

// Take the display functions we wrote and encapsulate them within their
// respective display, work, and education objects.

// Add something cool, like maps or charts, or personalizing the CSS
