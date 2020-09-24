Handout Metadata Extraction
Allgemeines:
• Metadaten sind "Daten über Daten"
• Es gibt viele verschieden Formate 
• Formate wie z. B. pdf, png, etc. erlauben Metadaten

- Zur Abrufung von Metadaten werden Methoden zur Extraktion dieser entwickelt
o Aufgrund der Masse an zur Verfügung gestellten Daten (z.B. durch das Internet) und deren Größe, ist es notwendig geworden, die Metadaten gezielt abrufen zu können  
- Welche Informationen braucht der Anwender überhaupt?
- Probleme entstanden durch die Masse an verschiedenen Formaten
o Wird gelöst durch die häufigere Anwendung von "gängigen" Formaten (Bsp. pdf, png, docx, ...)
- Oftmals ist durch ungenaue, falsche oder keine Angabe die Nutzung der Metadaten nicht möglich bzw. schwer
o Darauf achten beim manuellen Erstellen der Metadaten, diese korrekt anzugeben
o Gibt Tools zur Unterstützung bei der Erstellung von Metadaten
Automatische Metadaten Extraktion:
Zwei Hauptbereiche
1. Learning Systems
• Techniken wie SVM oder HMM 	
• Bei homogenen Daten effektiv
• Heutzutage mehr heterogene Daten -> daher (laut Flynn) ein Rückgang in der Wirksamkeit
2. Ruled-based Systems
• Programmierte Anweisungen 
• Können eine hohe Komplexität hervorrufen
- Aufgrund der Unterschiedlichkeit der verschieden Formate entsteht die hohe Komplexität aufgrund derer jedes Format einen eigenen Parser braucht
o Entwicklung dieser ist mit hohem Aufwand verbunden




Es gibt drei Problemstellung bei der Extraktion von Metadaten
1. Identifikation des Dateiformates
• Hierbei hilft der MIME- Standard 
• Drei Methoden zu Identifizierung:
o Dateiendung
o Überprüfung der ganzen Datei
o Magic numbers

2. Parsen der Dateiformate
• Verschiedene Parser aufgrund der Anzahl von Formaten unabdingbar
• Nutzung bestehender Parser biete sich an
• Bsp.:
o  Java Bibliothek Apache Tika
o Apache POI
o Libextractor 
o FITS
o JHOVE2
• Parser eignen sich teilweise nur für bestimmte Dateiformate   
3. Speichern und Verarbeiten der Metadaten
• Metadaten können in unterschiedlichen Varianten angegeben werden
o z. B. GPS Informationen oder Datumsinformationen
• Festlegen von Attributen die alle Dateien haben sollen
o Name, Datum, etc.
• Abspeichern der Daten in einer dokumentorientierten Datenbank (z. B. MongoDB) empfiehlt sich
Metadatenextraktion bei Geodaten:
- den gegebenen Metadaten sollen auch Lokalisierungen durchgeführt werden können
o z.B. durch Ortsnamen oder Koordinaten
o häufig bei Bildern oder ähnlichem in den Metadaten zu finden
* Auslesen der Geodaten aus Fotos (z. B. ExifTool oder Geoview)
- Aber auch aus Karten sollen Metadaten gelesen werden können
- Auslesen und extrahieren der Geodaten aus den existierenden räumlichen Metadaten
o Kann bei  unzureichender räumlicher Angabe durch relevante Informationen aus dem Datensatz unterstützt werden
* Bsp.: OpenGeoportal/DesktopMetadataExtractor

- Auch aus laufenden Projekten können mit entsprechenden Tools Metadaten extrahiert werden
o z. B. o2r


TIKA Extraktion PDF Beispiel:
Nachfolgend ist das Programm zum Extrahieren von Inhalten und Metadaten aus einer PDF-Datei aufgeführt:
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.pdf.PDFParser;
import org.apache.tika.sax.BodyContentHandler;

import org.xml.sax.SAXException;

public class PdfParse {

   public static void main(final String[] args) throws IOException,TikaException {

      BodyContentHandler handler = new BodyContentHandler();
      Metadata metadata = new Metadata();
      FileInputStream inputstream = new FileInputStream(new File("Example.pdf"));
      ParseContext pcontext = new ParseContext();
      
      //parsing the document using PDF parser
      PDFParser pdfparser = new PDFParser(); 
      pdfparser.parse(inputstream, handler, metadata,pcontext);
      
      //getting the content of the document
      System.out.println("Contents of the PDF :" + handler.toString());
      
      //getting metadata of the document
      System.out.println("Metadata of the PDF:");
      String[] metadataNames = metadata.names();
      
      for(String name : metadataNames) {
         System.out.println(name+ " : " + metadata.get(name));
      }
   }
}

Nach dem Compiling bekommt man diesen Output:
Contents of the PDF:

Apache Tika is a framework for content type detection and content extraction 
which was designed by Apache software foundation. It detects and extracts metadata 
and structured text content from different types of documents such as spreadsheets, 
text documents, images or PDFs including audio or video input formats to certain extent.

Metadata of the PDF:

dcterms:modified :     2014-09-28T12:31:16Z
meta:creation-date :     2014-09-28T12:31:16Z
meta:save-date :     2014-09-28T12:31:16Z
dc:creator :     Krishna Kasyap
pdf:PDFVersion :     1.5
Last-Modified :     2014-09-28T12:31:16Z
Author :     Krishna Kasyap
dcterms:created :     2014-09-28T12:31:16Z
date :     2014-09-28T12:31:16Z
modified :     2014-09-28T12:31:16Z
creator :     Krishna Kasyap
xmpTPg:NPages :     1
Creation-Date :     2014-09-28T12:31:16Z
pdf:encrypted :     false
meta:author :     Krishna Kasyap
created :     Sun Sep 28 05:31:16 PDT 2014
dc:format :     application/pdf; version = 1.5
producer :     Microsoft(r) Word 2013
Content-Type :     application/pdf
xmp:CreatorTool :     Microsoft(r) Word 2013
Last-Save-Date :     2014-09-28T12:31:16Z



Quellen:
• https://pdfs.semanticscholar.org/6a75/5215068f1acc02b6cd7e51174785c664b197.pdf
• https://epb.bibl.th-koeln.de/frontdoor/deliver/index/docId/722/file/Masterarbeit.pdf
• https://www.lume.ufrgs.br/bitstream/handle/10183/108005/000947623.pdf?sequence=1
• http://extract.cs.odu.edu/publications/hanoi07icadlmetadata.pdf
• https://www.tutorialspoint.com/tika
• https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-017-1888-1
• https://github.com/o2r-project/o2r-meta
• https://meetingorganizer.copernicus.org/EGU2018/EGU2018-14542.pdf
• https://github.com/OpenGeoportal/DesktopMetadataExtractor
      



