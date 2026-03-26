//This is how you edit HTML through Javascript

const newP = document.createElement('p');
newP.textContent = 'My new paragraph';
newP.classList.add('green');
document.body.append(newP);

const newSection = document.createElement('section');

//The code commented below is another way to add code that can edit HTML
// const newHeadline = document.createElement('h2');
// newHeadline.textContext = 'CSE 121b'
// newSection.append(newHeadline);

const coursCode = 'CSE 121b';

newSection.innerHTML = `<h2>${coursCode}</h2>
<p>Javascript Language</p>`;

document.body.append(newSection);

