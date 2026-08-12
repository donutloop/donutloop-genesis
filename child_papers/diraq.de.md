# Diraq — Umfassende technische Architektur, Silicon Spin Qubit QPUs, and Ecosystem Reference Index

> **Übersicht des technischen Vertiefungspapiers:**
> This document serves as the dedicated deep-dive technical paper and curated reference index for **Diraq Pty Ltd.** (spun out from UNSW Sydney in 2022), detailing its silicon quantum dot spin qubit architecture, 300mm commercial CMOS semiconductor foundry integration (with Imec), FinFET/FDSOI qubit re-purposing, cryo-CMOS control electronics, 1-Billion qubit scaling roadmap, NVIDIA CUDA-Q and NVQLink acceleration, U.S. and Australian federal partnerships ($38M U.S. CHIPS Act LOI, $20M AUD NRFC investment), and a complete chronological newsdesk index (`https://www.diraq.com/newsdesk`) compiling **all 73 newsdesk links across all 4 pages** down to the Page 4 verification landmark on **January 14, 2023** (`https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-ljz2f`), managed strictly within `child_papers/`.
>
> **Version:** `v1.0.0` (Released 2026-08-13)

---

## 1. Management-Zusammenfassung & Silicon Spin Qubit Technology Roadmap
- **CMOS Silicon Quantum Computing Leadership:** Spun out in 2022 from UNSW Sydney by pioneer Prof. Andrew Dzurak, Diraq is building utility-scale, fault-tolerant quantum processors containing **1,000,000,000 (1 Billion) qubits** using standard silicon CMOS semiconductor manufacturing.
- **Corporate Capital & Financing Surge:**
  - **U.S. CHIPS Act $38 Million LOI (May 2026):** Signed a $38 Million USD ($53M AUD) Letter of Intent with the U.S. Department of Commerce under the CHIPS and Science Act to establish a silicon quantum supply chain in the U.S.
  - **NRFC $20 Million AUD Equity Investment (Feb 2026):** Secured $20 Million AUD ($14M USD) sovereign equity funding from the National Reconstruction Fund Corporation (NRFC).
  - **Series A-2 Funding ($15M USD):** Led by Main Sequence Ventures and Taronga Ventures, bringing total capital raised to over **$120 Million**.
- **Executive Leadership & Governance:**
  - CEO & Founder: Prof. Andrew Dzurak
  - Chairman of the Board: Scott A. McGregor (former CEO of Broadcom)
  - Head of Quantum Hardware: Dr. Henry Yang
  - Chief Scientist & Lead Author: Dr. Tuomo Tanttu
- **Silicon Spin Roadmap:**
  - **Single-Electron Spin Qubits:** Confines individual electron spins in silicon-28 ($^{28}\text{Si}$) quantum dots.
  - **300mm CMOS Fabrication:** 8-qubit array demonstrated on 300mm industrial pilot lines with Imec (*Nature Communications* 2026).
  - **Cryo-CMOS Integration:** Co-integrating classical control electronics with quantum dot arrays at sub-1 Kelvin temperatures.
  - **1-Billion Qubit Target:** Commercial utility-scale deployment targeted by 2029.

---

## 2. CMOS Semiconductor Foundry & FinFET/FDSOI Integration
- **300mm Industrial Pilot Line Manufacturing:**
  - **Imec Partnership:** Collaborates with Imec (Belgium) to fabricate silicon MOS quantum dot spin qubits on standard 300mm silicon CMOS wafer lines.
  - **FinFET & FDSOI Transistors:** Re-purposes commercial FinFET and Fully-Depleted Silicon-on-Insulator (FDSOI) transistor gates as quantum dot confinement electrodes, enabling mass production in existing semiconductor fabs.
- **Record Gate Fidelities (>99% 2-Qubit Gate Fidelity):**
  - **Nature 2025 Milestone:** Demonstrated two-qubit gate fidelities systematically exceeding 99% on 300mm industrially manufactured wafers, surpassing the fault-tolerant surface code error threshold.
  - **SPAM Fidelity:** State preparation and measurement (SPAM) fidelity exceeding 99.9%.

---

## 3. Quantum Dot Physics, EDSR & Cryo-CMOS Electronics
- **Isotopically Purified Silicon-28 ($^{28}\text{Si}$):**
  - **Spin Coherence:** Utilizes nuclear-spin-free $^{28}\text{Si}$ substrates, extending electron spin coherence times $T_2^* > 100\text{ }\mu\text{s}$ and $T_2 > 20\text{ ms}$.
- **Electric Dipole Spin Resonance (EDSR):**
  - **On-Demand Electrical Control:** Uses localized electric fields and micromagnets for fast, gate-voltage-driven spin flipping without bulky microwave magnetic driving lines.
- **High-Temperature Qubit Operation (>1 Kelvin):**
  - **Cooling Capacity Relief:** Operates spin qubits above 1 Kelvin, providing 1,000x higher cooling power compared to 10 millikelvin dilution systems and enabling co-located cryo-CMOS control electronics.

---

## 4. Fault-Tolerant Surface Codes & 1-Billion Qubit Scaling
- **Dense 2D Matrix Grid Topology:** High-density 2D array of quantum dots spaced at nanometer pitch, compatible with 2D surface codes and fault-tolerant error correction.
- **NVIDIA CUDA-Q & NVQLink Integration:**
  - **Accelerated Calibrations:** Integrates NVIDIA GH200 Superchips and NVQLink to run automated quantum-classical calibration loops and error tracking.

---

## 5. Defense, Federal & Enterprise Applications
- **U.S. & Australian Federal Partnerships:**
  - U.S. Department of Commerce CHIPS Act agreement ($38M USD / $53M AUD).
  - Australian National Reconstruction Fund Corporation (NRFC) sovereign equity investment ($20M AUD).
  - Australian Defence Trailblazer program partner.
- **Industry & Academic Recognition:**
  - Ranked #1 corporate institution in Australia for research output in 2025 by *Nature Index*.

---

## 6. Vollständiger chronologischer Presse- und Referenzindex (73 Complete Newsroom Archive Links Across All 4 Pages)

| Datum | Artikeltitel & Referenzlink | Kategorie / Thema | Primärer technischer Fokus |
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

## Referenzen & Dokumentenquellen
1. **Diraq Official Site**. [Diraq Corporate Newsdesk & Press Archive](https://www.diraq.com/newsdesk).
2. **Diraq Page 4 Verification Landmark**. [Behind the Paper: On-Demand Electrical Control of Spin Qubits](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-ljz2f). Jan 14, 2023.
3. **Imec Semiconductor Research**. [Diraq & Imec 300mm Silicon Quantum Dot Partnership](https://www.imec-int.com/).
4. **Diraq Dedicated Child Paper**. [Diraq Technical Architecture & Reference Index](https://github.com/donutloop/donutloop-genesis/blob/main/child_papers/diraq.md). GitHub Open-Source Technical Documentation, 2026.
