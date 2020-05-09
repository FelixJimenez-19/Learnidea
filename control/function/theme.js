const theme = {
    main: () => {
        let session = Session.getSession();
        if(session.usuario_tema_mode_dark == true) {
            document.querySelector("html").style.setProperty('--primary', session.usuario_tema_dark_primary);
            document.querySelector("html").style.setProperty('--primary_hover', session.usuario_tema_dark_primary_hover);
            document.querySelector("html").style.setProperty('--secondary', session.usuario_tema_dark_secondary);
            document.querySelector("html").style.setProperty('--secondary_hover', session.usuario_tema_dark_secondary_hover);
            document.querySelector("html").style.setProperty('--tertiary', session.usuario_tema_dark_tertiary);
            document.querySelector("html").style.setProperty('--tertiary_hover', session.usuario_tema_dark_tertiary_hover);
            document.querySelector("html").style.setProperty('--quaternary', session.usuario_tema_dark_quaternary);
            document.querySelector("html").style.setProperty('--quaternary_hover', session.usuario_tema_dark_quaternary_hover);
            document.querySelector("html").style.setProperty('--success', session.usuario_tema_dark_success);
            document.querySelector("html").style.setProperty('--info', session.usuario_tema_dark_info);
            document.querySelector("html").style.setProperty('--warning', session.usuario_tema_dark_warning);
            document.querySelector("html").style.setProperty('--error', session.usuario_tema_dark_error);
        } else {
            document.querySelector("html").style.setProperty('--primary', session.usuario_tema_primary);
            document.querySelector("html").style.setProperty('--primary_hover', session.usuario_tema_primary_hover);
            document.querySelector("html").style.setProperty('--secondary', session.usuario_tema_secondary);
            document.querySelector("html").style.setProperty('--secondary_hover', session.usuario_tema_secondary_hover);
            document.querySelector("html").style.setProperty('--tertiary', session.usuario_tema_tertiary);
            document.querySelector("html").style.setProperty('--tertiary_hover', session.usuario_tema_tertiary_hover);
            document.querySelector("html").style.setProperty('--quaternary', session.usuario_tema_quaternary);
            document.querySelector("html").style.setProperty('--quaternary_hover', session.usuario_tema_quaternary_hover);
            document.querySelector("html").style.setProperty('--success', session.usuario_tema_success);
            document.querySelector("html").style.setProperty('--info', session.usuario_tema_info);
            document.querySelector("html").style.setProperty('--warning', session.usuario_tema_warning);
            document.querySelector("html").style.setProperty('--error', session.usuario_tema_error);
        }
    }
}
theme.main();