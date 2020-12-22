const presentation = (session) => {
    const { name } = session.userData;
    session.send(`Nice to meet you ${name}, my wisdom is at your service.`);
    session.beginDialog('/define');
};

module.exports = presentation;
