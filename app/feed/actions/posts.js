/**
 * Feed post actions
 */

/**
 * Add post
 * @param {Object} body
 */
export function addPost(body) {
    return { type: 'ADD_POST', body };
}
