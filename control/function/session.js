let Session = {
    session: {},
    setSession: (session) => {
        Session.session = JSON.parse(session);
    },
    getSession: () => {
        return Session.session;
    }
};