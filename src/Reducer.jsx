const Reducer = (state, action) => {
    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.payload.trim(),
                letter:
                    action.payload.length > 0
                        ? action.payload[action.payload.length - 1].trim()
                        : "",
            };
        case "CHANGE_PARAGRAPH":
            return {
                ...state,
                paragraph: "changed",
            };
        case "REMOVE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;
