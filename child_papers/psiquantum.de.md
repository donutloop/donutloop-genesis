# PsiQuantum — Umfassende technische Architektur, Silizium-Photonik-QPUs und Ökosystem-Referenzindex

[← Zurück zum Haupt-Papier der Genesis Mission](../README.de.md)

> **Übersicht des technischen Vertiefungspapiers:**
> Dieses Dokument dient als dediziertes vertiefendes technisches Papier und kuratierter Referenzindex für **PsiQuantum Corp.**, mit Details zu seiner fusionsbasierten Quantencomputing-Architektur (FBQC), der 300-mm-Silizium-Photonik-Halbleitergießereifertigung (GlobalFoundries & SkyWater Technology), Omega-Photonik-Chipsätzen, supraleitenden Einzelphotonen-Nanodraht-Detektoren (SNSPDs), Durchbrüchen bei der fehlertoleranten Active Volume Architecture, der Construct-Software-Suite, behördlichen Großanlagen in den USA und Australien (A$940M Brisbane Anlage, Illinois Quantum Park Chicago), DARPA Quantum Benchmarking Initiative (QBI) Auszeichnungen, DOE Genesis Mission Projekten und einem vollständigen chronologischen Presse-Index (`https://www.psiquantum.com/news`), der bis zum Verifizierungs-Meilenstein am **30. Januar 2023** (`https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing`) zurückreicht, verwaltet ausschließlich in `child_papers/`.
>
> **Version:** `v1.0.0` (Veröffentlicht am 2026-08-13)

---

## 1. Management-Zusammenfassung & Photonische Technologie-Roadmap
- **Führung im fehlertoleranten photonischen Quantencomputing:** 2015 von den Quantenoptik-Physikern Dr. Jeremy O'Brien, Dr. Terry Rudolph, Dr. Mark Thompson und Dr. Pete Shadbolt gegründet, baut PsiQuantum den weltweit ersten fehlertoleranten photonischen Quantencomputer im Nutzungsmaßstab mit **1.000.000+ physischen Qubits**.
- **Unternehmenskapital & 1-Milliarde-Dollar-Finanzierungswelle:**
  - **1-Milliarde-Dollar-Series-E-Finanzierung (Sept. 2025):** Sicherung von 1 Milliarde Dollar an Series-E-Eigenkapital unter der Leitung von BlackRock, Baillie Gifford, M12 (Microsoft), Temasek und Playground Global, was das eingeworbene Gesamtkapital auf über **1,7 Milliarden Dollar** steigerte.
  - **CHIPS Act 100-Millionen-Dollar LOI (Mai 2026):** Unterzeichnung einer Absichtserklärung über 100 Millionen Dollar mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act zur Erweiterung der US-Silizium-Photonik-Halbleiterfertigung.
- **Führungsteam:**
  - Exekutiver Verwaltungsratsvorsitzender & Mitgründer: Dr. Jeremy O'Brien
  - Interims-Vorstandsvorsitzender (CEO): Victor Peng (ehemaliger Präsident von AMD / CEO von Xilinx)
  - Executive Vice President: Rob Soderbery
  - Chief Information Officer: Sriram Sitaraman
  - Chefwissenschaftler & Mitgründer: Dr. Pete Shadbolt
- **Photonische Hardware-Roadmap:**
  - **Fusionsbasierte Architektur:** Ersetzt fragile physische Qubit-Gatter durch fusionsbasiertes Quantencomputing (FBQC) unter Nutzung linear-optischer projektiver Messungen an Photonen-Ressourcenzuständen.
  - **Active Volume Architecture (30. Jan. 2023):** Durchbruch bei der fehlertoleranten Architektur, der den Overhead an optischen Komponenten und physischen Qubits um Größenordnungen reduziert.
  - **Omega Photonik-Chipsatz (Feb. 2026):** Fertigbare 300-mm-Silizium-Photonik-Engine mit Einzelphotonenquellen, verlustarmen Wellenleitern und elektrooptischen Schaltern.
  - **Großanlagen:** A$940M Brisbane Quantum Utility Facility (Australien) und Illinois Quantum & Microelectronics Park (Chicago, USA).

