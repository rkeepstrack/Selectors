import { Component } from "@angular/core";

// Da die Appkomponente in meiner Applikation nur auf ganze Seiten routed
// und sonst keinen weiteren Zweck erfüllt, hab ich das Template zur Übersichtlichkeit in der Datenstruktur nicht weiter ausgelagert.
@Component({
	selector: "app-root",
	template: ` <router-outlet /> `,
	styles: "",
})
export class AppComponent {
	title = "Benutzerverwaltung";
}
