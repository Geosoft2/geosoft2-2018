# Handout - Data publishing requirements in science
Carolin Bronowicz 
[@carobro](https://github.com/carobro)

## Forschungsdaten - Definition?
Keine festgelegte Definition, denn wie Forschungsdaten letztlich aussehen, hängt von der jeweiligen Disziplin ab. Formate sind auch nicht bestimmt festgelegt. Forschungsdaten können z.B. Mess-, Erhebungs- und Beobachtungsdaten sowie audio-visuelle Materialien, aber auch Softwareentwicklungen sein. Sie entstehen während des Forschungsprozesses und sind die Grundlage für wissenschaftliche Ergebnisse.
[Quelle][1]

[1]:http://www.forschungsdaten.org/index.php/Forschungsdaten

**Vorteile von einer Publikation von Forschungsdaten?**
- Glaubwürdigkeit der Studie steigt, die auf diesen Daten basiert.
- Der wissenschaftliche Austausch, die Wiederverwendbarkeit und Nachnutzung wird gestärkt.
- Vermeidung von redundante Datenerhebungen
- Nicht replizierbare Daten werden gesichert
- Höhere Zitationsrate durch freie Verfügbarkeit der Daten.
[Quelle][2]

[2]: https://www.uni-muenster.de/Forschungsdaten/publizieren/index.html

**Arten der Interoperabilität bei der Veröffentlichung von Forschungsdaten - Beispiele**
- Verwendung von Ontologien bei der Schlagwortvergabe
- fachspezifische Metadatenstandards
- Nutzung von persistenten Identifikatoren z.B. URN's, DOI's
- Lizenzierung über eine Open-Content-Lizenz -> Einräumen von Rechten
- Veröffentlichung als: Datenjournal, Datenrepository, Datendateien als Zusatzmaterial, Datenpapiere
[Quelle][8]

[8]: https://www.publisso.de/open-access-beraten/faqs/forschungsdaten/

**Nötige Überlegungen vor der Publizierung:**
**Verzeichnisstruktur und Dateibenennung**
Für die Forschungsdaten sollten geeignete Benennungskonventionen erarbeitet werden, die neben sprechenden Namen z.B. Datums-/Zeitstempel oder Versionsstände ausweisen. Für eine dauerhafte Archivierung sollten die Dateien unverschlüsselt und nicht komprimiert ableget werden, sowie offene und standardisierte Dateiformate verwenden. 
[Quelle][3]

[3]: https://www.uni-muenster.de/Forschungsdaten/organisieren/managen/index.html

**Metadaten - Daten über Daten**
Metadaten erfüllen den Zweck der Dokumentation nach einem vorgegebenen Schema. Sie erlauben eine interne Strukturierung wie auch später eine einfachere Auffindbarkeit eines Datensatzes. Dieses Schema enthält Pflichtfelder, die z.B. Auskunft über die Autoren und die Lizenzen eines Datensatzes geben.  Metadatenfelder sind z.B. Autor/Koautor(en), Zugehörigkeit, Titel, Art der Ressource, Beschreibung, Publikationsdatum, Publisher, Keywords: Gut gepflegte Metadaten können die Sichtbarkeit der Forschungsergebnisse vergrößern.
[Quelle][3]

## Mögliche Arten der Publizierung

[Quelle][22]

**Datendateien als Zusatzmaterial (engl. Data files as supplementary material)**
- Große Anzahl von Zeitschriften und Verlagen unterstützt ergänzendes Material zu Forschungsartikeln, einschließlich Datensätze.
- Ergänzendes Material ist für Abonnenten des Journals oder, wenn der Artikel oder das Journal für jedermann zugänglich ist, verfügbar.

**Datenrepositorien/ Hosting von Daten auf öffentlicher Website (engl. data repositories)**
- Konzentrieren sich meist auf eine bestimmte Forschungsdisziplinen
- bieten eine öffentlich zugängliche Webschnittstelle zum Suchen und Durchsuchen von gehosteten Datasets. Z.B. DRYAD Digital Repository, Pangea

**Datenpapiere (engl. data papers)**
- sind "wissenschaftliche Veröffentlichungen eines durchsuchbaren Metadatendokuments, das einen bestimmten online zugänglichen Datensatz oder eine Gruppe von Datensätzen beschreibt, die gemäß den akademischen Standardpraktiken veröffentlicht wurden". 
- Absicht eines Datenpapiers: Informationen zu verwandten Datensätzen bereitstellen, die sich auf die Datenerfassung, die Unterscheidungsmerkmale, den Zugang und die mögliche Wiederverwendung und nicht auf die Datenverarbeitung und -analyse konzentrieren 
- Beispiel: http://www.esapubs.org/archive/ecol/E086/135/

**Datenjournale (engl. data journals)**
- Viele Zeitschriften verlangen, dass veröffentlichte Artikel von den zugrunde liegenden Forschungsdaten begleitet werden
- Datenblätter werden von einer Vielzahl von Zeitschriften unterstützt, die ausschließlich für die Veröffentlichung von Datenblättern vorgesehen sind, während andere eine Reihe von Artikeltypen einschließlich Daten Papiere veröffentlichen.
- Journal Research Data (JoRD) -Projekt entwickelte Richtlinien zum Austausch von Daten für Modelljournale, durch den Vergleichen zwischen den quantitativen Informationen aus der Analyse vorhandener Richtlinien für Journaldaten und den qualitativen Daten von Stakeholdern. 
Beispiele für Datenjournale:
Geoscience Data Journal - http://rmets.onlinelibrary.wiley.com/hub/journal/10.1002/(ISSN)2049-6060/
Scientific Data - http://www.nature.com/scientificdata

![Vergleichstabelle](https://github.com/carobro/geosoft2/blob/master/Datajournale_Requirements.JPG?raw=true)

Ergänzungen [siehe hier][18]

[18]: https://www.wur.nl/en/Value-Creation-Cooperation/WDCC/Data-Management-WDCC/Finishing/Journal-requirements.htm

[Quelle][19]
[Quelle][23]

[22]: https://en.wikipedia.org/wiki/Data_publishing
[23]: https://www.ands.org.au/working-with-data/publishing-and-reusing-data/data-journals
[19]: http://dms.data.jhu.edu/data-management-resources/plan-research/funders-data-sharing-requirement/academic-journals-and-data-sharing-requirements/
 
## Welche Prinzipien zur Publizierung von Forschungsdaten müssen beachtet werden?
**FAIR data principles**
Grundsätze, die nachhaltig nachnutzbare Forschungsdaten erfüllen müssen

*Findable:*
- F1.    (meta)data are assigned a globally unique and eternally persistent identifier.
- F2.    data are described with rich metadata.
- F3.    (meta)data are registered or indexed in a searchable resource.
- F4.    metadata specify the data identifier.

*Accessible:*
- A1.    (meta)data are retrievable by their identifier using a standardized communications protocol.
- A1.1  the protocol is open, free, and universally implementable.
- A1.2  the protocol allows for an authentication and authorization procedure, where necessary.
- A2.    metadata are accessible, even when the data are no longer available.

*Interoperable:*
- I1.      (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
- I2.      (meta)data use vocabularies that follow FAIR principles.
- I3.      (meta)data include qualified references to other (meta)data.

*Reusable:*
- R1.    meta(data) have a plurality of accurate and relevant attributes.
- R1.1. (meta)data are released with a clear and accessible data usage license.
- R1.2. (meta)data are associated with their provenance.
- R1.3. (meta)data meet domain-relevant community standards.
[Quelle][5]

[5]: http://www.go-fair.org/fair-principles/

## Die Regeln guter wissenschaftlicher Praxis 
Zu den allgemeinen Prinzipien der guten wissenschaftlichen Arbeit gehört es z.B. 
- Resultate zu dokumentieren
- Ergebnisse konsequent anzuzweifeln 
- strikte Ehrlichkeit im Hinblick auf die Beiträge von Partnern, Konkurrenten und Vorgängern zu wahren.
Wissenschaftliches Fehlverhalten liegt vor, wenn bewusst oder grob fahrlässig Falschangaben gemacht werden, geistiges Eigentum anderer verletzt oder deren Forschungstätigkeit beeinträchtigt wird.
[Quelle 1][6]
[Quelle 2][7]

[6]: https://www.uni-muenster.de/imperia/md/content/wwu/senat/pdf/kodex.pdf
[7]: http://www.dfg.de/formulare/12_14/12_14_de.pdf

## Rechtliche Aspekte 
- 2, Abs. 2 UrhG: Das Urheberrecht greift bei Forschungsdaten je nach Beschaffenheit der Daten nicht, weil die geforderte Schaffungshöhe nicht erreicht wird 
- 87b UrhG: Urheberrechtsschutz besteht für eigens entwickelte Software oder Bild- und Tonmaterialien. Es greift bei Datenbankwerken lediglich für 15 Jahre. Leistungsschutzrecht des Datenbankherstellers greift bei Daten, die in einer Datenbank abgelegt sind.
- 4 Abs. 1 BDSG: Das Bundes- und/oder Landesdatenschutzgesetz greift bei Studien, in denen personenbezogene Daten erhoben werden. Für die Speicherung und Weiterverwendung personenbezogener Daten ist eine Einverständniserklärung der Betroffenen einzuholen 
- 3a BDSG Die Daten müssen so anonymisiert werden, dass keine Rückschlüsse auf einzelne Personen möglich sind. 
[Quelle][8]

# Persistent Identifier
Beispiele: URN's, DOI's, ARK (Archival Resource Key)
**DOI'S - Digital Object Identifiers** 
Ein DOI ist eine dauerhafte, eindeutige digitale Kennung eines Objekts. Informationen über ein digitales Objekt können sich im Laufe der Zeit ändern, einschließlich der Frage, wo es zu finden ist und wem es gehört, aber seine DOI wird sich nicht ändern.
Präfix für einen DOI ist "10" und unterscheidet es von anderen Handle System-Identifikatoren. Dem Präfix folgt ein Code für welcher aus 
- Titel der Ressource
- Herausgeber
- Erscheinungsjahr:
- Name(n) des Erstellers
- Urheberzugehörigkeit
besteht.

**Beispiele für DOI's**

Präfix  Identifikationsnummer (10) und Verlagsnummer (1594) | Suffix Publisher mit ID des Objekts
------------ | -------------
10.1594/ | [PANGAEA.886808][20] 
10.1594/ | [PANGAEA.891154][21]

[20]: https://doi.pangaea.de/10.1594/PANGAEA.886808
[21]: https://doi.pangaea.de/10.1594/PANGAEA.891154

https://doi.org/10.1371/journal.pbio.0020449 mit weiterer Spezifikation: 

https://doi.org/10.1371/journal.pbio.0020449.g001 -> in diesem Beispiel wird die Abbildung durch die Endung .g001 identifiziert

[Interessante Übersicht über die Anzahl an DOIs die von verschiedenen Repositorien beantragt wurden][24]

[24]: https://stats.datacite.org/#tab-datacentres

**Vorteile von DOI's:**
Bücher und Zeitschriftenartikel haben lange Zeit von einer Infrastruktur profitiert, die sie leicht zu zitieren macht, deshalb soll dies auf für andere Quellen möglich sein. DataCite DOIs helfen bei der weiteren Erforschung und Gewährleistung eines zuverlässigen, vorhersehbaren und eindeutigen Zugriffs auf Forschungsdaten.
- größere Auffindbarkeit
- Zugang zu eindeutig identifizierten Inhalten
- Zugänglichkeit für langfristige Nutzung
- Zitieren von Publikationen und Forschungsdaten vereinfacht
- unterstützen Sie die korrekte Zuordnung und Gutschrift
- Unterstützung der Zusammenarbeit und Wiederverwendung von Daten ermöglichen die Reproduzierbarkeit von Befunden
- Förderung eines schnelleren und effizienteren Forschungsfortschritts und
- Bereitstellung der Mittel, um Daten mit zukünftigen Forschern auszutauschen

**Nachteil von DOI's**
- Verweisen nur auf "landing pages" für Menschen, nicht auf die eigentlichen Daten-Dateien
(Definition: Bezeichnung für die Webseite, auf der ein Besucher „landet“, wenn er einen Link angeklickt hat)

Erklärvideo zu DOI's:  https://www.youtube.com/watch?v=PgqtiY7oZ6k

[Quelle][9]

[9]: https://guides.library.unisa.edu.au/c.php?g=169979&p=3863391

## Vorgaben von Mittelgebern? 
Bei Förderungen soll die Gesamtförderdauer nicht länger als sechs Jahre dauern.

**Deutsche Forschungsgemeinschaft (DFG)**
- Fördert Projekt zum Aufbau einer Infrastruktur zur Publikation
- Forschungsprimärdaten sollen zehn Jahre lang aufbewahrt werden
- Daten sollen qualitätsgesichert und ausreichend beschrieben abgelegt werden.
- Alle Forschungsprojekte/Anträge sollen einen Datenmanagementplan aufweisen.
- Haben "Leitlinien zum Umgang mit Forschungsdaten" verfasst (siehe unten Abschnitt "Publizieren von Forschungsdaten an der WWU")
- Es müssen ["Die Regeln guter wissenschaftlicher Praxis"][10] befolgt werden
[Quelle][14]

[14]: http://www.dfg.de/formulare/12_14/12_14_de.pdf
[10]: http://www.dfg.de/download/pdf/foerderung/antragstellung/forschungsdaten/richtlinien_forschungsdaten.pdf
**National Institute of Health (NIH)**
- vergibt Fördergelder
- Bei Beantragung von Forschungsgeldern ist darzulegen, inwieweit die Daten veröffentlicht werden sollen
- NIH ist der Ansicht, dass der Datenaustausch für die beschleunigte Übersetzung von Forschungsergebnissen in Wissen, Produkte und Verfahren zur Verbesserung der menschlichen Gesundheit unerlässlich ist. 
- Die Rechte und die Privatsphäre von Personen müssen jederzeit geschützt sein. Daten, die für eine breitere Verwendung bestimmt sind, sollten frei von Identifikatoren sein, die Verknüpfungen mit einzelnen Forschungsteilnehmern und Variablen ermöglichen.
- Als ein Mittel zum Austausch von Wissen empfiehlt die Veröffentlichung von NIH-gestützter Originalforschung in primären wissenschaftlichen Zeitschriften.
[Quelle][16]

[16]: https://grants.nih.gov/grants/policy/nihgps_2013/nihgps_ch8.htm#_Toc271264951

**Europäische Kommission**
- Hat ein Pilotprojekt zur Open-Access-Veröffentlichung von Forschungsdaten gestartet (Open Research Data Pilot) -> Aufforderung zur
Publizierung, Datenmanagementplan erstellen
- Sollen Forschungsdaten nicht veröffentlicht werden, muss dies von den Projektnehmern begründet werden, z.B. bei Projekten deren Ergebnisse als geistiges Eigentum geschätzt werden sollen (z.B. bei Patentanmeldung)
[Quelle][8]

*Forderungen im Horizon2020*
- Ziel: Erkenntnisse in der Wissenschaft zu ermöglichen und die Zusammenarbeit von Wissenschaft und Wirtschaft weiter zu verbessern.
- Strebt eine individuelle Förderung exzellenter Wissenschaftler, die Pionierforschung in neuen Forschungsfeldern, die Mobilität von Wissenschaftlern sowie den besseren Zugang zu Infrastrukturen an.
- "Auf Forschung und Innovation bauen wir unseren wirtschaftlichen Erfolg und unseren Wohlstand auch in der Zukunft auf"
- Ergebnisse in Form von Publikationen sollen im Wege des Open Access durch frei zugängliche Veröffentlichungen verbreitet werden. 
- Gutachterinnen und Gutachter bewerten jeden Projektvorschlag hinsichtlich dreier Kriterien
a) Exzellenz
b) Wirkung bzw. Auswirkungen
c) Qualität und Effizienz der Durchführung