---

## 2. Silizium-Photonik-Halbleitergießerei & Chip-Verpackung
- **Kommerzielle 300-mm-Gießereiintegration:**
  - **GlobalFoundries & SkyWater Technology:** Fertigt quantenphotonische integrierte Schaltkreise (PICs) auf bestehenden 300-mm-CMOS-Wafer-Linien unter Nutzung von Hochvolumenlithografie und Ausbeutesteuerung.
  - **Monolithische Komponentenintegration:** Integriert Einzelphotonenquellen, verlustarme Siliziumnitrid-($Si_3N_4$)-Wellenleiter, elektrooptische Phasenmodulatoren und optische MEMS-Schalter auf Standard-Siliziumsubstraten.
- **Kryogene SNSPD-Detektorintegration:**
  - **Supraleitende Nanodraht-Detektoren:** Integriert Tausende supraleitender Nanodraht-Einzelphotonendetektoren (SNSPDs), die bei ~4 Kelvin mit einem Timing-Jitter von unter 10 Pikosekunden und >98 % Quanteneffizienz arbeiten.
  - **Eigene Kryoanlagen:** Zusammenarbeit mit dem STFC Daresbury Laboratory zur Entwicklung hochkapazitiver Helium-Verdünnungskryoanlagen zur Kühlung großskaliger photonischer Detektor-Arrays.

---

## 3. Fusionsbasiertes Quantencomputing (FBQC) & SNSPD-Detektoren
- **Das Fusionsparadigma:**
  - **Ressourcenzustandsgeneratoren (RSGs):** Photonische Quellen erzeugen kontinuierlich kleine verschränkte Photonen-Cluster ("Ressourcenzustände").
  - **Fusionsmessungen:** Linear-optische Typ-II-Fusionsmessungen verschränken Ressourcenzustände zu einem 3D-fehlertoleranten Clusterzustand, ohne dass langlebige physische Qubitspeicher erforderlich sind.
- **Extreme Toleranz gegenüber Photonenverlusten:** FBQC-Architekturen behalten fehlertolerante Fehlerschwellen selbst bei Photonenverlusten und Detektor-Dunkelzählungen bei, was die Skalierung auf 1.000.000+ physische optische Moden ermöglicht.

---

## 4. Fehlertolerante Architektur & Software-Suite (Construct & CUDA-Q)
- **Active Volume Architecture Durchbruch (30. Jan. 2023):**
  - **Dynamisches räumlich-zeitliches Routing:** Ersetzt statische 3D-Oberflächencode-Geometrien durch dynamisches Routing logischer Qubits, was die Anzahl physischer Photonen und Schalter für Algorithmen wie Shor und VQE drastisch reduziert.
- **Construct Software-Suite:**
  - **Algorithmenkompilierung:** Quelloffene Softwareplattform (gestartet im Sept. 2025) zur Synthese, fehlertoleranten Kompilierung und Simulation von Quantenalgorithmen im Nutzungsmaßstab.
  - **NVIDIA CUDA-Q Integration:** Beschleunigt durch NVIDIA GPU-Cluster über CUDA-Q zur Durchführung von klassischen Multi-Knoten-Simulationen photonischer Fusionsnetzwerke.

---

## 5. Globale Großanlagen, Verteidigungs- & Bundesanwendungen
- **A$940-Millionen-Anlage in Brisbane (Australien):**
  - Strategische Partnerschaft mit der australischen Bundes- und der Queensland-Bundesstaatsregierung zum Bau einer Quantenrechenzentrumsanlage in Moreton Bay Central, unterstützt durch das Griffith University Test- und Validierungslabor.
- **Illinois Quantum & Microelectronics Park (Chicago, USA):**
  - Meilenstein-Vereinbarung mit dem Bundesstaat Illinois und der Stadt Chicago zum Bau einer Anlage für 1 Million physische Qubits am USX South Works Standort.
