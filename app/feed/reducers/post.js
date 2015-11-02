/**
 * Feed post reducers
 */

/**
 * Users
 * @type {Object}
 */
const users = {
    sam: {
        name: 'Sam Soffes',
        avatar: 'http://lorempixel.com/40/40/people/1',
    },
    meg: {
        name: 'Meg Robichaud',
        avatar: 'http://lorempixel.com/40/40/people/2',
    },
    kerem: {
        name: 'Kerem Suer',
        avatar: 'http://lorempixel.com/40/40/people/3',
    },
    liang: {
        name: 'Liang Shi',
        avatar: 'http://lorempixel.com/40/40/people/4',
    },
    jessica: {
        name: 'Jessica Tuan',
        avatar: 'http://lorempixel.com/40/40/people/5',
    }
};

/**
 * Initial posts
 * @type {Array}
 */
const initialState = [
    {
        id: 0,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'text',
        date: '3m',
        user: users.sam,
    },
    {
        id: 1,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'photo',
        date: '10m',
        image: 'http://lorempixel.com/640/480/nature/1',
        user: users.meg,
    },
    {
        id: 2,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'text',
        date: '25m',
        user: users.kerem,
    },
    {
        id: 3,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'photo',
        date: '50m',
        image: 'http://lorempixel.com/640/480/nature/2',
        user: users.jessica,
    },
    {
        id: 4,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'text',
        date: '1h',
        user: users.liang,
    }
];

export default function posts(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return [{
                id: state.reduce((maxId, post) => Math.max(post.id, maxId), -1) + 1,
                body: action.body,
                format: 'text',
                date: 'just now',
                user: users.jessica
            }, ...state]

        default:
            return state;
    }
}
