// Projekte Function
function changeText(pos) {
    let title = document.getElementById("projekte-title");
    let datum = document.getElementById("projekte-datum");
    let text = document.getElementById("projekte-text");
    switch (pos) {
        case "1":
            title.innerText = "BzH Bern"
            datum.innerText = "2020 - Jetzt"
            text.innerHTML = "Das Projekt BzH Bern (Bildung zu Hause Bern) war eins meiner ersten und offiziellen Projekten. Der"
                + "Hintergrund dieses Projektes war das der Verein BzH Bern unbedingt eine Website bräuchten. Meine"
                + "Mutter ist im Vorstand und hat dann mich empfohlen obwohl ich zu dem Zeitpunkt noch fast keine"
                + "Erfahrung mit Webdesign gehabt habe."
                + "<br><br>"
                + "Allerdings ist es ein Projekt wo ich sehr viel lernen konnte / immernoch kann."
                + "<br><br>Link zu der Website: <a href='https://www.bildungzuhause-bern.ch/' target='_blank'>bildungzuhause-bern.ch</a>"
            break;
        case "2":
            title.innerText = "Colearning Bern"
            datum.innerText = "März 2021 - Jetzt"
            text.innerHTML = "Bei der Colearning Bern Website habe ich die Aufgabe diese zu unterhalten und "
                + "falls neue Sachen hinzugefügt werden wollen, wäre ich für das zuständig."
                + "<br><br>Link zu der Website: <a href='https://www.colearningbern.ch/' target='_blank'>colearningbern.ch</a>"
            break;
        case "3":
            title.innerText = "Preisberechner"
            datum.innerText = "Februar 2021 - Ende März"
            text.innerHTML = "Der Preisberechner war ein Projekt welches ich im Rahmen vom Colearning bekommen habe. "
                + "Der Name erklärt es schon ziemlich gut was es ist, und zwar ist es ein Preisberechner für eine Ferienwohnung, "
                + "welche verschiedene Optionen verarbeiten kann und dann zu einem Total Preis rechnet. "
                + "Zuerst dachte ich mir es wäre nicht so kompliziert aber so wie vieles in der Informatik stellte sich heraus das es doch ziemlich kompliziert wurde und aus diesem Grund habe ich mir dann "
                + "Hilfe gehollt von jemandem im ICT Campus."
            break;
        default:
            title.innerText = "Fehler"
            datum.innerText = ""
            text.innerHTML = ""
            break;
    }
}

// Called Function when clicked on button
function changeFunction(e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    let parent = target.parentNode;
    let length = document.getElementById("js-projekt").children.length;
    for (let i = 0; i < length; i++) {
        let classes = document.getElementById("js-projekt").children[i].classList;
        if (classes.contains("li-active") == true) {
            classes.remove("li-active");
        }
    }
    let pos = target.parentNode.id;
    changeText(pos)
    parent.classList.add("li-active");
}