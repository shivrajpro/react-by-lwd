import { createSelector } from "reselect";

export const getPosts = (state) => state.posts;
export const getFilter = (state) => state.filter;

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