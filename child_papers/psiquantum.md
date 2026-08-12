# PsiQuantum — Comprehensive Technical Architecture, Silicon Photonic QPUs, and Ecosystem Reference Index

> **Child Paper Overview:**
> This document serves as the dedicated deep-dive technical paper and curated reference index for **PsiQuantum Corp.**, detailing its Fusion-Based Quantum Computing (FBQC) architecture, 300mm silicon photonics semiconductor foundry manufacturing (GlobalFoundries & SkyWater Technology), Omega photonic chipsets, Superconducting Nanowire Single-Photon Detectors (SNSPDs), Active Volume Architecture fault-tolerant breakthroughs, Construct software suite, U.S. and Australian government utility-scale deployments (A$940M Brisbane Facility, Illinois Quantum Park Chicago), DARPA Quantum Benchmarking Initiative (QBI) awards, DOE Genesis Mission projects, and a complete chronological press index (`https://www.psiquantum.com/news`) extending down to the verification landmark on **January 30, 2023** (`https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing`), managed strictly within `child_papers/`.
>
> **Version:** `v1.0.0` (Released 2026-08-13)

---

## 1. Executive Summary & Photonic Technology Roadmap
- **Fault-Tolerant Photonic Quantum Leadership:** Founded in 2015 by quantum optical physicists Dr. Jeremy O'Brien, Dr. Terry Rudolph, Dr. Mark Thompson, and Dr. Pete Shadbolt, PsiQuantum is building the world's first utility-scale, fault-tolerant photonic quantum computer containing **1,000,000+ physical qubits**.
- **Corporate Capital & $1 Billion Funding Surge:**
  - **$1 Billion Series E Raise (Sept 2025):** Secured $1 Billion in Series E equity funding led by BlackRock, Baillie Gifford, M12 (Microsoft), Temasek, and Playground Global, bringing total raised capital to over **$1.7 Billion**.
  - **CHIPS Act $100 Million LOI (May 2026):** Signed a $100 Million Letter of Intent with the U.S. Department of Commerce under the CHIPS and Science Act to expand U.S. silicon photonics semiconductor manufacturing.
- **Executive Leadership Team:**
  - Executive Chairman & Co-Founder: Dr. Jeremy O'Brien
  - Interim Chief Executive Officer: Victor Peng (former President of AMD / CEO of Xilinx)
  - Executive Vice President: Rob Soderbery
  - Chief Information Officer: Sriram Sitaraman
  - Chief Scientist & Co-Founder: Dr. Pete Shadbolt
- **Photonic Hardware Roadmap:**
  - **Fusion-Based Architecture:** Replaces fragile physical qubit gates with Fusion-Based Quantum Computing (FBQC), leveraging linear-optical projective measurements on photon resource states.
  - **Active Volume Architecture (Jan 30, 2023):** Breakthrough fault-tolerant architecture reducing optical component and physical qubit overhead by orders of magnitude.
  - **Omega Photonic Chipset (Feb 2026):** Manufacturable 300mm silicon photonics engine containing single-photon sources, low-loss waveguides, and electro-optic switches.
  - **Utility Facilities:** A$940M Brisbane Quantum Utility Facility (Australia) and Illinois Quantum & Microelectronics Park (Chicago, USA).

---

## 2. Silicon Photonics Semiconductor Foundry & Chip Packaging
- **300mm Commercial Foundry Integration:**
  - **GlobalFoundries & SkyWater Technology:** Manufactures quantum photonic integrated circuits (PICs) using existing 300mm CMOS semiconductor wafer lines, leveraging high-volume lithography and yield control.
  - **Monolithic Component Integration:** Integrates single-photon sources, low-loss silicon nitride ($Si_3N_4$) waveguides, electro-optic phase modulators, and MEMS optical switches on standard silicon substrates.
- **SNSPD Cryogenic Detector Integration:**
  - **Superconducting Nanowire Detectors:** Integrates thousands of Superconducting Nanowire Single-Photon Detectors (SNSPDs) operating at ~4 Kelvin with sub-10 picosecond timing jitter and >98% quantum efficiency.
  - **Custom Cryoplants:** Collaborates with STFC Daresbury Laboratory to engineer high-capacity helium dilution cryoplants capable of cooling large-scale photonic detector arrays.

---

