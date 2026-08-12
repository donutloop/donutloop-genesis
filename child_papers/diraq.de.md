# Diraq — Umfassende technische Architektur, CMOS-Silizium-Spin-Qubits und Ökosystem-Referenzindex

[← Zurück zum Haupt-Papier der Genesis Mission](../README.de.md)

> **Übersicht des technischen Vertiefungspapiers:**
> Dieses Dokument dient als dediziertes vertiefendes technisches Papier und kuratierter Referenzindex für **Diraq Pty Ltd.** (2022 aus der UNSW Sydney ausgegründet), mit Details zu seiner Silizium-Quantenpunkt-Spin-Qubit-Architektur, der 300-mm-CMOS-Halbleitergießereiintegration (mit Imec), FinFET/FDSOI-Qubit-Wiederverwendung, Kryo-CMOS-Steuerungselektronik, der 1-Milliarde-Qubits-Skalierungs-Roadmap, NVIDIA CUDA-Q und NVQLink-Beschleunigung, behördlichen Partnerschaften in den USA und Australien (38-Mio.-$-USD-CHIPS-Act-LOI, 20-Mio.-$-AUD-NRFC-Investition) und einem vollständigen chronologischen Presse-Index (`https://www.diraq.com/newsdesk`) über **alle 73 Pressemitteilungen auf allen 4 Seiten** bis zurück zum Verifizierungs-Meilenstein am **14. Januar 2023** (`https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-ljz2f`), verwaltet ausschließlich in `child_papers/`.
>
> **Version:** `v1.0.0` (Veröffentlicht am 2026-08-13)

---

## 1. Management-Zusammenfassung & Silizium-Spin-Qubit-Roadmap
- **Führung im CMOS-Silizium-Quantencomputing:** 2022 vom Pionier Prof. Andrew Dzurak aus der UNSW Sydney ausgegründet, baut Diraq fehlertolerante Quantenprozessoren im Nutzungsmaßstab mit **1.000.000.000 (1 Milliarde) Qubits** unter Verwendung von Standard-Silizium-CMOS-Halbleiterfertigung.
- **Unternehmenskapital & Finanzierungswelle:**
  - **US CHIPS Act 38-Millionen-Dollar LOI (Mai 2026):** Unterzeichnung einer Absichtserklärung über 38 Millionen USD (53 Mio. AUD) mit dem US-Handelsministerium im Rahmen des CHIPS and Science Act zum Aufbau einer Silizium-Quanten-Lieferkette in den USA.
  - **NRFC 20-Millionen-AUD Eigenkapitalinvestition (Feb. 2026):** Sicherung von 20 Millionen AUD (14 Mio. USD) an staatlicher Eigenkapitalfinanzierung von der National Reconstruction Fund Corporation (NRFC).
  - **Series A-2 Finanzierung (15 Mio. USD):** Unter der Leitung von Main Sequence Ventures und Taronga Ventures, was das eingeworbene Gesamtkapital auf über **120 Millionen Dollar** steigerte.
- **Führungsteam & Unternehmensführung:**
  - CEO & Gründer: Prof. Andrew Dzurak
  - Verwaltungsratsvorsitzender: Scott A. McGregor (ehemaliger CEO von Broadcom)
  - Leiter der Quanten-Hardware: Dr. Henry Yang
  - Chefwissenschaftler & Hauptautor: Dr. Tuomo Tanttu
- **Silizium-Spin-Roadmap:**
  - **Einzel-Elektronen-Spin-Qubits:** Schließt einzelne Elektronenspins in Silizium-28 ($^{28}\text{Si}$)-Quantenpunkten ein.
  - **300-mm-CMOS-Fertigung:** 8-Qubit-Array auf industriellen 300-mm-Pilotlinien bei Imec demonstriert (*Nature Communications* 2026).
  - **Kryo-CMOS-Integration:** Co-Integration klassischer Steuerungselektronik mit Quantenpunkt-Arrays bei Temperaturen unter 1 Kelvin.
  - **1-Milliarde-Qubits-Ziel:** Kommerzielle Bereitstellung im Nutzungsmaßstab bis 2029 angestrebt.

