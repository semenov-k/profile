import ILocalizedContent from "../interfaces";
import * as commonTechStack from '../common/techStack';


export const content: ILocalizedContent = {
  uiContent: {
    developmentApproaches: 'Development Approaches',
    frontend: 'Frontend',
    backend: 'Backend',
    devOps: 'DevOps',
    about: 'About me',
    languages: 'Languages',
    workExperience: 'Work Experience',
    clickToSee: 'Show',
    lastUpdated: 'Last updated'
  },
  pageContent: {
    pageTitle: 'Kirill Semenov - resume',
    fullName: 'Kirill Semenov',
    role: 'Senior Software Engineer',
    email: 'semenov.develop@gmail.com',
    github: 'https://github.com/semenov-k',
    experienceDescription: '5+ years experience',
    aboutMe: [
      'In my spare time, I develop home projects (from games to web-applications). ' +
      'I try to test all the latest technologies on them.',
      'I write code so that it is easy to test and scale.',
      'I love working with people who have something to learn.'
    ],
    stack: {
      developmentApproaches: ['OOP', 'FP', 'REST', 'JSON-RPC', 'GraphQL', 'KISS', 'DRY', 'SOLID', 'Writing E2E и Unit tests', 'Clean Architecture'],
      frontend: commonTechStack.frontend,
      backend: commonTechStack.backend,
      devOps: commonTechStack.devOps,
    },
    languages: [
      { name: 'Russian', levelDescription: 'Native' },
      { name: 'English', levelDescription: 'Working Professional' }
    ],
    experienceTimeline: [
      {
        companyName: 'SERVION',
        year: '2021 - 2022',
        description: 'Was a CTO of a small startup. Together with the team, developed a service ' +
          'for interaction with customers in the housing and utilities sector. ' +
          'We developed a platform for taking meter readings, accepting payments, ' +
          'and interacting with management organizations.',
        details: [
          'Designing the architecture and implementation of the key nodes of the system.',
          'Solving technical and implementation issues with the team.',
          'Organization of business processes within development team.',
          'Formation and training of development team.'
        ],
      },
      {
        companyName: 'QIWI',
        year: '2019 - 2021',
        description: 'Joined the company as a developer in the internal services team. ' +
          'Developed products for use within the company ' +
          '(contract tracking, unified authentication and authorization system). ' +
          'Later I was transferred to the team of payment services in the role of lead developer. ' +
          'Together with the team we successfully implemented the integration of external systems, ' +
          'as well as the development of a new architecture of payment services.',
        details: [
          'Development of technical prototypes.',
          'Selection and training of new team members.',
          'Organization of the transition to the new technology stack.',
          'Optimization of processes within the team.',
          'Developing a plan of gradual integration of the new payment services architecture into the existing one.',
          'Design of the application architecture.'
        ],
      },
      {
        companyName: 'Freelance',
        year: '2019',
        description: 'Development of an e-commerce solution for the sale of digital goods. ' 
          +'Development of adaptive pages according to the designer\'s layout. ' 
          +'Backend implementation, including integration with vendors and payment systems.',
        details: [],
      },
      {
        companyName: 'BILLING ONLINE LTD',
        year: '2016 - 2018',
        description: 'First job as a developer. Was engaged in the development and support of PHP-applications. ' +
        'Participated in the development of a billing and payment acceptance system.',
        details: [],
      }
    ],
  }
}
