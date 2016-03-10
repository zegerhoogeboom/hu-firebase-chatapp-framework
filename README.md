# Opdracht
Maak een real-time web based chat applicatie met Firebase en Javascript.
Sign up voor Firebase en maak een project aan. Je firebase url is dus: [PROJECTID].firebaseio.com
Het is heel vervelend als je vaak je Security Rules handmatig in de Firebase console moet copy pasten. Firebase kan het via de command line voor je uploaden. Zorg dat je de Firebase CLI tools hebt:
`npm install –g firebase-tools`
`npm install –g firebase-bolt`

In je project directory run firebase init om het project klaar te zetten om later te deployen.
Requirements
    *	Een user moet zich kunnen registreren met email/password.
    *	Een user moet kunnen inloggen met email/password.
    *	Bij het laden van de pagina moeten de laatste 10 berichten getoond worden, ook als een user niet is ingelogd.
    *	Een user moet een bericht kunnen plaatsen. Een bericht mag niet langer dan 100 characters zijn.
    *	Een bericht mag nooit aangepast of verwijdert worden. Ook niet door de persoon die het bericht geplaatst heeft.
    *	Een bericht mag alleen geplaatst worden als de user is ingelogt.

Aanwijzingen
1.	Gebruik Bolt om de de security rules te maken
a.	Run `firebase-bolt <bestand_met_rules>.bolt` om te compileren naar json.
b.	Run `firebase deploy` om te deployen. Zorg dat er in je firebase.json file een attribuut `“rules”:”<bestand_met_rules>.json”` staat om ook de security rules te deployen!
2.	Gebruik de starter template om minder tijd kwijt te zijn met de HTML en te kunnen focussen op de Firebase Javascript.
3.	De firebase documentatie bevat veel voorbeelden, gebruik ze!
https://www.firebase.com/docs/web/guide/
4.	Als je er niet uit komt, er zijn genoeg resources beschikbaar over firebase chat applicaties. Google is your friend!
