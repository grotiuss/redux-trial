export default {
    all: () => Promise.resolve([
        {
            id: 1,
            name: 'Ryan Gosling',
            address: 'Jakarta',
            phoneNumber: '123321',
            photo: 'Ryan Gosling.png'
        },
        {
            id: 2,
            name: 'Grotius Cendikia Hasiholan',
            address: 'Jakarta',
            phoneNumber: '100',
            photo: 'Grotius.png'
        }
    ])
}