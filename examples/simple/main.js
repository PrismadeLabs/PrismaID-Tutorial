function loadBody() {
    const tutorialElement = document.querySelector('prismaid-tutorial')

    // parameters can be updated dynamicaly
    // e.g.
    //
    // tutorialElement.welcomeSubtitle = "Hello Tutorial!"
    //
    // etc.

    // attach the event to be called after the "FINISH" button is pushed
    tutorialElement.addEventListener('tutorialCompleted', () => {
        alert("Tutorial Completed")
    })
}
