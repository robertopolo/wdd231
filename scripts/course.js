const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description:
      'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
    technology: ['Python'],
    completed: true,
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description:
      'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
    technology: ['HTML', 'CSS'],
    completed: true,
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description:
      'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
    technology: ['Python'],
    completed: true,
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description:
      'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
    technology: ['C#'],
    completed: true,
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description:
      'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true,
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description:
      'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false,
  },
];
const coursesList = document.querySelector('#courses-list');
const buttons = document.querySelectorAll('#filters-courses button');
const creditsText = document.querySelector('#credits');
const courseDetails = document.querySelector('#course-details');

function showCourse(c) {
  let p = document.createElement('p');

  p.textContent = `${c.subject} ${c.number}`;
  if (!c.completed) {
    p.setAttribute('class', 'pending');
  }
  coursesList.appendChild(p);
  p.addEventListener('click', () => displayCourseDetails(c));
}

function showCredits(c) {
  const credits = c.reduce((acc, course) => acc + course.credits, 0);
  let p = document.createElement('p');

  p.innerHTML = `Total credits: <span>${credits}</span>`;
  creditsText.appendChild(p);
}

function createCourses(arr) {
  arr.forEach((course) => {
    showCourse(course);
  });
}

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
  <button id="close-modal">❌</button>
  <h2>${course.subject} ${course.number}</h2>
  <h3>${course.title}</h3>
  <p><strong>Credits</strong>: ${course.credits}</p>
  <p><strong>Certificate</strong>: ${course.certificate}</p>
  <p>${course.description}</p>
  <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;

  courseDetails.showModal();

  const closeModal = document.querySelector('#close-modal');

  closeModal.addEventListener('click', () => {
    courseDetails.close();
  });
}

createCourses(courses);
showCredits(courses);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    coursesList.innerHTML = '';
    creditsText.innerHTML = '';

    let optionSelected = button.textContent;

    if (optionSelected === 'All') {
      createCourses(courses);
      showCredits(courses);
    } else {
      let coursesFiltered = courses.filter(
        (course) => course.subject === optionSelected
      );

      createCourses(coursesFiltered);
      showCredits(coursesFiltered);
    }
  });
});