- **DARPA US2QC & Quantum Benchmarking Initiative (QBI):**
  - Ausgewählt für DARPA US2QC Stufe 1 (Jan. 2023), Stufe 2 (Jan. 2024), QBI Stufe C (Feb. 2025) und Auszeichnung mit einer erweiterten **125-Millionen-Dollar DARPA QBI Vereinbarung** (Juli 2026).
- **Partner aus Bund & Industrie:**
  - Preise der Genesis Mission des US-Energieministeriums (DOE), AFRL-Verträge, Lockheed Martin MoU (Luft- und Raumfahrtalgorithmen), Airbus und NVIDIA.

---

## 6. Vollständiger chronologischer Presse- und Referenzindex (16 Pressemitteilungen)

| Datum | Artikeltitel & Referenzlink | Kategorie / Thema | Primärer technischer Schwerpunkt |
| :--- | :--- | :--- | :--- |
| **2026-07-22** | [PsiQuantum Awarded $125 Million Expanded Agreement by DARPA Under Quantum Benchmarking Initiative](https://www.psiquantum.com/news-import/psiquantum-awarded-125m-expanded-agreement-by-darpa) | Verteidigung & National-Labs | Erweiterte DARPA QBI Stufe C Vereinbarung zur Verifizierung und Validierung eines photonischen Quantencomputers im Nutzungsmaßstab. |
| **2026-07-15** | [PsiQuantum Appoints Executive Vice President Rob Soderbery, CIO Sriram Sitaraman, and Confirms CEO Victor Peng](https://www.psiquantum.com/news-import/psiquantum-appoints-executive-leadership-team) | Vorstandsführung | Führungskräfteernennungen zur Stärkung des Betriebs und der Infrastruktur für die Standorte in Brisbane und Chicago. |
| **2026-06-18** | [PsiQuantum Breaks Ground on Utility-Scale Quantum Computer Facility in Brisbane, Australia](https://www.psiquantum.com/news-import/psiquantum-breaks-ground-on-brisbane-utility-facility) | Globale Infrastruktur | Spatenstich für die A$940M Quantenrechenzentrumsanlage in Moreton Bay Central in Brisbane. |
| **2026-05-21** | [PsiQuantum Signs $100 Million Letter of Intent with U.S. Department of Commerce under CHIPS Act](https://www.psiquantum.com/news-import/psiquantum-signs-100m-chips-act-letter-of-intent) | Bundesförderung | Geplante 100-Mio.-$-Förderung durch den CHIPS and Science Act zur Beschleunigung der 300-mm-Silizium-Photonik-Fertigung. |
| **2026-05-08** | [PsiQuantum Opens Test and Validation Lab at Griffith University in Brisbane](https://www.psiquantum.com/news-import/psiquantum-opens-test-validation-lab-at-griffith-university) | F&E-Infrastruktur | Eröffnung des spezialisierten Kryo-Testlabors zur Validierung photonischer QPU-Module an der Griffith University. |
| **2026-03-06** | [PsiQuantum Opens UK R&D Facility at STFC Daresbury Laboratory](https://www.psiquantum.com/news-import/psiquantum-opens-uk-rd-facility-at-stfc-daresbury-laboratory) | F&E-Infrastruktur | Eröffnung der britischen F&E-Einrichtung zur Entwicklung hochkapazitiver Helium-Kryomodule für photonische Quantencomputer. |
| **2026-02-26** | [PsiQuantum Unveils Omega Manufacturable Silicon Photonic Chipset for Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-unveils-omega-manufacturable-silicon-photonic-chipset) | Hardware-Architektur | Ankündigung des Omega Silizium-Photonik-Chipsatzes mit integrierten Einzelphotonenquellen und optischen Schaltern. |
| **2025-11-03** | [PsiQuantum and Lockheed Martin Sign MoU to Advance Aerospace Quantum Computing Applications](https://www.psiquantum.com/news-import/psiquantum-and-lockheed-martin-sign-mou) | Industrielle Anwendungen | Strategische Luft- und Raumfahrt-Kooperation zur Entwicklung fehlertoleranter Quantenalgorithmen für Verteidigung und Materialsimulation. |
| **2025-09-18** | [PsiQuantum Launches Construct Software Suite Integrated with NVIDIA CUDA-Q Platform](https://www.psiquantum.com/news-import/psiquantum-launches-construct-software-suite-with-nvidia-cuda-q) | Quanten-Software | Start der fehlertoleranten Construct-Algorithmenplattform, beschleunigt durch GPU-Cluster über NVIDIA CUDA-Q. |
| **2025-09-04** | [PsiQuantum Raises $1 Billion Series E Funding Round to Scale Utility Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-raises-1-billion-series-e-funding) | Unternehmensfinanzierung | 1-Mrd.-$-Series-E-Finanzierung unter Führung von BlackRock, Baillie Gifford, Temasek und M12 zum Bau der Anlagen in Chicago und Brisbane. |
| **2025-09-04** | [PsiQuantum Breaks Ground on Utility-Scale Facility at Illinois Quantum & Microelectronics Park](https://www.psiquantum.com/news-import/psiquantum-breaks-ground-at-illinois-quantum-park) | Globale Infrastruktur | Spatenstich für die Anlage in Chicago zur Unterbringung des ersten US-Quantencomputers im Nutzungsmaßstab von PsiQuantum. |
| **2025-02-20** | [PsiQuantum Advances to Stage C of DARPA Quantum Benchmarking Initiative (QBI)](https://www.psiquantum.com/news-import/psiquantum-advances-to-stage-c-of-darpa-qbi) | Verteidigung & National-Labs | Auswahl durch die DARPA für Stufe C des QBI-Programms zur Bewertung fehlertoleranter Quantensysteme im Nutzungsmaßstab. |
| **2024-07-25** | [PsiQuantum Selected to Build Utility-Scale Quantum Computer in Chicago, Illinois](https://www.psiquantum.com/news-import/psiquantum-selected-to-build-utility-scale-quantum-computer-in-chicago) | Globale Infrastruktur | Partnerschaft mit dem Bundesstaat Illinois und der Stadt Chicago zum Bau einer Anlage für 1 Million physische Qubits. |
| **2024-04-30** | [PsiQuantum Partners with Australian Government on A$940 Million Brisbane Quantum Facility](https://www.psiquantum.com/news-import/psiquantum-partners-with-australian-government-on-940m-brisbane-facility) | Globale Infrastruktur | Meilenstein-Vereinbarung über A$940M mit der australischen Bundes- und der Queensland-Regierung für die QPU in Brisbane. |
| **2024-01-24** | [PsiQuantum Advances to Second Stage of DARPA US2QC Program](https://www.psiquantum.com/news-import/psiquantum-advances-to-second-stage-of-darpa-us2qc-program) | Verteidigung & National-Labs | Fortschritt in der US2QC-Evaluierung der DARPA für Quantensysteme im Nutzungsmaßstab. |
| **2023-01-30** | [PsiQuantum Announces Breakthrough in Architectures for Error-Corrected Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing) | Hardware-Architektur | Veröffentlichung der Active Volume Architecture zur Reduzierung des Overheads an physischen Qubits und optischer Hardware um Größenordnungen. |

---

5. **U.S. Department of Energy Genesis Mission**. [DOE Genesis Mission & Quantum Genesis Initiative](https://www.energy.gov/genesis-mission). U.S. Department of Energy & National Laboratories, 2026.
6. **Genesis Mission Consortium**. [Quantum Supercomputing & Industrial Co-Design Platform](https://www.genesismissionconsortium.org/).

## Referenzen & Dokumentenquellen
1. **PsiQuantum Official Site**. [PsiQuantum Corporate Newsroom & Press Archive](https://www.psiquantum.com/news).
2. **PsiQuantum Verification Landmark**. [PsiQuantum Announces Breakthrough in Architectures for Error-Corrected Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing). 30. Jan. 2023.
3. **UK Science and Technology Facilities Council**. [PsiQuantum STFC Daresbury Laboratory Cryogenic Facility](https://www.ukri.org/councils/stfc/).
