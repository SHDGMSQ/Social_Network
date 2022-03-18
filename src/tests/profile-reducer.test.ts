import {addPostAC, addTitleValueAC, profileReducer} from "../redux/profile-reducer";
import {ProfilePageType} from "../App";


let startState: ProfilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
        ],
        newPostText: '',
        profile: null
    }
})

//TEST FOR ADD-POST
test('add post should be correct', () => {

    const endState = profileReducer(startState, addPostAC())
    expect(endState.posts.length).toBe(3)
    expect(endState.newPostText).toBe('')
})

//TEST FOR ADD-TITLE-VALUE
test('add title value should be correct', () => {

    const message = 'New message'

    const endState = profileReducer(startState, addTitleValueAC(message))

    expect(endState.newPostText).toBe('New message')
})