---

## 2. CMOS-Halbleitergießerei & FinFET/FDSOI-Integration
- **Industrielle 300-mm-Pilotlinienfertigung:**
  - **Imec-Partnerschaft:** Zusammenarbeit mit Imec (Belgien) zur Fertigung von Silizium-MOS-Quantenpunkt-Spin-Qubits auf Standard-300-mm-Silizium-CMOS-Wafer-Linien.
  - **FinFET- & FDSOI-Transistoren:** Wiederverwendung kommerzieller FinFET- und Fully-Depleted Silicon-on-Insulator (FDSOI)-Transistorgatter als Quantenpunkt-Einschluss-Elektroden, was die Massenproduktion in bestehenden Halbleiterfabriken ermöglicht.
- **Rekord-Gattergütewerte (>99 % Zwei-Qubit-Gattergüte):**
  - **Nature 2025 Meilenstein:** Demonstration von Zwei-Qubit-Gattergütewerten, die systematisch 99 % auf industriell gefertigten 300-mm-Wafern überschreiten und die Fehlerschwelle fehlertoleranter Oberflächencodes übertreffen.
  - **SPAM-Güte:** Zustandskonstruktions- und Messgüte (SPAM) von über 99,9 %.

---

## 3. Quantenpunkt-Physik, EDSR & Kryo-CMOS-Elektronik
- **Isotopenrein gereinigtes Silizium-28 ($^{28}\text{Si}$):**
  - **Spin-Kohärenz:** Verwendet kernspin-freie $^{28}\text{Si}$-Substrate, was die Elektronen-Spin-Kohärenzzeiten auf $T_2^* > 100\text{ }\mu\text{s}$ und $T_2 > 20\text{ ms}$ verlängert.
- **Elektrisch dipolinduzierte Spinresonanz (EDSR):**
  - **Elektrische Steuerung auf Abruf:** Verwendet lokalisierte elektrische Felder und Mikromagnete für schnelles, gatterspannungsgesteuertes Spin-Flipping ohne sperrige Mikrowellen-Magnetleitungen.
- **Hochtemperatur-Qubit-Betrieb (>1 Kelvin):**
  - **Entlastung der Kühlkapazität:** Betreibt Spin-Qubits über 1 Kelvin, was eine 1.000-mal höhere Kühlleistung im Vergleich zu 10-Millikelvin-Verdünnungssystemen liefert und ko-lokalisierte Kryo-CMOS-Steuerungselektronik ermöglicht.

---

## 4. Fehlertolerante Oberflächencodes & 1-Milliarde-Qubits-Skalierung
- **Dichte 2D-Matrixgitter-Topologie:** Hochdichtes 2D-Array aus Quantenpunkten im Nanometerabstand, kompatibel mit 2D-Oberflächencodes und fehlertoleranter Fehlerkorrektur.
- **NVIDIA CUDA-Q & NVQLink Integration:**
  - **Beschleunigte Kalibrierungen:** Integriert NVIDIA GH200 Superchips und NVQLink zur Ausführung automatisierter quanten-klassischer Kalibrierungsschleifen und Fehlerverfolgung.

---

## 5. Verteidigung, Bundesbehörden & Enterprise-Anwendungen
- **Behördliche Partnerschaften in den USA & Australien:**
  - CHIPS-Act-Vereinbarung mit dem US-Handelsministerium (38 Mio. $ USD / 53 Mio. AUD).
  - Staatliche Eigenkapitalinvestition der australischen National Reconstruction Fund Corporation (NRFC) (20 Mio. AUD).
  - Partner im Australian Defence Trailblazer Programm.
- **Branchen- & Akademische Anerkennung:**
  - Platz 1 der Unternehmensinstitutionen in Australien für Forschungsleistung im Jahr 2025 laut *Nature Index*.

