import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);
    const body = document.querySelector('body');

    useEffect(() => {
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
        console.log('toggled');
    },[darkMode])

    return [darkMode, setDarkMode];
}