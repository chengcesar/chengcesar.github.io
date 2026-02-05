// Central Configuration File for Projects Gallery
// To hide a project, comment it out or set 'visible: false'
// To add a new project, add a new object to this array

const projectsConfig = [
    {
        id: 'project-01',
        title: 'Project 01',
        description: 'Placeholder description text for project one',
        coverImage: 'docs/project-01/cover.png', // Falls back to cover.svg if PNG doesn't exist
        tags: ['UI/UX', 'Architecture'],
        visible: true
    },
    {
        id: 'project-02',
        title: 'Project 02',
        description: 'Placeholder description text for project two',
        coverImage: 'docs/project-02/cover-02.png',
        tags: ['Pattern Language'],
        visible: true
    },
    {
        id: 'project-03',
        title: 'Project 03',
        description: 'Placeholder description text for project three',
        coverImage: 'docs/project-03/cover-05.png',
        tags: ['Graph Experiments', 'UI/UX'],
        visible: true
    },
    {
        id: 'project-04',
        title: 'Project 04',
        description: 'Placeholder description text for project four',
        coverImage: 'docs/project-04/cover-04.png',
        tags: ['Architecture'],
        visible: true
    },
    {
        id: 'project-05',
        title: 'Project 05',
        description: 'Placeholder description text for project five',
        coverImage: 'docs/project-05/cover-055.png',
        tags: ['UI/UX'],
        visible: true
    },
    {
        id: 'project-06',
        title: 'Project 06',
        description: 'Placeholder description text for project six',
        coverImage: 'docs/project-06/Cover-UI.png',
        tags: ['Graph Experiments'],
        visible: true
    },
    {
        id: 'project-07',
        title: 'Project 07',
        description: 'Placeholder description text for project seven',
        coverImage: 'docs/project-07/Frame 2.png',
        tags: ['Pattern Language', 'Architecture'],
        visible: true
    },
    {
        id: 'project-08',
        title: 'Project 08',
        description: 'Placeholder description text for project eight',
        coverImage: 'docs/project-08/Cover-Marino.png',
        tags: ['UI/UX', 'Graph Experiments'],
        visible: true
    },
    {
        id: 'project-09',
        title: 'Project 09',
        description: 'Placeholder description text for project nine',
        coverImage: 'docs/project-09/Cover-flano.png',
        tags: ['Architecture'],
        visible: true
    },
    {
        id: 'project-10',
        title: 'Project 10',
        description: 'Placeholder description text for project ten',
        coverImage: 'docs/project-10/cover.jpg',
        tags: ['Pattern Language'],
        visible: true
    },
    {
        id: 'project-11',
        title: 'Project 11',
        description: 'Placeholder description text for project eleven',
        coverImage: 'docs/project-11/cover.jpg',
        tags: ['UI/UX', 'Architecture', 'Graph Experiments'],
        visible: true
    },
    {
        id: 'project-12',
        title: 'Project 12',
        description: 'Placeholder description text for project twelve',
        coverImage: 'docs/project-12/cover.jpg',
        tags: ['Graph Experiments'],
        visible: true
    },
    
    // Example: To hide a project, you can either:
    // 1. Comment it out completely (like below)
    // 2. Set visible: false
    
    // {
    //     id: 'project-13',
    //     title: 'Project 13',
    //     description: 'This project is hidden',
    //     coverImage: 'docs/project-13/cover.jpg',
    //     visible: false
    // },
    
    // To add a new project, uncomment and modify the template below:
    // {
    //     id: 'project-XX',
    //     title: 'Your Project Title',
    //     description: 'Your project description',
    //     coverImage: 'docs/project-XX/cover.jpg', // or .png, .svg
    //     tags: ['UI/UX', 'Architecture'], // Array of tag strings matching tags in artifacts-config.js
    //     visible: true
    // },
];