[Quelle][15]

[15]:  https://www.bmbf.de/pub/Horizont_2020_im_Blick.pdf

## Publizieren von Forschungsdaten an der WWU 
Orientiert sich an den Regeln der Deutschen Forschungsgemeinschaft guter wissenschaftlicher Praxis 
- Die forschenden Mitglieder sind aufgefordert, alle Forschungsdaten gemäß anerkannten Standards und Praktiken zu behandeln und zu dokumentieren.
- Die Verantwortung für den Umgang mit Forschungsdaten und die Einhaltung fachbezogener Standards ist zu Beginn eindeutig festzulegen.
- Die Aufstellung eines Datenmanagementplans wird zu Beginn gefordert und muss immer dem aktuellen Verlauf angepasst sein.
- Sämtliche Rechte müssen zu Beginn eindeutig geklärt und dokumentiert werden. Dabei müssen die Daten für wissenschaftliche Zwecke frei verfügbar sein
- Die Forschungsdaten müssen in einem Datenrepositorium der WWU oder ein anderes, vertrauenswürdiges Fachrepositorium langfristig archiviert werden
- Forschungsdaten, welche zu Erkenntnissen geführt haben, müssen in einem Forschungsdatenregister der WWU nachgewiesen werden
(abgeschlossen im Jahre 2017)

