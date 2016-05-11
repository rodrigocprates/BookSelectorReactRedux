/**
 * State param is only the piece of application state that this reducer
 * is responsible for
 */
export default function(state = null, action) {
                        // ES6 syntax meaning if state==undefined
                        // set to null
    
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}