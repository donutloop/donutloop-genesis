**Version**: 1.4.43

# Die Genesis-Mission: Architektur, strategische Initiativen und das multi-institutionelle Ökosystem für KI- und quantengetriebene wissenschaftliche Entdeckungen

> **Haftungsausschluss:** Dieses Forschungspapier wurde von einem KI-Assistenten auf der Grundlage zusammengestellter öffentlicher Daten, Bundesveröffentlichungen und institutioneller Ankündigungen erstellt, die im Genesis-Mission-Repository indiziert sind. Es dient der strukturellen Referenz, Synthese und akademischen Überprüfung.

## Zusammenfassung (Abstract)

Das Tempo wissenschaftlicher Entdeckungen in hochdimensionalen Forschungsdomänen – Quantenmaterialien, Strukturbiologie, Hochenergiephysik und Fusionsplasmadynamik – wird zunehmend durch die kombinatorische Komplexität experimenteller Suchräume und die rechnerischen Grenzen klassischer Simulationen eingeschränkt. Im Jahr 2026 startete das US-Energieministerium (DOE) in Abstimmung mit dem Exekutivbüro des Präsidenten und wichtigen Bundesbehörden die **Genesis-Mission**: eine milliardenschwere Bundesinitiative, die künstliche Intelligenz (KI), fehlertolerantes Quantencomputing und Exascale-Hochleistungsrechnen (HPC) zu einer einheitlichen nationalen Plattform für wissenschaftliche Entdeckungen verbindet. Dieses Papier bietet eine architektonische Synthese des Ökosystems der Genesis-Mission – seiner institutionellen Topologie, Technologiegießereien, Finanzierungsmechanismen und anfänglichen Projektportfolios –, zusammengestellt aus politischen Dokumenten des Bundes (Executive Orders, DE-FOA-0003612), Behördenankündigungen, Offenlegungen der nationalen Laboratorien und Preisaufzeichnungen von Universitäten.

Wir strukturieren die Analyse um drei voneinander abhängige Säulen. *Erstens*, **Quantenführerschaft und Infrastruktur**: Das DOE hat 2 Milliarden US-Dollar bereitgestellt, um die ersten fehlertoleranten Quantencomputer des Landes einzusetzen, ergänzt durch Absichtserklärungen (Letters of Intent, LOIs) des US-Handelsministeriums im Wert von 2 Milliarden US-Dollar im Rahmen des CHIPS and Science Act. Diese Investitionen decken das gesamte Spektrum der Quantenmodalitäten ab – supraleitende Schaltkreise (IBM, 1-Milliarde-Dollar-Gießerei-LOI und 50-Millionen-Dollar-Rechenzugang über Heron- und Nighthawk-Prozessoren; Rigetti Computing, bis zu 100 Millionen US-Dollar für kachelbare Multi-Chip-Architekturen einschließlich Ankaa, modulares Lyra und miniaturisierte kryogene Ausleseelektronik; D-Wave, 100 Millionen US-Dollar für Annealing- und Gatter-Modell-Systeme), Ionenfallen-Systeme (Quantinuum, 100 Millionen US-Dollar mit GlobalFoundries und Monarch Quantum Gießereipartnerschaften), photonische Architekturen (PsiQuantum, 100 Millionen US-Dollar, verankert in der heimischen PsiFactory-Anlage), Neutralatom-Arrays (Atom Computing, 100 Millionen US-Dollar für Neutralatom-Plattformen mit NREL-Netz-Co-Simulation; Infleqtion, 100 Millionen US-Dollar mit drei DOE-Genesis-Preisen und der Sqale-QPU-Plattform), Silizium-Spin-Qubits (Diraq, 38 Millionen US-Dollar für CMOS-native Quantenpunktprozessoren bei niedrigen Stückkosten pro Qubit) und modalitätsübergreifende Halbleitergießereien (GlobalFoundries, 375 Millionen US-Dollar für GF Labs "Lab-to-Fab"-Prototyping, PDKs und GlobalShuttle™ MPW-Fertigung).

*Zweitens*, **KI zur Beschleunigung der Wissenschaft**: Mit initialen Projektzuweisungen von über 800 Millionen US-Dollar werden 26 Forschungsinitiativen in den 17 Nationalen Laboratorien des DOE und mehr als 40 Forschungsuniversitäten finanziert. Dedizierte KI-Supercomputing-Plattformen – NVIDIA *Solstice* und *Equinox* (mit Argonne und Oracle), AMD *Lux* (Instinct-GPUs, EPYC, Pensando) und das geplante Exascale-System *Discovery* (Instinct-GPUs), neben HPE Cray EX Exascale-Architekturen (*Frontier*, *Aurora*, *El Capitan*), Dell Technologies hochdichte PowerEdge wassergekühlte KI-Fabrikinfrastruktur und SambaNova Systems Reconfigurable Dataflow Architecture (RDU) – bieten das heterogene Beschleunigersubstrat, während eine 83-Millionen-Dollar-Investition der NSF FAIR-konforme Datenpipelines etabliert, die in der Lage sind, Petabyte-Skalen-Daten von Synchrotrons, Teilchenbeschleunigern und Fusionsreaktoren in Echtzeit zu erfassen.