---

## 6. Vollständiger chronologischer Presse- und Referenzindex (73 Pressemitteilungen über 4 Offset-Seiten)

| Datum | Artikeltitel & Referenzlink | Kategorie / Thema | Primärer technischer Schwerpunkt |
| :--- | :--- | :--- | :--- |
| **2026-08-28** | [One Million Qubits Is Table Stakes](https://www.diraq.com/newsdesk/quantums-fastest-path-runs-on-proven-infrastructure) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2026-08-27** | [Imec and Diraq demonstrate first coherent operation of eight silicon MOS spin qubits fabricated in a 300mm CMOS-compatible foundry process](https://www.diraq.com/newsdesk/one-million-qubits-is-table-stakes) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2026-08-26** | [Diraq’s Quantum Computers Are Boring](https://www.diraq.com/newsdesk/diraq-demonstrates-scaled-silicon-based-qubit-array-produced-with-industry-standard-manufacturing-techniquesnbsp) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2026-08-25** | [Diraq is Accelerating its Path to Utility-Scale Quantum Computing with NVIDIA Ising and NVQLink](https://www.diraq.com/newsdesk/diraqs-quantum-computers-are-boring) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2026-08-24** | [Diraq Expands U.S. Presence with Palo Alto Office](https://www.diraq.com/newsdesk/diraq-is-accelerating-its-path-to-utility-scale-quantum-computing-with-nvidia-ising-and-nvqlinknbsp) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2026-08-23** | [One Dollar Per Qubit: The Number That Changes Everything](https://www.diraq.com/newsdesk/diraq-expands-us-presence-with-palo-alto-office-to-accelerate-commercial-quantum-computingnbsp) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2026-07-22** | [Diraq Appoints Scott A. McGregor as New Chairman Amid U.S. Expansion](https://www.diraq.com/newsdesk/one-dollar-per-qubit-the-number-that-changes-everything) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2026-07-21** | [Why Australia will define the future of quantum](https://www.diraq.com/newsdesk/diraq-appoints-scott-a-mcgregor-as-new-chairman-amid-us-expansionnbsp) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2026-07-20** | [Diraq Signs $38M Letter of Intent with the U.S. Department of Commerce under CHIPS Act](https://www.diraq.com/newsdesk/why-australia-will-define-the-future-of-quantumnbsp) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2026-07-19** | [Diraq Founder & CEO Andrew Dzurak Elected Fellow of the Australian Academy of Science](https://www.diraq.com/newsdesk/diraq-signs-38m-letter-of-intent-with-the-us-department-of-commerce-under-chips-act-to-scale-domestic-quantum-computing-processors-using-silicon-spin-technology) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2026-07-18** | [Scaling Quantum While Avoiding Energy Crises](https://www.diraq.com/newsdesk/diraq-founder-amp-ceo-andrew-dzurak-elected-fellow-of-the-australian-academy-of-sciencenbsp) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2026-07-17** | [Quantum is the Next Data Center Transition](https://www.diraq.com/newsdesk/scaling-quantum-while-avoiding-energy-crises) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2026-06-16** | [4 Years of Diraq: Scaling quantum for the global market](https://www.diraq.com/newsdesk/quantum-is-the-next-data-center-transition) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2026-06-15** | [How full CMOS compatibility puts Diraq ahead of the pack](https://www.diraq.com/newsdesk/4-years-of-diraq-scaling-quantum-for-the-global-marketnbsp) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2026-06-14** | [Diraq ranked #1 corporate research institution in Australia by Nature Index](https://www.diraq.com/newsdesk/how-full-cmos-compatibility-puts-diraq-ahead-of-the-pack) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2026-06-13** | [Diraq Collaborates with NVIDIA on Hybrid Quantum-HPC for Utility Scale](https://www.diraq.com/newsdesk/su23dx5ysndef0l3mxyw63u8tdy996) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2026-06-12** | [International Women’s Day: recognising the women of Diraq](https://www.diraq.com/newsdesk/diraq-collaborates-with-nvidia-on-hybrid-quantum-hpc-for-utility-scale) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2026-06-11** | [NRFC backs Diraq to lead global race to utility-scale quantum computing](https://www.diraq.com/newsdesk/celebrating-the-women-of-diraq-leading-the-quantum-revolution-this-international-womens-day) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2026-05-10** | [Diraq Leadership Named to UNESCO’s Inaugural ‘Quantum 100’](https://www.diraq.com/newsdesk/nrfc-backs-diraq-to-lead-global-race-to-utility-scale-quantum-computing) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-13-09** | [Diraq’s Ultrafast Qubits Accelerated by NVIDIA NVQLink](https://www.diraq.com/newsdesk/diraq-advances-to-next-phase-of-darpas-utility-scale-quantum-computing-initiative) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2025-12-28** | [Diraq partners with Dr Scott Liles on prestigious ARC Early Career Industry Fellowship](https://www.diraq.com/newsdesk/diraq-secures-ctcp-funding-to-uncover-energy-applications) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-12-27** | [Diraq Secures CTCP Funding to Uncover Energy Applications](https://www.diraq.com/newsdesk/paving-the-way-to-utility-scale) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-12-26** | [Paving the way to utility scale](https://www.diraq.com/newsdesk/how-heisenbergs-anniversary-resonates-with-diraq) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-12-25** | [How Heisenberg’s anniversary resonates with Diraq](https://www.diraq.com/newsdesk/iceberg-quantum-boosts-diraqs-error-correction-expertise) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-11-24** | [Iceberg Quantum Boosts Diraq’s Error-Correction Expertise](https://www.diraq.com/newsdesk/unsw-quantum-computing-spinout-wins-industry-award) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-11-23** | [UNSW quantum computing spinout wins industry award](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-11-22** | [Imec technology lights the path to utility scale for Diraq’s quantum chips](https://www.diraq.com/newsdesk/uwx8db88c8hq1az55vept0g7by62vj) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-11-21** | [Our quantum technology shines a light on the search for dark matter](https://www.diraq.com/newsdesk/7x26ihiuojz3nah33t60jefkg2pdz9) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2025-10-20** | [Quantum innovation on a global scale](https://www.diraq.com/newsdesk/nywopch27vcfb3t0x5lg4kgm8736nt) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-10-19** | [Diraq leading Australian-UK-US consortium for DARPA Quantum Benchmarking Initiative](https://www.diraq.com/newsdesk/hf8b1znkv17pcmgwxxt6ccof5dq5dc) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2025-10-18** | [Breakthrough: Quantum entanglement between silicon qubits](https://www.diraq.com/newsdesk/yf6u0nodfdblquekg4ugapfshp725z) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-10-17** | [Diraq Advances to Next Phase of DARPA’s Utility-Scale Quantum Computing Initiative](https://www.diraq.com/newsdesk/andrew-dzurak-receives-innovation-leadership-award-at-innovationaus-2025nbsp) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2025-09-16** | [Bell’s Inequalities](https://www.diraq.com/newsdesk/up47xczbng7a3ds6dn7idasrg05dss) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-09-15** | [Diraq and QM employ AI for scaling silicon-based quantum computers with NVIDIA DGX Quantum](https://www.diraq.com/newsdesk/43whjajuj884xdhhykqmjmjhojbjba) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2025-09-14** | [World leading quantum theorist Stephen Bartlett joins Diraq](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-72msg-t48e9-4lpks-8n2x6-kygnl) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-09-13** | [Quantum partnership yields scalable control for future computers](https://www.diraq.com/newsdesk/cool-control-from-quantumclassical-partnership) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2025-08-12** | [Cool control from quantum–classical partnership](https://www.diraq.com/newsdesk/diraq-partners-with-dr-scott-liles-on-prestigious-arc-early-career-industry-fellowship) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2025-08-11** | [A tiny spin qubit with universal appeal](https://www.diraq.com/newsdesk/imec-technology-lights-the-path-to-utility-scale-for-diraqs-quantum-chips) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-13-10** | [2023 Wrap: A Quantum Leap in Innovation and Collaboration](https://www.diraq.com/newsdesk/diraq-secures-usd-15-million-in-series-a-2-funding) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-13-09** | [Diraq picks up Defence Dual-Use Tech & Space Award](https://www.diraq.com/newsdesk/induction-into-pearcey-hall-of-fame) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-12-28** | [Induction into Pearcey Hall of Fame](https://www.diraq.com/newsdesk/spin-qubit-6-a-whale-of-a-time) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2024-12-27** | [Diraq Adds Leading Deeptech and Venture Investors to USD $22 Million Investment Round](https://www.diraq.com/newsdesk/diraq-drives-two-qubit-gate-accuracy-in-cmos-to-above-99) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-12-26** | [Diraq drives two-qubit gate accuracy in CMOS to above 99%](https://www.diraq.com/newsdesk/diraq-drives-global-control-techniques-to-new-heights) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2024-11-25** | [Diraq drives global control techniques to new heights](https://www.diraq.com/newsdesk/diraq-qubits-performing-in-synch) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2024-11-24** | [Diraq qubits performing in synch](https://www.diraq.com/newsdesk/diraq-and-unsw-pioneering-scalable-hole-spin-qubits) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2024-11-23** | [Diraq and UNSW Pioneering scalable hole-spin qubits](https://www.diraq.com/newsdesk/diraq-picks-up-defence-dual-use-tech-amp-space-award) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-10-22** | [Hot Qubits, Cool Logic](https://www.diraq.com/newsdesk/quantum-computing-just-got-hotter-1-degree-above-absolute-zero) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2024-10-21** | [Quantum computing just got hotter: 1 degree above absolute zero](https://www.diraq.com/newsdesk/diraq-engineer-secures-prestigious-fellowship-to-advance-quantum-computing-technology) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2024-10-20** | [Diraq Engineer Secures Prestigious Fellowship to Advance Quantum Computing Technology](https://www.diraq.com/newsdesk/internship-story-automating-qubit-design-at-diraq) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2024-09-19** | [Internship Story: Automating Qubit Design at Diraq](https://www.diraq.com/newsdesk/diraq-achieves-record-accuracy-for-device-manufactured-by-existing-semiconductor-infrastructure) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2024-09-18** | [Diraq achieves record accuracy for device manufactured by existing semiconductor infrastructure](https://www.diraq.com/newsdesk/diraq-adds-leading-deeptech-and-venture-investors-to-usd-22-million-investment-round) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-09-17** | [Diraq Secures USD $15 Million in Series A-2 Funding](https://www.diraq.com/newsdesk/diraq-opens-new-commercial-laboratory-in-sydney-to-propel-era-of-fault-tolerant-quantum-computing) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2024-08-16** | [Diraq Opens New Commercial Laboratory in Sydney to Propel Era of Fault Tolerant Quantum Computing](https://www.diraq.com/newsdesk/quantum-thoughts-from-quantum-australia-2024) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2024-08-15** | [Quantum Thoughts from Quantum Australia 2024](https://www.diraq.com/newsdesk/diraq-is-hiring) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2024-08-14** | [Diraq is hiring!](https://www.diraq.com/newsdesk/unlocking-the-potential-of-quantum-computing-a-nextgen-graduates-perspective) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2024-07-13** | [Unlocking the Potential of Quantum Computing: A NextGen Graduate’s Perspective](https://www.diraq.com/newsdesk/diraq-makes-quantum-leap-with-breakthrough-discovery-operating-quantum-computing-processors-at-20x-warmer-temperatures) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2024-07-12** | [Diraq Makes Quantum Leap with Breakthrough Discovery, Operating Quantum Computing Processors at 20X Warmer Temperatures](https://www.diraq.com/newsdesk/hot-qubits-cool-logic) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2023-11-10** | [‘Commercially relevant’ quantum computer in five years](https://www.diraq.com/newsdesk/unsw-tops-spinout-company-rankings-for-second-consecutive-year) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2023-10-28** | [AI hardware: The green opportunity for quantum computers](https://www.diraq.com/newsdesk/unsw-celebrates-33-highly-cited-researchers-among-worlds-most-influential) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2023-10-09** | [UNSW tops spinout company rankings for second consecutive year](https://www.diraq.com/newsdesk/ai-hardware-the-green-opportunity-for-quantum-computers) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2023-09-27** | [Farewell, master of foresight Dr Gordon Moore](https://www.diraq.com/newsdesk/paving-the-way-to-utility-scale-z2lj8) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2023-09-26** | [Diraq engineer secures fellowship](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-gbl2x) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2023-08-25** | [Diraq partners with Professor Hamilton on prestigious ARC Industry Laureate Fellowship](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-xl3ra) | Defense, Federal & Academic Alliances | DARPA QBI, Australian Defence Trailblazer, Nature Index #1 corporate ranking, and ARC Fellowships. |
| **2023-08-24** | [Jellybeans – a sweet solution for overcrowded circuitry in quantum computer chips](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-rfgme) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2023-07-23** | [Diraq is a Defence Trailblazer Partner](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-3ejcn) | Quantum Software & HPC Integration | NVIDIA GH200, NVQLink, and CUDA-Q integration for automated qubit calibration and error mitigation. |
| **2023-07-22** | [Diraq awarded CRC-P grant](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-e8kp7) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2023-06-21** | [Diraq awarded NSW QCCF grant](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-mgrrd) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2023-06-20** | [Diraq is an InnovationAus Awards finalist](https://www.diraq.com/newsdesk/q-ctrl-diraq-partner-for-public-sector-projects) | Corporate Finance & Capital | U.S. CHIPS Act LOI ($38M USD / $53M AUD), NRFC equity investment ($20M AUD), Series A-2 funding ($15M USD), and government grants. |
| **2023-05-19** | [Q-CTRL, Diraq partner for public-sector projects](https://www.diraq.com/newsdesk/cosmos-where-are-we-at-with-quantum-computing) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2023-05-18** | [Cosmos: Where are we at with quantum computing?](https://www.diraq.com/newsdesk/sydney-quantum-academy-better-than-rocket-science) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2023-04-17** | [Sydney Quantum Academy: Better than rocket science](https://www.diraq.com/newsdesk/diraq-a-silicon-spin-on-quantum-computing) | Executive Leadership & Facilities | Board Chairman Scott McGregor (ex-Broadcom CEO), U.S. offices in Palo Alto/LA/Chicago, and Sydney commercial lab. |
| **2023-04-16** | [Diraq: A silicon spin on quantum computing](https://www.diraq.com/newsdesk/commercially-relevant-quantum-computer-in-five-years) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |
| **2023-01-14** | [Behind the paper: On-demand electrical control of spin qubits](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-ljz2f) | Silicon Spin Architecture & Hardware | CMOS silicon quantum dot spin qubits, 300mm wafer fabrication, and cryogenic control. |

---

5. **U.S. Department of Energy Genesis Mission**. [DOE Genesis Mission & Quantum Genesis Initiative](https://www.energy.gov/genesis-mission). U.S. Department of Energy & National Laboratories, 2026.
6. **Genesis Mission Consortium**. [Quantum Supercomputing & Industrial Co-Design Platform](https://www.genesismissionconsortium.org/).

## References & Document Sources
1. **Diraq Official Site**. [Diraq Corporate Newsdesk & Press Archive](https://www.diraq.com/newsdesk).
2. **Diraq Page 4 Verification Landmark**. [Behind the Paper: On-Demand Electrical Control of Spin Qubits](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-ljz2f). Jan 14, 2023.
3. **Imec Semiconductor Research**. [Diraq & Imec 300mm Silicon Quantum Dot Partnership](https://www.imec-int.com/).