[Quelle][11]
[Quelle][12]

[11]: https://www.uni-muenster.de/imperia/md/content/forschungsdaten/2017-08-01_wwu_fdm_policy.pdf
[12]: https://www.uni-muenster.de/Forschungsdaten/information/richtlinien/

## 10 Einfache Regeln für eine gute Publikation der Forschungsdaten
Gesamter Text auf Englisch [hier][13]
- Regel 1. Liebe deine Daten und hilf anderen, sie ebenfalls zu lieben (Richtig Aufbewahren)
- Regel 2. Teile deine Daten online mit einer permanenten Kennung
- Regel 3. Habe den Gedanken der Wiederverwendung im Kopf
- Regel 4.Veröffentliche den "Workflow" 
- Regel 5. Verknüpfe die Daten so oft wie möglich mit deiner Publikation
- Regel 6. Veröffentliche deinen Code (auch Bruchstücke)
- Regel 7. Geben an, wie du eine Gutschrift erhalten möchtest
- Regel 8. Fördere und verwende Datenrepositorien
- Regel 9. Belohne Kollegen, die deine Daten richtig teilen
- Regel 10. Sei ein Booster für Data Science

[13]: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003542

# Quellenliste
Regeln guter wissenschaftlicher Praxis der Westfälischen Wilhelms-Universität: https://www.uni muenster.de/imperia/md/content/wwu/senat/pdf/kodex.pdf