*Drittens*, **Öffentlich-Private-Akademische Synergien**: Kommerzielle Technologiepartner steuern Spitzen-KI-Modelle, Cloud-Infrastruktur und autonome Laborrahmen in Präzedenzfalle aufweisendem Umfang bei. Google DeepMind und Public Sector stellen 40 Millionen US-Dollar bereit, um *Gemini for Government*, *AI Co-Scientist*, *AlphaFold*, *AlphaGenome* und *AlphaEarth* in allen 17 nationalen Laboratorien einzusetzen. Microsoft investiert 60 Millionen US-Dollar über den SPARK-Koordinations-Hub, die *Microsoft Discovery*-Plattform und *MatterGen*/*MatterSim*-Basismodelle für generative Materialwissenschaften sowie Majorana-basierte topologische Quantenprozessoren. AWS stellt 100 Millionen US-Dollar an Bundessystem-Gutschriften mit post-quantenkryptografischer Sicherheit zur Verfügung. Strategische MOUs mit Anthropic, OpenAI, Meta AI, Scale AI, Hugging Face, FutureHouse, LILA und Cerebras liefern LLM-Schlussfolgerungsagenten, offene wissenschaftliche Modelle und Datensätze, Open-Source-Modellregister-Plattformen, autonome Forschungsassistenten, kollaborative wissenschaftliche KI-Tools, hochdurchsatzfähige Datenannotation und Wafer-Scale-KI-Supercomputing-Beschleunigung. Industriepartner – darunter Siemens, Synopsys, Applied Materials und NVIDIA (Apollo-Modellfamilie, Omniverse-digitale Zwillinge) – liefern domänenspezifische Simulations-Engines, EDA-Werkzeuge und Edge-KI für autonome "selbstfahrende" Laboratorien. Darüber hinaus sichert sich xLight 150 Millionen US-Dollar im Rahmen des CHIPS and Science Act für den Bau eines neuartigen Freie-Elektronen-Laser-Prototyps (FEL) im Albany NanoTech Complex für die nächste Generation der extrem-violetten (EUV) Halbleiterlithografie – um einen kritischen Fertigungsengpass für die fortschrittlichen KI-Chips und Quantensteuerelektronik zu beheben, von denen die gesamte Genesis-Infrastruktur abhängt.

Die angestrebten wissenschaftlichen Domänen reichen von der Hochenergiephysik (HEP-LHC ATLAS-Trigger-Optimierung und Monte-Carlo-Beschleunigung), Fusionsenergie (PPPL AI4Fusion autonome Plasmasteuerung; ORNL–Cleveland Clinic–IBM Quantenberechnung von FLiBe-Tritiumbrütmaterialien; Rigetti–LLNL Plasmawellensimulationen), Einsatz von Kernreaktoren und autonomer Sicherheitslizenzierung (INL), Stromnetzresilienz und Quanten-in-the-Loop-Leistungssimulation (NREL–Atom Computing), Optimierung der Lieferkette für kritische Mineralien bis hin zur generativen Materialentdeckung über robotische Hochdurchsatzsynthese. Zusammenfassend etabliert die Genesis-Mission ein neues operatives Paradigma – **agentische wissenschaftliche Entdeckung** –, bei dem autonome KI-Systeme Quantenprozessoren, Exascale-Supercomputer und physikalische Laborinstrumente innerhalb einer föderierten, national gesicherten Infrastruktur orchestrieren. Dieses Papier bietet eine umfassende Referenzarchitektur und eine strategische Roadmap für die Konvergenz dieser Technologien auf nationaler Ebene.

---

## 1. Einleitung & Kontext

Das traditionelle Paradigma wissenschaftlicher Entdeckungen – iterative Hypothesenformulierung, manuelle experimentelle Durchführung und isolierte computergestützte Modellierung – wird zunehmend durch das astronomische kombinatorische Ausmaß hochdimensionaler Forschungsbereiche gehemmt. Ob bei der Synthese von Raumtemperatur-Supraleitern, der Erforschung des unübersetzten menschlichen Proteoms, der Eindämmung von Fusionsplasmastörungen oder der Kartierung subatomarer Quark-Gluon-Plasmen: Physikalische Parameterräume übersteigen bei Weitem die Kapazität menschlicher Intuition und klassischer Brute-Force-Simulationen.

Um diese Engpässe bei der Entdeckung zu durchbrechen und die nationale technologische Führungsrolle zu sichern, hat die US-Bundesregierung im Jahr 2026 die **Genesis-Mission** ins Leben gerufen. Die Mission wurde durch Exekutivdirektiven ins Leben gerufen und durch milliardenschwere behördenübergreifende Zusagen unterstützt. Sie baut eine nationale Infrastruktur für wissenschaftliche Entdeckungen auf, indem sie Exascale-Hochleistungsrechnen (HPC), fehlertolerante Quantencomputing-Geräte und domänenspezifische Basismodelle der künstlichen Intelligenz (KI) zu einem einheitlichen Ausführungssubstrat zusammenschließt.

### 1.1 Führung des Bundes & Behördenübergreifende Governance
Die Genesis-Mission wird in erster Linie vom **U.S. Department of Energy (DOE) Office of Science** verwaltet und orchestriert ein gesamtstaatliches Mandat, das die 17 Nationalen Laboratorien des DOE mit den wichtigsten politischen, wissenschaftlichen und verteidigungspolitischen Bundesorganen verbindet:

* **White House Office of Science and Technology Policy (OSTP):** Steuert nationale Wissenschafts- & Technologieprioritäten, behördenübergreifende Ausrichtung und die Aufsicht der Exekutive für KI-für-Wissenschaft-Mandate.
* **U.S. Department of Energy (DOE) — Office of Science:** Leitet die Gesamtausführung der Mission, Finanzierungsaufforderungen (z. B. DE-FOA-0003612), die Orchestrierung von Exascale-Rechenanlagen und den Betrieb der nationalen Labor-Hubs.
* **U.S. Department of Commerce (DOC) — NIST / CHIPS R&D Office:** Führt Absichtserklärungen (LOIs) im Wert von über 2 Milliarden US-Dollar im Rahmen des CHIPS and Science Act für Quantengießereien, Halbleiterverpackungen und Messstandards aus.
* **National Science Foundation (NSF):** Stellt 83 Millionen US-Dollar für integrierte wissenschaftliche Datenpipelines, FAIR-Daten-Repositories und die Förderung akademischer MINT-Arbeitskräfte bereit.
* **National Institutes of Health (NIH) / HHS:** Leitet die *Bio Genesis Mission*, setzt multimodale Basismodelle und automatisierte strukturbiologische Pipelines für Therapeutika gegen chronische Krankheiten ein.
* **National Aeronautics and Space Administration (NASA):** Entwickelt gemeinsam planetare Klima-digitale Zwillinge (AlphaEarth), Luft- und Raumfahrtmaterialmodelle und autonome Software für die Tiefenraumforschung.
* **Department of War (U.S. DOD):** Treibt Dual-Use-Anwendungen für die nationale Verteidigung, numerische Strömungsmechanik (CFD) in der Hyperschallforschung, strahlungsgehärtete Mikroelektronik und die Resilienz sicherer Lieferketten voran.
* **Department of Homeland Security (DHS S&T):** Integriert KI-Modelle für die Sicherheit kritischer Energieinfrastrukturen, die Überwachung von Stromnetzbedrohungen und Resilienzanalysen.
* **Department of the Interior (DOI / USGS):** Leitet die Bewertung kritischer Mineralressourcen, die hydrologische Kartierung und die Umweltverwaltung öffentlicher Ländereien.

### 1.2 Systemarchitektur & Strategischer Ablauf

```
                      +-------------------------------------------------------------+
                      |          EXEKUTIV- & BEHÖRDENÜBERGREIFENDE GOVERNANCE       |
                      |    White House OSTP  |  DOE  |  DOC  |  NSF  |  NIH/HHS     |
                      |        DOD (Dept of War)  |  DHS S&T  |  NASA  |  DOI       |
                      +------------------------------+------------------------------+
                                                     |
             +---------------------------------------+---------------------------------------+
             |                                                                               |
+------------v------------------------------+                   +----------------------------v-----------------+
|    QUANTENFÜHRUNG & GIESSEREI-INFRASTRUKTUR|                   |    KI FÜR WISSENSCHAFT & HOCHLEISTUNGSRECHNEN|
|  - $2B DOE Quantenführungsprogramm        |                   |  - DE-FOA-0003612 ($800M+ Erstförderung)     |
|  - $2B DOC CHIPS Act Gießerei-LOIs        |                   |  - Exascale HPC (Frontier, Aurora, El Capitan)|
|  - Gießereien: GF, IBM, Atom, D-Wave,     |                   |  - KI-Supercomputing: Solstice, Equinox, Lux, |
|    Infleqtion, PsiQuantum, Quantinuum,    |                   |    Discovery, Dell AI Factory, SambaNova    |
|    Rigetti, Diraq                         |                   |  - FAIR-Datenautobahnen ($83M NSF Stream)    |
+------------+------------------------------+                   +----------------------------+-----------------+
             |                                                                               |
             +---------------------------------------+---------------------------------------+
                                                     |
                      +------------------------------v------------------------------+
                      |       FÖDERIERTE BEHÖRDENÜBERGREIFENDE ORCHESTRIERUNGSSCHICHT |
                      |  - American Science Cloud & Security Platform               |
                      |  - Autonome agentische Arbeitsabläufe (LLMs/SURROGs)        |
                      |  - Synchrotron- / Tokamak- / Sensordaten-Echtzeiterfassung  |
                      +------------------------------+------------------------------+
                                                     |
                      +------------------------------v------------------------------+
                      |         ÖFFENTLICH-PRIVATE-AKADEMISCHE AUSFÜHRUNGSKNOTEN    |
                      |  - 17 DOE National Laboratories (ANL, LBNL, ORNL, LLNL etc.)|
                      |  - Hyperscaler & Cloud (AWS, Google, Microsoft, Oracle, IBM)|
                      |  - Spitzen-KI & Daten (Anthropic, OpenAI, Meta, Scale etc.) |
                      |  - Industrie & EDA (Siemens, Synopsys, Applied Materials)   |
                      |  - 57 Ausgezeichnete Forschungsuniversitäten & Institute   |
                      +-------------------------------------------------------------+
```

### 1.3 Strategische Missionsziele
1. **Konvergente heterogene Rechnerarchitektur:** Vereinheitlichung von Exascale-GPUs, TPUs, RDUs und Quantenprozessoreinheiten (QPUs) in allen 17 nationalen Laboratorien zu einer einzigen Hochdurchsatz-Ausführungsstruktur.
2. **Geschlossene agentische wissenschaftliche Entdeckung:** Einsatz autonomer KI-Agenten, die in der Lage sind, Hypothesen zu formulieren, Materialkandidaten zu generieren, Quantensimulationen zu planen und physikalische Laborsynthesen ohne manuelles Eingreifen auszuführen.
3. **Inländische Mikroelektronik- & Quantenlieferkette:** Rückverlagerung fortschrittlicher Halbleiterfertigung, Quanten-Qubit-Gießereien und EUV-Lithografieinfrastruktur durch Anreize des CHIPS Act und Partnerschaften mit nationalen Laboratorien.
4. **Nationale Sicherheit & Wirtschaftliche Resilienz:** Beschleunigung von Durchbrüchen bei der Stabilisierung sauberer Energienetze, der Steuerung von Kernfusionsplasma, Ersatzstoffen für kritische Mineralien, der Abwehr biologischer Gefahren und Therapeutika gegen chronische Krankheiten.

---

## 2. Technischer Rahmen & Kernsäulen

Die Architektur der Genesis-Mission basiert auf drei voneinander abhängigen technischen Säulen: Hochleistungs-KI-Supercomputing-Infrastruktur, Quantenhardware- & Fertigungsgießereien und geschlossene agentische wissenschaftliche Arbeitsabläufe.

```
+---------------------------------------------------------------------------------------------------+
|                                 GENESIS KONVERGENTES TECHNISCHES NETZ                             |
+---------------------------------------------------------------------------------------------------+
                                                  |
           +--------------------------------------+--------------------------------------+
           |                                      |                                      |
+----------v----------+                +----------v----------+                +----------v----------+
|   HETEROGENES HPC   |                |   QUANTEN-QPU-NETZ  |                | AGENTISCHE ABLÄUFE  |
|  - Exascale GPUs    |                |  - Supraleitend     |                |  - Physik-Surrogate |
|  - Datenfluss-RDUs  |                |  - Ionenfallen      |                |  - Generative Modelle|
|  - FAIR-Datenstream |                |  - Neutrale Atome   |                |  - Selbstf. Labore  |
|  (HPE, AMD, NVIDIA, |                |  - Silizium-Spin    |                |  (Gemini, Discovery,|
|   Dell, SambaNova)  |                |  - Photonisch       |                |   PaperQA, AlphaFold)|
+----------+----------+                +----------+----------+                +----------+----------+
           |                                      |                                      |
           +--------------------------------------+--------------------------------------+
                                                  |
+-------------------------------------------------v-------------------------------------------------+
|                                 GESCHLOSSENER ENTDECKUNGSAUSFÜHRER                                |
| Sensoren (NSLS-II/LCLS-II/LHC) -> KI-Inferenz -> QPU-Energielöser -> Robotische Nasslaborsynthese|
+---------------------------------------------------------------------------------------------------+
```

### 2.1 Hochleistungs-KI-Supercomputing-Infrastruktur
Die Mission integriert führende Supercomputing-Knoten in ein föderiertes Ausführungsnetz im Argonne National Laboratory (ANL ALCF), Oak Ridge National Laboratory (ORNL OLCF) und Lawrence Berkeley National Laboratory (LBNL NERSC). Zu den wichtigsten Infrastrukturkomponenten gehören:

* **Heterogene Beschleuniger & Flaggschiff-KI-Supercomputer:**
  * **Solstice und Equinox (NVIDIA / Oracle / ANL):** Ultra-Scale-KI-Supercomputer, die für offene wissenschaftliche Basismodelle, Echtzeit-Datenverarbeitung und Entdeckungspipelines nationaler Laboratorien optimiert sind.
  * **Lux (AMD / DOE):** Der erste betriebsbereite KI-Supercomputer der Genesis-Mission (Einsatz 2026), angetrieben von **AMD Instinct GPUs**, **AMD EPYC CPUs** und **AMD Pensando** DPU-Netzwerken, um die KI-Forschung in den Bereichen Energie, Medizin und Materialien zu erweitern.
  * **Discovery (AMD / DOE):** Geplanter Supercomputer der Exascale-Klasse (erwartet 2028) mit **AMD EPYC-Prozessoren** und **AMD Instinct-GPUs**, entwickelt für hochpräzise wissenschaftliche Simulationen und multimodale KI-Modellierung.
  * **Frontier, Aurora und El Capitan (HPE / Cray EX):** Erstklassige Exascale-Supercomputing-Infrastruktur mit wassergekühlten HPE Cray EX-Architekturen und Slingshot-Interconnects für föderiertes KI-Modelltraining und Simulationen im Petabyte-Bereich über ORNL, ANL und LLNL hinweg.
  * **Dell AI Factory & PowerEdge Infrastructure (Dell / DOE):** Enterprise-KI-Fabrik-Deployments mit wassergekühlten Dell PowerEdge GPU-Servern, hochdichten Rechensubstraten und energieeffizienten Rechenzentrumsarchitekturen zur Unterstützung föderierter wissenschaftlicher Berechnungen und KI-Modellausführungen.
  * **SambaNova Dataflow Infrastructure (SambaNova / DOE):** Einsatz der Reconfigurable Dataflow Architecture (RDA), angetrieben von **Reconfigurable Dataflow Units (RDUs)** an Rechenknoten nationaler Laboratorien (einschließlich ANL ALCF), was eine Inferenz mit hohem Durchsatz und die Ausführung multimodaler KI-Modelle für wissenschaftliche Basismodelle ermöglicht.
  * **Genesis Open Models Portal (ANL / DOE):** Das Argonne National Laboratory hostet die **Genesis Open Models**-Plattform ([`genesisopenmodels.anl.gov`](https://genesisopenmodels.anl.gov/)), die als zentralisiertes Open-Access-Modellregister, Repository für Basismodelle und KI-Inferenzportal für offene wissenschaftliche KI-Modelle dient, die in den 17 Nationalen Laboratorien und bei ausgezeichneten Universitäten eingesetzt werden.
* **FAIR-Wissenschafts-Datenautobahnen:** Die 83-Millionen-Dollar-Investition der NSF etabliert grundlegende Datenpipelines und standardisierte FAIR-konforme Daten-Repositories (Findable, Accessible, Interoperable, Reusable), die in der Lage sind, experimentelle Datenströme im Petabyte-Bereich in Echtzeit von Synchrotrons (NSLS-II, APS), Teilchenbeschleunigern (LHC, CEBAF) und Fusionsreaktoren (DIII-D, NSTX-U) zu erfassen.

### 2.2 Quantenführerschaft und CHIPS Act Infrastruktur
Um die Quantenüberlegenheit in fehlertoleranten Regimes zu etablieren, hat das DOE die **Quantum Genesis**-Initiative gestartet (angekündigt am 23. Juni 2026 vom DOE Office of Science) mit einer Zusage von **2 Milliarden US-Dollar zur Entwicklung und zum Einsatz der weltweit ersten wissenschaftlich relevanten, fehlertoleranten Quantencomputer bis 2028**. Als Reaktion auf zwei präsidentielle **Executive Orders** (22. Juni 2026), die eine beschleunigte US-Quantenführerschaft und Post-Quanten-Kryptografie-Bereitschaft anordnen, legt Quantum Genesis drei Kernprioritäten fest: (1) den **DOE Q Competition** zur Demonstration fehlertoleranter Quantensysteme mit **150-250 logischen Qubits** bis 2028; (2) eine **National Quantum Supercomputing User Facility**, die Wissenschaftlern und Ingenieuren Zugang zu fehlertoleranten QPUs bietet, integriert mit bestehender Exascale-HPC-, KI- und Netzwerkinfrastruktur an DOE National Laboratories; und (3) fokussierte F&E durch das **Quantum Computer for Application Development and Discovery Science (QC-ADDS)**-Programm für Chemie, Materialwissenschaft, Plasmaphysik und Hochenergiephysik. Diese DOE-Investition wird ergänzt durch **2,013 Milliarden US-Dollar an Absichtserklärungen (Letters of Intent) des Handelsministeriums** mit 9 Unternehmen, angekündigt vom **NIST am 21. Mai 2026** im Rahmen des CHIPS and Science Act **CHIPS Xcelerate 2X**-Programms. Die Bundesinvestition zielt auf 2 Quantengießereien (IBM, GlobalFoundries) und 7 Quantencomputing-Unternehmen ab, die supraleitende, Ionenfallen-, photonische, Neutralatom- und Silizium-Spin-Modalitäten abdecken. Im Rahmen der LOI-Bedingungen sichert sich das Handelsministerium eine **Minderheits-Eigenkapitalbeteiligung ohne Kontrolle** an jedem der 7 Quantencomputing-Empfänger.

| Organisation / Unternehmen | Geplante Finanzierung / LOI | Primärer strategischer Umfang & technische Modalität |
| :--- | :--- | :--- |
| **GlobalFoundries** | $375 Millionen | Sichere inländische Quantengießerei für Halbleiterverpackungen & PDKs mehrerer Modalitäten. |
| **IBM Quantum** | $1 Milliarde | Quantengießerei-Tochtergesellschaft für die Herstellung supraleitender Wafer + $50M Rechenzugang. |
| **Atom Computing** | $100 Millionen | Skalierung von Neutralatom-Quantenhardware und Systemintegration mit NREL-Netz-Co-Simulation. |
| **Diraq** | Bis zu $38 Millionen | CMOS-native Silizium-Spin-Qubit-Logik-Arrays und Skalierung von Quantenprozessoren. |
| **D-Wave Quantum** | $100 Millionen | Quanten-Annealing und supraleitende Gatter-Modell-Architekturen für Netz-/HPC-Optimierung. |
| **Infleqtion** | $100 Millionen | Neutralatom-Architekturen, hochleistungsfähige optische Systeme (3 DOE-Genesis-Preise). |
| **PsiQuantum** | $100 Millionen | Photonisches Quantencomputing, verlustarme optische Verpackung, inländische PsiFactory-Silizium-Photonik. |
| **Quantinuum** | $100 Millionen | Fehlertolerante Ionenfallen-Architekturen, integrierte Photonik und Hardware-Verpackung. |
| **Rigetti Computing** | Bis zu $100 Millionen | 3D-Multi-Chip-kachelbare supraleitende QPUs, kryogene Ausleseverpackung und Fusionssimulatoren. |

Zu den wichtigsten Highlights der Modalitäten im Rahmen der Quantenzusagen gehören:
* **IBM Quantum (1 Milliarde US-Dollar CHIPS Act Gießerei-LOI & 50 Millionen US-Dollar Zusage für Rechenzugang):** IBM treibt das nutzenorientierte Quantencomputing und die inländische Hardwarefertigung durch eine Absichtserklärung (LOI) über 1 Milliarde US-Dollar im Rahmen des CHIPS and Science Act voran, um **Anderon** zu gründen, eine neue eigenständige, reine **300-mm-Quanten-Wafer-Gießerei** mit Hauptsitz in **Albany, New York** — die erste Anlage dieser Art in den USA. Die 1 Milliarde US-Dollar Bundesinvestition wird durch weitere **1 Milliarde US-Dollar in IBM-Barmitteln** ergänzt, zuzüglich IBMs Beitrag an geistigem Eigentum, Fertigungsanlagen und qualifizierten Arbeitskräften an Anderon. Die Gießerei wird supraleitende Wafer in Quantenqualität mit modernster 300-mm-Halbleiter-Wafertechnologie fertigen und als offene Gießerei nicht nur für IBMs interne Roadmap, sondern auch für Dritt-Quantenhardware-Anbieter arbeiten, um die inländische Quanten-Lieferkette und nationale Sicherheit zu stärken. Gleichzeitig sagt IBM über 5 Jahre den Gegenwert von bis zu **50 Millionen US-Dollar** an Quantenrechenzugang in den Nationalen Laboratorien des DOE und bei akademischen Partnern zu, angetrieben von IBM Quantum **Heron**- (133-Qubit) und IBM Quantum **Nighthawk**-Prozessoren (120-Qubit, Quadratgitter-Topologie mit 218 Kopplern, ~30% mehr Schaltkreiskomplexität als Heron). IBM strebt **Quantenvorteil** bis Ende 2026 und **fehlertolerantes Quantencomputing bis 2029** mit dem geplanten **Starling**-System an. IBM unterstützt die Quanten-HPC-KI-Integration über nationale Einrichtungen hinweg und führt gemeinsam Phase-I-RFA-Projekte für agentische KI-Quantenentdeckung.
* **GlobalFoundries (375 Millionen US-Dollar Zusage & US-DOE-Industriepartner):** GlobalFoundries treibt die inländische Quanten- und Halbleitergießereifertigung im Rahmen des CHIPS and Science Act voran und gründete die spezialisierte Geschäftseinheit **Quantum Technology Solutions** (Mai 2026), um Quantenhardware vom Labormaßstab zur industriellen Produktion zu bringen. Über **GF Labs** und unter Nutzung der **FDX-Plattform** zur Unterstützung mehrerer Qubit-Modalitäten (supraleitend, Ionenfallen, Silizium-Photonik, topologisch und Silizium-Spin-Qubit-Architekturen) schließt GlobalFoundries die Lücke vom "Labor zur Fabrik" (Lab to Fab), indem es seine kommerzielle US-Fertigungsplattform - mit Standorten in **Malta, New York** und **Essex Junction, Vermont** - für Nationale Laboratorien, Universitäten und Industrieforscher öffnet. Wichtige technische Fähigkeiten umfassen Process Design Kits (PDKs), Bauelementmodelle, Multi-Project-Wafer-(MPW)-Prototypenfertigung über das **GlobalShuttle**-Programm, fortschrittliche Silizium-Photonik für Rechenzentren und Quantenforschung, kryogene CMOS-Steuerelektronik, supraleitende heterogene Interconnects und kundenspezifische Mikrochip-Waferfertigung für Multi-Modalitäts-Quantenplattformen (aktive Kooperationen umfassen Google Quantum AI, Microsoft, NVIDIA, PsiQuantum, Quantinuum, Diraq, Quantum Motion und Equal1). Im Rahmen der CHIPS-Act-LOI-Bedingungen sichert sich das Handelsministerium eine **etwa 1%ige Minderheits-Eigenkapitalbeteiligung ohne Kontrolle** an GlobalFoundries. Diese 375-Millionen-Dollar-Quantengießerei-Investition ergänzt eine separate **1,5-Milliarden-Dollar**-CHIPS-Act-Fertigungsexpansionsförderung für GFs US-Halbleiterkapazität.
* **Quantinuum (100 Millionen US-Dollar CHIPS Act LOI-Zusage & Börsengang):** Quantinuum (Börsenkürzel: **QNT**, Börsengang Juni 2026) treibt nutzenorientiertes Ionenfallen-Quantencomputing durch eine Absichtserklärung (LOI) über 100 Millionen US-Dollar mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act voran. Quantinuums Hardware basiert auf seiner **QCCD (Quantum Charge-Coupled Device)**-Architektur mit 2D-Knotenpunkt-Ionen-Shuttling für All-to-All-Qubit-Konnektivität, verankert durch den 98-Qubit-**Helios**-Ionenfallen-QPU und die **System Model H1 / H2**-Serie. Bundesfördermittel zielen auf kritische technische und fertigungstechnische Engpässe ab, um die Oberflächen-Ionenfallen-Mikrofabrikation (mit den Sandia National Laboratories), verlustarme integrierte Photonik und spezialisierte optische Komponenten zu skalieren. Inländische Fertigungspartnerschaften umfassen **GlobalFoundries** (über die Geschäftseinheit Quantum Technology Solutions) für die Mikrochip-Komponentenfertigung und **Monarch Quantum** für integrierte **Quantum Light Engines** als Ersatz für unhandliche Laboroptiken. Quantinuum stellt seine computergestützte Quantenchemie-Plattform (**InQuanto**) in Supercomputing-Netzwerken nationaler Laboratorien für Materialwissenschaften, Molekularsimulation und Wirkstoffentdeckung unter Genesis bereit.
* **Atom Computing (100 Millionen US-Dollar Zusage):** Atom Computing treibt das nutzenorientierte Neutralatom-Quantencomputing durch eine Absichtserklärung (LOI) über 100 Millionen US-Dollar mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act voran, ergänzt durch insgesamt über **300 Millionen US-Dollar** an Risikokapital (Stand Juni 2026). Atom Computings Architektur nutzt **optische Pinzetten** zum Einfangen von Arrays aus **Strontium-87**-Neutralatomen in Vakuumkammern, wobei Quanteninformationen in den **Kernspinzuständen** jedes Atoms kodiert werden — ein Design, das außergewöhnlich lange **Kohärenzzeiten (~40 Sekunden)** und native **All-to-All-Qubit-Konnektivität** ermöglicht. Das System der zweiten Generation demonstrierte **1.225 physische Qubits** (Ende 2023), eine der ersten universellen, gatterbasierten Plattformen mit über 1.000 Qubits. Die Bundesförderung beschleunigt gezielte Ingenieurinitiativen, einschließlich hauseigener Fertigung kritischer optischer Komponenten, parallelisierter Systemskalierungs-Teststände und Lieferketten-Fertigbarkeit für fehlertolerante logische Qubit-Operationen. Im Rahmen von **Stufe B der DARPA Quantum Benchmarking Initiative (QBI)** und in Zusammenarbeit mit dem **National Renewable Energy Laboratory (NREL)** integriert Atom Computing Neutralatom-QPUs in die nationale Laborinfrastruktur für Echtzeit-**Quantum-in-the-Loop**-Stromnetz-Simulation über Open-Source-Schnittstellen zur NREL-ARIES-Plattform.
* **Diraq (Bis zu 38 Millionen US-Dollar CHIPS Act LOI):** Diraq treibt fehlertolerante Silizium-Spin-Quantenlogikprozessoren im Rahmen einer Absichtserklärung (LOI) über bis zu 38 Millionen US-Dollar mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act voran. Unter Nutzung proprietärer CMOS-nativer Silizium-Quantenpunkt-Technologie, gefertigt auf Standard-**300-mm-Wafern**, nutzt Diraq bestehende kommerzielle Halbleitergießereien (Partnerschaft mit **GlobalFoundries** für Cryo-CMOS und Mikrochip-Fertigung), um dichte Spin-Qubit-Arrays auf einem einzigen Siliziumchip herzustellen, mit dem Ziel der Skalierbarkeit auf **Millionen von Qubits pro Chip** bei Kosten von **weniger als 1 US-Dollar pro physischem Qubit**. Ein zentraler Architekturvorteil ist der Betrieb bei etwa **1 Kelvin** — deutlich wärmer als die Millikelvin-Temperaturen supraleitender Qubit-Systeme — was die kryogene Infrastruktur vereinfacht, den Energiebedarf reduziert und kompakte, **rack-einsetzbare Rechenzentrumsformfaktoren** ermöglicht. Ausgewählt für **Stufe B der DARPA Quantum Benchmarking Initiative (QBI)** (Ziel: Validierung im Nutzenmaßstab bis 2033), beschleunigt Diraq eine durchgängige US-Lieferkette für fehlertolerantes Silizium-Quanten-Supercomputing.
* **PsiQuantum (100 Millionen US-Dollar CHIPS Act LOI-Zusage & 125 Mio. $ DARPA QBI-Vereinbarung):** PsiQuantum treibt nutzenorientiertes fehlertolerantes photonisches Quantencomputing durch eine Absichtserklärung (LOI) über 100 Millionen US-Dollar mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act sowie eine 125-Millionen-Dollar-Meilensteinvereinbarung im Rahmen der DARPA Quantum Benchmarking Initiative (QBI) (angekündigt im Juli 2026) voran. Unter der Leitung von CEO Victor Peng sind Fertigung und Entwicklung in der inländischen **PsiFactory**-Anlage von PsiQuantum in Milpitas, Kalifornien, verankert. Kritische technologische Durchbrüche zielen auf Engpässe bei der Skalierung von Quantenphotonik ab: inländische Skalierung von **Bariumtitanat (BTO)**-Hochgeschwindigkeits-Optikschaltern, hocheffizienten Einzelphotonendetektoren, verlustarmem Chip-zu-Faser-Optik-Packaging und Fertigung von **"Omega"**-Silizium-Photonik-Quantenchips in Partnerschaft mit **GlobalFoundries** unter Nutzung von Standard-300-mm-Halbleitergießereiprozessen in der Fab 8 in Malta, NY. Die fehlertolerante Architektur von PsiQuantum ist darauf ausgelegt, großflächige wissenschaftliche Modellierungen im Rahmen von Genesis voranzutreiben, und unterstützt Standorte im Nutzenmaßstab in Chicago, IL und Moreton Bay, Australien.
* **Infleqtion (100 Millionen US-Dollar CHIPS Act LOI-Zusage & 3 DOE Genesis-Mission-Preise):** Infleqtion (NYSE: INFQ) treibt Neutralatom-Quantencomputing, hochpräzise optische Atomuhren und agentische Quantensensorik durch eine unverbindliche Absichtserklärung (LOI) über 100 Millionen US-Dollar mit dem CHIPS R&D Office des US-Handelsministeriums (einschließlich meilensteinbasierter Förderung und 100 Mio. US-Dollar an Infleqtion-Eigenkapital mit 15 % Marktabschlag) sowie drei DOE-Genesis-Mission-Projektpreise (angekündigt im Juli 2026) voran. Infleqtion arbeitet ohne kryogene Tiefkühlungsanforderungen und skaliert seine fehlertolerante Neutralatom-QPU-Linie (**Sqale**), kompakte optische Atomuhren (**Tiqker**) für GPS-freie Navigation und Stromnetz-Frequenzsynchronisation sowie den proprietären hardwareoptimierenden Quanten-Compiler (**Superstaq**). Die drei DOE-Genesis-Mission-Preise von Infleqtion zielen auf kritische Forschungsvektoren in den Nationalen Laboratorien ab: (1) **Argonne National Laboratory (ANL)** — KI-optimiertes Quantenschaltkreis-Design und Synthese unter Nutzung von Superstaq für Kernphysik- und Materialsimulationen; (2) **Brookhaven National Laboratory (BNL)** — einsatzfähige atomare Quantensensorik integriert mit agentischer KI für autonome Echtzeit-Präzisionsmessungen; und (3) **Lawrence Livermore National Laboratory (LLNL)** & University of Colorado Boulder — Simulation nichtlinearer Fusionsplasmadynamik und Transport unter Nutzung von Quanten-Maschinellem-Lernen und agentischer KI für die Fusionsenergieforschung.
* **Rigetti Computing (Bis zu 100 Millionen US-Dollar CHIPS Act LOI & DOE-Quantensimulationsprojekte):** Rigetti Computing treibt kachelbare supraleitende Quantenprozessoreinheiten (QPU), 3D-Multi-Chip-Stapelung und miniaturisierte kryogene Ausleseverpackungen durch eine Absichtserklärung (LOI) über bis zu 100 Millionen US-Dollar über 3 Jahre mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act voran (einschließlich einer Minderheits-Eigenkapitalbeteiligung ohne Kontrolle durch das Handelsministerium). Verankert durch seinen 84-Qubit-**Ankaa-3**-Prozessor (mit quadratischem Qubit-Gitter, abstimmbaren Kopplern und 2D-Gittertopologie), das **Novera QPU** (9-Qubit-Forschungsteststand vor Ort) und die geplante modulare **Lyra**-Architektur nutzt Rigetti 3D-Interposer-Technologie und Silizium-Durchkontaktierungen (TSVs) mit gebondeten supraleitenden Kappen, um Multi-Chip-Dies zu skalierbaren Quantenprozessoren mit reduziertem Übersprechen und hoher Gattertreue (>99,3 %) zu verbinden. In wegweisenden Forschungsarbeiten (2026, *Physical Review Applied*) arbeitete Rigetti mit dem **Lawrence Livermore National Laboratory (LLNL)** und der University of Colorado Boulder zusammen, um nichtlineare Quantenplasmadynamik und Plasmawellendispersion für Fusionsenergiereaktoren unter Nutzung eines 9-Qubit-Clusters auf dem Ankaa-3-QPU zu simulieren und gleichzeitig miniaturisierte kryogene Steuerelektronik für die nationale Supercomputing-Integration unter Genesis voranzutreiben.
* **D-Wave Quantum (100 Millionen US-Dollar CHIPS Act LOI-Zusage):** D-Wave Quantum treibt eine Dual-Plattform-Strategie voran, die kommerzielles **Quanten-Annealing** und supraleitende **Gatter-Modell**-Architekturen im Rahmen einer **Absichtserklärung (LOI) über 100 Millionen US-Dollar** mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act kombiniert (einschließlich der Ausgabe von Stammaktien im Wert von 100 Mio. US-Dollar an das Handelsministerium). Die Förderung beschleunigt die Skalierung an R&D-Standorten in New Haven (CT), Burnaby (BC) und Boca Raton (FL). D-Waves kommerzielle Quanten-Annealing-Systeme — zentriert auf **Advantage2**-Prozessoren mit **Zephyr-Topologie** (20-Wege-Konnektivität, 5.000+ bis 7.000+ Flux-Qubits) und einer Roadmap für einen **100.000-Qubit**-Annealing-Prozessor — liefern hybride Quanten-Klassik-Löser über den **Leap**-Quantencloud-Dienst, der in Nationalen Laboratorien des DOE (LANL, ORNL, NREL ARIES) für Stromnetz-Dispatch-Optimierung, Materialentdeckung und komplexe Lieferkettenplanung integriert ist. Gleichzeitig führt D-Waves beschleunigte Gatter-Modell-Roadmap **Dual-Rail-Supraleiter-Flux-Qubits** mit hardwareintegrierter Fehlererkennung ein und zielt bis 2032 auf ein **100-logische-Qubits**-System (>1 Mio. Gatteroperationen) für Quantenchemie- und Quanten-KI-Anwendungen im Rahmen von Genesis ab.

### 2.3 Wissenschaftliche Domänenanwendungen & geschlossene Arbeitsabläufe

#### A. Hochenergiephysik (HEP) & Teilchenbeschleuniger
Wie in den offiziellen Briefings des DOE Office of High Energy Physics (DOE-HEP) auf dem Treffen des U.S. ATLAS Institutional Board (18. März 2026; Jeremy Love, DOE-HEP; CERN Indico Event 1662511) dargelegt, greift die Genesis-Mission direkt auf die internationale **ATLAS-Experiment-Kollaboration am CERN**, den CEBAF-Beschleuniger des Jefferson Lab und den LCLS-II von SLAC zu. In einem multi-institutionellen Netzwerk von 44 US-Universitäten und DOE National Laboratories (BNL, ANL, LBNL) verarbeiten Genesis-KI-Basismodelle Multi-Terabit-Echtzeit-Sensor-Feeds, optimieren die High-Level Trigger (HLT)-Kandidatenauswahl, führen Jet-Rekonstruktionen über Graph Neural Networks (GNNs) durch, kalibrieren digitale Detektor-Zwillinge, stimmen SRF-Kavitätsemittanzen ab und beschleunigen Monte-Carlo-Simulationsroutinen um Größenordnungen für die Rechenbereitschaft des High-Luminosity LHC (HL-LHC).

#### B. Fusionsenergie & Autonome Reaktorsteuerung
Am Princeton Plasma Physics Laboratory (PPPL) entwickelt das von Genesis finanzierte Projekt **AI4Fusion** einen KI-gesteuerten autonomen Operator für Plasmatheizung und die Verhinderung magnetohydrodynamischer Störungen. Neuronale Surrogatmodelle sagen Instabilitäten des magnetischen Einschlusses Millisekunden im Voraus voraus. Darüber hinaus erzielte ein gemeinsames Forschungsteam des **Oak Ridge National Laboratory (ORNL)**, der **Cleveland Clinic** und von **IBM** die erste bekannte Berechnung von Fusionsreaktormaterialien auf einem Quantencomputer (veröffentlicht im Juli 2026) für **FLiBe**-Blanket-Materialien zur Optimierung der Tritiumbrütung.

#### C. Robotik, Edge-KI und autonome selbstfahrende Laboratorien (NVIDIA, Google & Microsoft Infrastruktur)
Ein Schwerpunkt der Genesis-Mission stützt sich auf industrielle KI, Robotik, physikalische Simulations-Backends und die Automatisierung von Laboratorien. Unter Nutzung der digitalen Zwillings-Frameworks von NVIDIA, hochpräziser Physik-Engines und Edge-KI, zusammen mit der autonomen Hardwaresteuerung von Google Gemini und Microsoft Discovery mit MatterGen/MatterSim-Basismodellen entstehen automatisierte "selbstfahrende" Laboratorien für Synthese und Kalibrierung.

#### D. Kernenergie, Netzsicherheit und Materialwissenschaften
* **Idaho National Laboratory (INL):** Einsatz von AWS Cloud KI/HPC-Pipelines zur Modellierung der thermischen Hydraulik von Kernbrennstoffen und der Alterung von Brennelementen sowie Microsoft KI-Integration zur Automatisierung der Sicherheitslizenzierung.
* **National Energy Technology Laboratory (NETL) & Arizona State University:** KI-Agenten zur Überwachung der Instabilität des Stromnetzes, Verwaltung von Lieferkettenrisiken und Optimierung der Kohlenstoffabscheidung.
* **National Renewable Energy Laboratory (NREL) & Atom Computing:** Integration optisch gefangener Neutralatom-Quantenprozessoren in die ARIES-Plattform von NREL für Quanten-in-the-Loop-Schnittstellen.
* **Kritische Mineralien & Batteriespeicher (Albemarle & DOE National Labs):** Integration KI-gestützter chemischer Verfahren zur direkten Lithiumextraktion (Direct Lithium Extraction, DLE), Raffination von hochreinem Lithiumhydroxid und -carbonat in Batteriequalität sowie Synthese von Festkörper-Elektrolytmaterialien zur Sicherung inländischer Energiespeicher-Lieferketten.
* **Tulane University & LBNL:** Generative KI-Modelle in Kopplung mit robotischen Chemieplattformen (z. B. Emerald Cloud Lab, Chemspeed) für die kontinuierliche Hochdurchsatz-Materialentdeckung.

---

## 3. Öffentlich-Privates-Akademisches Ökosystem

Ein bestimmendes Merkmal der Genesis-Mission ist ihr sektorübergreifendes Betriebsmodell, das 148 leitende institutionelle Einheiten aus kommerziellen Technologiegiganten, nationalen Supercomputing-Laboratorien, Elite-Forschungsuniversitäten, Bundesbehörden und spezialisierten Forschungsinstituten vereint.

```
                      +-------------------------------------------------------------+
                      |         GENESIS MISSION SEKTORÜBERGREIFENDES KONSORTIUM     |
                      |                   (148 Kern-Flaggschiffknoten)              |
                      +------------------------------+------------------------------+
                                                     |
             +---------------------------------------+---------------------------------------+
             |                                       |                                       |
+------------v------------------+   +----------------v------------------+   +----------------v------------------+
|     NATIONALE LABORATORIEN    |   |  INDUSTRIE & HYPERSCALER          |   |     FORSCHUNGSUNIVERSITÄTEN       |
|      (17 DOE-Knoten)          |   |       (61 Einheiten)              |   |        (57 Campusse)              |
| ANL, BNL, INL, LBNL, LLNL,    |   | Cloud: AWS, Google, MSFT, Oracle  |   | MIT, Stanford, Harvard, CMU,      |
| ORNL, PNNL, PPPL, SNL, TJNAF, |   | Compute: NVIDIA, AMD, HPE, Dell   |   | Caltech, Princeton, Yale, UIUC,   |
| Fermilab, LANL, Ames usw.     |   | Quantum: IBM, Quantinuum, Atom... |   | Berkeley, Michigan, Rice usw.     |
+------------+------------------+   +----------------+------------------+   +----------------+------------------+
             |                                       |                                       |
             +---------------------------------------+---------------------------------------+
                                                     |
             +---------------------------------------+---------------------------------------+
             |                                                                               |
+------------v----------------------------------+   +----------------------------------------v-----------------+
|    BUNDESBEHÖRDEN & POLITISCHE GREMIEN        |   |    SPEZIALISIERTE INSTITUTE & GESUNDHEITSWESEN       |
|            (9 Exekutivorgane)                 |   |               (4 Spezial-Hubs)                           |
| White House OSTP, DOE, DOC NIST, NSF, NIH/HHS |   | Cleveland Clinic, Johns Hopkins APL,                     |
| NASA, Dept of War (DOD), DHS S&T, DOI         |   | AI Tennessee Initiative, RTI International               |
+-----------------------------------------------+   +----------------------------------------------------------+
```

### 3.1 Industrie-, Hyperscale- & Hardware-Zusagen

#### A. Spitzen-KI, Cloud & Hyperscale-Computing
* **Amazon Web Services (AWS):** Zusage von 100 Millionen US-Dollar an Cloud-HPC-Rechenguthaben für den öffentlichen Sektor, Bereitstellung von hochdichten Graviton4-ARM-Instanzen, Trainium2/Inferentia2-KI-Beschleunigern, Post-Quanten-Kryptografie-Sicherheitsprotokollen (KEM / Post-Quanten-TLS) und cloudbasierter Hochdurchsatz-Infrastruktur für wissenschaftliche Arbeitsabläufe (z. B. digitale Nuklear-SMR-Zwillinge am INL und Host-Services für FAIR-Datenressourcen).
* **Anthropic:** Strategische Partnerschaft und Absichtserklärung (MOU) mit dem US-Energieministerium (DOE) zum Einsatz führender LLM-Schlussfolgerungsagenten, spezialisierter wissenschaftlicher Modelle (*Anthropic Science*) und mehrstufiger Reasoning-Fähigkeiten für die wissenschaftliche Code-Refaktorisierung (CUDA/Fortran-Exascale-Kernel), Literatursynthese und geschlossene Labor-Orchestrierung in allen 17 Nationalen Laboratorien.
* **Cerebras:** Strategische Absichtserklärung (MOU) mit dem US-Energieministerium (DOE) zum Einsatz von Wafer-Scale-KI-Supercomputern (CS-3 angetrieben vom Wafer-Scale Engine WSE-3 mit 900.000 KI-Kernen und 4 Billionen Transistoren) in allen DOE National Laboratories (ANL, LBNL, ORNL) zur Beschleunigung von Echtzeit-LLM-Inferenz, Proteinfaltung und Fusionsplasma-Vorhersagen.
* **Dell Technologies:** Bereitstellung von KI-Fabrikinfrastruktur, direkter Flüssigkeitskühlung für Enterprise-Computing, hochdichten HPC-Serverlösungen (**PowerEdge XE9680** / **XE9640** KI-Serverplattformen) und Enterprise-KI-Speicherstrukturen (**PowerScale** / **PowerFlex**) zur Steuerung von wissenschaftlichem Basismodell-Training und Datenpipelines mit hohem Durchsatz in DOE National Laboratories (ANL, ORNL, LBNL).
* **Google Public Sector & DeepMind:** Strategische Absichtserklärung (MOU) mit einer Zusage von 40 Millionen US-Dollar an KI-Tokens, Google Cloud Platform (GCP)-Gutschriften, TPU v5p/v6e-Beschleunigerzugang und sicheren Arbeitsplätzen in allen 17 DOE National Laboratories zum Einsatz von Spitzen-KI-Modellen (**Gemini 1.5 Pro / Ultra for Government**, **AI Co-Scientist**, **AlphaEvolve**, **AlphaFold 3**, **AlphaGenome**, **WeatherNext** und **AlphaEarth Foundations**), zur Beschleunigung automatisierter Hypothesengenerierung, Materialentdeckung und Verkürzung der Elektronenmikroskop-Kalibrierungszeit um das 8-fache an nationalen Lichtquellen (LBNL, SLAC, BNL, ANL).
* **HPE (Hewlett Packard Enterprise):** Bereitstellung von Flaggschiff-Exascale-Hochleistungsrecheninfrastruktur (HPC), flüssigkeitsgekühlten **HPE Cray EX**-Supercomputing-Architekturen (**Frontier** am ORNL, **Aurora** am ANL, **El Capitan** am LLNL), hochintegrierten **Slingshot 11**-Interconnect-Fabrics, Cray Programming Environment (CPE) und **HPE GreenLake for HPC** KI-Datenspeicherknoten zur Steuerung des Trainings wissenschaftlicher Basismodelle im Multi-Petascale-Bereich in DOE National Laboratories.
* **Hugging Face:** Strategische Partnerschaft und Integration offener Wissenschaftsplattformen mit dem DOE zum Hosten, Kuratieren, Feintunen und Verteilen von Open-Source-Basismodellen für die Wissenschaft, FAIR-konformen wissenschaftlichen Datensätzen, offenen Benchmarks und containerisierten Ausführungsumgebungen auf dem **Hugging Face Hub** und über **Inference Endpoints** in allen 17 DOE National Laboratories.
* **FutureHouse:** Strategische gemeinnützige KI-Forschungspartnerschaft zum Einsatz autonomer wissenschaftlicher KI-LLM-Schlussfolgerungsagenten (**PaperQA**, **WikiCrow**, **ChemCrow**, **CrowOmni**) in DOE National Laboratories (LBNL, ANL, PNNL) für automatisierte biomedizinische Literatursynthese, geschlossene Hypothesengenerierung, selbstfahrende Chemie-/Biologielabor-Orchestrierung und agentische Forschungsabläufe.
* **LILA:** Strategische Partnerschaft und kollaborative KI-Plattformintegration mit dem Energieministerium (DOE) im Rahmen der Genesis-Mission zur Bereitstellung offener KI-Infrastrukturen, multi-institutioneller wissenschaftlicher Kollaborationsplattformen, automatisierter Literatursynthese-Engines und domänenspezifischer LLM-Agentenarchitekturen in Nationalen Laboratorien (ORNL, ANL, LBNL) und Forschungsuniversitäten.
* **Meta AI:** Tiefe Integration offener Modelle (z. B. Segment Anything, DINO) in Bildgebungs- und Teilchenbeugungspipelines des LBNL.
* **Microsoft:** Zusage von 60 Millionen US-Dollar (40 Millionen US-Dollar Azure-Rechenguthaben + 20 Millionen US-Dollar dedizierte Engineering-Services) im Rahmen einer strategischen Absichtserklärung (MOU) mit dem DOE zur Einrichtung des **SPARK**-Programmbüros, Bereitstellung der **Microsoft Discovery**-Plattform, Bereitstellung von KI-Materialentdeckungsmodell-Familien (**MatterGen**, **MatterSim**) und Integration topologischer Quantenprozessoren (**Majorana 1** QPU) in DOE National Laboratories (PNNL, ANL, ORNL, LBNL) für die hybride klassisch-quantenbasierte Materialsynthese.
* **NVIDIA:** Strategische Absichtserklärung (MOU) mit dem DOE zum Antrieb von Exascale-KI-Supercomputing-Infrastrukturen (wassergekühlte KI-Supercomputer **Solstice** und **Equinox** am ANL ALCF mit Oracle), Co-Entwicklung der **NVIDIA Apollo**-Modellfamilie für die offene Wissenschaft, Einsatz von **Omniverse** physikalischen KI-digitalen Zwillings-Frameworks und Modulus-Physik-Engines in nationalen Laboren (PPPL-Fusion, NREL-Netz, ANL-APS-Strahlrohre) und Beschleunigung der Quantenschaltkreisemulation über das **cuQuantum** SDK im Rahmen von Genesis.
* **OpenAI:** Strategische Partnerschaft und Absichtserklärung (MOU) mit dem DOE (*"Advancing the Next Era of National Science"*) zur Bereitstellung von **OpenAI for Government** FedRAMP-konformen Enklaven mit Zero-Data-Retention-Sicherheitsgarantien in allen 17 Nationalen Laboratorien und NNSA-Verteidigungsstandorten, Bereitstellung von Spitzen-Schlussfolgerungsmodellen für automatisierte mathematische Theorembeweise, multimodale wissenschaftliche Datenanalysen (Beugungsbildgebung, Elektronenmikroskopie) und agentische Workflow-Orchestrierung im Rahmen von Genesis.
* **Oracle:** Partnerschaft mit dem DOE und NVIDIA zur Bereitstellung wassergekühlter **OCI Supercluster** KI-Recheninfrastrukturen (**Solstice**- und **Equinox**-Supercomputer am ANL ALCF), Bereitstellung von FedRAMP High und DISA IL5/IL6 souveränen Cloud-Enklaven in nationalen Laboratorien und Lieferung von Oracle Autonomous Database sowie KI-Vektorsuch-Daten-Engines für petabyte-skalierte wissenschaftliche Datenverwaltung, Saubere-Energie-Simulationen und nationale Sicherheitsforschung im Rahmen von Genesis.
* **SambaNova Systems:** Bereitstellung der Reconfigurable Dataflow Architecture (RDA), angetrieben von **Reconfigurable Dataflow Units (RDUs)** (**SN40L**), an Rechenknoten nationaler Laboratorien (ANL ALCF, LLNL, SNL), die das Training wissenschaftlicher Basismodelle mit Billionen Parametern und hochdurchsatz-multimodale KI-Inferenz für Materialwissenschaft, Klimamodellierung und Genomik-Pipelines ermöglichen, integriert mit der DOE Integrated Research Infrastructure (IRI) im Rahmen von Genesis.
* **Scale AI:** Strategische Absichtserklärung (MOU) mit dem DOE zur Bereitstellung fortschrittlicher KI-Daten-Engine-Infrastrukturen (**Scale Data Engine**, **Scale Donovan**), wissenschaftlicher Datenkuratierung, automatisierter Annotationspipelines für petabyte-skalierte Synchrotron- und Mikroskopiedatensätze, synthetischer Datengenerierung für datenarme wissenschaftliche Szenarien und domänenexperter RLHF-Feinabstimmungspipelines, die in DOE National Laboratories (ANL, ORNL, LBNL) für die Ausrichtung wissenschaftlicher Basismodelle im Rahmen von Genesis bereitgestellt werden.

#### B. Quantenentwickler & Halbleitergießereien
* **AMD:** Strategische Partnerschaft zur Bereitstellung des ersten betriebsbereiten Genesis-KI-Supercomputers **Lux** (angetrieben von AMD Instinct GPUs, EPYC CPUs und intelligenten Pensando DPU-Netzwerkstrukturen) und des geplanten Exascale-Supercomputers **Discovery** (mit EPYC-Prozessoren und Instinct-Beschleunigern der nächsten Generation) sowie zur bundesweiten Erweiterung des offenen ROCm-Softwarestack-Ökosystems für KI-Basismodelle nationaler Laboratorien.
* **Applied Materials:** Fortschrittliche Halbleiter-Waferfertigungsanlagen, Materialtechnikplattformen, Sub-Nanometer-Dünnschichtabscheidungstechnologien und heterogene 3D-Chiplet-Verpackungsinfrastrukturen zur Unterstützung von kommerziellen Quantengießereien des CHIPS and Science Act (GlobalFoundries, IBM Quantum, Diraq, PsiQuantum) sowie zur Fertigung hochdichter KI-Hardware.
* **Atom Computing:** Zusage von 100 Millionen US-Dollar im Rahmen des CHIPS and Science Act (Absichtserklärung des Handelsministeriums) zur Skalierung optisch gefangener Neutralatom-Quantenhardware, Manipulation von Arrays mit 1.000+ Qubits und Bereitstellung offener „Quantum-in-the-Loop“-Schnittstellen zur Co-Simulation der Stromnetzstabilität mit der ARIES-Plattform des NREL.
* **Diraq:** Zusage von bis zu 38 Millionen US-Dollar im Rahmen des CHIPS Act zur Skalierung CMOS-nativer Silizium-Spin-Quantenpunktprozessoren (**Quantum Dot Spin QPU**-Plattformen) in Partnerschaft mit GlobalFoundries bei Kosten von unter einem Dollar pro Qubit unter Nutzung von Standard-Sub-28nm-Halbleitergießereiprozessen und kryogenen Steuerungs-ASICs für die DOE-Quanteninfrastruktur.
* **D-Wave Quantum:** Zusage von 100 Millionen US-Dollar im Rahmen einer CHIPS-Act-Absichtserklärung (Eigenkapitalbeteiligung des Handelsministeriums) zur Skalierung von Dual-Plattform-Quantenhardware an R&D-Standorten in CT, FL und BC: kommerzielle Quanten-Annealing-Systeme (**Advantage2**-QPUs mit 5.000+ bis 7.000+ Flux-Qubits, Zephyr-20-Wege-Topologie, 100.000-Qubit-Roadmap) und **Dual-Rail-Supraleiter**-Gatter-Modell-Architekturen (Ziel: 100 logische Qubits bis 2032). Bereitstellung hybrider klassisch-quantenbasierter **Leap**-Cloud-Löserdienste, die in DOE National Laboratories (LANL, ORNL, NREL ARIES) für Stromnetz-Dispatch-Optimierung, Materialentdeckung und komplexe Lieferkettenplanung unter Genesis integriert sind.
* **GlobalFoundries:** Zusage von 375 Millionen US-Dollar im Rahmen des CHIPS and Science Act und Partnerschaft mit dem DOE über **GF Labs** zur Bereitstellung von Process Design Kits (PDKs), GlobalShuttle™ MPW-Läufen (Multi-Project Wafer), Silizium-Photonik-Plattformen, Sub-28nm-Halbleitergießereiprozessen und kundenspezifischem Mikrochip-Packaging zur Unterstützung kommerzieller Quantenpartner (Diraq, Quantinuum, PsiQuantum) sowie kryogener Quantensteuerungs-ASICs.
* **IBM / IBM Quantum:** Zusage von 1 Milliarde US-Dollar im Rahmen des CHIPS and Science Act für eine inländische supraleitende Quantengießerei, 50 Millionen US-Dollar an direktem Quantenrechenzugang (**Heron** 133-Qubit- und **Nighthawk**-Prozessoren), Co-Leitung von Phase-I-RFA-Preisen für agentische KI-Quantenentdeckungen mit ORNL, ANL und BNL sowie Integration von **Qiskit Runtime** und **Qiskit Serverless** in HPC-Supercomputer nationaler Laboratorien für hybride Quanten-Klassik-Workflows.
* **Infleqtion:** Zusage von 100 Millionen US-Dollar im Rahmen des CHIPS and Science Act und Ausführung von 3 DOE-Genesis-Preisen: Skalierung der Neutralatom-Quantenhardwareplattform (**Sqale**), Einsatz hochpräziser optischer Atomuhren (**Tiqker**) zur Stromnetz-Frequenzsynchronisation und RF-Sensorik sowie Optimierung der Quantenschaltkreisausführung über den **Superstaq**-Quantensoftware-Compiler in HPC-Clustern nationaler Laboratorien (ANL, LBNL, ORNL).
* **PsiQuantum:** Zusage von 100 Millionen US-Dollar im Rahmen eines CHIPS-Act-LOI und Ausführung einer 125-Millionen-Dollar-DARPA-QBI-Vereinbarung zum Bau nutzenorientierter fehlertoleranter photonischer Quantenhardware in der inländischen **PsiFactory**-Anlage in Milpitas, CA, Skalierung von **Bariumtitanat (BTO)**-Hochgeschwindigkeits-Optikschaltern, hocheffizienten Einzelphotonendetektoren, Chip-zu-Faser-Verpackung und **"Omega"**-Silizium-Photonik-Waferfertigung in Partnerschaft mit GlobalFoundries (Fab 8, Malta NY) für wissenschaftliche Modellierungen des DOE unter Genesis (Standorte im Nutzenmaßstab in Chicago, IL und Moreton Bay).
* **Quantinuum:** Zusage von 100 Millionen US-Dollar im Rahmen eines CHIPS-Act-LOI (Börsenkürzel: **QNT**) zur Skalierung fehlertoleranter QCCD (Quantum Charge-Coupled Device)-Ionenfallen-QPUs (98-Qubit-**Helios**-Prozessor mit 2D-Knotenpunkt-Shuttling, **System Model H1 / H2**-Serie), Oberflächen-Fallen-Mikrofabrikation (mit SNL) und inländischem Gießerei-Packaging mit GlobalFoundries und Monarch Quantum (**Quantum Light Engines**) bei gleichzeitiger Bereitstellung der computergestützten Quantenchemie-Plattform **InQuanto** in HPC-Supercomputern nationaler Laboratorien im Rahmen von Genesis.
* **Rigetti Computing:** Zusage von bis zu 100 Millionen US-Dollar im Rahmen einer CHIPS-Act-Absichtserklärung (Eigenkapitalbeteiligung des Handelsministeriums) zur Skalierung kachelbarer Multi-Chip-supraleitender QPUs (84-Qubit-**Ankaa-3**-Prozessor, **Novera** 9-Qubit-Teststand, modulare **Lyra**-Architektur), miniaturisierter kryogener Steuerelektronik und 3D-TSV-Chip-Stapelung sowie Durchführung von DOE-Preisen mit **LLNL** und CU Boulder für die Quantensimulation nichtlinearer Fusionsplasmadynamik (*Physical Review Applied*) im Rahmen von Genesis.
* **Siemens:** Strategische Absichtserklärung (MOU) mit dem DOE zur Bereitstellung industrieller KI-Plattformen, **Siemens Xcelerator** Digital-Twin-Software, **MindSphere** industrieller IoT-Analytik, SCADA-Telemetrieinfrastruktur und Smart-Grid-Automatisierung in DOE-Anlagen für saubere Energie (NREL ARIES), Fusionsreaktoren (PPPL-ITER-Unterstützungssysteme) und Kernforschungseinrichtungen (INL) zur Echtzeit-Betriebsprozessoptimierung im Rahmen von Genesis.
* **Synopsys:** Einsatz der einheitlichen **Synopsys.ai** Electronic Design Automation (EDA)-Plattform in den Halbleiter-Design-Pipelines der Genesis-Mission, bestehend aus **DSO.ai** (Design Space Optimization) für autonome Leistungs-Flächen-Stromverbrauch-Exploration (PPA) mit bis zu 25% Verbesserung der Chipdesign-Metriken, **VSO.ai** (Verification Space Optimization) für KI-gesteuerte Coverage-Konvergenz und Ursachenanalyse mit bis zu 20% zusätzlicher Verifikationsabdeckung, **TSO.ai** (Test Space Optimization) für automatisierte Testprogrammgenerierung zur Maximierung der Fehlererkennungsrate und **AgentEngineer™** vollautonome agentische Arbeitsabläufe mit bis zu 50-fach schnellerer Zeit bis zu validiertem RTL und 20–40% Reduzierung der Debug-Zykluszeiten. Ergänzende Werkzeuge umfassen **Custom Compiler** Analog/Mixed-Signal-Layoutumgebungen für die präzise Entwicklung kryogener Quantensteuerungs-ASICs, **TCAD** (Technology CAD) Prozess- und Bauelement-Physiksimulatoren für Sub-Nanometer-Transistormodellierung, **PrimeTime** statische Timing-Analyse-Engines und softwaregesteuerte Hardware-Assisted Verification (HAV)-Emulationsplattformen für Milliarden-Gate-KI-Chiparchitekturen. Synopsys IP-Lizenzierung und siliziumgeprüfte Designblöcke untermauern fortschrittliche Node-Tape-Outs bei CHIPS-Act-Quantengießereien (GlobalFoundries, IBM Quantum) und F&E-Pipelines für Mikroelektronik der DOE National Laboratories (SNL, Fermilab, ANL) im Rahmen von Genesis.
* **xLight:** Startup aus dem Silicon Valley, das **Freie-Elektronen-Laser-Technologie (FEL)** der nächsten Generation als versorgungsskalige EUV-Lichtquelle entwickelt, um den aktuellen Laser-Produced-Plasma-(LPP)-Engpass in der fortschrittlichen Halbleiterlithografie zu überwinden. xLight sicherte sich einen finalisierten **150-Millionen-Dollar-CHIPS-and-Science-Act-Preis** (Handelsministerium / NIST, Juni 2026) — mit Eigenkapitalbeteiligung der US-Regierung — zum Bau und zur Demonstration des ersten FEL-basierten EUV-Prototyps im **Albany NanoTech Complex** (NY CREATES), mit geplantem Betriebsbeginn **2028**. Das Unternehmen verfügt über ein langfristiges **Cooperative Research and Development Agreement (CRADA)** mit dem **Fermi National Accelerator Laboratory (Fermilab)**, das Fermilabs weltweit führende Expertise in **supraleitenden Hochfrequenz-(SRF)-Kavitäten** und **Kryomodul**-Beschleunigertechnologie nutzt. xLights teilchenbeschleunigergetriebene FEL-Architektur ist darauf ausgelegt, hochintensive, wellenlängenabstimmbare kohärente EUV-Strahlen zu erzeugen, die mehrere Lithografie-Scanner pro Fabrik versorgen können, was den **Wafer-Durchsatz potenziell verdoppelt** und die Kosten pro Wafer drastisch senkt. Vorstandsvorsitzender **Pat Gelsinger** (ehemaliger Intel-CEO) leitet den Vorstand; die Risikokapitalfinanzierung umfasst eine **40-Millionen-Dollar-Series-B-Runde** unter Führung von Playground Global. xLight adressiert den kritischsten Fertigungsengpass für die fortschrittlichen KI-Chips, Quantensteuerungs-ASICs und kryogene Mikroelektronik, von denen die gesamte Genesis-Infrastruktur abhängt.

#### C. Industrietechnologie-, Energie-, Material- & Infrastrukturpartner
* **Accenture Federal Services:** Integration von Bundes-KI-Systemen, CM2US-Betriebsfähigkeit und Programmmanagement.
* **Albemarle:** Fortschrittliche Verfahren zur direkten Lithiumextraktion (Direct Lithium Extraction, DLE), chemische Raffinationstechnologien für hochreines Lithiumhydroxid und -carbonat, F&E für Festkörperbatterie-Elektrolytsubstrate sowie Sicherung der Lieferkette für kritische Mineralien für nationale Energiespeicher- und Elektro-Mobilitätsinitiativen in Zusammenarbeit mit DOE National Laboratories (Ames, NETL, PNNL).
* **Atomic Canyon:** KI-gestützte Kernenergieforschungsplattformen (**NeutronAI**), spezialisierte Kernenergie-Basismodelle, semantische Suchmaschinen für Multi-Terabyte-NRC-Regulierungsdokumente und nukleare Wissensgraphen, die am INL und ORNL eingesetzt werden, um die SMR-Lizenzierung (Small Modular Reactor) und die Sicherheitsmodellierung fortschrittlicher Reaktoren zu beschleunigen.
* **AVEVA:** Industrielle Softwareplattformen für Unternehmen, CONNECT-Industrial-Cloud-Integration, SCADA-Telemetrieinfrastrukturen und digitale Echtzeit-Betriebszwillinge für saubere Energie, Fusionsreaktoren (PPPL) und Kernforschungsanlagen (INL).
* **Chemspeed Technologies:** Automatisierte chemische Synthese-Arbeitsstationen (**SWING**, **ISYNTH**), Roboterplattformen für Parallelreaktions-Screening mit hohem Durchsatz und automatisierte Dosierungsmodule für flüssige/feste Stoffe zum Antrieb geschlossener selbstfahrender Labore in allen DOE National Laboratories (LBNL, ANL, PNNL).
* **Collins Aerospace:** Fortschrittliches Mikroelektronik-Packaging, strahlungsgehärtete Avionik-Rechensubstrate (SiC/GaN), Hochtemperatur-Sensorsysteme für extreme Umgebungen und autonome Luft- und Raumfahrt-Edge-KI-Architekturen, die gemeinsam mit Sandia (SNL) und Lawrence Livermore (LLNL) entwickelt werden.
* **ComEd (Commonwealth Edison):** Intelligente Stromnetzinfrastruktur, PMU-Sensortelemetrie-Integration mit hoher Dichte, Quanten-in-the-Loop-Leistungsflusssimulation und urbane digitale Versorgungsnetzzwillinge, die über Argonne (ANL Grid Virtualization Environment) und NREL (ARIES-Plattform) simuliert werden.
* **Cornelis Networks:** Formelle Partnerschaft mit dem Energieministerium (DOE) im Rahmen der Genesis-Mission zur Bereitstellung von hochleistungsfähigen Omni-Path Express (OPX)-Fabric-Interconnect-Architekturen, Host Fabric Interfaces (HFIs), Switches mit ultrianiedriger Latenz und Scale-out-Netzwerken für Exascale-Supercomputing und wissenschaftliche KI-Cluster in Nationalen Laboratorien.
* **Critical Materials Recycling:** Sekundäre Magnet-Recycling-Technologien, hydrometallurgische Rückgewinnung hochreiner seltener Erden (Nd, Dy, Tb) aus Elektronikschrott und Dekarbonisierung der Lieferkette im Einklang mit dem DOE Critical Materials Innovation Hub (CMI / Ames National Laboratory).
* **Emerald Cloud Lab (ECL):** Cloud-basierte robotische Laborinfrastruktur für die programmgesteuerte Remote-Ausführung von über 200 analytischen Chemie-, Molekularbiologie- und Syntheseprotokollen über automatisierte API-Schnittstellen (**Emerald Orchestrator**), die autonome geschlossene Labor-Experimente und KI-Agenten-Orchestrierung in DOE National Laboratories (LBNL, ANL, PNNL) ermöglicht.
* **EPRI (Electric Power Research Institute):** Forschungskoordination im Bereich Elektrizität, Open-Source-KI-Netzsimulations-Toolkits, Übertragungs- und Verteilungs-Co-Simulations-Engines (**GridLAB-D** / **OpenDSS**-Integration) sowie digitale Zwillinge von nuklearen Kleinreaktoren (SMR), die gemeinsam mit DOE National Laboratories (NREL ARIES-Plattform, ANL, INL) und Energieversorgern (ComEd, TVA, ISO New England) entwickelt werden.
* **Esri (Environmental Systems Research Institute):** Enterprise **ArcGIS Enterprise**-Plattformen, Raumfahrt- und GeoAI-Analytics-Engines (**GeoAI**), Fernerkundungssatelliten-Telemetrie-Integration und hochauflösende georäumliche digitale Zwillinge, die in DOE National Laboratories (ORNL, PNNL, NREL, LBNL) für Klimaresilienzszenarien, Waldbrandvorhersagen, Netzrisikoanalysen und Erdforschung eingesetzt werden.
* **GE Aerospace:** Fortschrittliche Luft- und Raumfahrtantriebstechnik, Hochtemperatur-Keramikmatrix-Verbundwerkstoffe (CMCs), additive Fertigung für extreme thermische Umgebungen und Exascale-Verbrennungs-CFD (Numerische Strömungsmechanik), die auf DOE-Exascale-Supercomputern (**Frontier** / **Aurora**) in Nationalen Laboratorien (ORNL, ANL, NREL) für die Thermochemie-Modellierung nachhaltiger Luftfahrtkraftstoffe (SAF) simuliert werden.
* **ISO New England:** Regionaler Stromnetz-Dispatch (RTO), hochfrequente Phasor Measurement Unit (PMU)-Telemetrieschaltung, Echtzeit-Modellierung der Integration erneuerbarer Energien über mehrere Bundesstaaten, dynamische Übertragungsfähigkeits-Cosimulationen (Dynamic Line Rating, DLR) und quantensichere Netz-Cybersicherheitsarchitektur, die gemeinsam mit DOE National Laboratories (NREL ARIES-Plattform, PNNL, ANL) im Rahmen der Genesis-Mission entwickelt werden.
* **Kitware:** Open-Source-Softwareentwicklung für die Wissenschaft, Exascale-3D-Visualisierungsplattformen (**ParaView**, **VTK** - Visualization Toolkit), In-situ-Supercomputing-Analyse-Engines (**Catalyst**), plattformübergreifende Build-Automatisierungstools (**CMake**) und KI-Computer-Vision-Frameworks (**KWIVER**), die in DOE National Laboratories (ORNL, ANL, LLNL, LBNL) für Echtzeit-Exascale-Simulationsanalysen im Rahmen von Genesis eingesetzt werden.
* **Micron:** Zusage von 6,1 Milliarden US-Dollar im Rahmen des CHIPS and Science Act (Absichtserklärung des Handelsministeriums) zur Skalierung inländischer führender Speicherfertigung (Megafabs in Clay, NY und Boise, ID), Bereitstellung von Speicher-Arrays mit ultrahoher Bandbreite (**HBM3e** / **HBM4**), Compute Express Link (**CXL 2.0 / 3.0**)-Speichererweiterungsmodulen und hochdichten Enterprise-SSDs, die in Exascale-Supercomputer-Knoten nationaler Laboratorien (ANL Aurora, ORNL Frontier, LLNL El Capitan) für das Training wissenschaftlicher KI-Basismodelle integriert werden.
* **MP Materials:** Inländischer Abbau und Verfeinerung seltener Erden in Mountain Pass, kommerzielle Herstellung von Neodym-Praseodym (NdPr)-Magnetlegierungen und schweren seltenen Erden (Dy, Tb), hydrometallurgische Verarbeitung und KI-gestützte Flotations-Trennungsalgorithmen, die gemeinsam mit dem DOE Critical Materials Innovation Hub (CMI / Ames National Laboratory, ORNL, ANL) für die Lieferkettensicherheit im Rahmen von Genesis entwickelt werden.
* **New York Creates (NY CREATES):** Betreiber der führenden 300mm-Halbleiter-Forschungs- und Entwicklungsanlage Nordamerikas im Albany NanoTech Complex, Standort des 825-Millionen-Dollar-CHIPS-for-America-EUV-Beschleunigungszentrums (Extreme Ultraviolet Lithography) des Handelsministeriums, des Haupt-F&E-Zentrums des National Semiconductor Technology Center (NSTC), heterogener 3D-Verpackungs-Pilotlinien und der **xLight** 150-Millionen-Dollar-Freie-Elektronen-Laser-Prototypanlage (FEL) für EUV-Lithografie der nächsten Generation und kryogene Quantensteuerelektronik-Mikroelektronik im Rahmen von Genesis.
* **Niron Magnets:** Kommerzialisierung von seltene-erden-freien **Clean Earth Magnet®**-Technologien auf Basis von Eisennitrid ($Fe_{16}N_2$) mit hoher Magnetisierungssättigung, Nutzung von Synchrotron- und Neutronenstreuungs-Strahlrohren der DOE National Laboratories (ANL Advanced Photon Source, ORNL SNS/HFIR) für die atomare Kristallorientierungs-Co-Entwicklung und Anwendung KI-gestützter Sinter-Optimierungsalgorithmen, die gemeinsam mit dem DOE Critical Materials Innovation Hub (CMI / Ames National Laboratory) für die inländische Lieferkettensicherheit von EV-Antrieben und Stromnetzmagneten im Rahmen von Genesis entwickelt werden.
* **Nokia (Nokia Bell Labs):** Bereitstellung von Terabit-DWDM-optischen Netzverbindungsstrukturen für das föderierte ESnet-Labornetzwerk, missionskritischen privaten 5G/6G-Funk-Telemetriestrukturen für autonome Instrumentierungen in den Nationalen Laboratorien sowie NIST-standardisierter post-quantenkryptografischer (PQC) Transportsicherheit gekoppelt mit Quantum Key Distribution (QKD)-Optiken von Nokia Bell Labs für quantensicheres laborübergreifendes Exascale-Datenstreaming im Rahmen von Genesis.
* **Nusano:** Einsatz von Schwermetall-Mehrteilchen-Linearbeschleunigerplattformen für die Hochdurchsatz-Produktion therapeutischer und diagnostischer Radioisotope (Actinium-225, Lutetium-177, Astatin-211), Integration KI-gestützter Strahloptimierungsalgorithmen und automatisierter radiochemischer Trennsysteme, die gemeinsam mit den Nationalen Labor-Hubs des DOE Isotope Program (ORNL, LANL, BNL) im Rahmen von Genesis entwickelt werden.
* **OLI Systems:** Bereitstellung fortschrittlicher MSE (Mixed-Solvent Electrolyte)-Thermodynamik-Chemie-Simulations-Engines, Elektrolyt-Eigenschaftsmodellierungslösern und Phasengleichgewichts-digitalen-Zwillingen, die in Workflows des DOE Critical Materials Innovation Hub (CMI / Ames National Laboratory, INL, ORNL) für die KI-beschleunigte hydrometallurgische Extraktion, Lösungsmittelreinigung und Rückgewinnung kritischer Mineralien im Rahmen von Genesis integriert sind.
* **Phoenix Tailings:** Bereitstellung kohlenstofffreier, giftmüllfreier hydrometallurgischer Extraktions- und Schmelzsalzelektrolyse-Raffinationsplattformen, die in KI-Chemieprozess-Modellierungen und digitale Zwillinge des DOE Critical Materials Innovation Hub (CMI / Ames National Laboratory, NETL, ORNL) zur hochreinen Rückgewinnung von Seltenen Erden (Nd, Dy, Pr, Tb) und kritischen Metallen aus Industrieabfällen im Rahmen von Genesis integriert sind.
* **PMT Critical Metals:** Hochreine Refraktärmetallverarbeitung (Wolfram, Molybdän, Tantal, Niob), Pulvermetallurgie von Hochtemperatur-Superlegierungen und KI-gestützte Legierungszusammensetzungsentwicklung, die gemeinsam mit DOE National Laboratories (ORNL Manufacturing Demonstration Facility, Ames Laboratory, LANL) für strategische Verteidigungs-, Kernreaktor- und Fusionsenergieanwendungen im Rahmen von Genesis entwickelt werden.
* **Qubit (Qubit Inc.):** Echtzeit-Quantenhardware-Steuerungssoftware, QPU-Kalibrierungstreiber auf Pulsebene, Mikrowellen-Wellenformsynthese-Engines und hardwareagnostische Compiler-Middleware, die in DOE-Quantennutzeranlagen (ORNL QCUP, LBNL NERSC, ANL Q-NEXT) zur Echtzeit-Fehlerminderung und hybriden klassisch-quantenmechanischen Ausführung im Rahmen von Genesis integriert sind.
* **RadiaSoft:** Open-Source-Teilchenbeschleuniger-Strahldynamik-Simulationssoftware (**Sirepo**, **Radia**, **Impact-T**, **OPAL**) und KI-gestützte Strahlemittanz-Steuerungsalgorithmen, die in DOE-Nutzeranlagen (SLAC LCLS-II, ANL APS-U, BNL EIC, LBNL ALS) zur Echtzeit-Beschleunigergitter-Optimierung im Rahmen von Genesis integriert sind.
* **Ramaco (Ramaco Resources):** Kohle-zu-Kohlenstoff-Materialienherstellung, synthetische Graphitanodenproduktion für EV-Batterien und KI-beschleunigte Extraktion seltener Erden (REE) und kritischer Mineralien aus inländischen Kohlenstofflagerstätten (**Brook Mine**), die gemeinsam mit DOE National Laboratories (NETL, ORNL, Ames CMI) im Rahmen von Genesis entwickelt werden.
* **RTX (Raytheon Technologies):** Bereitstellung von Hochleistungs-RF-Mikroelektronik, Halbleitern mit breiter Bandlücke (GaN/SiC), Quantenmagnetometriesensoren und Quantenkommunikationsnetzwerk-Architekturen (**Raytheon BBN**), die gemeinsam mit DOE National Laboratories (SNL, LLNL, ORNL) für Defense Edge Computing in extremen Umgebungen im Rahmen von Genesis entwickelt werden.
* **Semiconductor Industry Association (SIA):** Koordination der inländischen Mikroelektronik-Politik im Rahmen der CHIPS and Science Act-Umsetzung, Leitung der **NSTC**-Arbeitskräfteentwicklungspipeline (National Semiconductor Technology Center), Kartierung der Halbleiter-Lieferkettenresilienz und strategische Abstimmung kommerzieller Gießereikapazitäten (GlobalFoundries, Intel, TSMC Arizona) mit den Anforderungen des DOE an Quantenhardware- und KI-Chip-Fertigung im Rahmen von Genesis.
* **TdVib (TdVib LLC):** Weltweit führender Lieferant und Hersteller der **Terfenol-D**-Legierung (Tb$_x$Dy$_{1-x}$Fe$_2$) — dem Material mit der höchsten bekannten Magnetostriktion bei Raumtemperatur — ursprünglich gemeinsam mit dem **Ames National Laboratory** (DOE) entwickelt. TdVib liefert maßgeschneiderte magnetostriktive Wandlerelemente, Hochkraft-Linearaktuatoren und elektromagnetische Betätigungssysteme für die Instrumentierung der DOE National Laboratories, darunter strahlungstolerante Strukturgesundheitsüberwachungssensoren (SHM) für prototypische Kernreaktorumgebungen am INL, Präzisions-Sub-Mikrometer-Positionierungsaktuatoren für die Ausrichtung von Synchrotron-Strahlrohr-Optiken (ANL APS, SLAC LCLS-II, BNL NSLS-II), aktive Schwingungsdämpfungs-Isolationsplattformen für kryogene Quantenprozessor-Gehäuse (QPU) und Hochleistungs-Ultraschallbearbeitungswandler für fortschrittliche Materialverarbeitung im Rahmen von Genesis.
* **Tennessee Valley Authority (TVA):** Das größte öffentliche Energieversorgungsunternehmen der USA, das die Netzstromversorgung für den ORNL-Campus und alle DOE-Einrichtungen in Oak Ridge bereitstellt. TVA liefert die Hochspannungs-Energieinfrastruktur für den Betrieb des **Frontier**-Exascale-Supercomputers (24,6 MW Betriebsleistung) und des geplanten **Discovery**-Systems am OLCF. Im Dezember 2023 unterzeichneten DOE und TVA ein wegweisendes **Memorandum of Understanding (MOU)** zur Lieferung von **100 % lokal erzeugtem kohlenstofffreiem Strom (CFE)** an ORNL und den Y-12 National Security Complex bis 2030. TVA ist der designierte Standortbetreiber für die **Clinch River SMR**-Nukleardemonstration und kooperiert mit ORNL an der computergestützten Modellierung fortschrittlicher Kernreaktoren auf Exascale-HPC-Plattformen, dem Einsatz 3D-gedruckter Reaktorkomponenten (Kernkraftwerk Browns Ferry) sowie der Hochtemperatur-Fusionsmaterial-Testanlage am **Bull Run Energy Complex**, die gemeinsam mit der University of Tennessee und Type One Energy zur Validierung plasmabelasteter Materialien im Rahmen von Genesis eingerichtet wurde.

### 3.2 Nationale Laboratorien (National Laboratories)
Das DOE Office of Science leitet die Finanzierung über 17 primäre nationale Laborknotenpunkte:
* **Ames National Laboratory (Ames):** Leitung des Critical Materials Institute (CMI), Legierungsthermodynamik mit hohem Durchsatz und Forschung zum Ersatz seltener Erden.
* **Argonne National Laboratory (ANL):** Gastgeber der Argonne Leadership Computing Facility (ALCF), Solstice- und Equinox-Supercomputer, Aurora-Exascale-Anwendungen, Advanced Photon Source (APS) Strahlrohre, des Infleqtion Quanten-Hubs und Betreiber der **Genesis Open Models**-Plattform ([`genesisopenmodels.anl.gov`](https://genesisopenmodels.anl.gov/)) für das Hosting und die Inferenz offener wissenschaftlicher Modelle.
* **Brookhaven National Laboratory (BNL):** Leitung des Co-Design Center for Quantum Advantage (C2QA), Betrieb der National Synchrotron Light Source II (NSLS-II) und Einsatz von KI-Basismodellen für die Kernphysik.
* **Fermi National Accelerator Laboratory (Fermilab):** Leitung des Superconducting Quantum Materials and Systems (SQMS) Center, Betrieb von SRF 3D-Kavitätstestanlagen und Partnerschaft mit xLight.
* **Idaho National Laboratory (INL):** Pioniere der Kernenergie-KI, digitale Zwillinge kleiner modularer Reaktoren (SMR), AWS/Microsoft Cloud-HPC-Integration und autonome Forschungsreaktorsteuerung.
* **Lawrence Berkeley National Laboratory (LBNL):** Leitung von 13 Flaggschiff-KI-für-die-Wissenschaft-Projekten, Verwaltung der ModCon-Plattform, Betrieb von NERSC-Exascale-Rechenkapazitäten und Anbindung von Materials Project-Datenbanken.
* **Lawrence Livermore National Laboratory (LLNL):** Leitung von 10 Projektauszeichnungen mit Schwerpunkt auf Fusionsphysik an der National Ignition Facility (NIF), Rigetti-Fusionsquantensimulation und Bioseicherheits-KI.
* **Los Alamos National Laboratory (LANL):** Leitung von 7 Projekten in den Bereichen Waffenhydrodynamik, Plutoniumalterung und autonome Testrobotik.
* **National Energy Technology Laboratory (NETL):** Speerspitze bei Stromnetzinstabilitäts-KI, Optimierung der Kohlenstoffabscheidung und Ramaco Kohle-zu-Graphite-Material-F&E.
* **National Renewable Energy Laboratory (NREL):** Betreiber der ARIES-Plattform, Verbindung von Atom Computing Neutralatom-QPUs mit physischer Netz-Hardware für Quanten-in-the-Loop-Co-Simulationen.
* **Oak Ridge National Laboratory (ORNL):** Leitung von 9 Projektauszeichnungen unter Nutzung des Frontier Exascale-Supercomputers, Ausführung von FLiBe-Fusionsquantenchemie-Pipelines mit IBM und Cleveland Clinic.
* **Pacific Northwest National Laboratory (PNNL):** Partnerschaft mit Microsoft Discovery zur Entdeckung von Festkörperbatterie-Elektrolyten, Entwicklung von Klima-Atmosphärenmodellen und Betrieb molekularwissenschaftlicher Labore.
* **Princeton Plasma Physics Laboratory (PPPL):** Leitung der AI4Fusion-Initiative zur Echtzeit-Tokamak-Plasmasicherstellung und Simulation von Niedertemperatur-Plasmaätzphysik für die Halbleiterherstellung.
* **Sandia National Laboratories (SNL):** Leitung von 6 Projekten und Beteiligung als Co-Investigator an 17 weiteren Initiativen, Fertigung von Oberflächen-Ionenfallen für Quantinuum und Weiterentwicklung strahlungsgehärteter Mikroelektronik.
* **Savannah River National Laboratory (SRNL):** Leitung radiochemischer Trennungsfließbilder, KI-gestützter nuklearer Sicherheitsmaßnahmen, Tritiumverarbeitungssysteme und Wasserstoffspeicherungsmedien.
* **SLAC National Accelerator Laboratory (SLAC):** Betrieb des Linac Coherent Light Source (LCLS-II) Attosekunden-Röntgenlasers, Einsatz von Deep-RL zur Strahlemittanzsteuerung und Entwicklung von SRF-Beschleunigerkavitäten.
* **Thomas Jefferson National Accelerator Facility (TJNAF / Jefferson Lab):** Betrieb der Continuous Electron Beam Accelerator Facility (CEBAF), Einsatz KI-gestützter nuklearer Femtografie und Subatomarstrukturen.

### 3.3 Universitäre Forschungspartner
Über 57 Forschungsuniversitäten erhalten im Rahmen der Ausschreibung DE-FOA-0003612 und verwandter Genesis-Missions-Initiativen wettbewerbsfähige Projektzuschläge:

* **Quantenwissenschaft, Informationstheorie & Modalitätsentwicklung:**
  * **MIT, Caltech, Stanford, Harvard & Princeton:** Entwicklung fehlertoleranter Quantenfehlerkorrektur, Oberflächencode-Compiler, photonischer Qubit-Interconnects und variationaler Quantenalgorithmen (VQE/QAOA) in Partnerschaft mit IBM, PsiQuantum und Quantinuum.
  * **University of Colorado Boulder & UC Santa Barbara (UCSB):** Partnerschaften mit Infleqtion und Rigetti in den Bereichen Atomphysik, Neutralatom-Trapping-Arrays, kryogene QPU-Steuerelektronik und Fusionsplasma-Quantensimulationen.
  * **Yale University, Chicago & Maryland:** Entwicklung supraleitender Schaltkreisarchitekturen, Hohlraum-QED-Quantenspeicher und Quanten-Repeater-Netzwerke für nationale Laborknotenpunkte (C2QA, SQMS).
* **KI-Architektur, Basismodelle & Agentische Entdeckung:**
  * **Carnegie Mellon University (CMU) & UC Berkeley:** Co-Entwicklung autonomer wissenschaftlicher Agenten-Frameworks, automatisierter Hypothesengenerierungsalgorithmen und multimodaler KI-Modelle.
  * **New York University (NYU), Columbia & Cornell:** Vorreiter bei Scientific Machine Learning (SciML), neuronalen Operatoren für partielle Differentialgleichungen (PDEs) und physikinformierten neuronalen Netzen (PINNs).
  * **University of Illinois Urbana-Champaign (UIUC) & UT Austin:** Optimierung verteilter KI-Trainingspipelines auf den Exascale-Supercomputern Frontier und Aurora sowie Open-Source-Modellregister-Plattformen.
* **Material-Co-Design, Autonome Chemie & Bio-Genesis:**
  * **Northwestern University, Rice & Georgia Tech:** Einsatz automatisierter chemischer Synthese, Materialscreening mit hohem Durchsatz und anorganischer Kristallstrukturgenerierung in Partnerschaft mit PNNL und LBNL.
  * **Tulane University & Emerald Cloud Lab Kooperation:** Integration generativer KI-Design-Agenten mit robotischen Nasslabor-Plattformen für die kontinuierliche Elektrolyt- und Polymerentdeckung.
  * **Emory, Johns Hopkins, NYU & University of Pittsburgh:** Co-Leiter der Bio-Genesis-Mission Initiativen, Einsatz von AlphaFold 3 und struktur-biologischen Basismodellen für die Arzneimittelentdeckung.
* **Kernphysik, Teilchenbeschleunigung & Extreme Umgebungen:**
  * **Michigan State University (FRIB) & Stony Brook:** Durchführung von Physik seltener Isotopenstrahlen, KI-gestützter Kernstrukturmodellierung und Schwerionenkollisionsanalysen mit BNL und ANL.
  * **Rensselaer Polytechnic Institute (RPI) & SLAC/Stanford:** Co-Entwicklung von Strahldynamiksimulationen für Teilchenbeschleuniger (Sirepo, RadiaSoft) und Optimierung von Elektronenquellen hoher Helligkeit.
  * **Penn State, Florida State & Texas A&M:** Simulation extremer thermischer Umgebungen, Keramikmatrix-Verbundwerkstoffen (CMCs) und strahlungsgehärteter Elektronik.
* **Netzdekarbonisierung, Klima & Geospaltliche KI:**
  * **Arizona State University (ASU), NREL & ComEd:** Co-Simulation dynamischer Stromleitungsbewertungen, dynamischen Lastausgleichs und Quanten-in-the-Loop-Netzstabilität für regionale ISO-Netze.
  * **University of Arizona, University of Michigan & UND:** Einsatz von KI-Erdforschungsmodellen (AlphaEarth), präziser hydrologischer Kartierung und Überwachung von Kohlenstoffabscheidungsprozessen im Rahmen von NETL-Partnerschaften.

### 3.4 Bundesbehörden & Politische Gremien
* **White House Office of Science and Technology Policy (OSTP):** Executive Direction, behördenübergreifende Koordination und nationale S&T-Prioritätensetzung unter Exekutivverordnungen für KI und Quantenführerschaft.
* **U.S. Department of Energy (DOE) — Office of Science:** Primäre Missionsleitung und Förderbehörde (Ausschreibung DE-FOA-0003612), die Exascale-Supercomputing-Assets, 17 nationale Laboratorien und multi-institutionelle KI-für-Wissenschaft-Projekte orchestriert.
* **U.S. Department of Commerce (DOC) — NIST / CHIPS R&D Office:** Ausführung von Absichtserklärungen des CHIPS and Science Act, Verwaltung von über 2 Milliarden US-Dollar an Anreizen für die Quantenhalbleiterfertigung und Festlegung nationaler Mess- und Quantenstandards.
* **National Science Foundation (NSF):** Koordination von 83 Millionen US-Dollar für integrierte Datensysteme und nationale KI-Forschungsinstitute.
* **National Institutes of Health (NIH) / HHS:** Co-Leitung der Bio-Genesis-Mission Initiative, Einsatz generativer KI-Modelle und multimodaler Basismodelle für die biomedizinische Entdeckung und therapeutische Screenings.
* **National Aeronautics and Space Administration (NASA):** Co-Entwicklung von KI-Basismodellen für die Erdsystemwissenschaft (AlphaEarth), planetare Klimamodellierung und Materialien für extreme Umgebungen.
* **Department of War (U.S. Department of Defense / DOD):** Vorantreiben von wissenschaftlichen Dual-Use-KI-Anwendungen, strahlungsgehärteter Mikroelektronik, numerischer Strömungsmechanik (CFD) für Hyperschall und Resilienz der Lieferkette für verteidigungskritische Materialien.
* **Department of Homeland Security (DHS) — Science & Technology Directorate:** Integration KI-gestützter Resilienzmodelle für kritische Infrastrukturen, Bedrohungsanalysen für Lieferketten und Smart-Grid-Cybersicherheitsprotokollen.
* **Department of the Interior (DOI):** Wissenschaftliche KI-Führung bei der Bewertung kritischer Mineralressourcen (USGS), Einzugsgebiets- und hydrologischer Modellierung sowie Umweltverwaltung.

### 3.5 Spezialisierte Forschungs- & Gesundheitseinrichtungen
* **Cleveland Clinic:** Co-Leiter der bahnbrechenden Fusions-Quantenchemie-Pipeline von ORNL–Cleveland Clinic–IBM für FLiBe-Schmelzsalz-Fusionsreaktoren unter Nutzung von IBM Quantum System One Assets für biomedizinische KI.
* **Johns Hopkins University Applied Physics Laboratory (JHU APL):** Partnerschaft mit Microsoft Discovery und nationalen Laboren zum Betrieb autonomer selbstfahrender Syntheselaboratorien für Hochtemperatursupraleiter und verteidigungskritische Legierungen.
* **AI Tennessee Initiative:** Koordination der bundesweiten KI-Forschung im gesamten System der University of Tennessee und am Oak Ridge National Laboratory.
* **RTI International:** Bereitstellung KI-gestützter Umweltrisikomodellierung, techno-ökonomischer Analysen (TEA) für die Skalierung der Kohlenstoffabscheidung und Lebenszyklusanalysen für nachhaltige Materialien.

---

## 4. Politik, behördenübergreifende Governance & Strategische Finanzmechanismen

Die Genesis-Mission arbeitet unter einem zentralisierten exekutiven Politikrahmen, der darauf ausgelegt ist, milliardenschwere Bundesinvestitionen, privates Industriekapital und behördenübergreifende Governance in eine kohärente nationale wissenschaftliche Kapazität einzubinden.

### 4.1 Mehrstufige Finanzallokationen und -mechanismen

Die Finanzinfrastruktur der Genesis-Mission integriert vier verschiedene Kapital- und Ressourcenströme im Gesamtwert von über **3,5 Milliarden US-Dollar** an kombinierten Bundeszuschüssen, Anreizen des CHIPS Act und Zusagen kommerzieller Hyperscaler:

```
+-----------------------------------------------------------------------------------+
|                        GENESIS MISSION KAPITALARCHITEKTUR                         |
+------------------------------------------+----------------------------------------+
                                           |
    +------------------+-------------------+-------------------+------------------+
    |                  |                   |                   |                  |
+---v--------------+ +-v-----------------+ +-v-----------------+ +-v----------------+
|  DOE Office of   | | Nationale Sicher- | |  CHIPS Act & DOC  | |  Private Indus-  |
|   Science FOA    | | heit & Stromnetz- | |  Quanten-LOIs   | |  trie & Hyper- |
| (DE-FOA-0003612) | |  Herausforderun.  | |  (DOC / NIST)   | |  scaler Zusagen|
|   >$800 Millionen| |  $293 Millionen   | |   >$2 Milliarden  | |  >$400 Millionen|
+------------------+ +-------------------+ +-------------------+ +------------------+
```

1. **DE-FOA-0003612 (DOE Office of Science Direktzuschüsse):** Über **800 Millionen US-Dollar** an wettbewerbsfähigen Bundeszuschüssen, verteilt auf 26 Flaggschiff-Projekte.
2. **Finanzierung von Herausforderungen für die nationale Sicherheit & das Stromnetz:** **293 Millionen US-Dollar**, die sich speziell an hochprioritäre nationale Imperative richten (Smart-Grid-Resilienz, SMR-Lizenzierung, Vorratsverwaltung von Kernwaffen und Rückgewinnung kritischer Mineralien).
3. **CHIPS and Science Act & DOC Quanten-LOIs:** Über **2 Milliarden US-Dollar** an Absichtserklärungen (LOIs) und Bundes-Matching-Anreizen, verwaltet vom US-Handelsministerium (NIST / CHIPS R&D Office) für inländische Halbleitergießereien und Quantenfertigungsplattformen.
4. **Hyperscaler & Industrie-Ressourcenkapital:** Über **400 Millionen US-Dollar** an direkten Cloud-Rechen-Gutschriften, KI-Token-Zuweisungen, Hardware-Installationen und spezialisierten Engineering-Services privater Technologieanbieter (AWS, Microsoft, Google, IBM, NVIDIA, AMD, Dell, HPE, Oracle, SambaNova, Anthropic, OpenAI, Scale AI).

### 4.2 Behördenübergreifende Governance & Ausrichtung der Bundespolitik
Die Governance der Exekutive koordiniert die Politik von 9 Bundesbehörden auf der Grundlage von Verordnungen, die der US-Führungsrolle bei KI, Quanteninformationswissenschaften und inländischer Halbleiterfertigung Priorität einräumen.

### 4.3 Strategische Implikationen & Nationale Technologische Souveränität
Die Genesis-Mission stellt einen grundlegenden Wandel in der wissenschaftlichen Strategie des Bundes dar – weg von passiver, computergestützter Forschung hin zu **aktiver, agentischer wissenschaftlicher Entdeckung**:
1. **Halbleiter- & Quantensouveränität:** Durch den Aufbau einer inländischen EUV-Lichtquellenfertigung (xLight FEL bei Albany NanoTech) und inländischer Mikroelektronikgießereien (GlobalFoundries, IBM Quantum) eliminieren die USA kritische ausländische Lieferkettenabhängigkeiten.
2. **Stromnetz & Industrielle Dekarbonisierung:** Quanten-in-the-Loop-Co-Simulationen in Echtzeit, KI-gestützte Tokamak-Fusionssteuerung und automatisierte SMR-Lizenzierung beschleunigen den Übergang zu sauberen Energien.
3. **Bioseicherheit & Nationale Verteidigungsbereitschaft:** Der Einsatz von Spitzen-Schlussfolgerungsmodellen (Gemini, Claude, OpenAI) zusammen mit Exascale-Supercomputing ermöglicht schnelle Reaktionen auf neuartige biologische Bedrohungen und Materialschäden.

---

## 5. Fazit

Die Genesis-Mission stellt eine qualitative Abweichung von früheren wissenschaftlichen Initiativen des Bundes dar – sowohl im Umfang als auch in der institutionellen Topologie und der architektonischen Philosophie. Während frühere nationale Anstrengungen (wie das Manhattan-Projekt, das Human Genome Project oder der National Quantum Initiative Act von 2018) diskrete wissenschaftliche Ziele durch eine zentralisierte Verwaltung anstrebten, baut die Genesis-Mission eine *föderierte nationale Entdeckungs-Engine* auf, die darauf ausgelegt ist, die Forschung in einem offenen Spektrum wissenschaftlicher und technologischer Domänen gleichzeitig zu beschleunigen.

Vier strukturelle Innovationen definieren diese neu synthetisierte Architektur:
1. **Vollständige institutionelle Parität und sektorübergreifende Konvergenz** zwischen Industrie, nationalen Laboratorien, Bundesbehörden, Gesundheitseinrichtungen und 57 Forschungsuniversitäten.
2. **Durchgängige industrielle und wissenschaftliche vertikale Integration** von der grundlegenden Halbleiterherstellung über heterogene KI-Computing-Infrastrukturen und Quantenhardware bis hin zu Spitzen-KI-Basismodellen und physischen "selbstfahrenden" Laboren.
3. **Bewusste Diversifizierung der Hardware- und Governance-Modalitäten**, um technische Skalierungsrisiken abzusichern.
4. **Das Paradigma der agentischen wissenschaftlichen Entdeckung**, das einen grundlegenden Wandel von der computergestützten zur agentengetriebenen Wissenschaft markiert.

Trotz dieser Erfolge erfordern mehrere operative Herausforderungen weiterhin Aufmerksamkeit, während die Initiative reift: Endgültige Transaktionsvereinbarungen für CHIPS Act LOIs erfordern eine nachhaltige Ausführung; behördenübergreifende Governance muss zwischenzuständige Grenzen und Sicherheitsklassifizierungsstandards navigieren; und spezialisierte Arbeitskräftepipelines müssen erweitert werden.

Dennoch etabliert die Genesis-Mission den umfassendsten institutionellen Rahmen in der Geschichte zur Kopplung von physikalischer Fertigung, Exascale-Computing, fehlertoleranten Quantengeräten und agentischer KI im Dienste der nationalen wissenschaftlichen Führungsrolle.

---

## Anhang A: Institutionelle Mitwirkende & Partner

Die Genesis-Mission zeichnet sich durch die Breite ihrer sektorübergreifenden Koalition aus. Der folgende Anhang führt alle identifizierten institutionellen Mitwirkenden auf, geordnet nach Funktionskategorien.

### A.1 Bundesbehörden & Politische Gremien

| Behörde / Organ | Primäre Rolle in der Genesis-Mission |
| :--- | :--- |
| White House Office of Science and Technology Policy (OSTP) | Exekutive Leitung, Koordination nationaler S&T-Herausforderungen & KI/Quantenpolitik |
| U.S. Department of Energy (DOE) — Office of Science | Führende Förderbehörde (DE-FOA-0003612), Exascale-Labornetzwerk-Leitung & KI-Hub |
| U.S. Department of Commerce — NIST / CHIPS R&D Office | CHIPS Act LOI-Ausführung, 2B$ Quantenhalbleiter-Anreize & NIST-Messstandards |
| National Science Foundation (NSF) | 83M$ integrierte Datensysteme, KI-Forschungsinstitute & MINT-Arbeitskräfteentwicklung |
| National Institutes of Health (NIH) / HHS | Co-Leiter der Bio Genesis Mission, biomedizinische KI & Strukturbiologie-Basismodelle |
| National Aeronautics and Space Administration (NASA) | KI-Erdforschungs-Basismodelle (AlphaEarth), extrem-resistente Materialien & Weltraum-KI |
| Department of War | Dual-Use wissenschaftliche KI, Hyperschall-CFD, strahlungsgehärtete Elektronik & Lieferketten |
| Department of Homeland Security (DHS) — S&T | KI-digitale Zwillinge für kritische Infrastrukturen, Lieferkettenanalysen & Netzresilienz |
| Department of the Interior (DOI) | USGS-KI-Kartierung kritischer Mineralvorkommen, hydrologische Modellierung & Umweltverwaltung |

### A.2 DOE National Laboratories

| Laboratorium | Abkürzung | Primärer Schwerpunkt in der Genesis-Mission |
| :--- | :--- | :--- |
| Ames National Laboratory | Ames | Leitung des Critical Materials Institute (CMI), Legierungsthermodynamik mit hohem Durchsatz |
| Argonne National Laboratory | ANL | ALCF Solstice/Equinox Supercomputer, Aurora Exascale, APS Synchrotron, Genesis Open Models Hub & Infleqtion QPU-Hub |
| Brookhaven National Laboratory | BNL | C2QA Quanten-Co-Design-Zentrum, NSLS-II Synchrotron-Strahlrohre & Schwerionenphysik-KI |
| Fermi National Accelerator Laboratory | Fermilab | SQMS Quantenzentrum, SRF 3D-Kavitäts-Qubits & xLight EUV FEL CRADA-Partner |
| Idaho National Laboratory | INL | Kernenergie-KI, SMR-digitale Zwillinge, AWS Cloud HPC & autonome Reaktorsteuerung |
| Lawrence Berkeley National Laboratory | LBNL | Leitung von 13 KI-Projekten, ModCon-Plattform, NERSC Supercomputing & Materials Project |
| Lawrence Livermore National Laboratory | LLNL | NIF-Laserfusions-KI (10 Projekte), Rigetti Fusionsquantensimulation & MSFT Bioseicherheitsmodelle |
| Los Alamos National Laboratory | LANL | Waffenhydrodynamik (7 Projekte), Plutoniumalterungsphysik & Bioseicherheitsrobotik |
| National Energy Technology Laboratory | NETL | Stromnetzinstabilitäts-KI, Kohlenstoffabscheidung & Ramaco Kohle-zu-Graphit-Synthetikmaterialien |
| National Renewable Energy Laboratory | NREL | ARIES-Plattform, Atom Computing Quanten-in-the-Loop-Netzsimulation & Energiezwillingsmodelle |
| Oak Ridge National Laboratory | ORNL | Frontier Exascale Supercomputer (9 Projekte), FLiBe-Schmelzsalz-Quantenchemie & SNS-Neutronenstreuung |
| Pacific Northwest National Laboratory | PNNL | Microsoft Discovery Festkörperbatterie-KI, Klima-Atmosphärenmodellierung & chemische Katalyse |
| Princeton Plasma Physics Laboratory | PPPL | AI4Fusion autonome Tokamak-Plasmasteuerung & Niedertemperatur-Plasmaätz-CFD |
| Sandia National Laboratories | SNL | Strahlungshärtung von Mikroelektronik (6 Projekte, 17 Co-PI), Ionenfallen-QPU-Fertigung |
| Savannah River National Laboratory | SRNL | Radiochemische Trennungsfließbilder, nukleare Sicherheitsmaßnahmen-KI, Tritiumverarbeitung |
| SLAC National Accelerator Laboratory | SLAC | LCLS-II Attosekunden-Röntgenlaser, Deep-RL-Strahlemittanzoptimierung & SRF-Kavitäten |
| Thomas Jefferson National Accelerator Facility | TJNAF | CEBAF-Beschleuniger, KI-gestützte nukleare Femtografie & Subatomarphysik-KI |

### A.3 Industrie- & Technologiepartner

#### Cloud, KI & Compute Infrastruktur
| Organisation | Primärer Beitrag |
| :--- | :--- |
| Amazon Web Services (AWS) | 100M$ Bundessystem-Gutschriften; Cloud-HPC; Post-Quanten-Sicherheit |
| Google / Google DeepMind / Google Public Sector | 40M$ Zusage; Gemini for Government; AI Co-Scientist; AlphaFold 3; AlphaGenome; AlphaEarth |
| Microsoft | 60M$ SPARK-Programm; Microsoft Discovery; MatterGen/MatterSim; Majorana-Quantenprozessoren |
| NVIDIA | Solstice & Equinox Supercomputer; Apollo-Modelle; Omniverse digitale Zwillinge; Edge-KI |
| AMD | Lux & Discovery Supercomputer; Instinct MI355X/MI430X; EPYC; Pensando; ROCm |
| Oracle | Enterprise Cloud und HPC-Datenbankinfrastruktur |
| HPE | Hochleistungsrechensysteme (HPC) |
| Dell Technologies | KI-Fabrikinfrastruktur; PowerEdge wassergekühlte HPC-Server; Enterprise-Computing |
| Cerebras | Wafer-Scale KI-Beschleuniger; DOE MOU |
| SambaNova Systems | Reconfigurable Dataflow Architecture (SN40L RDU); KI-Inferenz mit hohem Durchsatz; ALCF Deployment |

#### Führende KI & Datenplattformen
| Organisation | Primärer Beitrag |
| :--- | :--- |
| Anthropic | Spitzen-LLM-Schlussfolgerungsagenten; Anthropic Science Division; automatisierte wissenschaftliche Arbeitsabläufe |
| OpenAI | Spitzen-Schlussfolgerungs-LLM-Agenten; OpenAI for Government; DOE MOU & nationale Wissenschaftskooperation |
| Meta AI | Offene Modelle (Segment Anything, DINO) mit LBNL-Bildgebungspipelines |
| Scale AI | Engines für wissenschaftliche Datenkuratierung, synthetische Datengenerierung, RLHF & DOE MOU |
| Hugging Face | Open-Source Modell-Hosting, FAIR-Datensatz-Repository, Modellregister & Feintuning-Infrastruktur |
| FutureHouse | KI-gestützte wissenschaftliche Forschungsautomatisierung, PaperQA-Literaturagenten & autonome Labor-Tools |
| LILA | Kollaborative KI-Plattform für wissenschaftliche Entdeckungen; multi-institutioneller Hub & agentische Arbeitsabläufe |

#### Halbleiter, EDA & Industriepartner
| Organisation | Primärer Beitrag |
| :--- | :--- |
| GlobalFoundries | 375M$ Quantum Technology Solutions-Gießerei (FDX-Plattform), GF Labs, GlobalShuttle MPW, Silizium-Photonik, Kryo-CMOS, ~1% Regierungsbeteiligung & 1,5 Mrd.$ separate CHIPS-Expansion |
| Applied Materials | Geräte zur Herstellung von Halbleiter-Wafern, Materialtechnik, 3D-Verpackung & Quantenmaterialabscheidung |
| Synopsys | Synopsys.ai EDA-Plattform (DSO.ai, VSO.ai, TSO.ai, AgentEngineer™), Custom Compiler, TCAD, PrimeTime & HAV-Emulation für KI-Chips und Quantensteuerungs-ASICs |
| Siemens | Industrielle KI-Software, Xcelerator digitale Zwillinge, strategische DOE-Absichtserklärung & Smart-Grid-Automatisierung |
| Micron | Speicher mit hoher Bandbreite (HBM3e/HBM4), CXL-Speichermodule & DRAM-F&E |
| Nokia | Optische Netzwerk-Backbones, kritische 5G/6G-Drahtlosinfrastruktur & Bell Labs Quantenoptik |
| Collins Aerospace | Strahlungsgehärtete Mikroelektronik, Avionik-Compute & Edge-KI-Sensorplattformen |
| RTX | RF-Mikroelektronik, Halbleiter mit breiter Bandlücke, Quantensensorik & Luft- und Raumfahrt-CFD |
| Semiconductor Industry Association | CHIPS Act Mikroelektronik-Politikkoordination, Arbeitskräfteentwicklung & Lieferkettenstrategie |
| New York Creates | Albany NanoTech 300mm F&E-Hub, CHIPS Act EUV Lithographiezentrum & 3D-Verpackungspilotlinien |
| Kitware | Open-Source wissenschaftliche Visualisierung (ParaView, VTK, CMake), In-situ HPC-Analytics & FAIR Computer Vision |
| AVEVA | Industrielle Software für Unternehmen, SCADA-Integration, betriebliche Telemetrie & digitale Energiezwillingsmodelle |
| Cornelis Networks | Next-Gen Omni-Path (OPX) Hochleistungs-Interconnects & Exascale-KI-Netzwerke |
| xLight | 150M$ CHIPS Act FEL-basierte EUV-Lithografie (Ziel 2028), Fermilab SRF/Kryomodul-CRADA, Albany NanoTech Prototyp, versorgungsskalige Multi-Scanner-FEL-Architektur & Pat Gelsinger Vorstandsleitung |

#### Energie, Versorgungsunternehmen & Kritische Materialien
| Organisation | Primärer Beitrag |
| :--- | :--- |
| Albemarle | Lithiumextraktion, Raffinationstechnologien, Festkörperbatteriematerial-F&E & Lieferkettensicherheit |
| ComEd | Smart-Grid-Integration, Quanten-in-the-Loop-Leistungsflusssimulation & urbane digitale Netzzwillinge |
| EPRI | Elektrizitätsforschungskoordination, KI-Netzsimulations-Toolkits & SMR-Kernreaktorlizenzierung |
| ISO New England | Regionaler Stromnetz-Dispatch, dynamische Übertragungsstabilität & quantensichere Cybersicherheit |
| Tennessee Valley Authority (TVA) | Größter öffentlicher US-Energieversorger, ORNL/Y-12 CFE-MOU (100 % kohlenstofffrei bis 2030), Clinch River SMR, Frontier-Stromversorgung, Bull Run Fusionsmaterial-Testanlage & Exascale-Reaktor-Co-Simulation |
| GE Aerospace | Fortschrittlicher Luft- und Raumfahrtantrieb, Keramikmatrix-Verbundwerkstoffe (CMCs) & Verbrennungs-CFD |
| MP Materials | Abbau seltener Erden (Mountain Pass), NdPr-Magnetherstellung & KI-Mineraltrennung |
| Phoenix Tailings | Abfallfreie Extraktion kritischer Mineralien aus Bergbau-Rückständen & saubere Raffination |
| PMT Critical Metals | Verarbeitung von Refraktärmetallen, Lieferkettenmanagement strategischer Mineralien & Metallurgie |
| Critical Materials Recycling | Rückgewinnung seltener Erden, geschlossener Mineralienkreislauf & E-Schrott-Recycling |
| Niron Magnets | Magnetherstellung ohne seltene Erden ($Fe_{16}N_2$) & Material-Co-Design |
| Ramaco | Kohle-zu-Materialien-Herstellung, synthetische Graphitanodenproduktion & REE-Extraktion (Brook Mine) |
| Nusano | Mehrteilchen-Linearbeschleunigerplattform für medizinische & industrielle Radioisotopenproduktion |

#### Laborautomatisierung & Spezialtechnologie
| Organisation | Primärer Beitrag |
| :--- | :--- |
| Emerald Cloud Lab | Cloud-basierte robotische Laborautomatisierung, Remote-API-gestützte Experimentausführung & FAIR-Datensätze |
| Chemspeed | Automatisierte chemische Syntheseplattformen, robotische Dosierung & geschlossene KI-Experimente |
| OLI Systems | Thermodynamische Chemie-Simulations-Engines, Elektrolytmodellierung & Hydrometallurgie-Löser |
| RadiaSoft | Open-Source-Teilchenbeschleuniger-Simulationssoftware (Sirepo, Radia), Cloud-GUIs & Strahlemittanzsteuerung |
| Atomic Canyon | KI-gestützte Kernenergieforschungsplattformen, Suche in Regulierungsdokumenten (**NeutronAI**) & Wissensgraphen |
| Qubit | Steuerungssoftware für Quantencomputing, Puls-Kalibrierung & hybrid-klassisch-quantenmechanische Algorithmen |
| TdVib | Terfenol-D Riesen-Magnetostriktionslegierung (Ames-Lab-Co-Entwicklung), strahlungstolerante SHM-Sensoren, Präzisions-Strahlrohr-Aktuatoren & QPU-Schwingungsisolation |
| Esri | Enterprise GIS-Plattformen, räumliche Analytics-Engines & räumliche digitale Zwillinge für die Erdforschung |
| Accenture Federal Services | CM2US-Betriebsfähigkeit, Bundes-KI-Systemintegration & behördenübergreifendes Programmmanagement |

### A.4 Quantencomputing- & Modalitätsentwickler

| Organisation | Modalität | CHIPS Act LOI |
| :--- | :--- | :--- |
| IBM / IBM Quantum | Supraleitend (Transmon) | 1 Milliarde US-Dollar |
| Rigetti Computing | Supraleitend (kachelbar Multi-Chip) | Bis zu 100 Millionen US-Dollar |
| D-Wave Quantum | Supraleitend (Annealing + Gatter-Modell) | 100 Millionen US-Dollar |
| Quantinuum | Ionenfallen | 100 Millionen US-Dollar |
| PsiQuantum | Photonisch | 100 Millionen US-Dollar |
| Atom Computing | Neutrale Atome | 100 Millionen US-Dollar |
| Infleqtion | Neutrale Atome | 100 Millionen US-Dollar |
| Diraq | Silizium-Spin (CMOS Quantenpunkt) | Bis zu 38 Millionen US-Dollar |
| GlobalFoundries | Modalitätsübergreifende Gießerei | 375 Millionen US-Dollar |

### A.5 Forschungsuniversitäten & Akademische Institutionen

| Institution | Primäre Forschungsdomäne in der Genesis-Mission |
| :--- | :--- |
| Arizona State University (ASU) | Zuverlässigkeits-KI für Stromnetze, smarte Energieinfrastruktur & NREL ARIES Co-Simulation |
| Auburn University | Fortschrittliche additive Fertigung, extrem-thermische Materialien & Verteidigungstechnik |
| Caltech | Quantenoptik, photonisches QPU-Co-Design, Computermethoden der Physik & KI-Basismodelle |
| Carnegie Mellon University (CMU) | Autonome wissenschaftliche KI-Agenten, Robotik, SciML & Algorithmen zur Materialentdeckung |
| Colorado State University | Atmosphärenmodellierung, Klima-KI-Basismodelle & Hochleistungslaserphysik |
| Columbia University | Quantenmaterialwissenschaft, stark korrelierte elektronische Modelle & SciML-Algorithmen |
| Cornell University | Beschleunigerphysik, Synchrotron-Röntgencharakterisierung (CHESS) & Material-Co-Design |
| Emory University | Bio-Genesis-Mission, strukturbiologische KI-Basismodelle & therapeutisches Screening |
| Florida State University | Hochmagnetfeldphysik (MagLab), Supraleitermaterialien & Kryotesten |
| Georgia Institute of Technology | Automatisierung chemischer Synthese mit hohem Durchsatz, Mikroelektronik-Verpackung & Robotik |
| Iowa State University | Thermodynamik kritischer Mineralien, biobasierte Materialien & Ausrichtung am Ames National Lab |
| Lehigh University | Korrosionsmodellierung von Strukturlegierungen, Materialinformatik & industrielle KI-Zwillinge |
| Louisiana State University (LSU) | Küstenklimamodellierung, Schwerionen-Kernphysik & Petascale-CFD-Algorithmen |
| Michigan State University (FRIB) | Physik seltener Isotopenstrahlen (FRIB), KI-Kernstrukturmodelle & Schwerionendynamik |
| Michigan Technological University | Materialsensoren für extreme Umgebungen, Raffination kritischer Mineralien & Leistungselektronik |
| Mississippi State University | Numerische Strömungsmechanik (CFD), autonome Systeme & landwirtschaftliche Fernerkundung |
| Missouri S&T | Hochtemperaturkeramik, pyrometallurgische Rückgewinnung kritischer Materialien & Bergbau-KI |
| MIT | Supraleitende & Ionenfallen-QPU-Algorithmen, Quantenfehlerkorrektur & Kernphysik-KI |
| New Jersey Institute of Technology (NJIT) | Sonnenphysik-KI-Modelle, Materialinformatik & dynamische Netzwerkoptimierung |
| New Mexico State University (NMSU) | Hochenergie-Kernphysik, Wüstenhydrologiemodellierung & Weltraumsensoren |
| New York University (NYU) | 3 Flaggschiff-SciML-Preise, neuronale Operatoren für partielle Differentialgleichungen (PDEs) & Bio-KI |
| Northwestern University | Anorganische Kristallstrukturentdeckung mit hohem Durchsatz, Katalysatorscreening & Robotik |
| Penn State University | Materialien für extreme Umgebungen, 2D-Halbleiter & digitale Zwillinge für Kernreaktoren |
| Princeton University | Tokamak-Fusionsplasmaphysik (PPPL), Quanteninformationstheorie & SciML-Operatoren |
| Rensselaer Polytechnic Institute (RPI) | Teilchenbeschleuniger-Strahldynamiksimulation (Sirepo), Quantenalgorithmen & HPC |
| Rice University | Kohlenstoffnanoröhrensynthese, nanostrukturierte Energiematerialien & Quantenchemie |
| Stanford University | Synchrotron-Strahlrohre (SLAC), KI-Basismodelle, Quantenoptik & Bioseicherheit |
| Stony Brook University | Relativistische Schwerionenphysik (BNL RHIC), Kernstruktur-KI & Hochleistungsrechnen |
| Texas A&M University | Modellierung der Alterung nuklearer Materialien, cyber-physikalische Netzsicherheit & Hyperschall-CFD |
| Texas State University | Halbleiterlithografiematerialien der nächsten Generation & Mikroelektronikfertigung |
| Tulane University | Generative KI-Design-Agenten gekoppelt mit robotischen Nasslaboren (Emerald Cloud Lab) |
| UC Berkeley | 13 LBNL-Projektkooperationen, ModCon-Plattform, SciML-Algorithmen & Quanten-QIS |
| UC Davis | Nachhaltige Landwirtschafts-KI-Modelle, Umwelt-Bio-Gießereien & Energiespeicherchemie |
| UC Santa Barbara (UCSB) | Quantenmaterialien, Synthese topologischer Isolatoren & kryogene QPU-Steuerelektronik |
| UNC Charlotte | Optische Präzisionsfertigung, Smart-Grid-Stromverteilung & KI-Maschinensehen |
| University at Buffalo | Computergestütztes Materialdesign, Batterieelektrolytentdeckung & molekulares KI-Screening |
| University of Arizona | 5 Genesis-Preise: Erdwissenschafts-KI (AlphaEarth), Wasserressourcen & Planetenmodellierung |
| University of California System | Systemweite KI-für-die-Wissenschaft-Koordination, Co-Management nationaler Labore & MINT-Pipelines |
| University of Central Florida (UCF) | Attosekundenlaserphysik, Optik für Weltraumnutzlasten & Quantensensorik-Instrumentierung |
| University of Colorado Boulder | Infleqtion-Quantensensorikprojekt, Neutralatom-QPUs & Rigetti-Fusionsplasma-Co-Simulationen |
| University of Connecticut (UConn) | Synthese von Hochtemperaturlegierungen, Smart-Grid-Cybersicherheit & Materialinformatik |
| University of Florida | Hochleistungsrechnen-KI-Workloads, Agrargenomik & Materialscreening |
| University of Illinois Urbana-Champaign | Petascale-KI-Modelltraining, Open-Source-Modellregisterplattformen & Halbleiter-PDKs |
| University of Kentucky | Mineralextraktion aus Kohlenebenprodukten (NETL), Batterierecycling & Bioenergiematerialien |
| University of Maine | Bio-Verbundwerkstoff-Additive Fertigung im großen Maßstab & Offshore-Schwimmwind-KI-Modelle |
| University of Michigan | 2 Genesis-Preise: autonome Materialentdeckung, Mikroelektronik & Kerntechnik |
| University of Minnesota | Basismodelle für chemische Katalyse, Spintronikmaterialien & Computerbiologie |
| University of Missouri | Beschleuniger für die Radioisotopenproduktion, Nuklearmedizin-F&E & Pflanzenphänomik-KI |
| University of New Mexico | Quanteninformationswissenschaft, Optikfertigung & Co-F&E mit Sandia/Los Alamos |
| University of North Dakota (UND) | 2 Genesis-Preise: Extraktion seltener Erden aus Kohleasche & autonome Energie-KI |
| University of Pittsburgh | Computergestützte Wirkstoffentdeckungs-Basismodelle, vaskuläre Bio-Gießereien & SciML |
| University of Southern California (USC) | Quanten-Annealing-Algorithmen, Mikroelektronik-Zuverlässigkeit & autonome KI-Agenten |
| University of Texas at Austin | Mikroelektronik-Lithografiemodellierung, Exascale-KI-Modelloptimierung & Stromnetz-KI |
| University of Utah | Geothermie-Reservoirsimulation, klimaneutrale Kraftstoffe & Materialinformatik |
| University of Wisconsin–Madison | Fusionsplasma-Stellaratorphysik, Quantenpunkt-QPU-Architekturen & Saubere-Energie-KI |
| Virginia Tech | Cyber-physikalische Stromnetzsicherheit, Hochtemperatur-Verbundwerkstoffe & SciML |
| Yale University | Supraleitende Hohlraum-QED-Quantenarchitektur, QIS-Fehlerminderung & Molekular-KI |

#### Zusätzliche Akademische & Forschungsorganisationen

| Organisation | Primärer Beitrag zur Genesis-Mission |
| :--- | :--- |
| AI Tennessee Initiative | Bundesweite KI-Forschungskoordination (UT System / ORNL), Exascale-KI-Arbeitskräfteentwicklung & AgTech-KI |
| RTI International | Umweltrisiko-KI-Modellierung, Skalierung von Technologien zur Kohlenstoffabscheidung & Lebenszyklusanalysen |
| Cleveland Clinic | ORNL–Cleveland Clinic–IBM FLiBe-Fusionsquantenchemie-Pipeline, Quanten-Gesundheits-KI & Bio-Entdeckungen |
| Johns Hopkins University APL (JHU APL) | Autonome selbstfahrende Materialsyntheselabore (MSFT Discovery Partner), Legierungen & Verteidigungswissenschaft |

---

## Referenzen & Dokumentenquellen

1. **donutloop Repository**. [Donutloop Genesis Repository: Genesis Mission Curated Research & Technical Reference Index](https://github.com/donutloop/donutloop-genesis/blob/main/references.md). GitHub Open-Source Technical Documentation, 2026.
