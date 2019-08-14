// Libraries
import React from 'react';

// JSX
import AboutJSX from 'TemplatesPath/jsx/About';
import SkillsJSX from 'TemplatesPath/jsx/Skills';
import PageNotFoundJSX from 'TemplatesPath/jsx/PageNotFound';
import EducationJSX from 'TemplatesPath/jsx/Education';
import WorkExperienceJSX from 'TemplatesPath/jsx/WorkExperience';

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
            path: '',
            title: '',
            pathComponent: () => <PageNotFoundJSX content='Page Not Found' />
        },
    ];

    return routes;
}

export default Routes;