Grundsätze zum Umgang mit Forschungsdaten an der Westfälischen Wilhelms-Univerität Münster: https://www.uni-muenster.de/imperia/md/content/forschungsdaten/2017-08-01_wwu_fdm_policy.pdf

Forschungsdaten-management an der WWU/Richtlinien: https://www.uni-muenster.de/Forschungsdaten/information/richtlinien/

Forschungsdaten-management an der WWU/Daten managen: https://www.uni-muenster.de/Forschungsdaten/organisieren/managen/index.html

Forschungsdaten-management an der WWU/Publizieren: https://www.uni-muenster.de/Forschungsdaten/publizieren/index.html

FAIR Principles: http://www.go-fair.org/fair-principles/

PANGEA.: https://doi.pangaea.de/10.1594/PANGAEA.891154

Publishing and data requirements - University of South Australia: https://guides.library.unisa.edu.au/c.php?g=169979&p=3863391

Forschungsdaten: Was muss bei der Veröffentlichung beachtet werden? - Publisso: https://www.publisso.de/open-access-beraten/faqs/forschungsdaten/. 

Merkblatt - Informationsinfrastrukturen für Forschungsdaten: http://www.dfg.de/formulare/12_14/12_14_de.pdf

Philip E. Bourne, Ten Simple Rules for the Care and Feeding of Scientific Data: https://doi.org/10.1371/journal.pcbi.1003542

