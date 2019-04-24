import initialState from '../initialState';

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}