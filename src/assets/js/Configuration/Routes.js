// Libraries
import React from 'react';

// JSX
import AboutJSX from 'TemplatesPath/jsx/About';
import SkillsJSX from 'TemplatesPath/jsx/Skills';
import ConceptsJSX from 'TemplatesPath/jsx/Concepts';
import EducationJSX from 'TemplatesPath/jsx/Education';
import ProjectJSX from 'TemplatesPath/jsx/Project';
import PageNotFoundJSX from 'TemplatesPath/jsx/PageNotFound';
import WorkExperienceJSX from 'TemplatesPath/jsx/WorkExperience';
import BasicFrameWorksJSX from 'TemplatesPath/jsx/BasicFrameWorks';

function Routes() {
    const routes = [
        {
            exact: true,
            path: '/about',
            title: 'About',
            pathComponent: () => <AboutJSX content='About' />
        },
        {
            path: '/skills',
            title: 'Skills',
            pathComponent: () => <SkillsJSX content='Skills' />
        },
        {
            path: '/education',
            title: 'Education',
            pathComponent: () => <EducationJSX content='Education' />
        },
        {
            path: '/work-experience',
            title: 'Work Experience',
            pathComponent: () => <WorkExperienceJSX content='Work Experience' />
        },
        {
            path: '/project',
            title: 'Project',
            pathComponent: () => <ProjectJSX content='Project' />
        },
        {
            path: '/basic-frameworks',
            title: 'Basic Frameworks',
            pathComponent: () => <BasicFrameWorksJSX content='Basic Frameworks' />
        },
        {
            path: '/concepts',
            title: 'Concepts',
            pathComponent: () => <ConceptsJSX content='Concepts' />
        },
        {
            path: '',
            title: '',
            pathComponent: () => <PageNotFoundJSX content='Page Not Found' />
        },
    ];

    return routes;
}

export default Routes;
