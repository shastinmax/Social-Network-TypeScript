import {addPostAC, deletePostAC, profileReducer, ProfileType} from "./profile-reducer";


let state: ProfileType = {
    posts: [
        {id: 1, message: 'Hi,how are you', likesCount: 12},
        {id: 2, message: 'Hi, you', likesCount: 11},
        {id: 3, message: 'Hi,how are you', likesCount: 11},
        {id: 4, message: 'how are you', likesCount: 12}
    ],
    newPostText: 'it-kamas',
    profile: null,
    status: ''
}

test('length post should be incremented', () => {

    // 1. start data
    let action = addPostAC('itMax')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
})
test('message of new post should be correct', () => {

    // 1. start data
    let action = addPostAC('itMax')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[4].message).toBe('itMax')
})

test('after deletetinm length post should be decremented', () => {

    // 1. start data
    let action = deletePostAC(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

