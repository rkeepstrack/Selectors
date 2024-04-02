# Benutzerverwaltung

Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) 17.3.2. generiert - es ist jedoch keine Standalone-Anwendung, da ich kaum Ressourcen ohne eine App.Modules.ts gefunden habe.

Für die Erstellung des Projekts wurden wie in den Anforderungen beschrieben folgende Technologien benutzt:

-   Angular
-   Angular Material
-   Tailwind CSS

Mit Reactive Forms wurde eine Pseudo-Frontendvalidierung auf Zeichenlänge hinzugefügt. Passende Fehlermeldungen/Successmeldungen sind implementiert.

# Problematiken

Mit NGRX gab es durchgängig Probleme. In meiner Vergangenheit habe mit Redux und React gearbeitet, das Konzept von Statemanagement ist mir daher bewusst.

Allerdings ist es sehr schwierig Informationen zu NGRX zu finden, die eindeutig sind. Auf der offiziellen [Dokumentation](https://ngrx.io/guide/store) gibt es einige Widersprüche, andere Ressourcen zu zum Beispiel Feature Selectors sind im Grunde nicht zu finden.

Vermutlich sind hier nur einzelne Handgriffe nötig, damit es zum Laufen gebracht wird, Stand jetzt funktionieren die Zustände jedoch einfach nicht - trotzdem hab ich mich entschieden, den jetzigen Stand einzureichen, und zwar aus folgendem Grund:

Dieses Projekt hier ist eine Abbildung von unter einer Woche Erfahrung mit Angular, Material, Tailwind und NGRX, das während der Osterfeiertage im Jahr 2024 entstanden ist. Mit ein paar Tagen und etwas mehr Erfahrung wäre diese Übung möglich gewesen. Gleichzeitig bin ich sehr gespannt auf das Team und darauf, wie das Projekt besser hätte umgesetzt werden können.

# Befehle

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
