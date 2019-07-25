import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';



export const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage('dark-mode');
    const body = document.querySelector('body');

    useEffect(() => {
        mode === 'dark-mode' ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    },[mode])

    return [mode, setMode, storedValue, setStoredValue];
}