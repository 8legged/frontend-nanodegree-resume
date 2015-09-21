var bio = {
  'name': 'Jason Niemi',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '555-555-55554',
    'email': 'aliasorid@gmail.com',
    'twitter': '@testyunicorn',
    'github': 'https://github.com/8legged/',
    'blog': 'http://8legged.github.io/',
    'location': 'Seattle'
  },
  'bioPic': 'images/fry.jpg',
  'welcomeMsg': "Hi! I'm a developer based in Seattle, WA. I'm trying to do my part to make the web as fast as possible, highly readable, responsive, and easy to navigate.", /* jshint ignore:line */
  'skills': [
    'Reading', 'Riting', 'Rithmatic'
  ]
};

var work = {
  'jobs': [ {
    'employer': 'RealNetworks',
    'title': 'Lead Content Producer',
    'location': 'Seattle',
    'dates': '2009 - 2013',
    'description': '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo unde eveniet eligendi, repudiandae dolore molestias eum nemo architecto alias sunt dolorum modi, illo quae expedita tempora culpa facere illum.'
  } ]
};

var projects = {
  'projects': [ {
    'title': '1st project placeholder',
    'dates': 'date placeholder',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sequi, ipsum quidem quibusdam! Iusto sint praesentium voluptas. Incidunt atque reprehenderit molestiae tenetur suscipit numquam odit, repellendus saepe perspiciatis, repudiandae consectetur!',
    'images': [ 'images/197x148.gif', 'images/197x148.gif' ]
  }, {
    'title': '2nd project placeholder',
    'dates': 'date placeholder',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quam nulla blanditiis illo maxime quae aliquid, voluptatibus sint odio in vel quod, molestias voluptatem quo! Minus debitis praesentium vitae doloremque?',
    'images': [ 'images/197x148.gif', 'images/197x148.gif' ]
  } ]
};

var education = {
  'schools': [ {
    'name': 'Code Fellows',
    'location': 'Seattle',
    'degree': 'JavaScript Boot Camp',
    'majors': [ 'JavaScript, Rails, Node.js' ],
    'dates': '2/2014 - 4/2014',
    'url': 'https://www.codefellows.org/'
  } ],
  'onlineCourses': [ {
    'title': 'JavaScript Basics',
    'school': 'Udacity',
    'dates': '2015',
    'url': 'https://www.udacity.com/course/javascript-basics--ud804'
  }, {
    'title': 'Front-End Web Developer Nanodegree',
    'school': 'Udacity',
    'dates': '2015',
    'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  } ]
};

bio.display = function () {
  // HEADER NAME/ROLE
  var formattedName = HTMLheaderName.replace('%data%', bio.name );
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role );
  $('#header').prepend( formattedRole );
  $('#header').prepend( formattedName );
  // HEADER CONTACT
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile );
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email );
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter );
  var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github );
  var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog );
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location );
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic );
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg );
  $('#topContacts').append( formattedMobile );
  $('#topContacts').append( formattedEmail );
  $('#topContacts').append( formattedTwitter );
  $('#topContacts').append( formattedGitHub );
  $('#topContacts').append( formattedBlog );
  $('#topContacts').append( formattedLocation );
  // FOOTER CONTACT
  $('#footerContacts').append( formattedMobile );
  $('#footerContacts').append( formattedEmail );
  $('#footerContacts').append( formattedTwitter );
  $('#footerContacts').append( formattedGitHub );
  $('#footerContacts').append( formattedBlog );
  $('#footerContacts').append( formattedLocation );
  // HEADER IMAGE
  $('#header').append( formattedBioPic );
  // HEADER WELCOME
  $('#header').append( formattedWelcome );
  // HEADER SKILLS

  // Reading, Riting, Rithmatic
  $('#header').append( HTMLskillsStart );
  for ( var skill in bio.skills ) {
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[ skill ] );

    $('#skills').append( formattedSkill );
  }
};

bio.display();

// WORK
work.display = function () {
  for ( var job in work.jobs ) {
    $('#workExperience').append( HTMLworkStart );
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[ job ].employer );
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[ job ].title );
    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[ job ].dates );
    var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[ job ].location );
    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[ job ].description );
    $('.work-entry:last').append( formattedEmployer + formattedTitle );
    $('.work-entry:last').append( formattedDates );
    $('.work-entry:last').append( formattedLocation );
    $('.work-entry:last').append( formattedDescription );
  }
};
work.display();

// WORK LOCATIONS
function locationizer( work_obj ) {
  var locationArray = [];
  for ( var job in work_obj.jobs ) {
    var newLocation = work_obj.jobs[ job ].location;
    locationArray.push( newLocation );
  }
  return locationArray;
}

projects.display = function () {
  for ( var project in projects.projects ) {
    $('#projects').append( HTMLprojectStart );
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[ project ].title );
    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[ project ].dates );
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[ project ].description );
    $('.project-entry:last').append( formattedTitle );
    $('.project-entry:last').append( formattedDates );
    $('.project-entry:last').append( formattedDescription );
    if ( projects.projects[ project ].images.length > 0 ) {
      for ( var image in projects.projects[ project ].images ) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[ project ].images[ image ] );
        $('.project-entry:last').append( formattedImage );
      }
    }
  }
};
projects.display();

// EDUCATION
education.display = function () {
  for ( var school in education.schools ) {
    $('#education').append( HTMLschoolStart );
    var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[ school ].name );
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[ school ].degree );
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[ school ].dates );
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[ school ].location );
    var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[ school ].majors );
    $('.education-entry:last').append( formattedSchoolName + formattedSchoolDegree );
    $('.education-entry:last').append( formattedSchoolDates );
    $('.education-entry:last').append( formattedSchoolLocation );
    $('.education-entry:last').append('<div style="clear: both;"></div>'); /* jshint ignore:line */
    $('.education-entry:last').append( formattedSchoolMajor );
  }
  $('#education').append( HTMLonlineClasses );
  for ( var course in education.onlineCourses ) {
    $('#education').append( HTMLschoolStart );
    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[ course ].title );
    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[ course ].school );
    var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[ course ].dates );
    var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[ course ].url );
    $('.education-entry:last').append( formattedOnlineTitle + formattedOnlineSchool );
    $('.education-entry:last').append( formattedOnlineDates );
    $('.education-entry:last').append( formattedURL );
  }
};
education.display();

// LOG CLICKS
$( document ).click( function ( loc ) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks( x, y );
} );

// INTERNATIONALIZATION
function inName( name ) {
  name = bio.name.trim().split(' ');
  console.log( name );
  name[ 1 ] = name[ 1 ].toUpperCase();
  name[ 0 ] = name[ 0 ].slice( 0, 1 ).toUpperCase() + name[ 0 ].slice( 1 ).toLowerCase();
  return name[ 0 ] + ' ' + name[ 1 ];
}
$('#main').append( internationalizeButton );

// MAP
$('#mapDiv').append( googleMap );

// Can you extend the resume's Google Map?
// I think this will be looking for my understanding of scope

// Take the display functions we wrote and encapsulate them within their
// respective display, work, and education objects.

// Add something cool, like maps or charts, or personalizing the CSS


