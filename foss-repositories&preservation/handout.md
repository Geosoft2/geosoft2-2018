# Geosoftware II - Daniel Nüst und Prof. Dr. Edzer Pebesma
# Wintersemester 2018 / 2019
# FOSS Repositories & Preservation
# Niklas Aßelmann & Yannik Paulsen

## Table of Content

[1. Introduction](##1)    
[2. FOSS Repositories](##2)
[2.1 Prerequesite Knowledge](###2.1)
[2.1.1 Repository Definition](####2.1.1)
[2.1.2 Basic Terminology](####2.1.2)
[2.1.2.1 Archive](#####2.1.2.1)
[2.1.2.2 Branch](#####2.1.2.2)
[2.1.2.3 Commit](#####2.1.2.3)
[2.1.2.4 Push/Pull](#####2.1.2.4)
[2.1.2.5 Merge](#####2.1.2.5)
[2.1.2.6 Fork](#####2.1.2.6)
[2.1.2.7 Tag](#####2.1.2.7)
[2.1.2.8 Version Control](#####2.1.2.8)
[2.1.2.9 Working Tree](#####2.1.2.9)
[2.1.2.10 ](#####2.1.2.10)
[2.1.2.11 ](#####2.1.2.11)
[2.1.2.12 ](#####2.1.2.12)
[2.1.3 Importance of choosing a suited repo-software](####2.1.3)
[2.1.4 Repository vs. Archive](####2.1.4)
[2.2 Overview of the repository-software](###2.2)
[2.2.1 Zenodo](####2.2.1)
[2.2.2 b2share](####2.2.2)
[2.2.3 Inspire](####2.2.3)
[2.2.4 dSpace SYNECT](####2.2.4)
[2.2.5 Fedora](####2.2.5)
[2.2.6 Archivematica](####2.2.6)
[2.3 Comparison](###2.3)
[2.3.1 Criteria explained](####2.3.1)
[2.3.2 user-wise Comparison](####2.3.2)
[2.3.3 developer-wise Comparison](####2.3.3)
[2.3.4 resume](####2.3.4)
[3. Preservation](##3)       
[3.1 Data Preservation](###3.1)     
[3.1.1 General Meaning](####3.1.1)
[3.1.2 Goal](####3.1.2)
[3.1.3 Methods](####3.1.3)
[3.1.4 Data Pyramid](####3.1.4)
[3.2 Digital Preservation](###3.2) 
[3.2.1 Purpose](####3.2.1)
[3.2.2 Problems](####3.2.2)
[3.2.3 Foundamentels](####3.2.3)
[3.2.3.1 Appraisal](#####3.2.3.1)
[3.2.3.2 Identification](#####3.2.3.2)
[3.2.3.3 Integrity](#####3.2.3.3)
[3.2.3.4 Fixity](#####3.2.3.4)
[3.2.3.5 Characterization](#####3.2.3.5)
[3.2.3.6 Sustainability](#####3.2.3.6)
[3.2.3.7 Renderability](#####3.2.3.7)
[3.2.3.8 Physical media obsolescence](#####3.2.3.8)
[3.2.3.9 Format obsolescence](#####3.2.3.9)
[3.2.3.10 Significant properties](#####3.2.3.10)
[3.2.3.11 Authenticity](#####3.2.3.11)
[3.2.3.12 Access](#####3.2.3.12)
[3.2.3.13 Preservation metadata](#####3.2.3.13)
[3.2.4 Strategies](####3.2.4)
[3.2.4.1 Online Computer Library Center 4 Point Strategie](#####3.2.4.1)
[3.2.4.2 Refreshing](#####3.2.4.2)
[3.2.4.3 Migration](#####3.2.4.3)
[3.2.4.4 Replication](#####3.2.4.4)
[3.2.4.5 Emulation](#####3.2.4.5)
[3.2.4.6 Encapsulat](#####3.2.4.6)
[3.2.4.7 Persistent Archives concept](#####3.2.4.7)
[3.2.4.8 Metadata attachment](#####3.2.4.8)
[3.2.5 Software Preservation Network (SPN)](####3.2.5)
[3.2.6 The OAIS Reference Model](####3.2.6)     
[Source Disclosures](##source)

## 1. Introduction

## 2. FOSS Repositories

## 3. Preservation
### 3.1 Data Preservation
#### 3.1.1 Generall Meaning
- act of conserving and maintaining both the safety and integrity of data
#### 3.1.2 Goal
- the accurate rendering of authenticated content over time
    -“When data is lost it is as though it never existed”
#### 3.1.3 Methods
- Digital:
    - Digital Preservation: formal endeavor to ensure that digital information of continuing value remains accessible and usable
        -combination of "policies, strategies and actions that ensure this
- Archives:
    - collection of historical documents and records
- Catalogues, directories and portals:
    - consolidated resources which are kept by individual institutions
- Cyber Infrastructures:
    - consists of archive collections which are made available through the system of hardware, technologies, software, policies, services and tools
- Repositories:
    - Repositories are places where data archives and holdings can be accessed and stored. The goal of repositories is to make sure that all requirements and protocols of archives and holdings are being met, and data is being certified to ensure data integrity and user trust
    - Single-site Repositories
    - Multi-Site Repositories
    - Trusted Digital Repostitory (TDR)
        -must cooperate with the Reference Model for an Open Archival Information System, as well as adhere to a set of rules or attributes that contribute to its trust such as having persistent financial responsibility, organizational buoyancy, administrative responsibility security and safety
- Repository vs. Archive:
    - Repository:
        - location for storage, often for safety or preservation
    - Archive: 
        -storing earlier, and often historical material 
        -usually contains documents (letters, records, newspapers, etc) or other types of media kept for historical interest
        -preserve information for access and use by a Designated Community
##### 3.1.4 Data Pyramid

![Alt-Text](images/DataPyramid.png)

### 3.2 Digital Preservation
#### 3.2.1 Purpose
- Digital Revolution make it easy to create, copy and transmit data all over the world
    - -->increasingly vast amounts of digital research data
- Research data are unique and cannot be replaced if destroyed or lost
- Where resources are "born digital", there is no other format but the digital original
- good practice for institutions and researchers to manage and retain their research data
- A data preservation programme suited to the individual institution must be used to safeguard this huge investment of time and resources
- “Digital Heritage” has cultural, historical, aesthetic, archaeological, scientific, ethnological or anthropological value and is increasing
#### 3.2.2 Problems
- Technological advances even more rapidly, reducing the time before a technology becomes obsolete
- Data is recorded on a transient medium, in a specific file format and needs a transient coding scheme to interpret them
- Machine needs to be interposed between the data ant the human interpreter
- Selecting the right data is difficult because there are many points of view and these are changing from time to time
#### 3.2.3 Foundamentels
##### 3.2.3.1 Appraisal
- Process of identifying records and other materials to be preserved by determining their permanent value. It is a difficult and critical process because the remaining selected records will shape researchers’ understanding of that body of records, or fonds. Archival appraisal may be performed once or at the various stages of acquisition and processing
##### 3.2.3.1 Identification
- Identification through assigned identifiers and accurate descriptive metadata.An identifier is a unique label that is used to reference an object or record, usually manifested as a number or string of numbers and letters. As a crucial element of metadata to be included in a database record or inventory, it is used in tandem with other descriptive metadata to differentiate objects and their various instantiations
##### 3.2.3.1 Integrity
- Assurance that the data is "complete and unaltered in all essential respects". Is the Cornerstone of Preservation. Unintentional changes to data are to be avoided, and responsible strategies put in place to detect unintentional changes and react as appropriately determined
##### 3.2.3.1 Fixity
- Process of validating that a file has not changed or been altered from a previous state. While checksums are the primary mechanism for monitoring fixity at the individual file level, an important additional consideration for monitoring fixity is file attendance
##### 3.2.3.1 Characterization
- Characterization of digital materials is the identification and description of what a file is and of its defining technical characteristics often captured by technical metadata, which records its technical attributes like creation or production environment
##### 3.2.3.1 Sustainability
- Unlike traditional, temporary strategies, and more permanent solutions, digital sustainability implies a more active and continuous process. Digital sustainability concentrates less on the solution and technology and more on building an infrastructure and approach that is flexible with an emphasis on interoperability, continued maintenance and continuous development
##### 3.2.3.1 Renderability
- continued ability to use and access a digital object while maintaining its inherent significant properties
##### 3.2.3.1 Physical media obsolescence
- Physical media obsolescence can occur when access to digital content requires external dependencies that are no longer manufactured, maintained, or supported. External dependencies can refer to hardware, software, or physical carriers. 
##### 3.2.3.1 Format obsolescence
- File format obsolescence can occur when adoption of new encoding formats supersedes use of existing formats, or when associated presentation tools are no longer readily available.Factors that should enter consideration when selecting sustainable file formats include disclosure, adoption, transparency, self-documentation, external dependencies, impact of patents, and technical protection mechanisms.
##### 3.2.3.1 Significant properties
- Significant properties refer to the "essential attributes of a digital object which affect its appearance, behavior, quality and usability" and which "must be preserved over time for the digital object to remain accessible and meaningful."
##### 3.2.3.1 Authenticity
- Whether analog or digital, archives strive to maintain records as trustworthy representations of what was originally received. Authenticity has been defined as “. . . the trustworthiness of a record as a record; i.e., the quality of a record that is what it purports to be and that is free from tampering or corruption”
##### 3.2.3.1 Access
- Digital preservation efforts are largely to enable decision-making in the future. Should an archive or library choose a particular strategy to enact, the content and associated metadata must persist to allow for actions to be taken or not taken at the discretion of the controlling party
##### 3.2.3.1 Preservation metadata
- There has to be information that documents the preservation process throughout the whole lifecycle of the data
#### 3.2.4 Strategies
##### 3.2.4.1 Online Computer Library Center 4 Point Strategie
- 1.Assessing the risks for loss of content posed by technology variables such as commonly used proprietary file formats and software applications
- 2. Evaluating the digital content objects to determine what type and degree of format conversion or other preservation actions should be applied
- 3. etermining the appropriate metadata needed for each object type and how it is associated with the objects
- 4. Providing access to the content
##### 3.2.4.2 Refreshing
- Refreshing is the transfer of data between two types of the same storage medium so there are no bitrot changes or alteration of data. This process has to be carried out whatever other preservation strategies are adopted and has a low risk of losing data if executed and documented properly 
##### 3.2.4.3 Migration
- Migration is the transferring of data to newer system environments; it involves change in the configuration of the underlying data without changing their intellectual content. It is time-critical and needs to be carried out as soon as new formats are introduced and before the current format gets obsolete
##### 3.2.4.3 Replication
- Creating duplicate copies of data on one or more systems is called replication. Data that exists as a single copy in only one location is highly vulnerable to software or hardware failure, intentional or accidental alteration, and environmental catastrophes like fire, flooding, etc
##### 3.2.4.4 Emulation
- Emulation is the replicating of functionality of an obsolete system. Emulation does not focus on the digital object, but on the hard- and software environment in which the object is rendered. It aims at (re)creating the environment in which the digital object was originally created. Used for more complex data where migration will lead to loss of data
##### 3.2.4.5 Encapsulat
- This method maintains that preserved objects should be self-describing, virtually "linking content with all of the information required for it to be deciphered and understood"
##### 3.2.4.6 Persistent Archives concept
- This method requires the development of comprehensive and extensive infrastructure that enables "the preservation of the organisation of collection as well as the objects that make up that collection, maintained in a platform independent form"
##### 3.2.4.7 Metadata attachment
- Metadata attached to digital files may be affected by file format obsolescence. Preservation strategies are only successful if the data is fully documented throughout their lifecycle
#### 3.2.5 Software Preservation Network (SPN)
- leading organization established to facilitate and support software preservation efforts
- preserves software through community engagement, infrastructure support, and knowledge generation
- Values:
    - Community
        - “Software spans sectors, industries and disciplinary domains. Through our shared community of practice we develop a body of shared tools, responses and strategies for preservation, reuse and sharing of software”
    - Sustainability
        - “Sustainable preservation is not achieved by a single decision or action. It requires a series of decisions made by multiple actors and stakeholders over the lifecycle of digital resources.”
    - Access
        - “Access must accommodate current and future users. The Access Breakdown is the breakdown of social structures that support information access; this breakdown necessitates system level change that acknowledges software as infrastructure.”
    - Transparency
        - “True transparency is culturally ingrained in the DNA of the organization. It encourages constructive questioning and honest probing focused on mission and guided by core beliefs.”
    - Advocacy
        - People or groups advocate to influence decisions within political, economic and social systems. “[advocacy] is integral to all aspects of archival work.”
#### 3.2.6 The OAIS Reference Model
- The functional model gives a detailed break-down of digital preservation and dissemination workflows – in short, it explains how an (idealized) archive works. It therefore is a good starting point for anyone who seeks to obtain a systematic overview of these workflows or wants to analyze and understand workflows in an existing archive.

![Alt-Text](images/OAIS1.png)

![ALT-Text](images/OAIS2.png)

## Quellenangaben
