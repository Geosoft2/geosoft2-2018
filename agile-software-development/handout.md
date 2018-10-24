# Agile und kollaborative Softwareenwicklung

**Autor**: Daniel Nüst, [@nuest](https://github.com/nuest/)

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

> _Wir folgen diesen Prinzipien:_
> _Unsere höchste Priorität ist es, den Kunden durch frühe und kontinuierliche Auslieferung wertvoller Software zufrieden zu stellen._
>
> _Heisse[n] Anforderungsänderungen selbst spät in der Entwicklung willkommen._
> _Agile Prozesse nutzen Veränderungen zum Wettbewerbsvorteil des Kunden._
>
> _Liefere funktionierende Software regelmäßig innerhalb weniger Wochen oder Monate und bevorzuge dabei die kürzere Zeitspanne._
>
> _Fachexperten und Entwickler müssen während des Projektes täglich zusammenarbeiten._
>
> _Errichte Projekte rund um motivierte Individuen._
> _Gib ihnen das Umfeld und die Unterstützung, die sie benötigen und vertraue darauf, dass sie die Aufgabe erledigen._
>
> _Die effizienteste und effektivste Methode Informationen an und innerhalb eines Entwicklungsteams zu übermitteln, ist im Gespräch von Angesicht zu Angesicht._
>
> _Funktionierende Software ist das wichtigste Fortschrittsmaß._
>
> _Agile Prozesse fördern nachhaltige Entwicklung._
> _Die Auftraggeber, Entwickler und Benutzer sollten ein gleichmäßiges Tempo auf unbegrenzte Zeit halten können._
>
> _Ständiges Augenmerk auf technische Exzellenz und gutes Design fördert Agilität._
>
> _Einfachheit -- die Kunst, die Menge nicht getaner Arbeit zu maximieren -- ist essenziell._
>
> _Die besten Architekturen, Anforderungen und Entwürfe entstehen durch selbstorganisierte Teams._
>
> _In regelmäßigen Abständen reflektiert das Team, wie es effektiver werden kann und passt sein Verhalten entsprechend an._ [[Quelle](http://agilemanifesto.org/iso/de/principles.html)]

Leider kann man sich heute nicht mehr als Unterzeichner eintragen, aber wir wollen dennoch versuchen diese Ziele und Prinzipien im Kurs im Leben zu erfüllen:
Der Kurs sollte also ein Umfeld des Vertrauens und Reflektierens schaffen, das einem selbstorganisierten motivierten Team erlaubt die beste, einfache, und funktionierende Software früh und regelmäßig zu liefern.

## Methoden & Prozesse

Agile Methoden halten den Aufwand gering und führen zu dem was man braucht, nicht zu dem was geplant wurde.
Beispiele:

- Paarprogrammierung
- Testgetriebene Entwicklung
- Refaktorierung
- User stories & Story-Cards

Agile Prozesse reduzieren organisatorischen Aufwand (Overhead, Planung) und richten den Fokus der Softwareentwicklung auf menschliche Aspekte, Flexibilität, und frühe Auslieferung + Feedback (_Iterationen_).
Beispiele

- [Extreme Programming](https://de.wikipedia.org/wiki/Extreme_Programming) (XP)
- [Behavior Driven Development](https://de.wikipedia.org/wiki/Behavior_Driven_Development) (BDD, verhaltensgetriebene Softwareentwicklung)
- [Scrum](#scrum)

## Sonstiges

Die genaue Unterscheidung zwischen "Methoden", "Prinzipien", "Prozessen", und "Werten" sind für den Alltag bzw. für den Kurs Geosoftware 2 weniger wichtig, als ein gemeinsames Verständnis und eine positive _Einstellung_:
wir arbeiten transparent und offen miteinander und mit dem "Kunden" um nachhaltig, fokussiert, und lehrreich das Ziel zu erreichen.

Vieles erklärt sich am Besten, wenn man die Geschichte oder die schlechteren Alternativen kennt:

- https://de.wikipedia.org/wiki/Agile_Softwareentwicklung#Geschichtliche_Entwicklung
- https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/02-software-engineering-methods/Software-Engineering-methoden.md
- https://en.wikipedia.org/wiki/History_of_software_engineering

## Scrum

> _Scrum (aus englisch scrum für „[das] Gedränge“) ist ein Vorgehensmodell des Projekt- und Produktmanagements, insbesondere zur agilen Softwareentwicklung._
> _Es wurde ursprünglich in der Softwaretechnik entwickelt, ist aber davon unabhängig._ [[Quelle](https://de.wikipedia.org/wiki/Scrum)]

Scrum hat sich von einem agilen Prozess entwickelt zu einem allgemeinen Projektmanagement-Werkzeug.
Sein Erfolg liegt in seiner Einfachheit und Flexibilität begründet.

**Scrum in 101 Wörtern**:
Im Scrum werden Produktfeatures in Form von User Stories mit einer definierten Größe (Aufwand) in einem langfristigen Plan, dem Produkt-Backlog, gesammelt.
Die wichtigsten Stories werden zuerst umgesetzt, und zwar in abgeschlossenen zeitlichen Abschnitten, den Sprints.
Sprints haben eine feste Dauer und Größe, werden gemeinsam vom Team geplant und ausgewertet.
Am Ende jedes Sprints steht ein funktionierendes Produkt.
Der Fortschritt oder Probleme (nicht abgeschlossene User Story) sind sichtbar.
Das iterative bzw. inkrementelle Vorgehen erlaubt eine kontinuierliche Anpassung an die (ggf. unvorhergesehen) Anforderungen bzw. strukturierte Zerlegung einer komplexen Aufgabe.
Entwickler sprechen jeden Tag miteinander ("gestern, Probleme, heute").
Der Kunde wird von ersten Prototyp an aktiv in die Entwicklung mit einbezogen.

Wie bei allen guten Werkzeugen denkt man sich meistens "na ist ja klar, das ist eine gute Idee", jedoch ist der Wert eine gewissen _Disziplin und Rhythmus im Ablauf_ und vor allem eine _gemeinsame Sprache_ gar nicht hoch genug einzuschätzen.

Für den _ersten Einsatz_ reicht ein Studium der [Wikipedia-Seite _Scrum_](https://de.wikipedia.org/wiki/Scrum), um dies dann nach ein paar Wochen mit eine der folgenden **Ressourcen** aufzufrischen bzw. zu vertiefen:

- Video [Introduction to Scrum](https://www.youtube.com/watch?v=D8vT7G0WATM)
- https://en.wikipedia.org/wiki/Scrum_(software_development)
- https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/06-scrum/scrum.md
- "Scrum: A Breathtakingly Brief and Agile Introduction", Chris Sims & Hillary Louise Johson [auf Anfrage]

**Wichtig**: Auf Basis dieser Infos könnt ihr nun ein _eigenes agiles Vorgehen passend für euer Team_ entwickeln - nur bitte nicht die Erfahrungen und Weisheit der Entwickler und Projektleiter vor euch ignorieren, und auch die unten stehenden [Tipps](#tipps) ernst nehmen!

Karten für _planning poker_ können bei Daniel ausgeborgt werden!

## Begriffe

Die folgenden Begriffe können leicht über Suchmaschinen erläutert werden und dienen hier hauptsächlich um aufzulisten bzw. zu wiederholen, welche Werkzeuge/Namen/Methoden man zumindest in Grundzügen kennen sollte.

- [Anti-Patterns](https://de.wikipedia.org/wiki/Anti-Pattern)
- backlogs (sprint, product)
- burn chart
- Code-Freeze
- Collective ownership & coding standards
- Continuous integration (CI)
- Daily (standup)
- Definition of done (DoD)
- DRY
- fail fast
- jour fixe
- KISS-Prinzip
- merge request
- [Mythos des Mann-Monats](https://de.wikipedia.org/wiki/Vom_Mythos_des_Mann-Monats)
- Pair programming
- Planning game/planning poker
- pull request (PR)
- Scrum
- Software craftsmanschip
- Sprint
- task board
- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
- user story

## Scrum & Kollaboration @ Geosoft II

Kollaborative Softwareentwicklung behandelt die Kommunikation und Koordination bei einem gemeinsamen Arbeiten an einem Softwareprojekt. Eine gute Beschreibung findet ihr im Handout ["Collaborative Software Development", Geosoft II im WS 14/15](https://github.com/Geosoft2/geosoft2-2014-fundamentals/blob/master/01-collaborative-software-dev/handout.md).

**Versionsmanagement** an sich ist selbstverständlich.
Es sollte `git` eingesetzt werden, weil es aktueller und weit verbreiteter Standard ist.

Ein sicherer Umgang mit `git` und den verwandten Entwicklungsworkflows ist sowohl auf der Kommandozeile als auch mit unterstützden graphischen Werkzeugen ist für Softwareentwickler unabdinglich.
Es wird stark empfohlen ein **[fork](https://reflectoring.io/github-fork-and-pull/) [and](https://www.aitgmbh.de/blog/entwicklung/pull-request-auf-github-ueber-einen-fork/) [pull/merge](https://docs.gitlab.com/ee/workflow/forking_workflow.html) - Workflow** mit einem Hauptrepository in einer gemeinsamen Organisation umzusetzen.
Dies erhöht die Transparenz (am Projektende müssen nur pull bzw. merge requests aufgelistet werden) und der Umgang mit mehreren branches und forks ist wichtiges Handwerkszeug, das nur praktisch erlernt werden kann.
Daneben können [feature branches](https://t3n.de/news/git-workflows-zusammenarbeit-1095433/) sowohl das lokale Entwickeln vereinfachen als auch die Zusammenarbeit.

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

Als **Variante von Scrum** für den Einsatz in diesem Kurs empfiehlt es sich, wegzulassen was nicht effektiv umgesetzt werden kann.

Ein "echtes" Scrum Team braucht nicht nur Jahre bis eine verlässliche Schätzung der leistbaren Arbeit pro Sprint möglich ist, sondern auch eine gewissen Personenanzahl um alle Rollen zu besetzen.
Auch sind die beteiligten Entwickler (Studenten) nicht im gleichen Maße verfügbar, es müssen Belastungsspitzen durch Klausuren oder andere Kurse abgefangen werden.

Folgende Tipps haben sich aus den letzten Jahren ergeben:
<a id="tipps" ></a>

- **Sprints**
  - eine Sprintdauer von 2 Wochen ist ein guter Kompromiss zwischen individueller Flexibilität und regelmäßigen Treffen
  - ein tägliches Standup ist unrealistisch, 2 Mal die Woche jedoch sinnvoll um kontinuierlichen Fortschritt zu gewährleisten
  - Routine und Zeitplan einhalten - es lohnt sich!
- **Rollen** (Product Owner, Entwicklerteam, Scrum Master) werden nicht klar verteilt bzw. wechseln zügig (z.B. jede Woche ein andere Scrum Master); die Dozenten stehen gerne als beratende Scrum Master zur Verfügung
- die Dozenten nehmen die Rolle der **Stakeholder** ein, sie sind Kunden, Andender, und Management
- die **Lernerfahrung** ist wichtig, daher nehmt euch klare Zeitfenster (im positiven wie begrenzenden Sinne) für Aufgabenschätzung und Retrospektive
