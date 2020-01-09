import { useReducer, useEffect } from 'react';

// loading, success, error 총 3가지 action.
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps = []) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });
}



























