# Agile und kollaborative Softwareenwicklung

**Ziel**: Im Kurs Geosoftware II (WS 18/19) müssen neue Technologien erlernt und neue Software geschrieben werden um eine anspruchsvolle Aufgabenstellung im Team zu meistern.
Niemand arbeitet alleine, also muss das Zusammenarbeiten ([Kollaboration, nicht Kooperation](https://www.twt.de/news/detail/kooperation-vs-kollaboration-das-sind-die-zentralen-unterschiede.html)) so gestaltet werden, dass alle Beteiligten Lernerfolge erzielen und Beiträge leisten, zugleich aer auch ein übergreifendes Entwicklungsziel erreicht wird.
Hierzu sollen die Studenten agile Softwareentwicklung ausprobieren.

Zunächst eine Definition:

> _Agile Softwareentwicklung bezeichnet Ansätze im Softwareentwicklungsprozess, die die Transparenz und Flexibilität erhöhen und zu einem schnelleren Einsatz der entwickelten Systeme führen sollen, um so Risiken im Entwicklungsprozess zu minimieren._
> _Je nach Kontext bezieht sich der Begriff auf Teilbereiche der Softwareentwicklung – wie im Fall von Agile Modeling – oder auf den gesamten Softwareentwicklungsprozess – exemplarisch sei Extreme Programming oder Scrum aufgeführt._
> _Agile Softwareentwicklung zeichnet sich durch selbstorganisierende Teams, sowie eine iterative und inkrementelle Vorgehensweise aus._
> _Es wird versucht, mit geringem bürokratischem Aufwand und Regeln auszukommen und sich schnell an Veränderungen anzupassen, ohne dabei das Risiko für Fehler zu erhöhen._ [[Wikipedia](https://de.wikipedia.org/wiki/Agile_Softwareentwicklung)]

Im folgenden werden zunächst Prinzipien, Begriffe und Methoden aus dem Bereich agile Softwareentwicklung wiedergegeben und entsprechende Webseiten für weitergehende Informationen aufgelistet.
Hierbei geht es darum, die grundlegenden Konzepte und Ziele agiler Softwareentwicklung kennen zu lernen, sowie Begriffe für den gemeinsamen Sprachgebrauch zu etablieren.
Die Struktur folgt hierbei dem empfehlenswerten Artikel [_Agile Softwareentwicklung_ der deutschsprachigen Wikipedia](https://de.wikipedia.org/wiki/Agile_Softwareentwicklung).

Im Anschluss wird **Scrum** auf die Anwendung in einer studentischen Projektarbeit im Rahmen des Seminars Geosoftware II im Detail betrachtet und adaptiert.
Diese konkrete Empfehlung wird erweitert um einen Vorschlag für **Werkzeuge** zur kollaborativen Zusammenarbeit.

**Literatur** zum Thema gibt es natürlich bei der ULB, siehe [disco](https://disco.uni-muenster.de/simpleSearch.do?index=internal&plv=2&sortCrit=score&sortOrder=desc&hitsPerPage=&query=agile+softwareentwicklung&formsearch=%E2%9C%93), zum Beispiel Kapitel `2.2 Vorgehensmodelle` des Buchs (im Volltext verfügbar) [_"Softwareentwicklung_" von A. Meyer](https://disco.uni-muenster.de/uid.do?query=ulbms_ebooks_gruy_9783110578379&index=internal&plv=2), sowie als Schmankerl `22.5 Zehn zeitlose Leitlinien`, oder die Videoschulung [_"Scrum-Grundlagen: Agile Softwareentwicklung" von Udo Wiegärtner](https://disco.uni-muenster.de/uid.do?query=ulbms_lynda_oai_195158&index=internal&plv=2), wo auch gut einzelne Clips der Gesamtspieldauer von 3:40 Std. angeschaut werden können.

Ansonsten geht nichts über _eigene Erfahrungen_ und bewusste Lernprozesse, daher sind alle Kursteilnehmer aufgefordert auf Verbesserungspotential hinzuweisen und aus Fehlern zu lernen statt darauf hinzuarbeiten keine zu machen.

## Werte & Prinzipien

Das _Manifesto for Agile Software Development_ ([http://agilemanifesto.org/](http://agilemanifesto.org/)) legt Werte für die agile Softwareentwicklung fest, die eine fruchtbare Zusammenarbeit zwischen Entwicklern aber auch zwischen Auftraggeber und Auftraggnehmer sicher stellen sollen.

> _"Wir erschließen bessere Wege, Software zu entwickeln, indem wir es selbst tun und anderen dabei helfen. Durch diese Tätigkeit haben wir diese Werte zu schätzen gelernt:_
> 
> - _Individuen und Interaktionen stehen über Prozessen und Werkzeugen_
> - _Funktionierende Software steht über einer umfassenden Dokumentation_
> - _Zusammenarbeit mit dem Kunden steht über der Vertragsverhandlung_
> - _Reagieren auf Veränderung steht über dem Befolgen eines Plans_
>
> _Das heißt, obwohl wir die Werte auf der rechten Seite wichtig finden, schätzen wir die Werte auf der linken Seite höher ein._ [[Quelle](http://agilemanifesto.org/iso/de/manifesto.html)]

**Prinzipien hinter dem Agilen Manifest**

> Wir folgen diesen Prinzipien:
> Unsere höchste Priorität ist es, den Kunden durch frühe und kontinuierliche Auslieferung wertvoller Software zufrieden zu stellen.
>
> Heisse Anforderungsänderungen selbst spät in der Entwicklung willkommen.
> Agile Prozesse nutzen Veränderungen zum Wettbewerbsvorteil des Kunden.
>
> Liefere funktionierende Software regelmäßig innerhalb weniger Wochen oder Monate und bevorzuge dabei die kürzere Zeitspanne.
>
> Fachexperten und Entwickler müssen während des Projektes täglich zusammenarbeiten.
>
> Errichte Projekte rund um motivierte Individuen.
> Gib ihnen das Umfeld und die Unterstützung, die sie benötigen und vertraue darauf, dass sie die Aufgabe erledigen.
>
> Die effizienteste und effektivste Methode Informationen an und innerhalb eines Entwicklungsteams zu übermitteln, ist im Gespräch von Angesicht zu Angesicht.
>
>Funktionierende Software ist das wichtigste Fortschrittsmaß.
>
> Agile Prozesse fördern nachhaltige Entwicklung.
> Die Auftraggeber, Entwickler und Benutzer sollten ein gleichmäßiges Tempo auf unbegrenzte Zeit halten können.
>
> Ständiges Augenmerk auf technische Exzellenz und gutes Design fördert Agilität.
>
> Einfachheit -- die Kunst, die Menge nicht getaner Arbeit zu maximieren -- ist essenziell.
>
> Die besten Architekturen, Anforderungen und Entwürfe entstehen durch selbstorganisierte Teams.
>
> In regelmäßigen Abständen reflektiert das Team, wie es effektiver werden kann und passt sein Verhalten entsprechend an.
> [[Quelle](http://agilemanifesto.org/iso/de/principles.html)]

Leider kann man sich heute nicht mehr als Unterzeichner eintragen, aber wir wollen dennoch versuchen diese Ziele und Prinzipien im Kurs im Leben zu erfüllen.

## Methoden & Prozesse

...


## Sonstiges

Die genaue Unterscheidung zwischen "Methoden", "Prinzipien", "Prozessen", und "Werten" sind für den Alltag bzw. für den Kurs Geosoftware 2 weniger wichtig, als ein gemeinsames Verständnis und eine positive _Einstellung_:
wir arbeiten transparent und offen miteinander und mit dem "Kunden" um nachhaltig, fokussiert, und lehrreich das Ziel zu erreichen.

Vieles erklärt sich am Besten, wenn man die Geschichte oder die schlechteren Alternativen kennt:

- https://de.wikipedia.org/wiki/Agile_Softwareentwicklung#Geschichtliche_Entwicklung
- https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/02-software-engineering-methods/Software-Engineering-methoden.md
- https://en.wikipedia.org/wiki/History_of_software_engineering

## Scrum

**Ressourcen**:

- https://en.wikipedia.org/wiki/Scrum_(software_development) oder https://de.wikipedia.org/wiki/Scrum
- https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/06-scrum/scrum.md
- [Introduction to Scrum Video](https://www.youtube.com/watch?v=D8vT7G0WATM)
- Karten für _planning poker_ können bei Daniel ausgebort werden!

**Wichtig**: Auf Basis dieser Infos könnt ihr nun ein _eigenes agiles Vorgehen passend für euer Team_ entwickeln - nur bitte nicht die Erfahrungen und Weißheit der Entwickler und Projektleiter vor euch ignorieren!

## Begriffe

- Backlog
- KISS
- Scrum
- KISS
- 

The Planning Game. Zu Beginn jeder Iteration wird eine Planung mit dem gesamten Team erstellt.
–Kleine Releases mit ständigem Kundenfeedback. Der Auftraggeber ist im besten Fall vor Ort. Offshoring der Arbeit ist eher ungeeignet.
–Einfaches Design. Es wird nur für den Moment, nicht für die Zukunft implementiert.
–Pair Programming. Zumindest bei zentralen Modulen ist es sinnvoll, den Code zu zweit zu programmieren.
–Continuous Integration. Die Software wird nach jeder Änderung automatisiert getestet.
–Collective Ownership, Coding Standards. Jeder kann an jeder Stelle im Code mitarbeiten, und das Team hat sich auf Standards geeinigt, so dass der Code wie aus einem Guss aussieht.

## Scrum & Kollaboration @ Geosoft II

Kollaborative Softwareentwicklung behandelt die Kommunikation und Koordination bei einem gemeinsamen Arbeiten an einem Softwareprojekt. Eine gute Beschreibung findet ihr im Handout ["Collaborative Software Development", Geosoft II im WS 14/15](https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/01-collaborative-software-dev/handout.md).


**Versionsmanagement** an sich ist selbstverständlich.
Es sollte `git` eingesetzt werden, weil es aktueller und weit verbreiteter Standard ist.

Ein sicherer Umgang mit `git` und den verwandten Entwicklungsworkflows ist sowohl auf der Kommandozeile als auch mit unterstützden graphischen Werkzeugen ist für Softwareentwickler unabdinglich.
Es wird stark empfohlen ein **[fork](https://reflectoring.io/github-fork-and-pull/) [and](https://www.aitgmbh.de/blog/entwicklung/pull-request-auf-github-ueber-einen-fork/) [pull/merge](https://docs.gitlab.com/ee/workflow/forking_workflow.html) - Workflow** mit einem Hauptrepository in einer gemeinsamen Organisation umzusetzen.
Dies erhöht die Transparenz (am Projektende müssen nur pull bzw. merge requests aufgelistet werden) und der Umgang mit mehreren branches und forks ist wichtiges Handwerkszeug, das nur praktisch erlernt werden kann.

Aufbauend auf `git` bieten sich drei **Kollaborationsplattformen** zu Online-Zusammenarbeit an:

- [GitHub.com](https://github.com)
- [GitLab.com](https://gitlab.com)
- [zivgitlab.uni-muenster.de](https://zivgitlab.uni-muenster.de)

Alle Plattformen bieten die notwendigen Funktionen.
GitHub und GitLab liefern mit ["Project Boards"](https://help.github.com/articles/about-project-boards/) bzw. ["Issue Boards"](https://about.gitlab.com/features/issueboard/) sogar eine Möglichkeit alle Aufgaben zu verwalten, alternativ könnte jedoch auch [Trello](https://trello.com) eingesetzt werden.
Alle Entwicklung sollte komplett öffentlich erfolgen.

Neben dem Learnweb zur offiziellen Kommunikation gibt es auch ein gemeinsames Team auf dem [Mattermost](https://www.mattermost.org/)-Server des ZIV:

**[https://zivmattermost.uni-muenster.de/geosoft2](https://zivmattermost.uni-muenster.de/geosoft2)**

Hier könnt ihr beliebig viele Kanäle für euer Team, für einzelne Aufgaben oder allgemeinen Kommunikation, nutzen.

**Wichtig**: Es gibt natürlich Alternativen! Wikis, Basecamp, SourceForge, SVN - alle haben (IMHO: viele hatten) ihren Platz in der Softwareentwicklung und können eingesetzt werden wenn das Team sich darin einig ist.
Eine Auflistung und Einordnung findet ihr im Handout ["Collaborative Software Development", Geosoft II im WS 14/15](https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/01-collaborative-software-dev/handout.md).
