// Central Configuration File for Artifacts and Tags
// To hide an item, comment it out or set 'visible: false'
// To add a new item, add a new object to the appropriate array

const artifactsConfig = {
    // Artifacts list (🧰 Artifacts section)
    artifacts: [
        {
            id: 'field-annotations',
            title: 'Field Annotations',
            url: 'https://chengcesar.github.io/094-FLAnno/',
            tags: ['Real Estate', 'Finance'],
            visible: true
        },
        {
            id: 'vacancy-calculator',
            title: 'Vacancy Calculator',
            url: 'https://chengcesar.github.io/081-rent-vacancy-calculator/',
            tags: ['Finance'],
            visible: true
        },
        {
            id: 'item-02',
            title: 'Item 02',
            url: '#',
            tags: ['Operations'],
            visible: true
        },
        {
            id: 'item-03',
            title: 'Item 04',
            url: '#',
            tags: ['Operations'],
            visible: true
        },
        {
            id: 'more',
            title: 'more . . .',
            url: 'artifacts.html',
            tags: [],
            visible: true
        },
        // To add a new artifact, uncomment and modify the template below:
        // {
        //     id: 'artifact-XX',
        //     title: 'Your Artifact Title',
        //     url: 'https://example.com',
        //     tags: ['Tag 1', 'Tag 2'], // Array of tag strings
        //     visible: true
        // },
    ],
    
    // Tags list (🏷️ Tags section)
    tags: [
        {
            id: 'pattern-language',
            title: 'Pattern Language',
            url: '#',
            visible: true
        },
        {
            id: 'graph-experiments',
            title: 'Graph Experiments',
            url: '#',
            visible: true
        },
        {
            id: 'ui-ux',
            title: 'UI/UX',
            url: '#',
            visible: true
        },
        {
            id: 'item-02-tag',
            title: 'Tag 03',
            url: '#',
            visible: true
        },
        {
            id: 'item-02-tag-2',
            title: 'Tag 04',
            url: '#',
            visible: true
        },
        {
            id: 'item-02-tag-3',
            title: 'Tag 05',
            url: '#',
            visible: true
        },
        {
            id: 'item-02-tag-4',
            title: 'My long tag title',
            url: '#',
            visible: true
        },
        {
            id: 'all-tags',
            title: 'Show all',
            url: '#',
            visible: true
        },
        // To add a new tag, uncomment and modify the template below:
        // {
        //     id: 'tag-XX',
        //     title: 'Your Tag Title',
        //     url: '#',
        //     visible: true
        // },
    ]
};

