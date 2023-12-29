import { createSelector } from "reselect";

export const getPosts = (state) => state.posts;
export const getFilter = (state) => state.filter;
export const getPostById = (state, props) => state.posts.find(p => p.id === props.id)

export const getPost = () => {
    return createSelector([getPostById], (post) => {
        return post;
    })
}
export const getActivePosts = createSelector(
    [getPosts, getFilter],
    (posts, filter) => {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return posts.filter(p => p.isActive)
            case 'SHOW_INACTIVE':
                return posts.filter(p => !p.isActive)

            default: return posts
        }
    })