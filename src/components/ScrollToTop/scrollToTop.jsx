import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll al inicio de la página cada vez que la ruta cambia
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]); // Dependencia: se ejecuta cada vez que 'pathname' cambia

    return null; // Este componente no renderiza nada en el DOM
};

export default ScrollToTop;
