const users = {
    sam: {
        name: 'Sam Soffes',
        avatar: 'http://lorempixel.com/40/40/people/',
    },
    meg: {
        name: 'Meg Robichaud',
        avatar: 'http://lorempixel.com/40/40/people/',
    },
    kerem: {
        name: 'Kerem Suer',
        avatar: 'http://lorempixel.com/40/40/people/',
    },
    liang: {
        name: 'Liang Shi',
        avatar: 'http://lorempixel.com/40/40/people/',
    },
    jessica: {
        name: 'Jessica Tuan',
        avatar: 'http://lorempixel.com/40/40/people/',
    }
};

const initialState = [
    {
        id: 0,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'text',
        user: users.sam,
    },
    {
        id: 1,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'photo',
        image: 'http://lorempixel.com/output/nature-q-c-640-480-3.jpg',
        user: users.meg,
    },
    {
        id: 2,
        body: 'Etiam fermentum scelerisque efficitur. Cras mauris augue, porttitor at bibendum at, vestibulum tincidunt metus.',
        format: 'text',
        user: users.kerem,
    }
];

export default function posts(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return [{
                id: state.reduce((maxId, post) => Math.max(post.id, maxId), -1) + 1,
                body: action.body,
                format: action.format,
                user: user.jessica
            }, ...state]

        default:
            return state;
    }
}
