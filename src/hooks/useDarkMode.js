import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    },[darkMode])

    return [darkMode, setDarkMode];
}