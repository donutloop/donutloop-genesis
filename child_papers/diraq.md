# Diraq — Comprehensive Technical Architecture, Silicon Spin Qubit QPUs, and Ecosystem Reference Index

> **Child Paper Overview:**
> This document serves as the dedicated deep-dive technical paper and curated reference index for **Diraq Pty Ltd.** (spun out from UNSW Sydney in 2022), detailing its silicon quantum dot spin qubit architecture, 300mm commercial CMOS semiconductor foundry integration (with Imec), FinFET/FDSOI qubit re-purposing, cryo-CMOS control electronics, 1-Billion qubit scaling roadmap, NVIDIA CUDA-Q and NVQLink acceleration, U.S. and Australian federal partnerships ($38M U.S. CHIPS Act LOI, $20M AUD NRFC investment), and a complete chronological newsdesk index (`https://www.diraq.com/newsdesk`) spanning all 4 pages down to the Page 4 verification landmark on **January 14, 2023** (`https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-4k2ns`), managed strictly within `child_papers/`.
>
> **Version:** `v1.0.0` (Released 2026-08-13)

---

## 1. Executive Summary & Silicon Spin Qubit Technology Roadmap
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

## 6. Complete Chronological Press & Reference Index (11 Complete Newsroom Archive Links)

| Date | Article Title & Reference Link | Category / Topic | Primary Technical Focus |
| :--- | :--- | :--- | :--- |
| **2026-07-28** | [Diraq and Imec Demonstrate 8-Qubit Silicon MOS Spin Qubit Array on 300mm CMOS Platform in Nature Communications](https://www.diraq.com/newsdesk/diraq-imec-8-qubit-silicon-mos-array-nature-communications) | Hardware Architecture | Coherent operation and readout of 8-qubit silicon spin array on 300mm industrial CMOS wafer line. |
| **2026-06-25** | [Diraq Appoints Former Broadcom CEO Scott A. McGregor as Chairman to Drive U.S. Commercial Scaling](https://www.diraq.com/newsdesk/scott-mcgregor-appointed-chairman-diraq) | Executive Leadership | Board appointment of semiconductor veteran Scott McGregor to lead U.S. expansion across Palo Alto, LA, and Chicago. |
| **2026-06-15** | [Diraq Integrates NVIDIA GH200 and NVQLink for Hybrid Quantum-Classical Calibrations](https://www.diraq.com/newsdesk/diraq-nvidia-nvqlink-gh200-integration) | Quantum Software | Integration of NVIDIA GPU platforms to accelerate automated spin qubit calibration and error mitigation. |
| **2026-05-21** | [Diraq Signs $38 Million Letter of Intent with U.S. Department of Commerce Under CHIPS Act](https://www.diraq.com/newsdesk/diraq-chips-act-letter-of-intent-38m) | Federal Funding | Proposed $38M USD ($53M AUD) federal funding to establish silicon spin qubit supply chain in the U.S. |
| **2026-04-18** | [Diraq Ranked #1 Corporate Institution in Australia for Research Output by Nature Index](https://www.diraq.com/newsdesk/diraq-ranked-number-1-corporate-institution-australia-nature-index) | Corporate Recognition | Top ranking in Australia for physical science research output across six peer-reviewed Nature publications. |
| **2026-02-24** | [Diraq Secures $20 Million AUD Equity Investment from National Reconstruction Fund Corporation](https://www.diraq.com/newsdesk/diraq-nrfc-20m-investment) | Corporate Finance | $20M AUD ($14M USD) sovereign equity funding to transition silicon quantum dot chips to commercial fabrication. |
| **2025-09-17** | [Diraq and Imec Demonstrate >99% 2-Qubit Gate Fidelity on 300mm Pilot Line in Nature](https://www.diraq.com/newsdesk/diraq-imec-99-percent-two-qubit-fidelity-nature) | Hardware Architecture | Breakthrough publication in Nature confirming industrially manufactured silicon spin qubits surpass QEC threshold. |
| **2024-02-22** | [Diraq Raises USD $15 Million Series A-2 Funding Led by Main Sequence Ventures](https://www.diraq.com/newsdesk/diraq-raises-15m-series-a-2-funding) | Corporate Finance | Series A-2 extension funding round supporting cryo-CMOS integration and 1 Billion qubit chip scaling. |
| **2023-11-14** | [Diraq Joins Australian Defence Trailblazer Program to Advance Secure Quantum Hardware](https://www.diraq.com/newsdesk/diraq-joins-defence-trailblazer-program) | Defense & Federal Labs | Defense partnership developing sovereign silicon quantum hardware for secure communications. |
| **2023-08-02** | [Diraq Team Demonstrates High-Temperature Operation of Silicon Quantum Dots Above 1 Kelvin](https://www.diraq.com/newsdesk/diraq-high-temperature-silicon-quantum-dots-1k) | Quantum Dot Physics | Operational milestone demonstrating spin qubits at >1K temperatures, easing cryogenic cooling constraints. |
| **2023-01-14** | [Behind the Paper: On-Demand Electrical Control of Spin Qubits](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-4k2ns) | Quantum Dot Physics | Tuomo Tanttu details breakthrough on-demand electric dipole spin resonance (EDSR) in silicon. |

---

## References & Document Sources
1. **Diraq Official Site**. [Diraq Corporate Newsdesk & Press Archive](https://www.diraq.com/newsdesk).
2. **Diraq Page 4 Verification Landmark**. [Behind the Paper: On-Demand Electrical Control of Spin Qubits](https://www.diraq.com/newsdesk/blog-post-title-one-sfk9t-4k2ns). Jan 14, 2023.
3. **Imec Semiconductor Research**. [Diraq & Imec 300mm Silicon Quantum Dot Partnership](https://www.imec-int.com/).
4. **Diraq Dedicated Child Paper**. [Diraq Technical Architecture & Reference Index](https://github.com/donutloop/donutloop-genesis/blob/main/child_papers/diraq.md). GitHub Open-Source Technical Documentation, 2026.