## 3. Fusion-Based Quantum Computing (FBQC) & SNSPD Detectors
- **The Fusion Paradigm:**
  - **Resource State Generators (RSGs):** Photonic sources generate small entangled clusters of photons ("resource states") continuously.
  - **Fusion Measurements:** Type-II linear-optical fusion measurements entangle resource states into a 3D fault-tolerant cluster state without requiring long-lived physical qubit memories.
- **Extreme Tolerance to Photonic Loss:** FBQC architectures maintain fault-tolerant error thresholds even in the presence of photon loss and detector dark counts, enabling scaling to 1,000,000+ physical optical modes.

---

## 4. Fault-Tolerant Architecture & Software Suite (Construct & CUDA-Q)
- **Active Volume Architecture Breakthrough (Jan 30, 2023):**
  - **Dynamic Spatial-Temporal Routing:** Replaces static 3D surface code geometries with dynamic routing of logical qubits, drastically reducing physical photon count and switch requirements for executing algorithms like Shor's and VQE.
- **Construct Software Suite:**
  - **Algorithm Compilation:** Proprietary software platform launched in Sept 2025 for synthesizing, fault-tolerantly compiling, and simulating utility-scale quantum algorithms.
  - **NVIDIA CUDA-Q Integration:** Accelerated by NVIDIA GPU clusters via CUDA-Q to perform multi-node classical simulations of photonic fusion networks.

---

## 5. Global Utility Facilities, Defense & Federal Applications
- **A$940 Million Brisbane Quantum Utility Facility (Australia):**
  - Strategic partnership with the Australian Federal and Queensland State Governments establishing a utility-scale quantum computing site at Moreton Bay Central, supported by the Griffith University Test and Validation Lab.
- **Illinois Quantum & Microelectronics Park (Chicago, USA):**
  - Landmark agreement with the State of Illinois and City of Chicago to construct a 1M physical qubit facility at the USX South Works site.
- **DARPA US2QC & Quantum Benchmarking Initiative (QBI):**
  - Selected for DARPA US2QC Stage 1 (Jan 2023), Stage 2 (Jan 2024), QBI Stage C (Feb 2025), and awarded an expanded **$125 Million DARPA QBI agreement** (July 2026).
- **Federal & Industrial Partners:**
  - U.S. Department of Energy (DOE Genesis Mission awards), AFRL contracts, Lockheed Martin MoU (aerospace algorithms), Airbus, and NVIDIA.

---

## 6. Complete Chronological Press & Reference Index (16 Complete Newsroom Archive Links)

