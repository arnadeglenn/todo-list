import { projectArr } from "./add-to-do";

const projectList = document.querySelector('.project-list');
const projectTitle = document.querySelector('.project-title');
const projectDescription = document.querySelector('.project-description');



const renderProject = function() {

    for(let i = 0; i < projectArr.length; i++) {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.setAttribute('data-index', `${i}`);
        projectList.appendChild(projectItem);

        const projectTitleElement = document.createElement('p');
        projectTitleElement.innerHTML = projectArr[i].projectHeading;
        projectItem.appendChild(projectTitleElement);

        const svgDeleteProject = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgDeleteProject.classList.add('delete-svg');
        svgDeleteProject.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgDeleteProject.setAttribute('viewBox', '0 0 24 24');
        svgDeleteProject.setAttribute('data-index', `${i}`);
        svgDeleteProject.innerHTML = "<title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' />"
        projectItem.appendChild(svgDelete);

    }

}

export {renderProject, projectList};