Data publishing - Wikipedia: https://en.wikipedia.org/wiki/Data_publishing

How should one get a data download URL from a DOI? - GitHub https://github.com/ropenscilabs/doidata/issues/1 

Kratz J and Strasser C. Data publication consensus and controversies - F1000Research 2014, (doi: 10.12688/f1000research.3979.3)
https://f1000research.com/articles/3-94/v3

Grants Policy Statement - NIH: https://grants.nih.gov/grants/policy/nihgps_2013/nihgps_ch8.htm#_Toc271264951

Sicherung guter wissenschaftlicher Praxis - Deutsche Forschungsgemeinschaft http://www.dfg.de/download/pdf/dfg_im_profil/reden_stellungnahmen/download/empfehlung_wiss_praxis_1310.pdf

Why is it so important to cite data? - DataCite: https://www.datacite.org/cite-your-data.html

The end - jord: https://jordproject.wordpress.com/2014/06/02/the-end/

Journal requirements - Wageningen Univerity & Research: https://www.wur.nl/en/Value-Creation-Cooperation/WDCC/Data-Management-WDCC/Finishing/Journal-requirements.htm

Academic Journals Data Sharing Requirements - John Hopkins Libraries: http://dms.data.jhu.edu/data-management-resources/plan-research/funders-data-sharing-requirement/academic-journals-and-data-sharing-requirements/

Horizon2020 im Blick - Bundesministerium für Foschung und Bildung: https://www.bmbf.de/pub/Horizont_2020_im_Blick.pdf
