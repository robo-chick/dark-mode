import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
    });
    return [storedValue, setStoredValue];
}

export default useLocalStorage;