| Date | Article Title & Reference Link | Category / Topic | Primary Technical Focus |
| :--- | :--- | :--- | :--- |
| **2026-07-22** | [PsiQuantum Awarded $125 Million Expanded Agreement by DARPA Under Quantum Benchmarking Initiative](https://www.psiquantum.com/news-import/psiquantum-awarded-125m-expanded-agreement-by-darpa) | Defense & Federal Labs | Expanded DARPA QBI Stage C agreement to verify and validate utility-scale photonic quantum computer. |
| **2026-07-15** | [PsiQuantum Appoints Executive Vice President Rob Soderbery, CIO Sriram Sitaraman, and Confirms CEO Victor Peng](https://www.psiquantum.com/news-import/psiquantum-appoints-executive-leadership-team) | Executive Leadership | Executive appointments strengthening operations and infrastructure for Brisbane and Chicago utility sites. |
| **2026-06-18** | [PsiQuantum Breaks Ground on Utility-Scale Quantum Computer Facility in Brisbane, Australia](https://www.psiquantum.com/news-import/psiquantum-breaks-ground-on-brisbane-utility-facility) | Global Facilities | Groundbreaking on A$940M utility-scale quantum facility at Moreton Bay Central in Brisbane. |
| **2026-05-21** | [PsiQuantum Signs $100 Million Letter of Intent with U.S. Department of Commerce under CHIPS Act](https://www.psiquantum.com/news-import/psiquantum-signs-100m-chips-act-letter-of-intent) | Federal Funding | Proposed $100M federal CHIPS and Science Act funding to accelerate 300mm silicon photonics chip manufacturing. |
| **2026-05-08** | [PsiQuantum Opens Test and Validation Lab at Griffith University in Brisbane](https://www.psiquantum.com/news-import/psiquantum-opens-test-validation-lab-at-griffith-university) | R&D Infrastructure | Opening of specialized cryogenic test lab for validating photonic QPU modules at Griffith University. |
| **2026-03-06** | [PsiQuantum Opens UK R&D Facility at STFC Daresbury Laboratory](https://www.psiquantum.com/news-import/psiquantum-opens-uk-rd-facility-at-stfc-daresbury-laboratory) | R&D Infrastructure | Facility opening developing high-capacity helium cryogenic modules for scaling photonic quantum computers. |
| **2026-02-26** | [PsiQuantum Unveils Omega Manufacturable Silicon Photonic Chipset for Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-unveils-omega-manufacturable-silicon-photonic-chipset) | Hardware Architecture | Announcement of Omega silicon photonic engine with integrated single-photon sources and electro-optic switches. |
| **2025-11-03** | [PsiQuantum and Lockheed Martin Sign MoU to Advance Aerospace Quantum Computing Applications](https://www.psiquantum.com/news-import/psiquantum-and-lockheed-martin-sign-mou) | Industrial Applications | Strategic aerospace collaboration developing fault-tolerant quantum algorithms for defense and material simulation. |
| **2025-09-18** | [PsiQuantum Launches Construct Software Suite Integrated with NVIDIA CUDA-Q Platform](https://www.psiquantum.com/news-import/psiquantum-launches-construct-software-suite-with-nvidia-cuda-q) | Quantum Software | Launch of Construct fault-tolerant algorithm software platform accelerated by GPU clusters via NVIDIA CUDA-Q. |
| **2025-09-04** | [PsiQuantum Raises $1 Billion Series E Funding Round to Scale Utility Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-raises-1-billion-series-e-funding) | Corporate Finance | $1B Series E funding led by BlackRock, Baillie Gifford, Temasek, and M12 to build Chicago and Brisbane facilities. |
| **2025-09-04** | [PsiQuantum Breaks Ground on Utility-Scale Facility at Illinois Quantum & Microelectronics Park](https://www.psiquantum.com/news-import/psiquantum-breaks-ground-at-illinois-quantum-park) | Global Facilities | Groundbreaking on Chicago facility for housing PsiQuantum's first U.S. utility-scale quantum computer. |
| **2025-02-20** | [PsiQuantum Advances to Stage C of DARPA Quantum Benchmarking Initiative (QBI)](https://www.psiquantum.com/news-import/psiquantum-advances-to-stage-c-of-darpa-qbi) | Defense & Federal Labs | Selection by DARPA for Stage C of QBI program evaluating fault-tolerant utility-scale quantum systems. |
| **2024-07-25** | [PsiQuantum Selected to Build Utility-Scale Quantum Computer in Chicago, Illinois](https://www.psiquantum.com/news-import/psiquantum-selected-to-build-utility-scale-quantum-computer-in-chicago) | Global Facilities | State of Illinois and City of Chicago partnership establishing 1M physical qubit facility at USX South Works site. |
| **2024-04-30** | [PsiQuantum Partners with Australian Government on A$940 Million Brisbane Quantum Facility](https://www.psiquantum.com/news-import/psiquantum-partners-with-australian-government-on-940m-brisbane-facility) | Global Facilities | Landmark A$940M agreement with Australian Federal and Queensland State Governments for Brisbane QPU. |
| **2024-01-24** | [PsiQuantum Advances to Second Stage of DARPA US2QC Program](https://www.psiquantum.com/news-import/psiquantum-advances-to-second-stage-of-darpa-us2qc-program) | Defense & Federal Labs | Advancement in DARPA Underexplored Systems for Utility-Scale Quantum Computing (US2QC) evaluation. |
| **2023-01-30** | [PsiQuantum Announces Breakthrough in Architectures for Error-Corrected Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing) | Hardware Architecture | VERIFICATION POINT: Release of Active Volume Architecture reducing physical qubit and optical hardware overhead by orders of magnitude. |

---

## References & Document Sources
1. **PsiQuantum Official Site**. [PsiQuantum Corporate Newsroom & Press Archive](https://www.psiquantum.com/news).
2. **PsiQuantum Verification Landmark**. [PsiQuantum Announces Breakthrough in Architectures for Error-Corrected Quantum Computing](https://www.psiquantum.com/news-import/psiquantum-announces-breakthrough-in-architectures-for-error-corrected-quantum-computing). Jan 30, 2023.
3. **UK Science and Technology Facilities Council**. [PsiQuantum STFC Daresbury Laboratory Cryogenic Facility](https://www.ukri.org/councils/stfc/).
4. **PsiQuantum Dedicated Child Paper**. [PsiQuantum Technical Architecture & Reference Index](https://github.com/donutloop/donutloop-genesis/blob/main/child_papers/psiquantum.md). GitHub Open-Source Technical Documentation, 2026.
