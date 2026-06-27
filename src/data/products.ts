import { 
  Cpu, Shield, Activity, Settings, Zap, Layers, GitMerge, Link, 
  Maximize, ShieldCheck, Waves, ThermometerSnowflake, Minimize2, 
  ArrowDownToLine, Box, Crosshair, Grid, Move, MonitorPlay, Snowflake,
  Microscope, Target, Video, Maximize2, SlidersHorizontal, Wrench, Radio, 
  MapPin, Goal, GitBranch, BrainCircuit, Workflow, Focus, Rotate3d, Camera, Database, Radar,
  Car, Train, Ship, ShieldAlert, Microchip, Antenna, Stethoscope, Bot,
  Server
} from "lucide-react";

export const productsData: Record<string, any> = {

  // "quantum-volt": {
  //   category: "Quantum Hardware",
  //   name: "QuantumVolt™ Isolated Voltage Source",
  //   subtitle: "Ultra-low-noise precision gate and bias control platform for quantum transport, superconducting systems, and cryogenic nanoelectronics.",
  //   specStrip: [
  //     "4 / 8 / 16 Isolated Channels", "±10 V Bipolar Outputs", "16-Bit DAC Resolution", 
  //     "100 dB Crosstalk Isolation", "Ultra-Low Noise Analog Design", "LabVIEW & Python Ready"
  //   ],
  //   heroImage: "/images/quantum-volt-hero.png",
  //   gallery: [
  //     "/images/quantum-volt-channels.png",
  //     "/images/quantum-volt-pcb.png"
  //   ],
  //   overview: [
  //     "QuantumVolt™ is Cryonano’s precision isolated voltage source platform engineered for quantum transport measurements, superconducting devices, nanoelectronics, and cryogenic research systems.",
  //     "Designed specifically for electrically sensitive low-temperature experiments, QuantumVolt™ delivers ultra-stable isolated bipolar outputs with extremely low noise, low drift, and high channel-to-channel isolation.",
  //     "The modular architecture enables scalable system expansion while preserving precision analog performance and measurement integrity.",
  //     "Unlike conventional laboratory power supplies, the outputs are optimized for ultra-low noise operation, minimal temperature drift, high long-term stability, independent isolated signal paths, precision voltage sweeps, and simultaneous multi-channel updates.",
  //     "The isolated architecture eliminates ground loops and cross-channel interference, making the platform ideal for cryogenic transport measurements and quantum device control."
  //   ],
  //   keyFeatures: [
  //     { title: "Fully Isolated Outputs", desc: "Each channel provides a completely independent signal path for noise-free gate and bias control.", icon: "Shield" },
  //     { title: "Precision Bipolar Outputs", desc: "Stable ±10 V bipolar outputs with stackable configurations up to ±40 V.", icon: "Activity" },
  //     { title: "Ultra-Low Noise Architecture", desc: "Optimized analog circuitry minimizes electrical noise and preserves fragile quantum states.", icon: "Waves" },
  //     { title: "High Stability & Low Drift", desc: "Designed for long-duration experiments requiring stable voltage biasing and repeatable measurements.", icon: "Target" },
  //     { title: "16-Bit DAC Resolution", desc: "High-resolution DAC architecture enables ultra-fine voltage steps and smooth voltage sweeps.", icon: "Cpu" },
  //     { title: "Automation & Software Integration", desc: "Native USB control with LabVIEW drivers and Python-compatible experimental automation workflows.", icon: "Settings" }
  //   ],
  //   channelConfigs: [
  //     {
  //       name: "4-Channel QuantumVolt™",
  //       desc: "Compact low-noise voltage control platform for:",
  //       points: ["Small-scale quantum experiments", "Gate control", "Sensor characterization", "Single-device measurements"],
  //       color: "blue"
  //     },
  //     {
  //       name: "8-Channel QuantumVolt™",
  //       desc: "Expanded architecture for:",
  //       points: ["Multi-gate devices", "Spintronics experiments", "Cryogenic transport systems", "Complex device tuning"],
  //       color: "purple"
  //     },
  //     {
  //       name: "16-Channel QuantumVolt™",
  //       desc: "High-density precision bias control for:",
  //       points: ["Quantum computing systems", "Multi-terminal devices", "Large-scale experimental platforms", "Automated measurement infrastructure"],
  //       color: "emerald"
  //     }
  //   ],
  //   specs: {
  //     "Channel Configurations": "4 / 8 / 16",
  //     "Output Voltage Range": "±10 V Bipolar",
  //     "Stackable Output": "Up to ±40 V",
  //     "Output Connectors": "BNC Sockets",
  //     "Output Current": "±10 mA per channel typical",
  //     "Output Resistance": "100 mΩ",
  //     "DAC Resolution": "16 Bits",
  //     "Gain Error": "0.01%",
  //     "Offset Error": "0.1%",
  //     "Temperature Drift": "6 ppm/°C, 80 µV/°C",
  //     "Channel Crosstalk": "100 dB",
  //     "Common Mode Voltage": "120 dB",
  //     "Slew Rate": "7 V/µs",
  //     "Noise": "260 µVrms",
  //     "Power-On State": "High Impedance",
  //     "Full Scale Settling Time": "20 µs",
  //     "3 V Step Response": "10 µs",
  //     "0.1 V Step Response": "8 µs",
  //     "Overvoltage Protection": "±30 V",
  //     "Short Circuit Protection": "Continuous",
  //     "Interface": "USB 2.0",
  //     "Software Support": "LabVIEW Drivers & Executable",
  //     "Channel Isolation": "250 Vrms Continuous",
  //     "Dielectric Withstand": "1390 Vrms",
  //     "Operating Temperature": "+10°C to +40°C",
  //     "Weight": "Approx. 0.5 kg"
  //   },
  //   analogDesign: {
  //     title: "Ultra-Low Noise Analog Design",
  //     subtitle: "Built for Sensitive Quantum Experiments",
  //     minimizes: ["Voltage ripple", "Thermal drift", "Ground coupling", "Crosstalk", "Environmental interference"],
  //     highlights: ["Independent isolated DAC channels", "Precision low-noise references", "High common-mode rejection", "Stable output architecture", "Low drift analog stages", "Optimized PCB grounding"],
  //     footer: "The system is specifically engineered for fragile low-current and low-temperature experiments where signal integrity is critical."
  //   },
  //   integration: {
  //     title: "Seamless Experimental Integration",
  //     connectsWith: ["Cryostats", "Dilution refrigerators", "Quantum transport setups", "Superconducting systems", "Nanoelectronics platforms", "Cryogenic probe stations"],
  //     features: ["USB-based host control", "Simultaneous channel updates", "Automated sweep generation", "Real-time voltage control", "Laboratory automation compatibility"],
  //     compatibleWith: ["LabVIEW", "Python", "MATLAB", "Custom DAQ systems"]
  //   },
  //   protection: {
  //     title: "Integrated Experimental Protection",
  //     desc: "The platform incorporates multiple protection layers for safe operation in research environments.",
  //     features: ["±30 V overvoltage protection", "Continuous short-circuit protection", "High channel isolation", "High impedance startup state", "Dielectric withstand protection"],
  //     protects: ["Quantum devices", "Sensitive samples", "Cryogenic wiring", "Experimental instrumentation"]
  //   },
  //   applications: [
  //     "Quantum transport experiments", "Superconducting qubits", "Graphene & 2D materials", 
  //     "Spintronics research", "Cryogenic electronics", "Nanoelectronics characterization", 
  //     "Quantum device tuning", "Low-temperature transport measurements", "Hall effect studies", "Precision gate control systems"
  //   ]
  // },
  // Add this exact data block inside your existing productsData record in src/data/products.ts
"quantum-volt": {
  category: "Quantum Hardware",
  name: "QuantumVolt™ Isolated Voltage Source",
  subtitle: "Ultra-low-noise precision gate and bias control platform for quantum transport, superconducting systems, and cryogenic nanoelectronics.",
  statusBadge: "LOW NOISE SERIES",
  
  hero: {
    title: "QuantumVolt™ Isolated Voltage Source",
    subtitle: "Ultra-low-noise precision gate and bias control platform for quantum transport, superconducting systems, and cryogenic nanoelectronics.",
    description: "Cryonano’s precision isolated voltage source platform engineered for quantum transport measurements, superconducting devices, nanoelectronics, and cryogenic research systems. Designed specifically for electrically sensitive low-temperature experiments, QuantumVolt™ delivers ultra-stable isolated bipolar outputs with extremely low noise, low drift, and high channel-to-channel isolation."
  },

  quickSpecs: [
    { label: "Isolated Channels", value: "4 / 8 / 16" },
    { label: "Bipolar Outputs", value: "±10 V" },
    { label: "DAC Resolution", value: "16-Bit" },
    { label: "Crosstalk Isolation", value: "100 dB" }
  ],

  overview: {
    title: "Precision Voltage Control for Quantum Measurements",
    paragraphs: [
      "QuantumVolt™ is engineered to provide stable and repeatable voltage biasing for sensitive low-temperature devices and experimental systems.",
      "The modular architecture enables scalable system expansion while preserving precision analog performance and measurement integrity. The isolated architecture eliminates ground loops and cross-channel interference, making the platform ideal for cryogenic transport measurements and quantum device control."
    ],
    advantages: [
      "Ultra-low noise operation",
      "Minimal temperature drift",
      "High long-term stability",
      "Independent isolated signal paths",
      "Precision voltage sweeps",
      "Simultaneous multi-channel updates"
    ]
  },

  keyFeatures: [
    { icon: "Shield", title: "Fully Isolated Outputs", desc: "Each channel provides a completely independent signal path for noise-free gate and bias control." },
    { icon: "Activity", title: "Precision Bipolar Outputs", desc: "Stable ±10 V bipolar outputs with stackable configurations up to ±40 V." },
    { icon: "Waves", title: "Ultra-Low Noise Architecture", desc: "Optimized analog circuitry minimizes electrical noise and preserves fragile quantum states." },
    { icon: "Target", title: "High Stability & Low Drift", desc: "Designed for long-duration experiments requiring stable voltage biasing and repeatable measurements." },
    { icon: "Cpu", title: "16-Bit DAC Resolution", desc: "High-resolution DAC architecture enables ultra-fine voltage steps and smooth voltage sweeps." },
    { icon: "Settings", title: "Automation & Software Integration", desc: "Native USB control with LabVIEW drivers and Python-compatible experimental automation workflows." }
  ],

  coreTechnologies: [
    {
      title: "Ultra-Low Noise Analog Design",
      subtitle: "Built for Sensitive Quantum Experiments",
      type: "hardware",
      description: "QuantumVolt™ uses a carefully optimized analog front-end specifically engineered for fragile low-current and low-temperature experiments where signal integrity is critical. This specialized architecture suppresses environmental interference to allow uncompromised tracking.",
      bullets: [
        "Independent isolated DAC channels",
        "Precision low-noise references",
        "High common-mode rejection",
        "Stable output architecture",
        "Low drift analog stages",
        "Optimized PCB grounding"
      ],
      highlights: [
        { label: "Voltage ripple minimization", val: "Active" },
        { label: "Thermal drift attenuation", val: "Stabilized" },
        { label: "Ground coupling barrier", val: "Isolated" },
        { label: "Crosstalk suppression", val: "100 dB" }
      ]
    },
    {
      title: "Seamless Experimental Integration",
      subtitle: "Software & System Interfaces",
      type: "software",
      description: "Ready out of the box for advanced automation frameworks. Enables high-speed multi-parameter sequencing directly within established laboratory system stacks.",
      bullets: [
        "USB-based host control with simultaneous channel updates",
        "Automated sweep generation and real-time voltage control",
        "Compatible with Cryostats & Dilution Refrigerators",
        "Integrates with Quantum Transport & Superconducting Systems",
        "Ready for Nanoelectronics & Cryogenic Probe Stations"
      ],
      platforms: ["LabVIEW", "Python", "MATLAB", "Custom DAQ Systems"]
    },
    {
      title: "Integrated Experimental Protection",
      subtitle: "Safety Engineering",
      type: "protection",
      description: "The platform incorporates multiple protection layers for safe, continuous operation inside sensitive multi-terminal systems.",
      bullets: [
        "±30 V overvoltage protection constraints",
        "Continuous short-circuit hardware isolation",
        "High channel-to-channel isolation architecture",
        "High impedance safe startup states",
        "Dielectric withstand voltage validation"
      ],
      protects: ["Quantum devices", "Sensitive samples", "Cryogenic wiring", "Experimental instrumentation"]
    }
  ],

  specifications: {
    "Output Parameters": [
      { param: "Channel Configurations", spec: "4 / 8 / 16" },
      { param: "Output Voltage Range", spec: "±10 V Bipolar" },
      { param: "Stackable Output", spec: "Up to ±40 V" },
      { param: "Output Connectors", spec: "BNC Sockets" },
      { param: "Output Current", spec: "±10 mA per channel typical" },
      { param: "Output Resistance", spec: "100 mΩ" }
    ],
    "Precision Electronics": [
      { param: "DAC Resolution", spec: "16 Bits" },
      { param: "Gain Error", spec: "0.01%" },
      { param: "Offset Error", spec: "0.1%" },
      { param: "Temperature Drift", spec: "6 ppm/°C, 80 µV/°C" },
      { param: "Channel Crosstalk", spec: "100 dB" },
      { param: "Common Mode Voltage", spec: "120 dB" }
    ],
    "Dynamic Performance": [
      { param: "Slew Rate", spec: "7 V/µs" },
      { param: "Noise", spec: "260 µVrms" },
      { param: "Full Scale Settling Time", spec: "20 µs" },
      { param: "3 V Step Response", spec: "10 µs" },
      { param: "0.1 V Step Response", spec: "8 µs" }
    ],
    "Safety & Hardware Interfaces": [
      { param: "Overvoltage Protection", spec: "±30 V" },
      { param: "Short Circuit Protection", spec: "Continuous" },
      { param: "Interface", spec: "USB 2.0" },
      { param: "Software Support", spec: "LabVIEW Drivers & Executable" },
      { param: "Channel Isolation", spec: "250 Vrms Continuous" },
      { param: "Dielectric Withstand", spec: "1390 Vrms" },
      { param: "Operating Temperature", spec: "+10°C to +40°C" },
      { param: "Weight", spec: "Approx. 0.5 kg" }
    ]
  },

  channelConfigs: [
    { name: "4-Channel QuantumVolt™", desc: "Compact low-noise voltage control platform for:", points: ["Small-scale quantum experiments", "Gate control", "Sensor characterization", "Single-device measurements"], color: "blue" },
    { name: "8-Channel QuantumVolt™", desc: "Expanded architecture for:", points: ["Multi-gate devices", "Spintronics experiments", "Cryogenic transport systems", "Complex device tuning"], color: "purple" },
    { name: "16-Channel QuantumVolt™", desc: "High-density precision bias control for:", points: ["Quantum computing systems", "Multi-terminal devices", "Large-scale experimental platforms", "Automated measurement infrastructure"], color: "emerald" }
  ],

  applications: [
    "Quantum transport experiments",
    "Superconducting qubits",
    "Graphene & 2D materials",
    "Spintronics research",
    "Cryogenic electronics",
    "Nanoelectronics characterization",
    "Quantum device tuning",
    "Low-temperature transport measurements",
    "Hall effect studies",
    "Precision gate control systems"
  ],

  gallery: [
    { url: "/images/Quantum Hardware/quantum-volt/image1.png", caption: "QuantumVolt Main Chassis Assembly" },
    { url: "/images/Quantum Hardware/quantum-volt/image2.png", caption: "Isolated Analog PCB Architecture" },
    { url: "/images/Quantum Hardware/quantum-volt/image3.jpeg", caption: "Multi-Channel Front Panel Connectors" }
  ],

  cta: {
    tagline: "Built for Quantum Precision. Engineered for Cryogenic Reliability."
  }
},
  
  // "breakout-box": {
  //   category: "Quantum Hardware",
  //   name: "CryoConnect™",
  //   subtitle: "Precision Breakout Interface",
  //   heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", 
  //   gallery: [
  //     "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop"
  //   ],
  //   overview: [
  //     "High-performance, fully shielded breakout solution engineered for low-temperature and quantum transport experiments.",
  //     "Designed to seamlessly extend your cryostat's Faraday cage while delivering clean, noise-free multi-channel measurements."
  //   ],
  //   features: [
  //     { icon: Layers, title: "24-Channel Architecture", description: "24 independent, shielded high-frequency channels. Integrated low-pass filters per channel." },
  //     { icon: Zap, title: "Superior Noise Immunity", description: "Twisted-pair wiring across all channels. Integrated filtering to block high-frequency noise." },
  //     { icon: Shield, title: "Fully Shielded Design", description: "Extends cryostat Faraday cage and suppresses external RF interference. Maintains high-fidelity signal paths." },
  //     { icon: GitMerge, title: "Integrated Switching", description: "Per-channel ground/common bus switching. Simplified ESD-sensitive measurement setup for safe, efficient device protection." },
  //   ],
  //   benefits: [
  //     { icon: Activity, title: "Enhanced Signal Integrity", description: "Fully shielded design and integrated filtering ensure high-quality data for sensitive low-temperature experiments." },
  //     { icon: Link, title: "Easy Integration", description: "Quick setup with common bus functionality, ideal for multi-terminal device testing." },
  //     { icon: Maximize, title: "High Flexibility", description: "Suitable for a wide range of applications in quantum computing, nanoelectronics, and other low-temperature research areas." },
  //     { icon: ShieldCheck, title: "Safe and Efficient", description: "Protects devices from ESD and noise interference, ensuring reliable and accurate measurements." }
  //   ],
  //   applications: [
  //     "Quantum Transport Measurements",
  //     "Nanoelectronics Research",
  //     "Cryogenic Electronics Testing",
  //     "ESD-Sensitive Device Characterization",
  //     "Low-Temperature Experimental Physics"
  //   ],
  //   specs: {
  //     "Channels": "24 independent, shielded",
  //     "Connectors": "BNC",
  //     "Filters": "Integrated low-pass (per channel)",
  //     "Noise Control": "Twisted-pair EMI suppression",
  //     "Voltage Isolation": "Channel-to-channel isolation",
  //     "Operating Temperature": "Down to 2 K",
  //     "Cable Length": "Up to 3 m (customizable)",
  //     "Design": "Compact, lightweight"
  //   },
  //   performanceData: {
  //     title: "Signal Attenuation Profile",
  //     description: "Exceptional frequency response with minimal insertion loss.",
  //     metrics: [
  //       { label: "DC (0 Hz)", value: 0.1, max: 5, unit: "dB" },
  //       { label: "10 MHz", value: 0.5, max: 5, unit: "dB" },
  //       { label: "100 MHz", value: 1.2, max: 5, unit: "dB" },
  //       { label: "500 MHz", value: 2.0, max: 5, unit: "dB" },
  //     ]
  //   }
  // },



  // src/data/products.ts record for "breakout-box"
"breakout-box": {
  category: "Quantum Hardware",
  name: "24-Channel Cryogenic Breakout Box",
  subtitle: "Low-noise cryogenic signal conditioning and breakout interface engineered for superconducting systems, cryostats, quantum measurements, and precision instrumentation.",
  statusBadge: "VACUUM RESEARCH OPTIMIZED",
  
  hero: {
    title: "24-Channel Cryogenic Breakout Box",
    subtitle: "Low-noise cryogenic signal conditioning and breakout interface engineered for superconducting systems, cryostats, quantum measurements, and precision instrumentation.",
    description: "The Cryo Nano Labs 24-Channel Cryogenic Breakout Box is a high-performance low-noise signal interface platform engineered for cryogenic measurements, vacuum instrumentation, superconducting experiments, and precision electrical characterization systems. Designed specifically for cryostat and low-temperature research environments, the breakout box provides reliable signal routing, grounding control, RF suppression, and modular filtering between high-density cryogenic connectors and laboratory instrumentation interfaces. The architecture combines precision cryogenic-compatible internal wiring, individually switchable grounding channels, modular signal conditioning, and EMI-shielded enclosure construction to ensure stable low-noise operation in electrically sensitive experimental setups."
  },

  quickSpecs: [
    { label: "Signal Channels", value: "24" },
    { label: "Grounds", value: "Switchable" },
    { label: "Filtering", value: "RF & PI" },
    { label: "Enclosure", value: "EMI Shielded" }
  ],

  overview: {
    title: "Precision Signal Conditioning Platform",
    paragraphs: [
      "The Cryo Nano Labs 24-Channel Breakout Box is designed to interface cryogenic systems and experimental setups with external laboratory electronics while preserving signal integrity under electrically sensitive conditions.",
      "Optimized for cryogenic and vacuum applications, the architecture minimizes electromagnetic interference, thermal noise coupling, and unwanted grounding artifacts in high-sensitivity measurements."
    ],
    advantages: [
      "Signal breakout and routing",
      "Low-noise measurements",
      "Ground loop management",
      "RF noise suppression",
      "Cryostat signal interfacing",
      "Modular filtering integration"
    ]
  },

  keyFeatures: [
    { icon: "Layers", title: "24 Independent Signal Channels", desc: "High-density multi-channel architecture supporting simultaneous low-noise measurement and control signals." },
    { icon: "Settings", title: "Individual Ground Switching", desc: "Each signal line includes independent grounding control using precision low-contact-resistance toggle switches." },
    { icon: "Waves", title: "RF & PI Filtering", desc: "Integrated custom low-pass and RF filter modules suppress high-frequency noise and improve measurement stability." },
    { icon: "Network", title: "Cryogenic-Compatible Wiring", desc: "Internal twisted-pair low-noise cryogenic wiring optimized for low thermal leakage and minimal EMI pickup." },
    { icon: "Shield", title: "EMI Shielded Enclosure", desc: "Precision aluminium instrument housing provides strong electromagnetic shielding for sensitive measurements." },
    { icon: "Cpu", title: "Modular Connector Architecture", desc: "Supports configurable cryogenic multipin interfaces including LEMO, Fischer, D-sub, and custom connector systems." }
  ],

  coreTechnologies: [
    {
      title: "Precision Low-Noise Signal Routing",
      subtitle: "SIGNAL CONDITIONING",
      type: "hardware",
      description: "The breakout box integrates modular signal conditioning circuitry engineered for cryogenic and electrically sensitive experiments. The architecture minimizes electromagnetic interference, ground loops, high-frequency pickup, and crosstalk between channels.",
      bullets: [
        "PI-section filtering",
        "RF suppression",
        "Low-pass filtering",
        "Ground isolation",
        "Noise reduction",
        "Low-contact-resistance switching"
      ],
      highlights: [
        { label: "EMI Minimization", val: "Active" },
        { label: "Ground Loops", val: "Eliminated" },
        { label: "Crosstalk", val: "Suppressed" },
        { label: "Contact Resistance", val: "Low" }
      ]
    },
    {
      title: "Cryogenic-Compatible Low-Noise Wiring Harness",
      subtitle: "INTERNAL WIRING",
      type: "hardware",
      description: "The internal wiring system uses screened twisted-pair cryogenic-compatible cables optimized for low-noise operation. Ideal for low-level voltage measurements, sensor readout, cryogenic transport experiments, and quantum device characterization.",
      bullets: [
        "Twisted pair decoupling",
        "Electromagnetic shielding",
        "Low conductor resistance",
        "High insulation resistance",
        "Vacuum-compatible insulation systems",
        "Reduced thermal leakage"
      ],
      highlights: [
        { label: "Insulation Res.", val: "> 20 GΩ·cm" },
        { label: "Conductor Res.", val: "< 70 mΩ/m" },
        { label: "Thermal Leakage", val: "Reduced" },
        { label: "Shielding", val: "Screened" }
      ]
    },
    {
      title: "High-Reliability Scientific Connector Architecture",
      subtitle: "CONNECTOR SYSTEM",
      type: "software", // Using 'software' variant to render as a list of compatible interfaces beautifully
      description: "The breakout box supports precision laboratory connector systems for secure and repeatable signal interfacing. Ensures laboratory-grade durability, low contact resistance, and secure push-pull locking mechanisms.",
      bullets: [
        "Gold-plated contacts",
        "Push-pull locking systems",
        "Low contact resistance",
        "High mechanical reliability",
        "Laboratory-grade durability"
      ],
      platforms: ["LEMO multipin connectors", "BNC RF connectors", "Fischer connectors", "D-sub interfaces", "Custom vacuum feedthrough systems"]
    },
    {
      title: "Modular RF & Low-Pass Filtering",
      subtitle: "FILTERING ARCHITECTURE",
      type: "protection",
      description: "Integrated filtering modules are designed specifically for cryogenic and quantum research applications. Applications include quantum transport, lock-in measurements, sensor characterization, superconducting device testing, and noise-sensitive instrumentation.",
      bullets: [
        "PI-section topology",
        "Surface-mount cryogenic-rated components",
        "RF suppression",
        "Low-frequency stability",
        "Modular PCB architecture"
      ],
      protects: ["Quantum transport", "Lock-in measurements", "Sensor characterization", "Superconducting testing", "Noise-sensitive instrumentation"]
    },
    {
      title: "Precision EMI Shielded Instrument Housing",
      subtitle: "ENCLOSURE & SHIELDING",
      type: "hardware",
      description: "The breakout box enclosure is constructed using heavy-gauge aluminium instrument housing for maximum shielding effectiveness.",
      bullets: [
        "12-gauge aluminium construction",
        "EMI shielding",
        "Modular removable panels",
        "Laboratory-grade durability",
        "Compact benchtop integration",
        "Cryogenic laboratory compatibility"
      ],
      highlights: [
        { label: "Material", val: "12-Gauge Alu" },
        { label: "Shielding", val: "EMI Grade" },
        { label: "Panels", val: "Removable" },
        { label: "Integration", val: "Benchtop" }
      ]
    }
  ],

  specifications: {
    "General Architecture": [
      { param: "Number of Channels", spec: "24" },
      { param: "Signal Interface Type", spec: "Cryogenic Measurement Breakout" },
      { param: "Ground Switching", spec: "Individual Channel Ground Toggle" }
    ],
    "Electrical & Filtering": [
      { param: "Filter Architecture", spec: "PI-section Low-Pass / RF Filters" },
      { param: "Insulation Resistance", spec: "> 20 GΩ·cm" },
      { param: "Conductor Resistance", spec: "< 70 mΩ/m" },
      { param: "Filter Integration", spec: "Modular Internal PCB Filters" },
      { param: "Signal Types Supported", spec: "DC / Sensor / RF / Low-Level Signals" }
    ],
    "Connectors & Wiring": [
      { param: "Connector Types", spec: "LEMO / BNC / Custom" },
      { param: "BNC Connectors", spec: "50 Ω Panel-Mount RF BNC" },
      { param: "Internal Wiring", spec: "Low-Noise Twisted Pair Cryogenic Wiring" },
      { param: "Cable Shielding", spec: "Screened Twisted Pair" }
    ],
    "Mechanical & Environmental": [
      { param: "Enclosure Material", spec: "12-Gauge Aluminium" },
      { param: "EMI Shielding", spec: "Integrated Instrument Shielding" },
      { param: "Access Panels", spec: "Removable Service Panels" },
      { param: "Vacuum Compatibility", spec: "Cryogenic / Vacuum Lab Compatible" },
      { param: "Experimental Compatibility", spec: "Cryostats / Quantum Systems / Transport Measurements" }
    ]
  },

  applications: [
    "Cryogenic transport measurements",
    "Superconducting systems",
    "Quantum materials research",
    "Low-noise sensor characterization",
    "Lock-in amplifier measurements",
    "Semiconductor cryogenic testing",
    "Vacuum instrumentation",
    "Cryostat signal interfacing",
    "National laboratory research",
    "Advanced materials characterization"
  ],

  configurations: [
    "Differential signal routing",
    "Triaxial connectors",
    "High-voltage isolation",
    "RF coaxial feedthroughs",
    "Low-temperature RC filtering",
    "Multi-stage filtering",
    "Fiber optic isolation",
    "Rack-mount chassis",
    "Custom grounding architecture",
    "Remote switching integration"
  ],

  gallery: [
    { url: "/images/Quantum Hardware/breakout-box/image1.png", caption: "EMI Shielded Enclosure Setup" },
    { url: "/images/Quantum Hardware/breakout-box/image2.png", caption: "24-Channel Breakout Interface" },
    { url: "/images/Quantum Hardware/breakout-box/image3.png", caption: "Modular Internal Filtering PCB" }
  ],

  cta: {
    tagline: "Precision Low-Noise Signal Conditioning Interface for Cryogenic & Quantum Research"
  }
},

  // "cryo-clean": {
  //   category: "Quantum Hardware",
  //   name: "CryoClean™",
  //   subtitle: "Cryogenic RF Low-Pass Filters",
  //   heroImage: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop", 
  //   gallery: [
  //     "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop"
  //   ],
  //   overview: [
  //     "CryoClean™ RF low-pass filters are engineered to suppress high-frequency noise on cryogenic measurement lines while preserving low-frequency signal fidelity.",
  //     "Designed for quantum transport and quantum computing environments, CryoClean™ protects sensitive devices from RF interference and electrostatic disturbances at millikelvin temperatures."
  //   ],
  //   features: [
  //     { icon: Waves, title: "Broadband Noise Suppression", description: "High attenuation of RF and microwave noise prevents unwanted coupling into sensitive cryogenic devices." },
  //     { icon: ThermometerSnowflake, title: "Cryogenic-Stable Performance", description: "Filtering characteristics remain stable through repeated thermal cycling down to 2K." },
  //     { icon: ArrowDownToLine, title: "High Out-of-Band Attenuation", description: "Greater than 80 dB attenuation above cutoff frequency ensures strong suppression of environmental noise." },
  //     { icon: Minimize2, title: "Low Insertion Loss", description: "Preserves signal amplitude and measurement accuracy for low-frequency quantum transport signals." },
  //     { icon: Box, title: "Compact Integration", description: "Small form factor enables installation directly within cryostat wiring stacks and probe assemblies." },
  //   ],
  //   benefits: [
  //     { icon: Activity, title: "Improves Coherence", description: "Improves coherence and stability of quantum and nanoelectronic devices." },
  //     { icon: Shield, title: "Suppresses RF Pickup", description: "Suppresses RF pickup from room-temperature instrumentation." },
  //     { icon: ShieldCheck, title: "Protects Qubits", description: "Protects qubits and devices from ESD-related disturbances." },
  //     { icon: Zap, title: "Enhances Repeatability", description: "Enhances repeatability of highly sensitive low-temperature measurements." }
  //   ],
  //   applications: [
  //     "Noise Suppression in Cryogenic Lines",
  //     "Quantum Computing Coherence Stabilization",
  //     "Low-Temperature Experimental Physics",
  //     "ESD-Sensitive Device Characterization"
  //   ],
  //   specs: {
  //     "Channels": "24 independent, shielded",
  //     "Filter Architecture": "Multi-stage RC + LC",
  //     "RC Filter Range": "~65 kHz - GHz noise suppression",
  //     "LC Filter Range": "~225 MHz - THz attenuation",
  //     "Cryostat Stage": "4 K / 1 K / Mixing chamber compatible",
  //     "Connector Type": "Micro-D / cryogenic feedthrough",
  //     "Crosstalk": "< -80 dB"
  //   },
  //   integration: [
  //     { step: "1", title: "Wiring Stacks", description: "Initial line filtering from room temp." },
  //     { step: "2", title: "Probe Assemblies", description: "Intermediate stage noise rejection." },
  //     { step: "3", title: "Cryostat Feedthroughs", description: "Final stage ultra-clean signal delivery." }
  //   ]
  // },



  // src/data/products.ts record for "cryo-clean"
"cryo-clean": {
  category: "Quantum Hardware",
  name: "Cryogenic RF Low-Pass Filters",
  subtitle: "Ultra-Low Noise Filtering for Quantum & Cryogenic Measurement Systems",
  statusBadge: "ULTRA-LOW NOISE",
  
  hero: {
    title: "Cryogenic RF Low-Pass Filters",
    subtitle: "Ultra-Low Noise Filtering for Quantum & Cryogenic Measurement Systems",
    description: "Modern quantum devices, superconducting circuits, and ultra-low-temperature experiments are extremely sensitive to electromagnetic interference. Even small amounts of RF and microwave noise can elevate electron temperatures, degrade qubit coherence, and compromise measurement accuracy. CryoNano's Cryogenic RF Low-Pass Filters are specifically engineered to suppress unwanted high-frequency noise while preserving the integrity of low-frequency and DC measurement signals. Designed for operation down to approximately 2 K and beyond, these filters provide stable, repeatable performance throughout repeated thermal cycling and demanding cryogenic experiments."
  },

  quickSpecs: [
    { label: "Out-of-Band Attenuation", value: ">80 dB" },
    { label: "Operating Temp", value: "Down to ~2 K" },
    { label: "Insertion Loss", value: "Minimal" },
    { label: "Performance", value: "Cryo-Stable" }
  ],

  overview: {
    title: "Eliminate RF Noise. Protect Sensitive Devices.",
    paragraphs: [
      "In cryogenic and quantum measurement systems, signal lines often act as antennas, carrying unwanted RF energy from room-temperature electronics into the cold environment.",
      "Without proper filtering, this noise can lead to increased effective electron temperature, reduced qubit coherence times, measurement instability, spurious signals, and device performance degradation.",
      "CryoNano RF Low-Pass Filters provide a critical first line of defense, attenuating unwanted high-frequency signals before they reach sensitive devices and experimental structures."
    ],
    advantages: [
      "Cleaner Signals",
      "Lower Effective Electron Temp",
      "Improved Measurement Accuracy",
      "Better Device Protection",
      "Increased Experimental Repeatability"
    ]
  },

  keyFeatures: [
    { icon: "Waves", title: "High Out-of-Band Attenuation", desc: "Provides greater than 80 dB attenuation above the selected cutoff frequency, effectively suppressing RF and microwave interference from external sources." },
    { icon: "Activity", title: "Low Insertion Loss", desc: "Maintains low-frequency signal integrity with minimal attenuation and distortion, ensuring accurate transport, I-V, and resistance measurements." },
    { icon: "Shield", title: "Cryogenic Stability", desc: "Engineered for reliable operation down to approximately 2 K while maintaining consistent electrical performance across repeated thermal cycles." },
    { icon: "Target", title: "Broadband Noise Suppression", desc: "Reduces RF and microwave noise across a broad frequency spectrum, improving measurement accuracy and experimental repeatability." },
    { icon: "Layers", title: "Compact Integration", desc: "Small form factor enables easy integration within cryostat wiring stacks, probe stations, inserts, dilution refrigerators, and custom cryogenic platforms." },
    { icon: "Settings", title: "Custom Cutoff Configurations", desc: "Available with application-specific cutoff frequencies and customized filter profiles optimized for unique experimental requirements." }
  ],

  coreTechnologies: [
    {
      title: "Absolute RF Suppression Architecture",
      subtitle: "SIGNAL FILTERING",
      type: "hardware",
      description: "Our Cryogenic RF Low-Pass Filters utilize precision multi-stage architectures to deliver extreme out-of-band attenuation. By aggressively filtering frequencies that disrupt delicate quantum states, the filters guarantee a pristine signal environment.",
      bullets: [
        "Greater than 80 dB attenuation above cutoff",
        "Eliminates high-frequency noise from room-temp electronics",
        "Preserves integrity of DC and low-frequency signals",
        "Prevents unwanted thermalization of electrons"
      ],
      highlights: [
        { label: "Attenuation", val: ">80 dB" },
        { label: "Insertion Loss", val: "Minimal" },
        { label: "Signal Type", val: "DC & Low-Freq" },
        { label: "Electron Temp", val: "Stabilized" }
      ]
    },
    {
      title: "Seamless System Integration",
      subtitle: "LABORATORY COMPATIBILITY",
      type: "software", // Rendering as an interface list 
      description: "CryoNano RF Low-Pass Filters are designed to integrate directly with complete low-noise measurement chains, bridging the gap from room-temperature instrumentation to the quantum device under test.",
      bullets: [
        "Compact inline module form factor",
        "Direct installation in wiring stacks",
        "Integrates into probe stations and inserts",
        "Compatible with custom cryostat wiring"
      ],
      platforms: [
        "Cryogenic Breakout Boxes",
        "Variable Temperature Inserts (VTI)",
        "Dilution Refrigerators",
        "Quantum Measurement Platforms",
        "Cryogenic Probe Stations"
      ]
    }
  ],

  specifications: {
    "Filter Performance": [
      { param: "Filter Type", spec: "RF Low-Pass" },
      { param: "Frequency Range", spec: "Application-Specific, Customizable" },
      { param: "Out-of-Band Attenuation", spec: ">80 dB" },
      { param: "Insertion Loss", spec: "Low, Optimized for Signal Fidelity" },
      { param: "Signal Compatibility", spec: "DC and Low-Frequency Measurement Lines" }
    ],
    "Environmental Stability": [
      { param: "Operating Temperature", spec: "Down to ~2 K" },
      { param: "Thermal Stability", spec: "Stable Through Repeated Thermal Cycling" },
      { param: "Performance Drift", spec: "Minimal Across Temperature Range" }
    ],
    "Mechanical Integration": [
      { param: "Form Factor", spec: "Compact Inline Module" },
      { param: "Construction", spec: "Cryogenic-Compatible Materials" },
      { param: "Installation", spec: "Wiring Stack / Inline Integration" },
      { param: "Integration", spec: "Probe Stations, Cryostats, Custom Systems" }
    ]
  },

  applications: [
    "Quantum Computing Systems",
    "Quantum Transport Measurements",
    "Cryogenic Electronics Testing",
    "Nanoelectronics Research",
    "Cryogenic Signal Conditioning"
  ],

  gallery: [
    { url: "/images/Quantum Hardware/cryo-clean/image1.png", caption: "RF Low-Pass Filter Inline Module" },
    { url: "/images/Quantum Hardware/cryo-clean/image2.png", caption: "Cryogenic Wiring Integration" },
    { url: "/images/Quantum Hardware/cryo-clean/image3.png", caption: "Filter PCB Assembly" }
  ],

  cta: {
    tagline: "Preserve Signal Integrity. Eliminate RF Noise. Unlock Better Measurements."
  }
},

  // "nano-stage": {
  //   category: "Cryogenics",
  //   name: "Cryogenic NanoStage",
  //   subtitle: "Vitrified Cryogenic Microscopy",
  //   heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", 
  //   gallery: [
  //     "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  //   ],
  //   overview: [
  //     "A liquid-nitrogen-cooled nano-positioning platform engineered for Cryo-CLEM, cryo-fluorescence, and super-resolution imaging workflows.",
  //     "Designed to maintain vitrification integrity while enabling nanometer-scale precision mapping."
  //   ],
  //   features: [
  //     { icon: ThermometerSnowflake, title: "Thermal Control", description: "Continuous liquid nitrogen cooling operating below -195°C. Frost-controlled sealed chamber with devitrification prevention." },
  //     { icon: Crosshair, title: "Nano Positioning", description: "Motorised encoded XY nano-positioning with high-resolution coordinate tracking for absolute accuracy." },
  //     { icon: Grid, title: "Automated Grid Mapping", description: "Automated EM grid mapping for accurate multi-platform relocation." },
  //     { icon: MonitorPlay, title: "Workflow Automation", description: "Fully software-integrated workflow automation to streamline imaging tasks." },
  //   ],
  //   benefits: [
  //     { icon: Shield, title: "Vitrification Protection", description: "Maintains absolute sample integrity during extended cryogenic observation sessions." },
  //     { icon: Move, title: "Nano-Scale Motion", description: "Ultra-smooth, drift-free motorized movement ensuring perfect super-resolution imaging." },
  //     { icon: Layers, title: "Multi-Grid Cassette", description: "Efficiently load and navigate multiple EM grids without breaking the cryogenic seal." },
  //     { icon: MonitorPlay, title: "Cross-Platform Imaging", description: "Seamless coordinate transfer between fluorescence and electron microscopes." }
  //   ],
  //   applications: [
  //     "Cryo-CLEM Workflows",
  //     "Cryo-Fluorescence Microscopy",
  //     "Super-Resolution Imaging",
  //     "Vitrified Biological Sample Analysis",
  //     "Correlative Coordinate Mapping"
  //   ],
  //   specs: {
  //     "Operating Temperature": "Below -195°C (Liquid Nitrogen)",
  //     "Positioning Type": "Motorised Encoded XY",
  //     "Environment": "Frost-controlled sealed chamber",
  //     "Sample Protection": "Integrated Devitrification Prevention",
  //     "Software Interface": "Full automation suite included",
  //     "Relocation Accuracy": "Sub-micron multi-platform tracking",
  //     "Grid Compatibility": "Standard EM Multi-Grid Cassettes"
  //   }
  // },


//   "nano-stage": {
//   category: "Cryogenics",
//   name: "Cryogenic NanoStage",
//   subtitle: "Precision Thermal Control for Advanced Scientific Imaging",
//   heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
//   gallery: [
//     "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
//   ],
//   overview: [
//     "The Cryogenic / High-Temperature Microscopy Stage is a next-generation thermal platform engineered for demanding microscopy, spectroscopy, and materials characterization applications. Designed for operation from cryogenic temperatures below −195°C to elevated temperatures, the system delivers exceptional thermal stability, optical accessibility, and environmental control for cutting-edge scientific research.",
//     "Optimized for vacuum and controlled atmosphere environments, the stage supports advanced imaging techniques including confocal microscopy, Raman spectroscopy, fluorescence microscopy, and X-ray characterization."
//   ],
//   keyFeatures: [
//     { title: "Ultra-Wide Temperature Range", desc: "Stable operation from cryogenic temperatures below liquid nitrogen temperatures up to elevated thermal conditions.", icon: "ThermometerSnowflake" },
//     { title: "Exceptional Thermal Stability", desc: "Sub-0.01°C temperature stability for precision scientific experiments and repeatable measurements.", icon: "Activity" },
//     { title: "Direct Cryogenic Cooling", desc: "Direct coolant injection into the OFHC copper thermal block enables rapid cooldown, reduced thermal gradients, uniform sample temperature, and improved cryogenic efficiency.", icon: "Zap" },
//     { title: "Vacuum & Controlled Atmosphere Capability", desc: "Supports high vacuum operation, inert gas purging, moisture‑sensitive experiments, and oxygen‑free thermal cycling.", icon: "Shield" },
//     { title: "Precision Optical Access", desc: "Ultra‑thin optical window optimized for high numerical aperture objectives, Raman spectroscopy, confocal imaging, and reduced optical distortion.", icon: "Camera" },
//     { title: "Low Thermal Drift Design", desc: "Mechanical architecture optimized for minimal vibration, low expansion, stable optical alignment, and high positional stability.", icon: "Move" }
//   ],
//   technicalSpecs: [
//     { param: "Temperature Range", spec: "Below −195°C to elevated temperatures" },
//     { param: "Temperature Stability", spec: "Better than 0.01°C" },
//     { param: "Thermal Block Material", spec: "Gold-plated OFHC Copper" },
//     { param: "Temperature Sensor", spec: "1000 Ω Platinum RTD" },
//     { param: "Cooling Method", spec: "Direct cryogenic coolant injection" },
//     { param: "Optical Window", spec: "0.5 mm ultra-thin lid window" },
//     { param: "Optical Aperture", spec: "20 mm" },
//     { param: "Objective Working Distance", spec: "Minimum 5 mm" },
//     { param: "Atmosphere Modes", spec: "Vacuum / Inert Gas / Controlled Atmosphere" },
//     { param: "High Temperature Cooling", spec: "External water-cooled body" },
//     { param: "Compatible Techniques", spec: "Raman, Confocal, Fluorescence, X-ray" }
//   ],
//   thermalArchitecture: {
//     title: "Advanced Cryogenic Thermal Architecture",
//     description: "The system incorporates a high-conductivity gold-plated OFHC copper thermal block with direct coolant injection for maximum thermal efficiency and uniformity.",
//     advantages: [
//       "Fast thermal response",
//       "High thermal conductivity",
//       "Reduced localized heating",
//       "Improved thermal homogeneity",
//       "Enhanced cryogenic performance",
//       "Stable long-duration operation"
//     ],
//     conclusion: "The architecture minimizes temperature gradients across the sample area, making it ideal for precision spectroscopy and low-temperature imaging."
//   },
//   atmosphereVacuumControl: {
//     title: "Atmosphere & Vacuum Control",
//     description: "The chamber is designed for advanced environmental control and supports:",
//     features: [
//       "Vacuum microscopy experiments",
//       "Controlled gas environments",
//       "Inert gas purging",
//       "Moisture-sensitive sample handling",
//       "Oxygen-free processing"
//     ],
//     note: "Quick-release gas valves allow rapid integration with laboratory gas systems and simplified atmosphere switching."
//   },
//   opticalDesign: {
//     title: "Optical Design",
//     subtitle: "Ultra-Thin Optical Window",
//     description: "The 0.5 mm lid window minimizes:",
//     benefits: [
//       "Spherical aberration",
//       "Optical path distortion",
//       "Raman signal attenuation",
//       "Working distance losses"
//     ],
//     conclusion: "The design is optimized for high-NA objective lenses and advanced spectroscopy systems requiring short working distances."
//   },
//   precisionTemperatureSensing: {
//     title: "Precision Temperature Sensing",
//     subtitle: "Integrated Platinum RTD",
//     description: "A precision 1000 Ω platinum resistor sensor provides:",
//     features: [
//       "High accuracy temperature monitoring",
//       "Excellent long-term stability",
//       "Fast thermal response",
//       "Low-noise feedback"
//     ],
//     conclusion: "Suitable for advanced closed-loop PID thermal control systems."
//   },
//   microscopyCompatibility: [
//     "Optical Microscopy",
//     "Fluorescence Microscopy",
//     "Confocal Microscopy",
//     "Raman Spectroscopy",
//     "X-ray Analysis",
//     "Cryogenic Imaging",
//     "Materials Characterization Platforms"
//   ],
//   highTempOperation: {
//     title: "High-Temperature Operation",
//     description: "For operation above 250°C in vacuum environments, the stage body supports external water cooling to:",
//     benefits: [
//       "Protect surrounding optics",
//       "Reduce external thermal loading",
//       "Improve thermal regulation",
//       "Maintain structural integrity"
//     ]
//   },
//   applications: [
//     "Cryogenic materials analysis",
//     "Semiconductor characterization",
//     "Superconducting material studies",
//     "Quantum materials imaging",
//     "In-situ thermal microscopy",
//     "Low-temperature Raman spectroscopy",
//     "Failure analysis",
//     "Biological cryogenic imaging",
//     "Vacuum microscopy experiments"
//   ],
//   mechanicalDesignHighlights: [
//     "Gold-plated OFHC thermal mass",
//     "Vacuum-compatible construction",
//     "Precision optical alignment",
//     "Compact microscope footprint",
//     "Low thermal expansion structure",
//     "Low vibration thermal interface"
//   ],
//   optionalConfigurations: [
//     "Automated gas switching manifold",
//     "Vacuum gauge integration",
//     "Additional optical ports",
//     "Custom sample holders",
//     "LN₂ or LHe cooling configurations",
//     "High-temperature furnace integration"
//   ],
//   systemCompatibility: [
//     "Upright microscopes",
//     "Inverted microscopes",
//     "Raman systems",
//     "Confocal imaging platforms",
//     "X-ray instrumentation",
//     "Custom optical benches"
//   ]
// },



"DAC-system": {
  category: "Quantum Hardware",
  name: "DACsys™ Cryogenic Data Acquisition System",
  subtitle: "Modular high-resolution DAQ and control platform for cryogenic experiments, superconducting systems, and precision quantum measurements.",
  statusBadge: "DATA ACQUISITION",
  
  hero: {
    title: "DACsys™ Cryogenic Data Acquisition System",
    subtitle: "Modular high-resolution DAQ and control platform for cryogenic experiments, superconducting systems, and precision quantum measurements.",
    description: "DACsys™ is engineered to serve as the central monitoring and control platform for advanced cryogenic and quantum experiments. Designed specifically for low-temperature environments, DACsys™ combines high-stability analog electronics with modular acquisition architecture to preserve signal fidelity in ultra-sensitive experiments. The system enables continuous experimental monitoring, real-time data acquisition, long-duration logging, automated measurement workflows, multi-parameter synchronization, and scalable laboratory integration."
  },

  quickSpecs: [
    { label: "Logging", value: "Multi-Channel" },
    { label: "Front-End", value: "Low-Noise" },
    { label: "Architecture", value: "Expandable" },
    { label: "Integration", value: "Multi-Platform" }
  ],

  overview: {
    title: "Precision Measurement Infrastructure for Quantum Research",
    paragraphs: [
      "DACsys™ provides the critical measurement infrastructure required to bridge the gap between sensitive cryogenic devices and modern experimental control software.",
      "The architecture is built for users who demand long-duration data integrity and high-resolution synchronization across diverse measurement parameters like voltage, current, resistance, and temperature."
    ],
    advantages: [
      "Continuous experimental monitoring",
      "Real-time data acquisition",
      "Long-duration logging",
      "Automated measurement workflows",
      "Multi-parameter synchronization",
      "Scalable laboratory integration"
    ]
  },

  keyFeatures: [
    { icon: "Layers", title: "Multi-Channel High-Resolution Logging", desc: "Simultaneous acquisition of voltage, current, resistance, and temperature across multiple channels." },
    { icon: "Activity", title: "Continuous Real-Time Monitoring", desc: "Designed for uninterrupted operation during long-duration cryogenic and quantum experiments." },
    { icon: "Cpu", title: "Low-Noise Analog Front-End", desc: "Precision analog circuitry preserves low-current and low-voltage signal integrity." },
    { icon: "Settings", title: "Modular & Scalable Architecture", desc: "Expandable hardware platform supports growing experimental complexity and additional acquisition modules." },
    { icon: "Zap", title: "Real-Time Data Export", desc: "Direct integration with LabVIEW, Python, and MATLAB for automated experimental workflows." },
    { icon: "Target", title: "Flexible Sampling Control", desc: "Configurable acquisition rates and logging parameters optimized for different measurement environments." }
  ],

  coreTechnologies: [
    {
      id: "analog",
      title: "Engineered for Signal Integrity",
      subtitle: "LOW-NOISE MEASUREMENT",
      type: "hardware",
      icon: "Cpu",
      sideCaption: "PRECISION ANALOG FRONT-END",
      description: "DACsys™ uses a precision low-noise analog architecture optimized for electrically sensitive cryogenic environments to ensure data reliability.",
      bullets: [
        "High-stability analog front-end",
        "Low thermal drift electronics",
        "Low-noise acquisition paths",
        "Precision reference architecture",
        "EMI-aware PCB design"
      ],
      highlights: [
        { label: "Current sensitivity", val: "Nanoamp" },
        { label: "Signal Path", val: "Low-Noise" },
        { label: "Calibration", val: "High-Stability" },
        { label: "Architecture", val: "Precision" }
      ]
    },
    {
      id: "architecture",
      title: "Scalable Experimental Infrastructure",
      subtitle: "MODULAR SYSTEM ARCHITECTURE",
      type: "hardware",
      icon: "Layers",
      sideCaption: "EXPANDABLE PLATFORM",
      description: "DACsys™ is built using a modular architecture that enables flexible laboratory deployment, growing with your experiment's complexity.",
      bullets: [
        "Expandable acquisition channels",
        "Additional measurement modules",
        "Integrated control systems",
        "Custom sensor interfaces",
        "Automated experiment scaling"
      ],
      highlights: [
        { label: "Expandability", val: "High" },
        { label: "Scaling", val: "Multi-System" },
        { label: "Automation", val: "Integrated" },
        { label: "Sync", val: "Multi-channel" }
      ]
    },
    {
      id: "automation",
      title: "Integrated Experimental Automation",
      subtitle: "REAL-TIME CONTROL",
      type: "software",
      icon: "Code",
      sideCaption: "SCRIPTABLE WORKFLOWS",
      description: "DACsys™ directly integrates with automated cryogenic and quantum measurement workflows to ensure seamless data pipelines.",
      bullets: [
        "Real-time live monitoring",
        "Automated data capture",
        "Remote system control",
        "Scriptable measurement routines",
        "Experimental synchronization"
      ],
      platforms: ["LabVIEW Integration", "Python Libraries", "MATLAB Toolboxes", "Ethernet-based Systems"]
    }
  ],

  specifications: {
    "Measurement Capabilities": [
      { param: "System Type", spec: "Modular Cryogenic DAQ Platform" },
      { param: "Measurement Channels", spec: "Configurable Multi-Channel" },
      { param: "Parameters Logged", spec: "Voltage / Current / Resistance / Temp" },
      { param: "Data Acquisition", spec: "Continuous Real-Time Logging" }
    ],
    "Interface & Control": [
      { param: "Software Integration", spec: "LabVIEW / Python / MATLAB" },
      { param: "Communication", spec: "USB / Ethernet / LAN" },
      { param: "Sampling Configuration", spec: "User Configurable" },
      { param: "Operating Mode", spec: "Continuous Long-Duration" }
    ],
    "Architecture": [
      { param: "Architecture", spec: "Modular & Expandable" },
      { param: "Experimental Compatibility", spec: "Cryogenic & Quantum Systems" },
      { param: "Data Export", spec: "Real-Time Monitoring & Logging" }
    ]
  },

  applications: [
    "Quantum transport experiments",
    "Superconducting device research",
    "Cryogenic materials characterization",
    "Low-temperature electronics testing",
    "Quantum computing infrastructure",
    "Long-duration experimental logging",
    "Sensor calibration systems",
    "Automated cryogenic laboratories",
    "Nanoelectronics research",
    "Multi-parameter experimental monitoring"
  ],

  configurations: [
    "Rack-mount chassis",
    "High-speed acquisition modules",
    "Additional analog channels",
    "Precision temperature logging",
    "Ethernet synchronization",
    "Remote monitoring dashboards",
    "Custom sensor interfaces",
    "Integrated switching modules",
    "Fiber-isolated communication",
    "Experimental automation packages"
  ],

  gallery: [
    { url: "/images/Quantum Hardware/DAC-system/image1.jpeg", caption: "DACsys Acquisition Interface" },
    { url: "/images/Quantum Hardware/DAC-system/image2.jpeg", caption: "Multi-Channel Logic Module" },
    { url: "/images/Quantum Hardware/DAC-system/image3.jpeg", caption: "Cryogenic Measurement Setup" }
  ],

  cta: {
    tagline: "Precision Measurement Infrastructure for Quantum Research."
  }
},



// src/data/products.ts record for "nano-stage"
"nano-stage": {
  category: "Cryogenics",
  name: "Cryogenic NanoStage",
  subtitle: "Precision Thermal Control for Advanced Scientific Imaging",
  statusBadge: "THERMAL PLATFORM",
  
  hero: {
    title: "Cryogenic NanoStage",
    subtitle: "Precision Thermal Control for Advanced Scientific Imaging",
    description: "The Cryogenic / High-Temperature Microscopy Stage is a next-generation thermal platform engineered for demanding microscopy, spectroscopy, and materials characterization applications. Designed for operation from cryogenic temperatures below −195°C to elevated temperatures, the system delivers exceptional thermal stability, optical accessibility, and environmental control for cutting-edge scientific research."
  },

  quickSpecs: [
    { label: "Temperature Range", value: "< −195°C" },
    { label: "Thermal Stability", value: "0.01°C" },
    { label: "Cooling Method", value: "Direct LN2" },
    { label: "Optical Window", value: "0.5 mm" }
  ],

  overview: {
    title: "Optimized for Advanced Imaging Environments",
    paragraphs: [
      "Optimized for vacuum and controlled atmosphere environments, the stage supports advanced imaging techniques including confocal microscopy, Raman spectroscopy, fluorescence microscopy, and X-ray characterization."
    ],
    advantages: [
      "Vacuum & Inert Gas Purging",
      "Moisture-sensitive experiments",
      "Oxygen-free thermal cycling",
      "Reduced optical distortion",
      "Stable optical alignment"
    ]
  },

  keyFeatures: [
    { icon: "ThermometerSnowflake", title: "Ultra-Wide Temperature Range", desc: "Stable operation from cryogenic temperatures below liquid nitrogen temperatures up to elevated thermal conditions." },
    { icon: "Activity", title: "Exceptional Thermal Stability", desc: "Sub-0.01°C temperature stability for precision scientific experiments and repeatable measurements." },
    { icon: "Zap", title: "Direct Cryogenic Cooling", desc: "Direct coolant injection into the OFHC copper thermal block enables rapid cooldown, reduced thermal gradients, and uniform sample temperature." },
    { icon: "Shield", title: "Vacuum & Controlled Atmosphere", desc: "Supports high vacuum operation, inert gas purging, moisture-sensitive experiments, and oxygen-free thermal cycling." },
    { icon: "Camera", title: "Precision Optical Access", desc: "Ultra-thin optical window optimized for high numerical aperture objectives, Raman spectroscopy, confocal imaging, and reduced optical distortion." },
    { icon: "Move", title: "Low Thermal Drift Design", desc: "Mechanical architecture optimized for minimal vibration, low expansion, stable optical alignment, and high positional stability." }
  ],

  coreTechnologies: [
    {
      title: "Advanced Cryogenic Thermal Architecture",
      subtitle: "THERMAL ENGINEERING",
      type: "hardware",
      description: "The system incorporates a high-conductivity gold-plated OFHC copper thermal block with direct coolant injection for maximum thermal efficiency and uniformity. The architecture minimizes temperature gradients across the sample area, making it ideal for precision spectroscopy and low-temperature imaging.",
      bullets: [
        "Fast thermal response & high thermal conductivity",
        "Reduced localized heating",
        "Improved thermal homogeneity",
        "Stable long-duration operation"
      ],
      highlights: [
        { label: "Thermal Block", val: "OFHC Copper" },
        { label: "Plating", val: "Gold-Plated" },
        { label: "Temp Gradients", val: "Minimized" },
        { label: "Response Time", val: "Rapid" }
      ]
    },
    {
      title: "Atmosphere & Vacuum Control",
      subtitle: "ENVIRONMENTAL CONTROL",
      type: "protection",
      description: "The chamber is designed for advanced environmental control. Quick-release gas valves allow rapid integration with laboratory gas systems and simplified atmosphere switching.",
      bullets: [
        "Vacuum microscopy experiments",
        "Controlled gas environments",
        "Inert gas purging",
        "Moisture-sensitive sample handling",
        "Oxygen-free processing"
      ],
      protects: ["Vacuum experiments", "Gas environments", "Moisture-sensitive samples", "Oxygen-free processing"]
    },
    {
      title: "Optical Design",
      subtitle: "PRECISION OPTICS",
      type: "hardware",
      description: "The design is optimized for high-NA objective lenses and advanced spectroscopy systems requiring short working distances.",
      bullets: [
        "Ultra-Thin 0.5 mm lid window",
        "Minimizes spherical aberration",
        "Reduces optical path distortion",
        "Prevents Raman signal attenuation and working distance losses"
      ],
      highlights: [
        { label: "Lid Window", val: "0.5 mm" },
        { label: "Objective NA", val: "High-NA" },
        { label: "Optical Drift", val: "Minimal" },
        { label: "Working Dist.", val: "Short" }
      ]
    },
    {
      title: "Precision Temperature Sensing",
      subtitle: "CLOSED-LOOP CONTROL",
      type: "software",
      description: "Suitable for advanced closed-loop PID thermal control systems. An integrated precision 1000 Ω platinum resistor sensor provides highly accurate environmental feedback.",
      bullets: [
        "High accuracy temperature monitoring",
        "Excellent long-term stability",
        "Fast thermal response",
        "Low-noise feedback"
      ],
      platforms: ["Closed-loop PID", "1000 Ω Platinum RTD", "High-accuracy monitoring", "Low-noise feedback loop"]
    },
    {
      title: "High-Temperature Operation",
      subtitle: "EXTENDED THERMAL RANGE",
      type: "hardware",
      description: "For operation above 250°C in vacuum environments, the stage body supports external water cooling to protect surrounding optics and reduce external thermal loading.",
      bullets: [
        "Operation above 250°C in vacuum",
        "External water cooling integration",
        "Protects surrounding optics",
        "Maintains structural integrity and regulation"
      ],
      highlights: [
        { label: "High Temp limit", val: ">250°C" },
        { label: "Cooling type", val: "Water-cooled body" },
        { label: "Structural Integrity", val: "Maintained" },
        { label: "External Load", val: "Reduced" }
      ]
    }
  ],

  specifications: {
    "Thermal & Cooling": [
      { param: "Temperature Range", spec: "Below −195°C to elevated temperatures" },
      { param: "Temperature Stability", spec: "Better than 0.01°C" },
      { param: "Cooling Method", spec: "Direct cryogenic coolant injection" },
      { param: "High Temperature Cooling", spec: "External water-cooled body" },
      { param: "Temperature Sensor", spec: "1000 Ω Platinum RTD" }
    ],
    "Optical & Mechanical": [
      { param: "Thermal Block Material", spec: "Gold-plated OFHC Copper" },
      { param: "Optical Window", spec: "0.5 mm ultra-thin lid window" },
      { param: "Optical Aperture", spec: "20 mm" },
      { param: "Objective Working Distance", spec: "Minimum 5 mm" }
    ],
    "Environment & Compatibility": [
      { param: "Atmosphere Modes", spec: "Vacuum / Inert Gas / Controlled Atmosphere" },
      { param: "Compatible Techniques", spec: "Raman, Confocal, Fluorescence, X-ray" }
    ]
  },

  applications: [
    "Cryogenic materials analysis",
    "Semiconductor characterization",
    "Superconducting material studies",
    "Quantum materials imaging",
    "In-situ thermal microscopy",
    "Low-temperature Raman spectroscopy",
    "Failure analysis",
    "Biological cryogenic imaging",
    "Vacuum microscopy experiments"
  ],

  // Extra arrays for the system integration module specific to this product
  mechanicalHighlights: [
    "Gold-plated OFHC thermal mass",
    "Vacuum-compatible construction",
    "Precision optical alignment",
    "Compact microscope footprint",
    "Low thermal expansion structure",
    "Low vibration thermal interface"
  ],
  optionalConfigurations: [
    "Automated gas switching manifold",
    "Vacuum gauge integration",
    "Additional optical ports",
    "Custom sample holders",
    "LN₂ or LHe cooling configurations",
    "High-temperature furnace integration"
  ],
  systemCompatibility: [
    "Upright microscopes",
    "Inverted microscopes",
    "Raman systems",
    "Confocal imaging platforms",
    "X-ray instrumentation",
    "Custom optical benches",
    "Optical & Fluorescence Microscopy"
  ],

  gallery: [
    { url: "/images/Cryogenics/nano-stage/image1.png", caption: "NanoStage Top View Architecture" },
    { url: "/images/Cryogenics/nano-stage/image2.png", caption: "Optical Access Window" },
    { url: "/images/Cryogenics/nano-stage/image3.png", caption: "Cryogenic Cooling Manifold" }
  ],

  cta: {
    tagline: "Designed for Advanced Scientific Environments."
  }
},

  // "2d-transfer-system": {
  //   category: "Cryogenics",
  //   name: "2D Transfer System",
  //   subtitle: "Deterministic Van der Waals Heterostructure Stacking",
  //   heroImage: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1200&auto=format&fit=crop", 
  //   gallery: [
  //     "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
  //   ],
  //   overview: [
  //     "A precision-engineered motorized transfer system designed for the deterministic placement of 2D materials like Graphene, hBN, and Transition Metal Dichalcogenides (TMDs).",
  //     "Achieve sub-micron alignment accuracy with integrated temperature-controlled stages, high-resolution optical microscopes, and vibration-isolated infrastructure—essential for twistronics and magic-angle device fabrication."
  //   ],
  //   features: [
  //     { icon: Target, title: "Sub-Micron XYZ & Theta", description: "Ultra-precise motorized micrometers allow for perfect rotational and lateral alignment of crystal lattices." },
  //     { icon: ThermometerSnowflake, title: "Programmable Thermal Chuck", description: "Precision heating up to 250°C for seamless polymer melting and bubble-free stamping." },
  //     { icon: Video, title: "Long-WD Optical Microscope", description: "High-magnification zoom lens with a specialized coaxial illumination system for visualizing atomically thin flakes." },
  //     { icon: Shield, title: "Active Vibration Damping", description: "Granite base and pneumatic isolation ensure zero drift during the critical contact phase." },
  //   ],
  //   benefits: [
  //     { icon: Layers, title: "Perfect Interfaces", description: "Eliminate trapped air bubbles and contaminants between layers using controlled descent and heating." },
  //     { icon: SlidersHorizontal, title: "Twist angle Control", description: "Rotational stages with 0.01° resolution for producing highly sensitive Moiré superlattices." },
  //     { icon: Maximize2, title: "High Yield Scalability", description: "Automated routines significantly increase the success rate of complex, multi-layer heterostructure fabrication." },
  //     { icon: Microscope, title: "Live Inspection", description: "Integrated camera feeds allow continuous monitoring of the polymer/flake interface during transfer." }
  //   ],
  //   applications: [
  //     "Magic-Angle Graphene Devices",
  //     "Transition Metal Dichalcogenide (TMD) Stacking",
  //     "Quantum Emitter Fabrication",
  //     "Encapsulated Nanoelectronics",
  //     "Moiré Superlattice Research"
  //   ],
  //   specs: {
  //     "XYZ Resolution": "100 nm (Motorized)",
  //     "Rotational (Theta) Resolution": "0.01°",
  //     "Heating Chuck Range": "Ambient to 250°C",
  //     "Microscope Optics": "Long Working Distance, up to 100x magnification",
  //     "Vibration Isolation": "Passive & Active Options Available",
  //     "Vacuum System": "Integrated quiet diaphragm pump",
  //     "Software": "Custom GUI with joystick integration"
  //   }
  // },


  // src/data/products.ts record for "2dts-m2" (or "2d-transfer-system")
"2d-transfer-system": {
  category: "Cryogenics",
  name: "2DTS-M2 Manual Deterministic Transfer System",
  subtitle: "Precision Assembly Platform for 2D Materials, Twistronics & Quantum Devices",
  statusBadge: "2D MATERIAL ASSEMBLY",
  
  hero: {
    title: "2DTS-M2 Manual Deterministic Transfer System",
    subtitle: "Precision Assembly Platform for 2D Materials, Twistronics & Quantum Devices",
    description: "The CryoNano 2DTS-M2 Manual Deterministic Transfer System is a high-precision platform engineered for the assembly of 2D materials, van der Waals heterostructures, twistronic devices, and next-generation quantum structures. Combining precision motion control, high-resolution optical imaging, temperature-assisted transfer capability, and modular architecture, the system enables researchers to perform deterministic pickup, alignment, and release of atomically thin materials with exceptional repeatability. Designed for universities, semiconductor R&D laboratories, advanced materials research centers, and quantum technology developers, the 2DTS-M2 delivers the precision required to transform individual flakes into functional nanoscale devices."
  },

  quickSpecs: [
    { label: "Position Accuracy", value: "±1 to 5 µm" },
    { label: "Angular Res.", value: "0.01°" },
    { label: "Thermal Stage", value: "Up to 100°C" },
    { label: "Optical Zoom", value: "10:1" }
  ],

  overview: {
    title: "Deterministic Transfer for Advanced Materials Research",
    paragraphs: [
      "The fabrication of modern 2D material devices requires far more than simple manipulation. Successful assembly demands micron-level alignment, controlled contact force, stable peel-off dynamics, and precise rotational control.",
      "The 2DTS-M2 provides a complete deterministic transfer environment. The result is faster device fabrication, improved yield, and greater experimental reproducibility."
    ],
    advantages: [
      "Pick up individual flakes with high reliability",
      "Assemble multi-layer heterostructures",
      "Create twisted bilayer and moiré devices",
      "Perform temperature-assisted transfers",
      "Align microscopic features with sub-micron precision",
      "Build repeatable research workflows"
    ]
  },

  keyFeatures: [
    { icon: "Layers", title: "Deterministic Dry Transfer Technology", desc: "The system utilizes PDMS-based viscoelastic stamping technology to enable highly controlled pickup and release of delicate 2D materials while minimizing contamination and mechanical damage. Ideal for graphene, TMDCs, hBN, and other layered materials." },
    { icon: "Move", title: "High-Precision Motion Control", desc: "Motorized XYZ motion combined with precision XYθ alignment stages enables accurate positioning, contact control, and controlled peel-off operations essential for advanced transfer workflows." },
    { icon: "Eye", title: "Real-Time Optical Alignment", desc: "An integrated optical imaging system with HDMI camera output provides live visualization of flakes and substrates, allowing precise positioning during every stage of the transfer process." },
    { icon: "ThermometerSnowflake", title: "Temperature-Assisted Transfer", desc: "An optional integrated heating module and PID controller allow temperature-controlled transfer processes for enhanced adhesion control, improved pickup reliability, and optimized release characteristics." },
    { icon: "Settings", title: "Modular Research Architecture", desc: "Mechanical, optical, and thermal subsystems can be configured to support a wide range of research workflows, making the platform adaptable to evolving experimental requirements." },
    { icon: "Shield", title: "Glovebox-Compatible", desc: "Suitable for integration into controlled-atmosphere environments for handling air-sensitive materials and advanced heterostructure fabrication." }
  ],

  coreTechnologies: [
    {
      title: "Sub-Micron Alignment & Motion",
      subtitle: "CORE CAPABILITY",
      type: "hardware",
      description: "High-precision stages and closed-loop motion control deliver accurate flake positioning and repeatable assembly performance. The integrated θ-stage enables accurate rotational control required for twistronics and angle-sensitive heterostructure fabrication.",
      bullets: [
        "Sub-Micron Alignment Accuracy",
        "Precision Rotational Alignment (0.01° resolution)",
        "Controlled Pickup & Release fine adjustments"
      ],
      highlights: [
        { label: "Linear Travel", val: ">25 mm" },
        { label: "Angular Res", val: "0.01°" },
        { label: "Flatness", val: "≤ ±5 µm" },
        { label: "Accuracy", val: "±1 µm" }
      ]
    },
    {
      title: "Twistronics & Moiré Physics",
      subtitle: "ADVANCED ASSEMBLY",
      type: "telemetry", // TRIGGERS THE CUSTOM TELEMETRY DASHBOARD
      description: "Create precisely rotated bilayer structures and moiré superlattices with accurate angular control for studies of correlated electron systems and superconductivity. Assemble complex multi-layer stacks incorporating graphene, hBN, MoS₂, WS₂, WSe₂ with repeatable alignment.",
      bullets: [
        "Build advanced quantum transport devices",
        "Fabricate Josephson junctions & tunnel structures",
        "Accelerate semiconductor prototyping",
        "Assemble van der Waals heterostructures"
      ],
      platforms: []
    },
    {
      title: "Live Measurement & Imaging Tools",
      subtitle: "WORKFLOW OPTIMIZATION",
      type: "software",
      description: "Integrated software supports distance measurement, angle analysis, image overlays, video capture, and documentation of assembly processes. It combines alignment, imaging, transfer, measurement, and documentation into a single integrated platform.",
      bullets: [
        "Apochromatic Motorized System (10:1 Zoom)",
        "Adjustable Alignment Overlays",
        "Angle & Distance Measurement tools",
        "Reduces setup complexity & increases productivity"
      ],
      platforms: ["Image & Video Export", "Freeze / Playback", "Alignment Overlays", "Live Output"]
    }
  ],

  specifications: {
    "Precision Motion System": [
      { param: "Stage Type", spec: "Linear Crossed-Roller Stage" },
      { param: "Construction", spec: "Anodized Aluminum / Stainless Steel" },
      { param: "Travel Range", spec: " >25 mm" },
      { param: "Motion Type", spec: "Motorized Linear Motion" },
      { param: "Guiding System", spec: "Crossed-Roller Bearings" },
      { param: "Position Accuracy", spec: "±1 µm to ±5 µm" },
      { param: "Straightness & Flatness", spec: "≤ ±2 µm" },
      { param: "Repeatability", spec: "Closed-Loop High Precision Control" }
    ],
    "Theta Rotation Stage": [
      { param: "Stage Type", spec: "Precision Rotary θ Stage" },
      { param: "Drive System", spec: "Worm Gear Transmission" },
      { param: "Bearing Type", spec: "Crossed-Roller Bearing" },
      { param: "Chuck Material", spec: "OFHC Copper Vacuum Chuck" },
      { param: "Angular Resolution", spec: "0.1° to 0.01°" },
      { param: "Angular Accuracy", spec: "±0.02°" },
      { param: "Flatness", spec: "≤ ±5 µm" }
    ],
    "Temperature-Controlled Transfer": [
      { param: "Temperature Range", spec: "Room Temperature to 100°C" },
      { param: "Control Method", spec: "PID Control" },
      { param: "Resolution", spec: "0.1°C" },
      { param: "Heating Uniformity", spec: "Full Stage Uniform Heating" }
    ],
    "Advanced Optical System": [
      { param: "Optical Design", spec: "Apochromatic Motorized System" },
      { param: "Zoom Range", spec: "0.3× – 3.0×" },
      { param: "Zoom Ratio", spec: "10:1" },
      { param: "Objective", spec: "20× Infinity Corrected" },
      { param: "Field of View", spec: "Up to 1.5× Larger than Conventional Systems" },
      { param: "Camera Sensor", spec: "Sony CMOS" }
    ],
    "Integrated Imaging & Measurement": [
      { param: "Distance Measurement", spec: "Yes" },
      { param: "Angle Measurement", spec: "Yes" },
      { param: "Overlay Tools", spec: "Adjustable Alignment Overlays" },
      { param: "Video Functions", spec: "Freeze / Playback" },
      { param: "Data Capture", spec: "Image & Video Export" }
    ]
  },

  applications: [
    "Graphene Device Fabrication",
    "TMDC Heterostructure Assembly",
    "Twisted Bilayer Graphene Research",
    "Moiré Superlattice Studies",
    "Quantum Transport Devices",
    "Nanoelectronics Development",
    "Semiconductor Prototyping",
    "Advanced Materials Research",
    "Air-Sensitive Material Transfer",
    "Academic & Industrial R&D"
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", caption: "2DTS-M2 Main Assembly" },
    { url: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800", caption: "High-Precision Motorized Stage" },
     { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", caption: "Optical Alignment System" }
  ],

  cta: {
    tagline: "Precision Alignment. Deterministic Assembly. Research Without Compromise."
  }
},
  // // 6. NEW: 100 PSM PROBE STATION
  // "psm-100": {
  //   category: "Cryogenics", // Or "Quantum Hardware" depending on your preference
  //   name: "100 PSM Probe Station",
  //   subtitle: "Wafer-Level Electrical Characterization",
  //   heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop", 
  //   gallery: [
  //     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  //   ],
  //   overview: [
  //     "The CRYONANO PSM 100 Probe Station is a cost-effective, manual wafer probe station designed for high-precision electrical probing of nanoelectronic and microscale devices.",
  //     "Built for reliability and ease of use, it supports up to 100 mm (4\") wafers, making it ideal for R&D labs, academic research, and early-stage production testing."
  //   ],
  //   // Mapped from "Features" & "Breakout Box & Connectivity"
  //   features: [
  //     { icon: Settings, title: "Precision Micro-Positioning", description: "Stable platen supporting up to 6 micro-positioners with smooth, precise manual motion for repeatable probe placement." },
  //     { icon: Shield, title: "Vibration Isolation", description: "Rigid, drift-free mechanical architecture featuring a solid station frame with integrated vibration isolation." },
  //     { icon: Layers, title: "Wafer Support", description: "Supports up to 100 mm (4\") wafers with quick, ergonomic sample exchange for high lab throughput." },
  //     { icon: GitMerge, title: "Multi-Channel Routing", description: "Includes low-noise measurement interfaces, shielded cable assemblies, and reliable signal transmission." },
  //   ],
  //   // Mapped from "Measurement Capabilities"
  //   capabilities: [
  //     "I-V and C-V device characterization",
  //     "Wafer-level probing and parametric testing",
  //     "Electrical failure analysis",
  //     "MEMS and electro-optic device testing",
  //     "Semiconductor device characterization",
  //     "Low-current and low-voltage measurements",
  //     "Research-grade electrical testing"
  //   ],
  //   // Mapped from "Flexible Probe Station Accessories"
  //   accessories: [
  //     { icon: Wrench, title: "Industry-Leading Probes", description: "Compatible with multiple probe configurations and industry-leading probe arms." },
  //     { icon: Zap, title: "Instrument Compatibility", description: "Seamlessly compatible with SMUs, analyzers, and LCR meters for parametric testing." },
  //     { icon: Radio, title: "Low-Noise Cabling", description: "Special low-noise shielded cables engineered for highly sensitive measurements." }
  //   ],
  //   specs: {
  //     "Wafer Capacity": "Up to 100 mm (4\")",
  //     "Micro-Positioners": "Supports up to 6",
  //     "Motion Control": "Manual, High-Precision",
  //     "Vibration Isolation": "Integrated in solid frame",
  //     "Measurement Types": "I-V, C-V, Low-Current",
  //     "Signal Routing": "Multi-channel, shielded",
  //     "Application": "R&D, Academic, Early Production"
  //   }
  // },



  // src/data/products.ts record for "psm-100"
"psm-100": {
  category: "Cryogenics",
  name: "Cryogenic Probe Station",
  subtitle: "Precision Electrical Characterization at Cryogenic Temperatures",
  statusBadge: "PROBING PLATFORM",
  
  hero: {
    title: "Cryogenic Probe Station",
    subtitle: "Precision Electrical Characterization at Cryogenic Temperatures",
    description: "The CryoNano Cryogenic Probe Station is a versatile, research-grade platform designed for precision electrical characterization of semiconductor devices, quantum materials, MEMS, sensors, and nanoelectronic structures under cryogenic conditions. Combining precise micro-positioning, stable thermal control, high-vacuum compatibility, and high-resolution optical inspection, the system enables accurate and repeatable measurements from 77 K to 400 K."
  },

  quickSpecs: [
    { label: "Temp Range", value: "77 K – 400 K" },
    { label: "Vacuum", value: "≤ 10⁻⁵ mbar" },
    { label: "Probes", value: "4 BeCu Probes" },
    { label: "Optical Zoom", value: "7× – 45×" }
  ],

  overview: {
    title: "Explore Devices at Cryogenic Temperatures",
    paragraphs: [
      "From superconducting materials and quantum devices to advanced semiconductor structures, understanding device behavior at low temperatures is essential for modern electronics and quantum technologies.",
      "All integrated into a compact and customizable platform. Built for universities, national laboratories, semiconductor R&D centers, and quantum technology developers, the Cryogenic Probe Station delivers the performance needed for next-generation low-temperature research."
    ],
    advantages: [
      "Precise electrical probing",
      "Stable cryogenic temperature control",
      "High-resolution optical inspection",
      "High-vacuum operation",
      "Low-noise measurement capability",
      "Flexible experimental configurations"
    ]
  },

  keyFeatures: [
    { icon: "ThermometerSnowflake", title: "Wide Temperature Range", desc: "Designed for operation from 77 K to 400 K, allowing researchers to study device behavior across cryogenic, ambient, and elevated temperature conditions." },
    { icon: "Crosshair", title: "Precision Four-Probe System", desc: "Independent micro-manipulators and BeCu probes for accurate contact placement on microelectronic and nanotechnology devices." },
    { icon: "Eye", title: "High-Resolution Optical Inspection", desc: "A long-working-distance zoom microscope enables accurate probe placement and sample observation without disturbing the thermal environment." },
    { icon: "Wind", title: "High-Vacuum Architecture", desc: "Supports high-vacuum operation to minimize condensation, contamination, and thermal losses during low-temperature measurements." },
    { icon: "Layers", title: "OFHC Copper Sample Stage", desc: "The sample platform is machined from Oxygen-Free High Conductivity (OFHC) Copper to maximize thermal conductivity and temperature uniformity." },
    { icon: "Zap", title: "Low-Noise DC Characterization", desc: "Engineered to deliver clean signal paths essential for accurate I-V, resistance, Hall effect, and transport measurements." }
  ],

  coreTechnologies: [
    {
      title: "Thermal Control System",
      subtitle: "THERMAL ARCHITECTURE",
      type: "hardware",
      description: "The thermal architecture provides stable and repeatable cryogenic operation with precise temperature regulation. LN₂ cooling is standard, with LHe cooling optional.",
      bullets: [
        "Integrated heater system",
        "Silicon diode or PT1000 sensors",
        "Stable thermal anchoring",
        "Automated temperature regulation"
      ],
      highlights: [
        { label: "Cooling", val: "LN₂ / LHe" },
        { label: "Stability", val: "±0.05 K" },
        { label: "Uniformity", val: "±0.5 K" },
        { label: "Cooldown", val: "20–40 min" }
      ]
    },
    {
      title: "Vacuum System Integration",
      subtitle: "ENVIRONMENTAL CONTROL",
      type: "protection",
      description: "Designed for demanding low-temperature experiments requiring contamination-free operation. Supports external rotary and turbo-molecular pumps.",
      bullets: [
        "High-vacuum compatibility",
        "External pump integration",
        "KF/NW vacuum interfaces",
        "Low outgassing design",
        "Reliable vacuum sealing"
      ],
      protects: ["Prevents condensation", "Eliminates contamination", "Reduces thermal losses", "Maintains clean environment"]
    },
    {
      title: "Precision Probe Manipulators",
      subtitle: "MICRO-POSITIONING",
      type: "hardware",
      description: "Micro-positioning stages allow accurate placement of electrical probes on delicate samples with low mechanical drift.",
      bullets: [
        "Independent positioning control",
        "Smooth motion adjustment",
        "Repeatable contact positioning",
        "Suitable for nanoscale devices"
      ],
      highlights: [
        { label: "Probes", val: "4 Standard" },
        { label: "Material", val: "BeCu" },
        { label: "Tip Radius", val: "1.5–5 µm" },
        { label: "Support", val: "Four-Point" }
      ]
    },
    {
      title: "Integrated Microscope System",
      subtitle: "OPTICAL INSPECTION",
      type: "hardware",
      description: "Provides clear visualization of probe tips and sample structures for accurate alignment without breaking vacuum or thermal seals.",
      bullets: [
        "Long working distance optics",
        "High magnification",
        "Stable optical mounting",
        "Easy focusing and positioning"
      ],
      highlights: [
        { label: "Zoom Ratio", val: "7× – 45×" },
        { label: "Working Dist.", val: "80–100 mm" },
        { label: "Resolution", val: "1–5 µm" },
        { label: "Travel Range", val: "X-Y ~25 mm" }
      ]
    }
  ],

  specifications: {
    "Thermal Performance": [
      { param: "Temperature Range", spec: "77 K – 400 K" },
      { param: "Cooling Medium", spec: "LN₂ Standard, LHe Optional" },
      { param: "Temperature Stability", spec: "±0.05 K to ±0.5 K" },
      { param: "Temperature Uniformity", spec: "±0.5 K across stage" },
      { param: "Cooldown Time", spec: "20–40 minutes typical" },
      { param: "Heating Method", spec: "Integrated resistive heater" },
      { param: "Sensors", spec: "Silicon Diode / PT1000" }
    ],
    "Vacuum System": [
      { param: "Base Pressure", spec: "≤ 1 × 10⁻⁵ mbar" },
      { param: "Working Pressure", spec: "10⁻³ to 10⁻⁵ mbar" },
      { param: "Vacuum Ports", spec: "KF/NW Standard" },
      { param: "Pump Compatibility", spec: "Rotary & Turbo Molecular Pumps" },
      { param: "Leak Rate", spec: "≤ 1 × 10⁻⁹ mbar·L/s" }
    ],
    "Probe System": [
      { param: "Number of Probes", spec: "4 Standard" },
      { param: "Probe Material", spec: "Copper Beryllium (BeCu)" },
      { param: "Probe Tip Radius", spec: "1.5–5 µm" },
      { param: "Measurement Type", spec: "DC & Low-Noise" },
      { param: "Configuration", spec: "Four-Point Probe Supported" }
    ],
    "Optical System": [
      { param: "Zoom Ratio", spec: "7× – 45×" },
      { param: "Microscope Type", spec: "Long Working Distance Zoom" },
      { param: "Working Distance", spec: "80–100 mm" },
      { param: "Resolution", spec: "1–5 µm" },
      { param: "Travel Range", spec: "X-Y ~25 mm, Z ~10 mm" }
    ],
    "Sample Stage": [
      { param: "Material", spec: "OFHC Copper" },
      { param: "Stage Size", spec: "~25 mm × 25 mm" },
      { param: "Thermal Anchoring", spec: "High-Efficiency Conduction" },
      { param: "Electrical Isolation", spec: "Optional" },
      { param: "Mounting Method", spec: "Mechanical Clamp or Vacuum Grease" }
    ]
  },

  applications: [
    "Semiconductor Device Characterization",
    "Quantum Device Research",
    "Nanotechnology Research",
    "Material Science Studies",
    "MEMS and Sensor Testing",
    "Universities",
    "National laboratories",
    "Semiconductor R&D facilities",
    "Quantum technology companies",
    "Advanced materials research centers"
  ],

  configurations: [
    "Advanced temperature controllers",
    "Additional probe arms",
    "Vibration isolation systems",
    "Integrated camera systems",
    "Custom sample holders",
    "Low-noise electrical wiring",
    "Magnetic field compatible configurations",
    "Quantum transport measurement packages"
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800", caption: "Probe Station Assembly" },
    { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", caption: "Micro-manipulator and Probe Arm" },
      { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800", caption: "Cryogenic Sample Stage" }
  ],

  cta: {
    tagline: "Measure More Accurately. Probe More Precisely. Discover More Deeply."
  }
},

  // ==========================================
  // NEW: CRYOGENIC DIP STICK (Fully Transcribed from Brochure)
  // ==========================================
  // "dipstick": {
  //   category: "Cryogenics",
  //   name: "Cryogenic Dip Stick",
  //   subtitle: "Precision Cryogenic Sample Control for Research and Advanced Testing",
  //   heroImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop", 
  //   gallery: [],
  //   overview: [
  //     "A high-performance liquid nitrogen (LN2)-cooled probe station insert engineered for precision electrical, materials, and device characterization.",
  //     "Designed for seamless integration into cryostats and vacuum chambers, enabling stable and repeatable measurements from 77 K to above ambient temperatures.",
  //     "Built to support condensed matter physics, superconductivity research, semiconductor testing, and advanced materials development."
  //   ],
  //   coreFeatures: [
  //     "Low thermal drift and high measurement stability",
  //     "High-precision probing and repeatable positioning",
  //     "Compatible with standard cryostat and vacuum interfaces"
  //   ],
  //   thermalControl: [
  //     "Operating range from ~77 K to 325 K+",
  //     "OFHC copper cold stage for rapid thermal equilibration",
  //     "Embedded heaters for variable temperature operation",
  //     "PT1000 sensors positioned near sample mount"
  //   ],
  //   electricalVacuum: [
  //     "High-reliability multi-pin electrical feedthroughs",
  //     "High-voltage and signal integrity support",
  //     "Vacuum-compatible construction",
  //     "Radiation shielding to minimize thermal losses",
  //     "Thermally optimized wiring harnesses"
  //   ],
  //   applications: [
  //     {
  //       title: "Low-Temperature Electrical Transport & I-V",
  //       desc: "Resistance, conductivity and current-voltage (I-V) measurements, under cryogenic conditions."
  //     },
  //     {
  //       title: "Superconducting Device & Materials Research",
  //       desc: "Investigation of superconducting transitions and material properties at low temperatures."
  //     },
  //     {
  //       title: "Semiconductor & PCB Testing at Cryo",
  //       desc: "Characterization of PCB components, semiconductor devices and nanoscale materials in high-vacuum standards."
  //     },
  //     {
  //       title: "Sensor Characterization & Calibration",
  //       desc: "Evaluation of sensor performance and calibration in cryogenic environments."
  //     }
  //   ],
  //   designHighlights: [
  //     {
  //       title: "Precision cold stage machined from OFHC copper",
  //       desc: "Minimal thermal gradients, rapid response to temperature changes."
  //     },
  //     {
  //       title: "Vacuum-compatible, low-outgassing construction",
  //       desc: "ISO-KF, CF (Conflat), and custom interface flanges, integrated vacuum shielding."
  //     },
  //     {
  //       title: "Replaceable flange and clamp fixtures",
  //       desc: "Customizable tops for different sample geometries for easy sample exchange."
  //     },
  //     {
  //       title: "Multi-pin electrical feedthroughs with gold contacts",
  //       desc: "Highly reliable, suitable for mixed power, signal, and test lines."
  //     }
  //   ],
  //   modularitySpecs: {
  //     "Configurable Design": [
  //       "Modular mechanical design for easy integration",
  //       "Options for ISO-KF, CF, and custom flanges",
  //       "Replaceable top flange or clamp fixtures for quick sample exchange",
  //       "Optional LN₂ flow channels or cold-finger configurations",
  //       "High-reliability electrical feedthroughs with gold-plated contacts",
  //       "High-vacuum-compatible, radiation shielded assembly"
  //     ],
  //     "Technical Specifications": [
  //       "Operating range from ~77 K to 325 K+",
  //       "OFHC copper cold stage for high thermal conductivity",
  //       "PT1000 sensor near cold stage for accurate temperature control"
  //     ]
  //   },



  //   modularVisualizer: {
  //     description: "Visualizing theoretical design Flexibility:Changeable flanges, replaceable fixtures, custom interface ports, custom wiring configurations derrived from configuration specs.",
  //     parts: ["Base Flange (CF/KF)", "Cold Stage (OFHC)", "Replaceable Top Flange"] // For dynamic diagram
  //   },
  //   thermalEngineeringVisualizer: {
  //     description: "Thermal engineering: copper stage & radiation shielding",
  //     components: ["OFHC Copper Stage", "Radiation Shielding"] // For dynamic diagram
  //   },
  // },
  // src/data/products.ts record for "dipstick" (VTI)
"dipstick": {
  category: "Cryogenics",
  name: "Variable Temperature Insert (VTI) / Cryogenic Dip Stick",
  subtitle: "Precision Cryogenic Sample Platform for Liquid Nitrogen & Liquid Helium Systems",
  statusBadge: "VTI PLATFORM",
  
  hero: {
    title: "Variable Temperature Insert (VTI) / Cryogenic Dip Stick",
    subtitle: "Precision cryogenic insert platform for Liquid Nitrogen and Liquid Helium research systems with integrated thermal control, vacuum compatibility, and high-integrity electrical interfaces.",
    description: "Cryo Nano Labs designs and manufactures advanced Variable Temperature Inserts (VTI) engineered for precision low-temperature experimentation in both Liquid Nitrogen (LN₂) and Liquid Helium (LHe) environments. Developed for demanding scientific and industrial research applications, the VTI platform enables highly stable temperature-controlled operation from cryogenic temperatures up to above ambient conditions while maintaining exceptional thermal performance, vacuum compatibility, and electrical integrity. Designed for seamless integration into cryostats, superconducting magnet systems, vacuum chambers, and custom experimental setups, the VTI architecture supports long-duration operation, repeated thermal cycling, and electrically sensitive measurements under high-vacuum conditions."
  },

  quickSpecs: [
    { label: "Operation Range", value: "4 K to 325 K" },
    { label: "Cold Stage", value: "OFHC Copper" },
    { label: "Feedthrough", value: "24-Pin Vacuum" },
    { label: "Compatibility", value: "LN₂ & LHe" }
  ],

  overview: {
    title: "Modular Cryogenic Variable Temperature Platform",
    paragraphs: [
      "The Cryo Nano Labs Variable Temperature Insert is engineered as a modular and configurable cryogenic platform capable of operating in Liquid Nitrogen cryostats, Liquid Helium cryostats, Superconducting magnet systems, Vacuum probe stations, and Custom cryogenic chambers.",
      "The VTI combines high thermal conductivity OFHC copper cold stages, embedded heaters and temperature sensors, thermally optimized wiring harnesses, radiation shielding, vacuum-compatible feedthroughs, and modular flange systems.",
      "This architecture enables stable and repeatable low-temperature experiments with minimized thermal gradients and superior signal integrity."
    ],
    advantages: [
      "Liquid Helium & Nitrogen Integration",
      "High thermal conductivity OFHC",
      "Vacuum-compatible feedthroughs",
      "Radiation shielding",
      "Thermally optimized harnesses"
    ]
  },

  keyFeatures: [
    { icon: "ThermometerSnowflake", title: "LN₂ & LHe Compatibility", desc: "Supports operation in both liquid nitrogen and liquid helium environments for flexible cryogenic experimentation." },
    { icon: "Activity", title: "Wide Temperature Range", desc: "Configurable operation from ~4 K up to 325 K and beyond depending on cryogen and system configuration." },
    { icon: "Layers", title: "OFHC Copper Thermal Platform", desc: "Precision-machined oxygen-free high-conductivity copper stage ensures rapid thermal equilibration and minimal temperature gradients." },
    { icon: "Settings", title: "Integrated Temperature Regulation", desc: "Embedded heaters and PT1000 / cryogenic sensor integration enable accurate closed-loop temperature control directly at the sample region." },
    { icon: "Wind", title: "High Vacuum Compatible", desc: "Designed for high-vacuum operation with low-outgassing materials and integrated thermal radiation shielding." },
    { icon: "Zap", title: "High Signal Integrity", desc: "Supports mixed sensor, measurement, and power signals through precision vacuum feedthrough architecture optimized for low-noise measurements." }
  ],

  coreTechnologies: [
    {
      id: "thermal",
      title: "Optimized Low-Temperature Thermal Design",
      subtitle: "CRYOGENIC THERMAL ARCHITECTURE",
      type: "hardware",
      description: "The VTI platform is engineered for highly efficient cryogenic heat transfer and long-term thermal stability. The system supports rapid cooldown while maintaining highly stable steady-state temperature control for sensitive experiments.",
      bullets: [
        "Precision OFHC copper cold stage",
        "Thermally anchored wiring harnesses",
        "Radiation shield integration",
        "Low thermal leak architecture",
        "Minimized parasitic heating",
        "High thermal uniformity across sample region"
      ],
      highlights: [
        { label: "Conductivity", val: "≥ 390 W/m·K" },
        { label: "Material", val: "OFHC Copper" },
        { label: "Shielding", val: "Integrated" },
        { label: "Cool-Down", val: "Rapid" }
      ]
    },
    {
      id: "control",
      title: "Precision Variable Temperature Regulation",
      subtitle: "TEMPERATURE CONTROL",
      type: "software", // Visualized via a PID controller UI
      description: "Embedded temperature sensing and heating elements positioned close to the sample mount provide accurate closed-loop thermal regulation. Ideal for superconductivity measurements, transport experiments, and thermal cycling.",
      bullets: [
        "Stable low-temperature operation",
        "Fast thermal response",
        "High measurement accuracy",
        "Low-noise thermal feedback",
        "External PID controller compatibility",
        "Automated temperature sweep capability"
      ],
      platforms: ["External PID Controllers", "PT1000 Sensors", "Silicon Diodes", "Cernox Sensors", "Automated Temp Sweeps"]
    },
    {
      id: "electrical",
      title: "High-Reliability Vacuum Electrical System",
      subtitle: "ELECTRICAL INTERFACE",
      type: "hardware",
      description: "The VTI integrates seamless vacuum feedthroughs with gold-plated contacts for electrically sensitive cryogenic measurements. Supports mixed analog, digital, sensor, and high-voltage test signals.",
      bullets: [
        "Thermally anchored twisted pairs",
        "Low thermal conductivity wiring",
        "High insulation resistance",
        "Cryogenic-compatible insulation systems"
      ],
      highlights: [
        { label: "Voltage Rating", val: "Up to 500 V DC" },
        { label: "Current Rating", val: "Up to 1 A/pin" },
        { label: "Insulation Res", val: "> 10⁹ Ω" },
        { label: "Dielectric Withstand", val: "≥ 1000 V DC" }
      ]
    },
    {
      id: "vacuum",
      title: "Engineered for Advanced Cryogenic Systems",
      subtitle: "VACUUM & CRYOSTAT INTEGRATION",
      type: "protection",
      description: "The VTI platform integrates directly with liquid helium cryostats, liquid nitrogen cryostats, superconducting magnet systems, probe stations, and vacuum chambers.",
      bullets: [
        "KF16 evacuation port",
        "High-vacuum compatible materials",
        "Radiation shielding",
        "Low outgassing construction",
        "Cryogenic sealing compatibility"
      ],
      protects: ["Liquid helium cryostats", "Liquid nitrogen cryostats", "Superconducting magnets", "Vacuum chambers"]
    }
  ],

  specifications: {
    "Thermal & Operational": [
      { param: "Operating Temperature Range", spec: "~4 K to 325 K" },
      { param: "Expanded Temperature Capability", spec: "Up to ~358 K (configuration dependent)" },
      { param: "Cryogen Compatibility", spec: "Liquid Nitrogen (LN₂) / Liquid Helium (LHe)" },
      { param: "Cooling Architecture", spec: "Dip Stick / Cold Finger / Flow-Type VTI" }
    ],
    "Cold Stage & Sensing": [
      { param: "Cold Stage Material", spec: "OFHC Copper" },
      { param: "Thermal Conductivity", spec: "≥ 390 W/m·K" },
      { param: "Typical Thermal Conductivity", spec: "≥ 429 W/m·K" },
      { param: "Surface Finish", spec: "< 0.1 µm Ra" },
      { param: "Sample Compatibility", spec: "Up to 20 mm × 20 mm PCB" },
      { param: "Temperature Sensor Options", spec: "PT1000 / Cernox / Silicon Diode" },
      { param: "Heater Type", spec: "Embedded Ceramic Heater" },
      { param: "Heater Supply", spec: "24 V DC ±5%" }
    ],
    "Electrical Feedthroughs": [
      { param: "Feedthrough Type", spec: "24-pin Vacuum Feedthrough" },
      { param: "Feedthrough Voltage Rating", spec: "Up to 500 V DC" },
      { param: "Feedthrough Current Rating", spec: "Up to 1 A per pin" },
      { param: "Dielectric Withstand", spec: "≥ 1000 V DC" },
      { param: "Insulation Resistance", spec: "> 10⁹ Ω" },
      { param: "Wiring Harness", spec: "Manganin / Phosphor Bronze Twisted Pairs" }
    ],
    "Vacuum & Shielding": [
      { param: "Vacuum Compatibility", spec: "≤ 10⁻³ Torr (configuration dependent)" },
      { param: "Radiation Shielding", spec: "Integrated Multi-Layer Thermal Shields" },
      { param: "Vacuum Port", spec: "KF16 Side Port" },
      { param: "Flange Options", spec: "ISO-KF / CF / Custom Interfaces" }
    ]
  },

  applications: [
    "Superconducting materials research",
    "Quantum device characterization",
    "Cryogenic semiconductor testing",
    "Low-temperature transport measurements",
    "Hall effect studies",
    "Sensor calibration",
    "Cryogenic PCB testing",
    "Condensed matter physics",
    "National laboratory research",
    "Advanced materials characterization"
  ],

  configurations: [
    "High magnetic field compatibility",
    "Rotational sample stages",
    "Multi-sample holders",
    "RF and coaxial feedthroughs",
    "Optical access ports",
    "Fiber optic integration",
    "Low-vibration suspension",
    "Automated gas handling",
    "Helium recovery compatibility"
  ],

  gallery: [
    { url: "/images/Cryogenics/dipstick/image1.png", caption: "VTI Probe Insert" },
    { url: "/images/Cryogenics/dipstick/image2.png", caption: "Vacuum Interface Flange" },
    { url: "/images/Cryogenics/dipstick/image3.png", caption: "High-Density Electrical Feedthrough" }
  ],

  cta: {
    tagline: "Engineered for Precision Low-Temperature Experimentation."
  }
},
  
  // ==========================================
// 7. NEW: CRYOSCOPE™ MOTION HUB (MOTORIZED CONTROLLER)
// FULLY TRANSCRIBED DATA FROM 5 BROCHURE IMAGES
// ==========================================
"cryoscope-controller": {
  category: "Microscopes",
  name: "Motorized Controller with Precision Stages",
  subtitle: "High-Accuracy Motion Control for Scientific and Industrial Systems",
  // Fixed, reliable industrial multiply-blending image URLs
  heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop", 
  gallery: [
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  ],
  overview: [
    "CryoNano's Motorized Controller with Precision Stages is engineered for applications requiring sub-micron positioning accuracy, repeatable motion, and stable long-term operation.",
    "Designed around compact motorized stages and intelligent electronic control, the system delivers precise linear and rotational motion in space-constrained experimental and industrial setups.",
    "Built with high-precision mechanical components and closed-loop electronic feedback, the controller enables smooth, programmable motion control for alignment, scanning, and positioning tasks where accuracy and reliability are critical."
  ],
  // 6 capabilities Mapped from Image 1 (Full list)
  coreFeatures: [
    "Sub-micron positioning capability",
    "Closed-loop electronic feedback",
    "Compact, integration-ready design",
    "High repeatability and motion stability",
    "Programmable multi-mode operation"
  ],
  // Comprehensive Architectural details Mapped from Image 2
  architecture: {
    description: "The motorized controller integrates precision-machined linear and rotary stages driven by high-resolution motors and controlled via an intelligent electronic interface. The modular architecture enables independent or synchronized multi-axis operation for flexible system integration.",
    mechanical: [
      "Rigid aluminum alloy stage bodies for structural stability",
      "Precision lead screw or linear guide mechanisms",
      "Integrated motor and encoder assemblies",
      "Compact footprint for instrument integration",
      "Engineered to minimize backlash and mechanical vibration, ensuring smooth motion even at ultra-low speeds."
    ],
    modular: [
      "Multi-axis configuration capability",
      "Stackable vertical and horizontal layouts",
      "Flexible mounting interfaces",
      "Suitable for custom instrumentation assemblies"
    ]
  },
  // Detailed Multi-Category Motion Control Mapped from Image 3
  motionControl: {
    description: "The system delivers precise, repeatable motion through high-resolution motor drive and closed-loop electronic feedback. Engineered for smooth, stable operation, it ensures consistent positioning performance across repeated cycles.",
    performance: [
      "Sub-micron motion resolution",
      "High repeatability across repeated operations",
      "Stable positioning under continuous use",
      "Optimized motion at ultra-low speeds"
    ],
    modes: [
      "Step-based incremental positioning",
      "Continuous scanning motion",
      "Synchronized axis control movement",
      "External control signal compatibility"
    ],
    electronics: {
      description: "The intelligent controller manages motion profiles, acceleration curves, and position verification through integrated feedback systems.",
      items: [
        "Closed-loop electronic position feedback",
        "Smooth acceleration and deceleration curves",
        "External control signal compatibility",
        "Integration-ready communication interface",
        "Deterministic workflow integration."
      ]
    }
  },
  // Multi-Category Integration Mapped from Image 4
  integration: {
    description: "The mechanical layout and mounting interfaces are designed to support optical assemblies, sensors, probes, and custom fixtures while maintaining alignment stability throughout motion. Engineered for compact system integration, the controller enables stable vertical and horizontal configurations in space-constrained environments.",
    features: [
      "Precision mounting interfaces for optical components",
      "Stable support for lenses, cameras, and probes",
      "Reduced mechanical drift during extended operation",
      "Compact footprint for instrument embedding",
      "Multi-axis alignment capability",
      "CLEM Workflow Integration Feed."
    ]
  },
  // Stacking routines Mapped from Image 4
  stacking: [
    "Initial 2D flake identification and coordinate mapping via optical system.",
    "Autonomous relocation feed for deterministic downstream electron microscopy analysis.",
    "Engages rotational stage for precise twist-angle Moire lattice control (0.01° resolution)."
  ],
  applications: [
    "Precision alignment systems",
    "Automated scanning and inspection setups",
    "Optical and imaging instruments",
    "Laboratory automation platforms",
    "Micro-positioning and fine adjustment tasks",
    "Magic-angle device fabrication",
    "Nanopositioning Workflows"
  ],
  // Comprehensive Specs Mapped from Image 5 (MASSIVE NESTED GRID)
  detailedSpecs: {
    "XYZ Precision Stage": {
      "Axes": "X, Y, Z",
      "Drive Mechanism": "Precision LM screw drives",
      "Guide System": "Linear rail guides",
      "Travel Range (X)": "25 mm",
      "Travel Range (Y)": "25 mm",
      "Travel Range (Z)": "25 mm",
      "Resolution (Full-Step)": "1 µm",
      "Resolution (Microstepping)": "Down to 0.6 µm (1/256 microstepping)",
      "Load Capacity": "5 kg"
    },
    "XYθ Precision Stage": {
      "Axes": "X, Y, θ",
      "Drive Mechanism": "Precision LM screw drives (X/Y), Worm gear (θ)",
      "Travel Range (X)": "25 mm",
      "Travel Range (Y)": "25 mm",
      "Rotation Range (θ)": "360° continuous",
      "Resolution (X/Y)": "Down to 0.1 µm",
      "Resolution (θ)": "Down to 0.005°",
      "Load Capacity": "3 kg"
    },
    "Motion Controller": {
      "Controller Type": "Advanced 4-axis microstepping controller",
      "Microstepping Resolution": "Up to 1/256",
      "Communication Interface": "USB 3.0 / Ethernet",
      "Digital Inputs": "4 Opto-isolated inputs",
      "Supported Functions": "Limit switches, emergency stop, external triggers",
      "Input Power": "24V DC"
    },
    "Imaging System": {
      "Camera Type": "CMOS Machine Vision Camera",
      "Sensor": "Sony IMX CMOS Global Shutter",
      "Resolution": "3840 × 2160 (4K UHD)",
      "Frame Rate": "45 fps",
      "Pixel Size": "~ 2.0 µm × 2.0 µm",
      "Interface": "USB 3.0",
      "Trigger": "Hardware trigger input"
    },
    "Optical System": {
      "Microscope Type": "Motorized Zoom Microscope",
      "Zoom Ratio": "1:10",
      "Optical Magnification": "0.3x – 3.0x",
      "Working Distance": "9 mm",
      "Lens Design": "Apochromatic 20X lens",
      "Motorization": "Motorized zoom and fine focus",
      "Illumination": "Coaxial (epi) illumination"
    },
    "Temperature Controller": {
      "Controller Type": "SSD-based precision temperature controller",
      "Temperature Range": "Ambient to 200°C",
      "Control Accuracy": "± 0.5°C",
      "Sensor Type": "Thermocouple",
      "Illumination": "Coaxial (epi) illumination"
    },
    "Computer System": {
      "Computer Type": "High-performance laptop",
      "Processor": "Intel Core i3",
      "Memory": "8 GB RAM",
      "Storage": "512 GB NVMe SSD",
      "Operating System": "Windows 10 / 11 Pro (64-bit)",
      "Ports": "USB 3.0, Ethernet, HDMI"
    }
  }
},




// ==========================================
  // ULTRACLEAR 4K SMART MICROSCOPE
  // ==========================================
  // "ultraclear-4k": {
  //   category: "Microscopes",
  //   name: "UltraClear 4K Smart Microscope System",
  //   subtitle: "Precision Imaging Meets Intelligent Automation",
  //   heroImage: "/images/ultraclear-hero.png", // Ensure this exists in public/images
  //   gallery: [],
  //   overview: [
  //     "The UltraClear 4K Smart Microscope System combines apochromatic optical precision with intelligent digital automation to deliver exceptional clarity, measurement accuracy, and operational efficiency.",
  //     "Engineered for both advanced research laboratories and industrial inspection environments, the system integrates high-performance optics, a 4K ultra-HD imaging platform, and real-time measurement intelligence into a modular, upgrade-ready architecture.",
  //     "From semiconductor inspection to biological imaging, UltraClear provides true-color fidelity, stable long-term performance, and smart analysis tools."
  //   ],
  //   coreAdvantages: [
  //     "Apochromatic optics for true-color imaging across wavelengths",
  //     "10:1 intelligent zoom with expanded field of view",
  //     "4K ultra-HD Sony sensor with zero-latency output",
  //     "Integrated smart measurement & AI-assisted analysis",
  //     "Modular upgrade-ready architecture"
  //   ],
  //   opticalExcellence: {
  //     zoom: [
  //       "0.3X – 3.0X zoom range",
  //       "Available in fully motorized or manual configurations",
  //       "Ultra-low distortion parallel optical path",
  //       "Modular zoom bodies: Compact (up to 2/3\" sensors) & High-performance (up to 1\" sensors)",
  //       "Field of View optimized – up to 1.5× wider at equivalent magnification"
  //     ],
  //     objectives: [
  //       { mag: "20X", na: "0.4 - 0.55", wd: "8 - 10 mm" },
  //       { mag: "50X", na: "0.4 - 0.55", wd: "Long working distance" }
  //     ]
  //   },
  //   imagingAndIllumination: {
  //     illumination: [
  //       "Epi-illumination module for surface and metallurgical studies",
  //       "High-intensity LED point source with precise brightness control",
  //       "Polarization imaging for birefringent material analysis",
  //       "Uniform field illumination for consistent contrast"
  //     ],
  //     camera: [
  //       "Sony high-performance imaging sensor",
  //       "Resolution: 3840 × 2160 @ 60 fps (zero-latency live view)",
  //       "C-Mount compatibility for modular camera upgrades",
  //       "HDMI 2.0 output for direct display integration",
  //       "Local & online storage support (up to 32M HD images)",
  //       "Standalone operation with wireless keyboard & mouse"
  //     ]
  //   },
  //   smartAnalysis: {
  //     measurement: [
  //       "Parallel line measurement",
  //       "Concentric circle analysis",
  //       "Angle and point-to-line measurement",
  //       "Distance and contour evaluation",
  //       "Real-time calibrated overlays",
  //       "Instant image and video review with playback features"
  //     ],
  //     ai: [
  //       "Automatic edge and contour detection",
  //       "Real-time object recognition",
  //       "Intelligent contrast enhancement",
  //       "High-speed quad-core processor platform",
  //       "Network streaming capability"
  //     ]
  //   },
  //   applications: [
  //     { title: "Semiconductor Inspection", desc: "Microchip structure evaluation and defect analysis" },
  //     { title: "Metallurgical Failure Analysis", desc: "Surface integrity and material characterization" },
  //     { title: "Biological Tissue Observation", desc: "High-contrast cellular and microstructure imaging" },
  //     { title: "Food Safety & Contamination", desc: "Foreign particle and structural inspection" },
  //     { title: "Academic & Industrial R&D", desc: "Research laboratories and quality control environments" }
  //   ],
  //   designHighlights: [
  //     { title: "CNC-machined aluminum alloy body", desc: "Rigid structure ensures optical stability" },
  //     { title: "Anodized, wear-resistant finish", desc: "Long-term durability under frequent operation" },
  //     { title: "Precision handwheel focus control", desc: "Smooth, stable fine adjustment" },
  //     { title: "Stable optical alignment", desc: "Maintains calibration across extended use" },
  //     { title: "Maintains working distance stability", desc: "No shift during focus adjustment" }
  //   ],
  //   comparison: [
  //     { feature: "Apochromatic optics", ultra: "Yes", conventional: "Limited" },
  //     { feature: "Zoom ratio", ultra: "10:1", conventional: "Often 6:1" },
  //     { feature: "Field of view", ultra: "1.5×", conventional: "Lens-limited" },
  //     { feature: "Upgrade support", ultra: "Open architecture", conventional: "Closed" },
  //     { feature: "Intelligent measurement", ultra: "Automated + Export", conventional: "Manual" }
  //   ]
  // },

  "ultraclear-4k": {
  category: "Microscopes",
  name: "4K Digital Inspection Microscope",
  subtitle: "Ultra-HD Imaging for Semiconductor Inspection, Materials Research & Precision Measurement",
  statusBadge: "IMAGING PLATFORM",
  
  hero: {
    title: "4K Digital Inspection Microscope",
    subtitle: "Ultra-HD Imaging for Semiconductor Inspection, Materials Research & Precision Measurement",
    description: "The CryoNano 4K Digital Inspection Microscope is a compact, high-performance imaging platform designed for precision inspection, measurement, documentation, and analysis of semiconductor devices, electronic assemblies, advanced materials, MEMS structures, and nanoscale research samples. Combining ultra-high-definition 4K imaging, apochromatic optics, epi-illumination, integrated measurement software, and precision sample positioning, the system delivers exceptional image quality and measurement accuracy for research laboratories, universities, semiconductor fabs, quality-control facilities, and advanced manufacturing environments."
  },

  quickSpecs: [
    { label: "Resolution", value: "3840 × 2160" },
    { label: "Magnification", value: "20X APO" },
    { label: "Zoom Ratio", value: "10:1" },
    { label: "Frame Rate", value: "60 fps" }
  ],

  overview: {
    title: "Precision Imaging for Advanced Research",
    paragraphs: [
      "Whether inspecting semiconductor wafers, analyzing microstructures, characterizing advanced materials, or performing quality-control measurements, image quality is critical.",
      "The CryoNano 4K Microscope combines Ultra-HD 4K imaging, Infinity-corrected apochromatic optics, Long working distance observation, Integrated measurement tools, Large field-of-view inspection, Precision sample positioning, and Real-time image processing to create a complete inspection and analysis workstation."
    ],
    advantages: [
      "Ultra-HD 4K imaging",
      "Infinity-corrected apochromatic optics",
      "Long working distance observation",
      "Integrated measurement tools",
      "Large field-of-view inspection",
      "Precision sample positioning",
      "Real-time image processing"
    ]
  },

  keyFeatures: [
    { icon: "Camera", title: "Ultra-HD 4K Imaging", desc: "Capture every detail with true Ultra-HD resolution. 3840 × 2160 Ultra-HD Resolution, 4K Real-Time Video Output, Up to 60 Frames per Second, Large Format Imaging Sensor, High Dynamic Range, Low Noise Electronics, and Exceptional Color Reproduction." },
    { icon: "Cpu", title: "Advanced Sony Imaging Sensor", desc: "At the heart of the microscope is a high-performance Sony photosensitive CMOS sensor optimized for scientific imaging. High Sensitivity, Low Noise Performance, Superior Contrast, Excellent Edge Definition, Fast Image Acquisition, and Stable Long-Term Operation." },
    { icon: "Focus", title: "Infinity-Corrected Apochromatic Optics", desc: "The optical system utilizes premium Infinity Plan Long Working Distance (LWD) APO objectives to achieve outstanding image quality. Flat Field Imaging, Reduced Chromatic Aberration, High Resolution, Excellent Color Fidelity, High Contrast Observation, and Long Working Distance Design." },
    { icon: "Eye", title: "Long Working Distance Observation", desc: "The integrated 20X APO objective provides 20X Optical Magnification, 10 mm Working Distance, Ample Space for Samples, Easy Probe Access, and Comfortable Manipulation. Ideal for semiconductor devices, electronic assemblies, MEMS structures, and materials research applications." },
    { icon: "Maximize2", title: "Motorized 4K Zoom Lens", desc: "The microscope incorporates a modular zoom system with a 1:10 zoom ratio. Continuous Zoom Control, Wide Magnification Range, Large Field of View, High Optical Resolution, Precise Image Scaling, and Stable Optical Alignment. The modular architecture allows future upgrades." },
    { icon: "Sun", title: "Epi-Illumination System", desc: "Integrated vertical illumination provides uniform, shadow-free lighting for reflective samples. Perpendicular Light Incidence, Improved Surface Visibility, Enhanced Contrast, Ideal for Metal Surfaces, Semiconductor Inspection, PCB Analysis, and Wafer Characterization." }
  ],

  coreTechnologies: [
    {
      id: "imaging",
      title: "Integrated Digital Measurement Platform",
      subtitle: "MEASUREMENT WORKSTATION",
      type: "software",
      description: "The CryoNano 4K Microscope is more than an imaging system—it is a complete measurement workstation. Real-time measurements can be performed directly on the live image without additional software.",
      bullets: [
        "Distance Measurement",
        "Angle Measurement",
        "Radius & Diameter Measurement",
        "Parallel Line Analysis",
        "Concentric Circle Measurement",
        "Point-to-Line Measurement",
        "Geometric Feature Analysis"
      ],
      platforms: ["Live 4K Display", "Image Capture", "Video Recording", "Annotation", "Scale Bars", "Data Export"]
    },
    {
      id: "calibration",
      title: "Calibration & Metrology Tools",
      subtitle: "PRECISION CALIBRATION",
      type: "software",
      description: "Built-in calibration routines ensure accurate dimensional measurements. Ideal for dimensional inspection and quality assurance workflows.",
      bullets: [
        "Line Calibration",
        "Circle Calibration",
        "Geometric Calibration",
        "User-Defined Standards",
        "Measurement Verification"
      ],
      platforms: ["Line Calibration", "Circle Calibration", "Geometric Calibration", "User-Defined Standards", "Measurement Verification"]
    },
    {
      id: "software",
      title: "Intelligent Imaging Software",
      subtitle: "INTEGRATED PLATFORM",
      type: "software",
      description: "The integrated Linux-based imaging platform provides advanced functionality without requiring an external PC. Researchers can capture, analyze, and archive results within a single software environment.",
      bullets: [
        "Live 4K Display",
        "Image Capture & Video Recording",
        "Image Annotation",
        "Measurement Overlay",
        "Scale Bars",
        "Image Storage & Playback Review",
        "Data Export"
      ],
      platforms: ["Linux OS", "HDMI 2.0", "Wireless Mouse/Keyboard", "Up to 32M HD Images"]
    },
    {
      id: "precision",
      title: "Precision Sample Positioning",
      subtitle: "SAMPLE STAGE",
      type: "hardware",
      description: "A precision X-Y positioning stage enables smooth sample movement and accurate positioning during inspection and measurement. The stage is ideal for semiconductor devices, wafers, MEMS structures, PCBs, and advanced materials samples.",
      bullets: [
        "Controlled Sample Translation",
        "Precise Area Scanning",
        "Easy Feature Location",
        "Repeatable Positioning",
        "Improved Inspection Efficiency"
      ],
      highlights: [
        { label: "Stage Type", val: "Precision X-Y" },
        { label: "Construction", val: "Aluminum Alloy" },
        { label: "Finish", val: "Anodized" },
        { label: "Control", val: "Fine-Tuning Hand Wheel" }
      ]
    }
  ],

  specifications: {
    "Optical Specifications": [
      { param: "Optical System", spec: "Infinity-Corrected APO" },
      { param: "Objective Type", spec: "Long Working Distance Apochromatic" },
      { param: "Objective Magnification", spec: "20X" },
      { param: "Working Distance", spec: "10 mm" },
      { param: "Optical Design", spec: "Flat Field" },
      { param: "Focus Type", spec: "Infinity Focus" },
      { param: "Zoom Ratio", spec: "10:1" },
      { param: "Illumination", spec: "Epi-Illumination" }
    ],
    "Imaging Specifications": [
      { param: "Sensor Type", spec: "Sony CMOS" },
      { param: "Sensor Size", spec: "1/1.8\"" },
      { param: "Resolution", spec: "3840 × 2160" },
      { param: "Video Output", spec: "4K Ultra-HD" },
      { param: "Frame Rate", spec: "60 fps" },
      { param: "Interface", spec: "HDMI 2.0" },
      { param: "Image Storage", spec: "Up to 32 Million Pixels" },
      { param: "Processing Platform", spec: "Integrated Linux OS" }
    ],
    "Mechanical Specifications": [
      { param: "Construction", spec: "High-Strength Aluminum Alloy" },
      { param: "Surface Treatment", spec: "Anodized Finish" },
      { param: "Focus Control", spec: "Fine-Tuning Hand Wheel" },
      { param: "Stage Type", spec: "Precision X-Y Stage" },
      { param: "Illumination Source", spec: "Adjustable LED Point Source" },
      { param: "Input Devices", spec: "Wireless Mouse & Keyboard" }
    ]
  },

  applications: [
    "Semiconductor Inspection",
    "Materials Science",
    "MEMS & Microsystems",
    "Electronics Manufacturing",
    "Research Laboratories",
    "Quality Assurance"
  ],

  configurations: [
    "Motorized zoom upgrade",
    "Additional APO objectives",
    "Custom stage configurations",
    "Advanced measurement software",
    "Automated inspection routines",
    "Multi-sample holders",
    "High-speed imaging modules",
    "Custom illumination options"
  ],

  gallery: [
    { url: "/images/ultraclear-hero.png", caption: "4K Digital Inspection Microscope" },
    { url: "/images/ultraclear-optical.png", caption: "Apochromatic Optical System" },
    { url: "/images/ultraclear-imaging.png", caption: "Ultra-HD 4K Imaging Output" }
  ],

  cta: {
    tagline: "Ultra-HD Imaging. Precision Measurement. Professional Results."
  }
},

  // "2d-transfer-motorised": {
  //   category: "2D Materials Prototyping",
  //   name: "2D TRANSFER SYSTEM with Motorised Controller",
  //   subtitle: "Motorised Control of XY, Z, R & Tilt Axes",
  //   // Replace with the cropped image of the full system from Image 1 or 2
  //   heroImage: "/images/2d-transfer-hero.png", 
  //   gallery: [],
  //   overview: [
  //     "CRYO introduces a state-of-the-art fully motorised 2D material transfer system, engineered to handle atomic-thin flakes with precise deterministic placement.",
  //     "The integrated design provides sub-micron resolution control across XY, Z, Rotation, and Tilt axes, making it an ideal research-grade solution for graphene, TMDCs, and advanced materials development.",
  //     "This system is designed for seamless integration and customization, enabling precise deterministic placement and multilayer heterostructure assembly, essential for twistronics, and nanoscale device fabrication.",
  //   ],
  //   keyFeatures: [
  //     "Fully motorised XY stages with sub-micron resolution",
  //     "Precise motorised rotation and tilt control of both sample and transfer probe",
  //     "Motorised Z-axis with fine-focus capability",
  //     "Integrated high-resolution imaging system with motorised zoom",
  //     "Vacuum chuck sample stage",
  //     "User-friendly control software",
  //     "Compact footprint",
  //     "Vibration isolation system (optional)"
  //   ],
  //   //NEW FOR ANIMATION: Subsystems Structured Data for interactive diagram
  //   subsystems: [
  //     { id: "stage", title: "Motorised stages (XY, Z, R, T)", icon: Cpu, desc: "High-precision motorised control" },
  //     { id: "holder", title: "Vacuum Chuck Sample Stage", icon: Layers, desc: "Standard 2-inch, upgradable to 4-inch" },
  //     { id: "transfer", title: "Transfer Heads (Heating & Non-heating)", icon: Zap, desc: "Modular, customisable configurations" },
  //     { id: "optical", title: "Integrated Imaging System", icon: Camera, desc: "Microscope, camera, & motorised zoom" },
  //     { id: "control", title: "Control Electronics & Software", icon: Settings, desc: "User-friendly PC control platform" }
  //   ],
  //   // NEW FOR ANIMATION: Special section for special visualizer
  //   automationProcess: [
  //     "Deterministic Placement",
  //     "Multilayer Heterostructure Assembly",
  //     "Twist angle control",
  //     "Flake mapping and search (optional)",
  //     "Automated sample and probe alignment (optional)"
  //   ],
  //   applications: [
  //     { title: "Graphene Devices", desc: "Fabrication of high-performance graphene-based electronics." },
  //     { title: "TMDCs and Van der Waals", desc: "Assembly of Transition Metal Dichalcogenides and heterostructures." },
  //     { title: "Twistronics Research", desc: "Precise twist angle control for novel quantum material studies." },
  //     { title: "Flexible Electronics", desc: "Deterministic transfer of nanoscale components onto flexible substrates." },
  //     { title: "Photovoltaic Cells", desc: "Development and testing of advanced solar cell materials." },
  //     { title: "Sensor Development", desc: "Integrating 2D materials for high-sensitivity sensor applications." }
  //   ],
  //   // NEW FOR ANIMATION: Structured for Auto-playing Showcase
  //   designHighlights: [
  //     { title: "Fully Automated deterministic placement", desc: "Sub-micron repeatability across mapping grids.", component: "Logic Core" },
  //     { title: "Customisable Transfer Heads", desc: "Modular heating stages or custom probe options.", component: "Transfer Arm" },
  //     { title: "Motorised Zoom & High-Resolution Imaging", desc: "Integrated digital microscope path with motorised focus.", component: "Optical Path" },
  //     { title: "PC-Based Control Software", desc: "User-friendly interface for axis control and sequence automation.", component: "Software UI" }
  //   ],
  //   modularitySpecs: {
  //     "Technical Specifications": [
  //       "Fully fully motorised 2D material transfer system with customised options",
  //       "Deterministic placement for twistronics and Multilayer Heterostructure Assembly",
  //       "Integrated vibration isolation option available"
  //     ]
  //   },
  //   // NEW FOR ANIMATION: Detailed Specs Structured for a special visualization
  //   technicalSpecsStructured: {
  //     "Motorised Stages": [
  //       { axis: "XY Travel Range", spec: "Up to 100 mm", res: "0.1 µm" },
  //       { axis: "Z Travel Range", spec: "Up to 25 mm", res: "0.1 µm" },
  //       { axis: "Rotation (R) Range", spec: "360°", res: "0.01°" },
  //       { axis: "Tilt (T) Range", spec: "±5°", res: "0.01°" },
  //     ],
  //     "Microscope/Optical": [
  //       { feature: "Imaging System", spec: "Integrated High-Resolution Camera", res: "Sub-micron visible" },
  //       { feature: "Zoom", spec: "Integrated Motorised Zoom", res: "Manual/Software control" },
  //       { feature: "Lighting", spec: "LED", res: "Adjustable Brightness" },
  //     ],
  //     "Sample Holder": [
  //       { component: "Sample Holder Size", spec: "Standard 2 inch (up to 4 inch option)", res: "Vacuum chuck" },
  //       { component: "Heating Stage", spec: "Heating up to 200°C option", res: "Optional" },
  //     ],
  //     "Controller": [
  //       { type: "Control Unit", spec: "Compact Footprint", res: "Stand-alone Controller Box" },
  //       { type: "Interface", spec: "USB", res: "Compatible with PC-Based Software" },
  //     ]
  //   }
  // },


"2d-transfer-motorised": {
  category: "2D Materials Prototyping",
  name: "Motorized 2D Transfer & Inspection System",
  subtitle: "Precision Transfer, Alignment & Optical Characterization for Advanced Materials Research",
  statusBadge: "2D MATERIALS",
  
  hero: {
    title: "Motorized 2D Transfer & Inspection System",
    subtitle: "Precision Transfer, Alignment & Optical Characterization for Advanced Materials Research",
    description: "The CryoNano Motorized 2D Transfer & Inspection System is a fully integrated platform for deterministic assembly, inspection, and characterization of 2D materials, van der Waals heterostructures, semiconductor devices, and advanced nanoscale structures. Combining high-precision microstepping motion control, motorized optical imaging, automated layer analysis, twist-angle measurement, and temperature-assisted transfer capabilities, the system provides researchers with a complete solution for fabrication and characterization workflows. Designed for graphene research, twistronics, quantum devices, semiconductor prototyping, and advanced materials laboratories, the platform delivers synchronized motion, precision alignment, and high-resolution imaging within a single integrated environment."
  },

  quickSpecs: [
    { label: "XYZ Resolution", value: "0.1 µm" },
    { label: "Angular Res.", value: "0.005°" },
    { label: "Thermal Stage", value: "Up to 200°C" },
    { label: "Optical Zoom", value: "10:1" }
  ],

  overview: {
    title: "Built for Modern 2D Materials Research",
    paragraphs: [
      "The fabrication of next-generation devices requires more than simple positioning. Researchers must accurately align microscopic flakes, control pickup and release dynamics, verify layer thickness, measure twist angles, and document every fabrication step.",
      "The CryoNano Motorized Transfer System integrates all of these functions into a unified workstation that accelerates device fabrication while improving reproducibility and yield."
    ],
    advantages: [
      "Graphene device fabrication",
      "Twisted bilayer graphene research",
      "Moiré superlattice engineering",
      "Van der Waals heterostructure assembly",
      "TMDC device fabrication",
      "Quantum transport devices",
      "Semiconductor prototyping",
      "Nanoelectronics research",
      "Materials characterization",
      "Automated optical inspection (AOI)"
    ]
  },

  keyFeatures: [
    { icon: "Move", title: "Precision XYZ + XYθ Motion Control", desc: "The system combines independent XYZ positioning with a high-precision XYθ alignment platform. Motorized XYZ positioning, Precision XYθ alignment stage, Closed-loop microstepping control, Sub-micron positioning capability, 360° rotational alignment, Automated positioning sequences, and Repeatable multi-layer assembly. The dual-stage architecture enables accurate flake placement, controlled contact formation, and precise rotational alignment for advanced twistronic structures." },
    { icon: "RotateCw", title: "Ultra-Precise Angular Alignment", desc: "Twistronic and moiré devices demand exceptional rotational accuracy. The integrated θ-stage provides Continuous 360° rotation, Resolution down to 0.005°, Angular accuracy better than ±0.02°, Smooth worm-gear drive mechanism, and Stable alignment during transfer operations. This capability enables fabrication of twisted bilayer graphene, heterostructures, and angle-dependent quantum devices." },
    { icon: "Camera", title: "High-Resolution 4K Imaging System", desc: "A professional machine-vision imaging system provides crystal-clear visualization. 8 MP CMOS Sensor, Sony Global Shutter Architecture, 3840 × 2160 Ultra-HD Resolution, 45 fps Full-Frame Acquisition, Hardware Trigger Support, and High-Speed USB 3.0 Interface. The global shutter architecture eliminates motion distortion and ensures accurate imaging during automated scanning." },
    { icon: "Maximize2", title: "Motorized Zoom Microscope", desc: "Integrated apochromatic optics provide superior image quality. Motorized Zoom Control, 0.3× – 3.0× Optical Zoom, 10:1 Zoom Ratio, 20× Infinity-Corrected Optics, High Contrast Imaging, Minimal Chromatic Aberration, and Software-Controlled Focus. Delivers excellent image quality for flake identification, alignment, and defect inspection." },
    { icon: "ThermometerSnowflake", title: "Temperature-Assisted Transfer", desc: "An integrated precision heating platform enables thermal-assisted pickup and release. Ambient to 200°C Operation, Precision PID Control, ±0.5°C Accuracy, Real-Time Temperature Monitoring, Thermocouple Feedback, and OFHC Copper Heating Stage. Temperature-controlled transfer improves adhesion control and transfer success rates." },
    { icon: "Settings", title: "Advanced Software Suite", desc: "The platform includes an integrated software environment combining motion control, imaging, measurement, and material analysis. Absolute/Relative positioning, Jog control, Multi-axis synchronization, Automated motion sequences, Position storage and recall, and Triggered imaging workflows. Plus Live 4K video, Image capture, Video recording, Time-lapse acquisition, Distance/Angle measurement, Area calculation, Calibration tools, and Scale bars." }
  ],

  coreTechnologies: [
    {
      id: "motion",
      title: "Precision Motion Control",
      subtitle: "MOTION ARCHITECTURE",
      type: "hardware",
      description: "The system is powered by a high-performance multi-axis motion controller providing advanced microstepping architecture, Up to 1/256 microstepping, USB 3.0 connectivity, Ethernet support, Opto-isolated inputs, External trigger capability, Emergency stop integration, and Multi-axis synchronization. Designed for high-speed, high-accuracy positioning in demanding research environments.",
      bullets: [
        "Advanced microstepping architecture",
        "Up to 1/256 microstepping",
        "USB 3.0 & Ethernet connectivity",
        "Opto-isolated inputs & external trigger",
        "Emergency stop integration",
        "Multi-axis synchronization"
      ],
      highlights: [
        { label: "Microstepping", val: "Up to 1/256" },
        { label: "Resolution", val: "0.1 µm" },
        { label: "Interface", val: "USB 3.0" },
        { label: "Load Capacity", val: "5 kg" }
      ]
    },
    {
      id: "imaging",
      title: "Integrated 2D Materials Analysis Tools",
      subtitle: "AUTOMATED ANALYSIS",
      type: "software",
      description: "Automated Layer Mapping instantly identifies and visualizes different material thicknesses using optical contrast analysis. The software automatically generates color-coded maps that distinguish monolayers, bilayers, few-layer regions, multilayer structures, and substrate background. Enables rapid characterization of graphene, hBN, TMDCs, and other layered materials.",
      bullets: [
        "Color-coded layer mapping",
        "Monolayer & bilayer identification",
        "Few-layer region detection",
        "Multilayer structure analysis",
        "Substrate background differentiation"
      ],
      platforms: ["Optical Contrast Analysis", "Layer Mapping", "Thickness Detection", "Automated Characterization", "Data Export"]
    },
    {
      id: "twist",
      title: "Twist Angle Detector",
      subtitle: "TWISTRONICS TOOL",
      type: "software",
      description: "Purpose-built for twistronics and heterostructure fabrication. The user simply identifies the crystal edges of overlapping layers and the software automatically calculates absolute twist angle, relative layer orientation, and rotational alignment error. Ideal for twisted bilayer graphene, moiré structures, and angle-sensitive quantum devices.",
      bullets: [
        "Automated twist angle calculation",
        "Relative layer orientation",
        "Rotational alignment error detection",
        "Purpose-built for twistronics"
      ],
      platforms: ["Twisted Bilayer Graphene", "Moiré Structures", "Angle-Sensitive Quantum Devices", "Heterostructure Fabrication"]
    },
    {
      id: "thermal",
      title: "Temperature-Assisted Transfer",
      subtitle: "THERMAL CONTROL",
      type: "hardware",
      description: "An integrated precision heating platform enables thermal-assisted pickup and release processes with precision PID control and real-time temperature monitoring.",
      bullets: [
        "Ambient to 200°C Operation",
        "Precision PID Control",
        "±0.5°C Accuracy",
        "Real-Time Temperature Monitoring",
        "OFHC Copper Heating Stage"
      ],
      highlights: [
        { label: "Temperature Range", val: "Up to 200°C" },
        { label: "Accuracy", val: "±0.5°C" },
        { label: "Control", val: "PID" },
        { label: "Stage Material", val: "OFHC Copper" }
      ]
    }
  ],

  specifications: {
    "XYZ Positioning Stage": [
      { param: "Axes", spec: "X, Y, Z" },
      { param: "Travel Range", spec: "25 mm × 25 mm × 25 mm" },
      { param: "Drive Type", spec: "Precision LM Screw" },
      { param: "Guide System", spec: "Linear Rail Guides" },
      { param: "Resolution", spec: "1 µm Full Step" },
      { param: "Microstepping Resolution", spec: "Down to 0.6 µm" },
      { param: "Load Capacity", spec: "5 kg" }
    ],
    "XYθ Alignment Stage": [
      { param: "X Travel", spec: "25 mm" },
      { param: "Y Travel", spec: "25 mm" },
      { param: "Rotation Range", spec: "360° Continuous" },
      { param: "XY Resolution", spec: "0.1 µm" },
      { param: "Angular Resolution", spec: "0.005°" },
      { param: "Angular Accuracy", spec: "±0.02°" },
      { param: "Vertical Load Capacity", spec: "3 kg" }
    ],
    "Motion Controller": [
      { param: "Microstepping", spec: "Up to 1/256" },
      { param: "Connectivity", spec: "USB 3.0, Ethernet" },
      { param: "Inputs", spec: "Opto-isolated, External Trigger" },
      { param: "Safety", spec: "Emergency Stop Integration" },
      { param: "Synchronization", spec: "Multi-Axis" }
    ]
  },

  applications: [
    "2D Materials & Van der Waals Heterostructures",
    "Twistronics Research",
    "Quantum Device Prototyping",
    "Semiconductor R&D",
    "Materials Characterization",
    "Automated Optical Inspection"
  ],

  configurations: [
    "Heating stage upgrade",
    "Vibration isolation system",
    "Custom sample holders",
    "Advanced software modules",
    "Automated flake mapping",
    "Multi-sample transfer capability",
    "High-speed imaging upgrade",
    "Custom optical configurations"
  ],

  gallery: [
    { url: "/images/2d-transfer-hero.png", caption: "Motorized 2D Transfer System" },
    { url: "/images/2d-transfer-stage.png", caption: "Precision XYθ Alignment Stage" },
    { url: "/images/2d-transfer-imaging.png", caption: "4K Imaging & Analysis" }
  ],

  cta: {
    tagline: "Precision Alignment. Intelligent Inspection. Advanced Materials Assembly."
  }
},

  // "spectroscopy-magnet": {
  //   category: "Electromagnets",
  //   name: "Variable Gap Electromagnet System",
  //   subtitle: "High Field Strength and Unmatched Uniformity for Research.",
  //   // Replace with a high-resolution, light-themed product image from brochure
  //   heroImage: "/images/variable-gap-electromagnet.png", 
  //   gallery: [],
  //   overview: [
  //     "CRYO presents a versatile Variable Gap Electromagnet System, meticulously engineered to produce high magnetic field strengths with sub-micron uniformity. This system is designed for researchers demanding precise, deterministic variable field generation.",
  //     "The integrated modular architecture allows for seamless integration into custom experimental setups. With support for both air and water cooling, sub-micron resolution gap automated control, and high purity soft iron core optimization, this system delivers consistent, stable long-term performance.",
  //     "Available in multiple standardized and custom model configurations, including the PE-series, this platform is compatible with high-performance bipolar power supplies, making it an ideal research-grade solution for spintronics, magneto-optics, and advanced materials development.",
  //   ],
  //   keyFeatures: [
  //       "Uniform Magnetic Field",
  //       "Variable Pole Gap",
  //       "Variable Pole Shape",
  //       "Custom designs are available",
  //       "Water Cooled Electromagnets",
  //       "Air Cooled Electromagnets",
  //       "High Magnetic Field",
  //       "Bipolar Power Supply Compatibility",
  //       "Robust construction",
  //       "High Purity Soft Iron Core Optimization"
  //   ],
  //   // NEW STRUCTURED DATA: Models & key performance indicators (Images 1 & 2)
  //   models: [
  //     { id: "50mm", name: "50mm Pole Diameter", field_T: 1.85, field_Oe: 18500, maxGap: 50, cooling: "Water" },
  //     { id: "100mm", name: "100mm Pole Diameter", field_T: 2.2, field_Oe: 22000, maxGap: 50, cooling: "Water" },
  //     { id: "PE-1", name: "PE-1 Standard Model", field_T: 1.0, field_Oe: 10000, maxGap: 50, cooling: "Air/Water" },
  //     { id: "PE-2", name: "PE-2 Standard Model", field_T: 1.0, field_Oe: 10000, maxGap: 60, cooling: "Air/Water" },
  //     { id: "PE-3", name: "PE-3 Standard Model", field_T: 0.6, field_Oe: 6000, maxGap: 80, cooling: "Air/Water" },
  //   ],
  //   // NEW STRUCTURED DATA: Specific Performance Points for Interactive Graph (Image 3)
  //   // Points simulated to match graph curves. Data: Field (Tesla) vs Current (Amps)
  //   performanceCurves: {
  //     "PE-1": [ { current: 0, field: 0.00 }, { current: 0.5, field: 0.23 }, { current: 1.0, field: 0.51 }, { current: 1.5, field: 0.73 }, { current: 2.0, field: 0.89 }, { current: 2.5, field: 1.00 } ],
  //     "PE-2": [ { current: 0, field: 0.00 }, { current: 0.5, field: 0.20 }, { current: 1.0, field: 0.44 }, { current: 1.5, field: 0.62 }, { current: 2.0, field: 0.75 }, { current: 2.5, field: 0.85 }, { current: 3.0, field: 1.00 } ],
  //     "PE-3": [ { current: 0, field: 0.00 }, { current: 1.0, field: 0.22 }, { current: 2.0, field: 0.46 }, { current: 3.0, field: 0.60 } ]
  //   },
  //   // NEW STRUCTURED DATA: Matrix layout for specification tables (Images 1, 2, 3)
  //   // Structured by Model, then by specification key.
  //   modelMatrix: {
  //       "Technical Specifications": {
  //           columns: ["Metric", "PE-1", "PE-2", "PE-3"],
  //           rows: [
  //               ["Field Strength (Gap: 10mm)", "1.0 T / 10,000 Oe", "1.0 T / 10,000 Oe", "0.6 T / 6,000 Oe"],
  //               ["Gap Range", "0 – 50 mm", "0 – 60 mm", "0 – 80 mm"],
  //               ["Max Gap Range (PE Series)", "50 mm", "60 mm", "80 mm"],
  //               ["Current (Max)", "2.5 Amps", "3.0 Amps", "3.0 Amps"],
  //               ["Coil Resistance", "12 Ω", "13 Ω", "23 Ω"],
  //               ["Power Consumption", "75 Watts (Max)", "117 Watts (Max)", "207 Watts (Max)"],
  //               ["Cooling Method", "Air or Water-Cooled", "Air or Water-Cooled", "Air or Water-Cooled"],
  //               ["Pole Shape Options", "Customisable: 2-stage/4-stage/Radial", "Customisable: 2-stage/4-stage/Radial", "Customisable: 2-stage/4-stage/Radial"],
  //               ["Robust Construction", "ISO 9001:2008 Certified Design", "ISO 9001:2008 Certified Design", "ISO 9001:2008 Certified Design"]
  //           ]
  //       },
  //       "Physical Specifications": {
  //           columns: ["Metric", "PE-1", "PE-2", "PE-3"],
  //           rows: [
  //               ["Weight", "60 kg (Approx)", "70 kg (Approx)", "75 kg (Approx)"],
  //               ["Dimensions (L x W x H)", "300 x 200 x 250 mm", "320 x 210 x 260 mm", "330 x 220 x 270 mm"],
  //               ["Sub-micron Resolution", "< 1 µm (With Encoder)", "< 1 µm (With Encoder)", "< 1 µm (With Encoder)"]
  //           ]
  //       }
  //   },
  //   probingCompatibility: {}, // Removed as not microscope related
  //   designHighlights: [
  //       { title: "Bipolar power supply compatible", desc: "Supports rapid field inversion and complex AC field generation sequences.", component: "Logic Core" },
  //       { title: "High Purity soft iron core optimization", desc: "Designed for stable long-term performance with minimal thermal drift.", component: "Transfer Arm" },
  //       { title: "Iso-Certified Robust Construction", desc: "Engineered for repeatable sub-micron variable gap automated control.", component: "Optical Path" },
  //       { title: "Variable Pole Gap and Pole Shape", desc: "Provides ultimate flexibility for custom deterministic placement of magnetic experimental conditions.", component: "Software UI" }
  //   ],
  //   modularitySpecs: {
  //     "Custom Designs": [
  //       "ISO-Certified custom pole diameter configurations",
  //       "Multiple standardized and custom pole shape options",
  //       "Water cooled and air cooled system optimization available",
  //       "Optional vibration isolation system available",
  //       "High-performance bipolar power supply integration available"
  //     ]
  //   },
  // },


  // "spectroscopy-magnet": {
  //   category: "Electromagnets",
  //   name: "PL Compact Optical Access Electromagnet",
  //   subtitle: "Ultra-compact high-field dipole electromagnet optimized for spectroscopy, optical measurements, laser experiments, and vibration-sensitive scientific research.",
  //   specStrip: [
  //     "Compact 14 kg System", "Optical Access Optimized", "80 A High Current Operation",
  //     "Low-Profile Coil Geometry", "1.5 kW Power Supply", "Water-Cooled Architecture"
  //   ],
  //   heroImage: "/images/spectroscopy-electromagnet.png",
  //   gallery: [
  //     "/images/spectroscopy-optics.png",
  //     "/images/spectroscopy-profile.png"
  //   ],
  //   overview: [
  //     "The PL Electromagnet is one of the smallest and lightest high-performance dipole electromagnets developed by Cryo Nano Labs, engineered specifically for precision laboratory research and industrial scientific applications requiring compact high magnetic fields with superior optical accessibility.",
  //     "Designed with a unique low-profile coil geometry and optimized magnetic architecture, the PL Electromagnet delivers powerful magnetic field performance while minimizing optical obstruction. Its lightweight mechanical structure enables direct integration onto optical tables, spectroscopy platforms, laser systems, and vibration-sensitive experimental setups.",
  //     "The system is ideal for applications where compact size, optical access, thermal stability, and magnetic field performance must coexist within limited laboratory space."
  //   ],
  //   overviewRequirements: [
  //     "Small magnetic field volumes", "High optical accessibility", "Minimal beam obstruction", 
  //     "Stable optical table integration", "Compact laboratory footprint"
  //   ],
  //   overviewIdealFor: [
  //     "Spectroscopy systems", "Laser measurements", "Magneto-optical experiments", 
  //     "Imaging systems", "Precision optical instrumentation"
  //   ],
  //   overviewFooter: "The system combines compact dipole magnetic architecture with advanced thermal management and low-noise current delivery for stable experimental operation.",
  //   keyFeatures: [
  //     { title: "Optical Access Optimized", desc: "Low-profile coil geometry minimizes beam obstruction and enables direct optical access through the magnetic field region.", icon: "Eye" },
  //     { title: "Compact Lightweight Design", desc: "At approximately 14 kg, the PL Electromagnet is one of the lightest research-grade dipole electromagnets in its performance class.", icon: "PackageSearch" },
  //     { title: "Optical Table Compatible", desc: "Stable mounting geometry designed for direct integration onto optical tables and vibration-sensitive experimental platforms.", icon: "Layers" },
  //     { title: "Unique Low-Profile Coil System", desc: "Patent-pending compact coil architecture reduces overall magnet height while maintaining strong magnetic field generation.", icon: "Scaling" },
  //     { title: "Water-Cooled Thermal Architecture", desc: "Thermally encapsulated coils with copper-aluminium cooling jackets support stable high-current operation.", icon: "Thermometer" },
  //     { title: "Low Ripple Power Electronics", desc: "IGBT-based high-current power supply provides stable low-noise magnetic field operation for precision measurements.", icon: "Zap" }
  //   ],
  //   specs: {
  //     "Magnet Type": "Compact Dipole Electromagnet",
  //     "Mechanical Pole Size": "38 mm × 38 mm",
  //     "Pole Face Diameter": "20 mm",
  //     "Pole Gap": "10 mm",
  //     "Approximate Weight": "14 kg",
  //     "Coil Design": "Patent-Pending Low-Profile Geometry",
  //     "Cooling Method": "Water-Cooled Thermally Encapsulated Coils",
  //     "Cooling Structure": "Copper-Aluminium Cooling Jackets",
  //     "Power Supply Type": "IGBT High-Current Power Supply",
  //     "Maximum Current": "Up to 80 A",
  //     "Power Supply Power": "1.5 kW",
  //     "Power Supply Noise": "Low Ripple Unipolar Design",
  //     "Mounting Compatibility": "Optical Table Compatible"
  //   },
  //   opticalAccess: {
  //     title: "Engineered for Spectroscopy & Optical Research",
  //     desc: "The PL Electromagnet is specifically optimized for optical experiments where beam clearance and accessibility are critical.",
  //     highlights: ["Minimal optical obstruction", "Low-profile coil geometry", "Open beam path architecture", "Stable optical alignment", "Compact magnetic footprint", "Reduced interference with optics"],
  //     idealFor: ["Raman spectroscopy", "Magneto-optical Kerr effect measurements", "Laser characterization", "Fluorescence experiments", "Optical imaging systems", "Beamline research setups"]
  //   },
  //   thermalManagement: {
  //     title: "Advanced Water-Cooled Coil Architecture",
  //     desc: "The PL Electromagnet integrates thermally encapsulated coils with copper-aluminium cooling structures for efficient heat dissipation during continuous high-current operation.",
  //     features: ["Closed-loop water cooling", "Copper-aluminium thermal jackets", "Reduced coil thermal drift", "Stable long-duration operation", "Compact thermal architecture"],
  //     footer: "The cooling system enables high current density while maintaining thermal stability required for precision measurements."
  //   },
  //   powerSupply: {
  //     title: "Precision Low-Noise Current Delivery",
  //     desc: "The magnet is powered using a high-current IGBT-based low ripple unipolar power supply optimized for stable magnetic field generation.",
  //     features: ["Up to 80 A current output", "1.5 kW power capability", "Low ripple current regulation", "Stable DC magnetic field generation", "Compact laboratory integration", "Precision current control"],
  //     idealFor: ["Sensitive spectroscopy systems", "Low-noise measurements", "Optical instrumentation", "Precision scientific experiments"]
  //   },
  //   mechanicalDesign: {
  //     title: "Compact Scientific Instrumentation Architecture",
  //     desc: "The PL Electromagnet is designed for laboratories requiring:",
  //     requirements: ["Small experimental footprint", "Portable magnet systems", "Easy optical alignment", "Flexible experimental configuration", "Stable vibration-sensitive operation"],
  //     highlights: ["Lightweight 14 kg structure", "Stable mounting base", "Precision-machined magnetic poles", "Compact dipole geometry", "Laboratory-friendly integration"]
  //   },
  //   applications: [
  //     "Magneto-optical spectroscopy", "Raman spectroscopy", "Laser experiments", "Optical characterization", 
  //     "Imaging systems", "Sensor testing", "Hall measurements", "Semiconductor characterization", 
  //     "Materials science research", "Educational laboratory systems"
  //   ],
  //   optionalConfigs: [
  //     "Precision pole caps", "Adjustable pole gap configurations", "Optical breadboard mounts", 
  //     "Temperature monitoring", "Integrated Hall probes", "Remote current control", 
  //     "Water recirculation systems", "Custom optical access geometries"
  //   ]
  // },

  // src/data/products.ts record for "spectroscopy-magnet"
"spectroscopy-magnet": {
  category: "Electromagnets",
  name: "PL Compact Optical Access Electromagnet",
  subtitle: "Ultra-compact high-field dipole electromagnet optimized for spectroscopy, optical measurements, laser experiments, and vibration-sensitive scientific research.",
  statusBadge: "OPTICAL ELECTROMAGNET",
  
  hero: {
    title: "PL Compact Optical Access Electromagnet",
    subtitle: "Ultra-compact high-field dipole electromagnet optimized for spectroscopy, optical measurements, laser experiments, and vibration-sensitive scientific research.",
    description: "The PL Electromagnet is one of the smallest and lightest high-performance dipole electromagnets developed by Cryo Nano Labs, engineered specifically for precision laboratory research and industrial scientific applications requiring compact high magnetic fields with superior optical accessibility. Designed with a unique low-profile coil geometry and optimized magnetic architecture, the PL Electromagnet delivers powerful magnetic field performance while minimizing optical obstruction. Its lightweight mechanical structure enables direct integration onto optical tables, spectroscopy platforms, laser systems, and vibration-sensitive experimental setups."
  },

  quickSpecs: [
    { label: "Weight", value: "14 kg" },
    { label: "Current Operation", value: "80 A" },
    { label: "Power Supply", value: "1.5 kW" },
    { label: "Cooling", value: "Water-Cooled" }
  ],

  overview: {
    title: "Compact High-Performance Magnetic Platform",
    paragraphs: [
      "The PL Electromagnet is engineered for applications requiring small magnetic field volumes, high optical accessibility, minimal beam obstruction, stable optical table integration, and a compact laboratory footprint.",
      "The system is ideal for applications where compact size, optical access, thermal stability, and magnetic field performance must coexist within limited laboratory space.",
      "The system combines compact dipole magnetic architecture with advanced thermal management and low-noise current delivery for stable experimental operation."
    ],
    advantages: [
      "Spectroscopy systems",
      "Laser measurements",
      "Magneto-optical experiments",
      "Imaging systems",
      "Precision optical instrumentation"
    ]
  },

  keyFeatures: [
    { icon: "Eye", title: "Optical Access Optimized", desc: "Low-profile coil geometry minimizes beam obstruction and enables direct optical access through the magnetic field region." },
    { icon: "PackageSearch", title: "Compact Lightweight Design", desc: "At approximately 14 kg, the PL Electromagnet is one of the lightest research-grade dipole electromagnets in its performance class." },
    { icon: "Layers", title: "Optical Table Compatible", desc: "Stable mounting geometry designed for direct integration onto optical tables and vibration-sensitive experimental platforms." },
    { icon: "Scaling", title: "Unique Low-Profile Coil System", desc: "Patent-pending compact coil architecture reduces overall magnet height while maintaining strong magnetic field generation." },
    { icon: "Thermometer", title: "Water-Cooled Thermal Architecture", desc: "Thermally encapsulated coils with copper-aluminium cooling jackets support stable high-current operation." },
    { icon: "Zap", title: "Low Ripple Power Electronics", desc: "IGBT-based high-current power supply provides stable low-noise magnetic field operation for precision measurements." }
  ],

  coreTechnologies: [
    {
      id: "optical",
      title: "Engineered for Spectroscopy & Optical Research",
      subtitle: "OPTICAL ACCESS",
      type: "hardware",
      icon: "Eye",
      sideCaption: "MINIMAL BEAM OBSTRUCTION",
      description: "The PL Electromagnet is specifically optimized for optical experiments where beam clearance and accessibility are critical.",
      bullets: [
        "Minimal optical obstruction",
        "Low-profile coil geometry",
        "Open beam path architecture",
        "Stable optical alignment",
        "Compact magnetic footprint",
        "Reduced interference with optics"
      ],
      highlights: [
        { label: "Raman Spectroscopy", val: "Optimized" },
        { label: "Magneto-Optical Kerr", val: "Supported" },
        { label: "Laser Characterization", val: "Ideal" },
        { label: "Fluorescence", val: "Compatible" }
      ]
    },
    {
      id: "thermal",
      title: "Advanced Water-Cooled Coil Architecture",
      subtitle: "THERMAL MANAGEMENT",
      type: "hardware",
      icon: "Waves",
      sideCaption: "CONTINUOUS OPERATION",
      description: "The PL Electromagnet integrates thermally encapsulated coils with copper-aluminium cooling structures for efficient heat dissipation during continuous high-current operation.",
      bullets: [
        "Closed-loop water cooling",
        "Copper-aluminium thermal jackets",
        "Reduced coil thermal drift",
        "Stable long-duration operation",
        "Compact thermal architecture"
      ],
      highlights: [
        { label: "Current Density", val: "High" },
        { label: "Thermal Drift", val: "Reduced" },
        { label: "Heat Dissipation", val: "Efficient" },
        { label: "Operation", val: "Continuous" }
      ]
    },
    {
      id: "power",
      title: "Precision Low-Noise Current Delivery",
      subtitle: "POWER ELECTRONICS",
      type: "software", // Uses the dark pill layout for target platforms
      icon: "Zap",
      sideCaption: "STABLE DC GENERATION",
      description: "The magnet is powered using a high-current IGBT-based low ripple unipolar power supply optimized for stable magnetic field generation.",
      bullets: [
        "Up to 80 A current output",
        "1.5 kW power capability",
        "Low ripple current regulation",
        "Stable DC magnetic field generation",
        "Compact laboratory integration",
        "Precision current control"
      ],
      platforms: ["Sensitive spectroscopy systems", "Low-noise measurements", "Optical instrumentation", "Precision scientific experiments"]
    },
    {
      id: "mechanical",
      title: "Compact Scientific Instrumentation Architecture",
      subtitle: "MECHANICAL DESIGN",
      type: "protection", // Uses the red pill layout for requirements met
      icon: "Settings",
      sideCaption: "OPTICAL TABLE COMPATIBLE",
      description: "The PL Electromagnet is designed for laboratories requiring a small experimental footprint and portable magnet systems.",
      bullets: [
        "Lightweight 14 kg structure",
        "Stable mounting base",
        "Precision-machined magnetic poles",
        "Compact dipole geometry",
        "Laboratory-friendly integration"
      ],
      protects: ["Small experimental footprint", "Easy optical alignment", "Flexible configuration", "Vibration-sensitive operation"]
    }
  ],

  specifications: {
    "Magnetic & Mechanical": [
      { param: "Magnet Type", spec: "Compact Dipole Electromagnet" },
      { param: "Mechanical Pole Size", spec: "38 mm × 38 mm" },
      { param: "Pole Face Diameter", spec: "20 mm" },
      { param: "Pole Gap", spec: "10 mm" },
      { param: "Approximate Weight", spec: "14 kg" },
      { param: "Mounting Compatibility", spec: "Optical Table Compatible" }
    ],
    "Thermal & Coil Architecture": [
      { param: "Coil Design", spec: "Patent-Pending Low-Profile Geometry" },
      { param: "Cooling Method", spec: "Water-Cooled Thermally Encapsulated Coils" },
      { param: "Cooling Structure", spec: "Copper-Aluminium Cooling Jackets" }
    ],
    "Power & Electronics": [
      { param: "Power Supply Type", spec: "IGBT High-Current Power Supply" },
      { param: "Maximum Current", spec: "Up to 80 A" },
      { param: "Power Supply Power", spec: "1.5 kW" },
      { param: "Power Supply Noise", spec: "Low Ripple Unipolar Design" }
    ]
  },

  applications: [
    "Magneto-optical spectroscopy",
    "Raman spectroscopy",
    "Laser experiments",
    "Optical characterization",
    "Imaging systems",
    "Sensor testing",
    "Hall measurements",
    "Semiconductor characterization",
    "Materials science research",
    "Educational laboratory systems"
  ],

  configurations: [
    "Precision pole caps",
    "Adjustable pole gap configurations",
    "Optical breadboard mounts",
    "Temperature monitoring",
    "Integrated Hall probes",
    "Remote current control",
    "Water recirculation systems",
    "Custom optical access geometries"
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800", caption: "Optical Table Setup" },
    { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800", caption: "Low-Profile Coil Geometry" },
    { url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800", caption: "Spectroscopy Integration" }
  ],

  cta: {
    tagline: "Ready for High-Field Scientific Research?"
  }
},

  // "bitter-magnet": {
  //   category: "Electromagnets",
  //   name: "Bitter Type Electromagnet",
  //   subtitle: "(Air-Core DC Magnet)",
  //   tagline: "High-Field Air-Core DC Magnet Systems for Precision Research and Industrial Applications.",
  //   heroImage: "/images/bitter-magnet-hero.png", // Image 1 (Full system)
  //   gallery: [
  //     "/images/bitter-magnet-internal.png", // Image 2 (Cutaway view)
  //     "/images/bitter-magnet-specs.png"     // Image 3 (Plates/Coils)
  //   ],
  //   overview: [
  //     "Engineered for generating stable, high magnetic fields under continuous operation for advanced research environments.",
  //     "Our Bitter type electromagnets apply advanced precision machining and thermally managed cooling solutions to handle exceptionally high current densities and mechanical stresses."
  //   ],
  //   applications: [
  //     "Gyrotron Magnet Systems",
  //     "High-Power Microwave & RF Research",
  //     "Plasma Physics Experiments",
  //     "Accelerator & Beamline Laboratories",
  //     "Magnetic Field-Dependent Material Characterization"
  //   ],
  //   whyBitter: {
  //     description: "Unlike conventional wire-wound solenoids, CryoNano Bitter magnets use stacked copper plates forming a helical current path:",
  //     points: [
  //       "Extremely High Current Density",
  //       "Superior Heat Dissipation",
  //       "Excellent Mechanical Strength",
  //       "Scalable High-Field Architecture"
  //     ]
  //   },
  //   // Using numerical labels for the diagram integration
  //   systemArchitecture: [
  //     { id: "1.1", title: "Copper Bitter Plates", desc: "Precision-machined copper plates forming the core helical current path." },
  //     { id: "1.2", title: "Insulating Spacers", desc: "High-strength insulating spacers placed between plates." },
  //     { id: "1.3", title: "Cooling Channels", desc: "Aligned channels allowing axial flow of de-ionized water." },
  //     { id: "1.4", title: "Dual Coils (Series)", desc: "Dual concentric coils, series-connected for scalable high-field generation." }
  //   ],
  //   constructionDetails: [
  //     "Precision-machined copper Bitter plates",
  //     "High-strength insulating spacers",
  //     "Helical current path geometry",
  //     "Dual concentric coils, series-connected",
  //     "High mechanical robustness under Lorentz forces"
  //   ],
  //   coolingSystem: [
  //     "Axial De-ionized Water Cooling Architecture",
  //     "Cooling through aligned plate channels",
  //     "Typical inlet temperature ~10°C",
  //     "Pressure up to 12 bar",
  //     "Continuous-duty rated design"
  //   ],
  //   footers: [
  //     "Engineered for High-Field Stability • Built for Continuous Operation",
  //     "Advanced Thermal Engineering • Built for Continuous High-Current Operation",
  //     "Research-Grade High-Field Performance • Custom Engineered Systems"
  //   ],
  //   technicalSpecifications: {
  //     header: "Precision-engineered air-core DC Bitter magnet for stable high-field operation.",
  //     coreParameters: [
  //       { label: "Magnet Type", value: "Air-Core DC Bitter Electromagnet" },
  //       { label: "Bore Diameter", value: "65 mm" },
  //       { label: "Axial Length", value: "300 mm" },
  //       { label: "Maximum Central Field", value: "Up to 1.1 Tesla" },
  //       { label: "Field Profile", value: "Peak at center, symmetric axial decay" },
  //       { label: "Coil Configuration", value: "Dual concentric coils, series connected" }
  //     ],
  //     electricCoolingParameters: [
  //       { label: "Cooling Method", value: "De-ionized water cooling" },
  //       { label: "Cooling Flow Direction", value: "Axial through aligned Bitter plate channels" },
  //       { label: "Cooling Water Temperature", value: "~10 °C" },
  //       { label: "Cooling Water Pressure", value: "Up to 12 bar" },
  //       { label: "Operating Current", value: "~1000 A (application dependent)" },
  //       { label: "Continuous Operation", value: "Yes" }
  //     ]
  //   }
  // },

// "bitter-magnet": {
//     category: "Electromagnets",
//     name: "Florida Bitter-Type High Field Electromagnet",
//     subtitle: "Ultra-high current air-core Bitter magnet system engineered for continuous high magnetic field operation and advanced scientific research.",
//     specStrip: [
//       "1.1 Tesla Central Field", "1000+ Ampere Operation", "50 kW Power System", 
//       "Bitter Plate Architecture", "Water-Cooled Copper Stack", "Large 65 mm Bore"
//     ],
//     heroImage: "/images/bitter-magnet-hero.png",
//     gallery: [
//       "/images/bitter-magnet-cooling.png",
//       "/images/bitter-magnet-plates.png"
//     ],
//     overview: [
//       "The Florida Bitter-Type Electromagnet is a high-power air-core DC magnet system engineered for continuous high magnetic field generation in demanding scientific and industrial environments. Inspired by classic Florida Bitter magnet architecture, the system combines stacked copper Bitter plates, high-flow water cooling, and ultra-high current power delivery to achieve stable high magnetic fields with exceptional thermal performance.",
//       "The system follows the classic Bitter electromagnet design using stacked circular copper conducting plates separated by insulating spacers in a helical current path configuration. Unlike conventional wound coils, the Bitter plate architecture enables extremely high current densities and superior cooling efficiency for continuous high magnetic field generation.",
//       "Integrated water cooling channels pass directly through aligned holes in the copper plates to efficiently remove resistive heat generated by the ultra-high operating currents."
//     ],
//     keyFeatures: [
//       { title: "Bitter Plate Technology", desc: "Stacked copper Bitter plates with helical current flow architecture optimized for high-field generation and thermal dissipation.", icon: "Layers" },
//       { title: "Ultra-High Current Operation", desc: "Designed for continuous operation at nearly 1000 A or higher using industrial-grade power electronics.", icon: "Zap" },
//       { title: "Large Bore Access", desc: "65 mm inner diameter provides large experimental access for beamlines, plasma systems, and scientific instrumentation.", icon: "Crosshair" },
//       { title: "High-Efficiency Water Cooling", desc: "Parallel cooling channels integrated directly into the Bitter plates provide efficient thermal extraction during full-power operation.", icon: "Droplets" },
//       { title: "Precision Field Generation", desc: "Generates up to 1.1 Tesla central magnetic field with symmetrical axial field distribution.", icon: "Activity" },
//       { title: "Industrial Power Electronics", desc: "IGBT-based regulated DC power supply with constant current operation and advanced protection systems.", icon: "Cpu" }
//     ],
//     specs: {
//       "Magnet Type": "Air-Core Bitter Electromagnet",
//       "Maximum Field": "1.1 Tesla",
//       "Inner Bore Diameter": "65 mm",
//       "Axial Length": "300 mm",
//       "Magnet Cooling": "High-flow water cooling",
//       "Cooling Method": "Parallel Bitter plate cooling channels",
//       "Operating Current": "~1000 A or higher",
//       "Maximum Power": "Up to 50 kW",
//       "Power Supply Type": "Constant Current DC Supply",
//       "Input Supply": "415 VAC, 3-Phase",
//       "Control Modes": "Local & Remote",
//       "Power Electronics": "IGBT Based"
//     },
//     bitterTech: {
//       title: "Advanced Bitter Plate Construction",
//       layers: ["Precision copper Bitter plates", "High-strength insulating spacers", "Helical current conduction geometry", "Integrated axial cooling channels"],
//       enables: ["High magnetic field per unit energy", "Exceptional thermal management", "High scalability", "Continuous operation at extreme current densities"]
//     },
//     coolingSystem: {
//       title: "High-Flow Water Cooling Architecture",
//       desc: "The Bitter magnet employs direct axial water cooling through precision-aligned cooling holes within the copper plate stack.",
//       highlights: ["De-ionized water cooling", "High flow rate operation", "Efficient heat extraction", "Reduced thermal gradients", "Continuous full-power capability"],
//       params: ["Cooling Water Temperature: ~10°C", "High inlet pressure operation", "Parallel cooling channel design"]
//     },
//     powerSupply: {
//       title: "50 kW Regulated DC Power System",
//       desc: "The magnet system includes a heavy-duty industrial DC power supply optimized for ultra-high current electromagnet operation.",
//       features: ["Constant current regulation", "Voltage limiting mode", "Local and remote operation", "Oil-cooled transformer", "Oil-cooled rectifier assembly", "Industrial IGBT switching architecture"],
//       protection: ["Overtemperature protection", "Overcurrent protection", "Short circuit protection", "Input voltage monitoring", "Thermal fault shutdown"]
//     },
//     fieldPerformance: {
//       title: "Stable High-Field Generation",
//       generates: ["1.1 Tesla at the center axis", "Symmetrical axial field profile", "Stable continuous field operation", "Optimized field homogeneity"],
//       includes: ["Axial field profile graphs", "Magnetic flux visualization", "Thermal simulation renders", "Bitter plate current flow animations"]
//     },
//     engineeringDesign: {
//       title: "Built for Continuous High-Power Operation",
//       highlights: ["Air-core magnetic architecture", "Modular Bitter plate assembly", "High-current copper conduction", "Precision insulated stack design", "Industrial thermal management", "Heavy-duty mechanical structure"]
//     },
//     applications: [
//       "Gyrotron Systems", "Plasma Physics Research", "Accelerator Physics", "Magneto-Transport Experiments", 
//       "High-Field Spectroscopy", "Particle Beam Systems", "Magnetic Materials Research", "Fusion Research Systems", "Industrial Magnetic Testing"
//     ],
//     visualElements: [
//       "Exploded Bitter plate assembly", "Water flow simulation", "Magnetic field contour maps", 
//       "Current density visualizations", "High-current busbar renders", "Industrial cooling system animations"
//     ]
//   },



// src/data/products.ts record for "bitter-magnet"
"bitter-magnet": {
  category: "Electromagnets",
  name: "Florida Bitter-Type High Field Electromagnet",
  subtitle: "Ultra-high current air-core Bitter magnet system engineered for continuous high magnetic field operation and advanced scientific research.",
  statusBadge: "HIGH FIELD SERIES",
  
  hero: {
    title: "Florida Bitter-Type High Field Electromagnet",
    subtitle: "Ultra-high current air-core Bitter magnet system engineered for continuous high magnetic field operation and advanced scientific research.",
    description: "The Florida Bitter-Type Electromagnet is a high-power air-core DC magnet system engineered for continuous high magnetic field generation in demanding scientific and industrial environments. Inspired by classic Florida Bitter magnet architecture, the system combines stacked copper Bitter plates, high-flow water cooling, and ultra-high current power delivery to achieve stable high magnetic fields with exceptional thermal performance. Designed for gyrotron systems, plasma research, accelerator applications, magneto-transport studies, high-field spectroscopy, and advanced materials science."
  },

  quickSpecs: [
    { label: "Central Field", value: "1.1 Tesla" },
    { label: "Operating Current", value: "1000+ A" },
    { label: "Power System", value: "50 kW" },
    { label: "Inner Bore", value: "65 mm" }
  ],

  overview: {
    title: "High-Power Bitter Magnet Architecture",
    paragraphs: [
      "The system follows the classic Bitter electromagnet design using stacked circular copper conducting plates separated by insulating spacers in a helical current path configuration.",
      "Unlike conventional wound coils, the Bitter plate architecture enables extremely high current densities and superior cooling efficiency for continuous high magnetic field generation.",
      "Integrated water cooling channels pass directly through aligned holes in the copper plates to efficiently remove resistive heat generated by the ultra-high operating currents."
    ],
    advantages: [
      "Extremely high current density thresholds",
      "Direct axial water channel alignment",
      "Helical current path minimization of drift",
      "Superior mechanical strength under Lorentz force",
      "Scalable air-core high-field configuration"
    ]
  },

  keyFeatures: [
    { icon: "Layers", title: "Bitter Plate Technology", desc: "Stacked copper Bitter plates with helical current flow architecture optimized for high-field generation and thermal dissipation." },
    { icon: "Zap", title: "Ultra-High Current Operation", desc: "Designed for continuous operation at nearly 1000 A or higher using industrial-grade power electronics." },
    { icon: "Crosshair", title: "Large Bore Access", desc: "65 mm inner diameter provides large experimental access for beamlines, plasma systems, and scientific instrumentation." },
    { icon: "Droplets", title: "High-Efficiency Water Cooling", desc: "Parallel cooling channels integrated directly into the Bitter plates provide efficient thermal extraction during full-power operation." },
    { icon: "Activity", title: "Precision Field Generation", desc: "Generates up to 1.1 Tesla central magnetic field with symmetrical axial field distribution." },
    { icon: "Cpu", title: "Industrial Power Electronics", desc: "IGBT-based regulated DC power supply with constant current operation and advanced protection systems." }
  ],

  coreTechnologies: [
    {
      title: "Advanced Bitter Plate Construction",
      subtitle: "BITTER MAGNET TECHNOLOGY",
      type: "hardware",
      icon: "Layers",
      sideCaption: "HELICAL CONDUCTION CORE",
      description: "Constructed from alternating high-precision layers that minimize stress while maximizing packing fractions and core magnetic throughput.",
      bullets: [
        "Precision copper Bitter plates stacking",
        "High-strength insulating spacers shielding",
        "Helical current conduction geometry layout",
        "Integrated axial cooling channels alignment"
      ],
      highlights: [
        { label: "Field Per Energy", val: "Maximized" },
        { label: "Thermal Management", val: "Exceptional" },
        { label: "System Scalability", val: "High Tiers" },
        { label: "Current Density", val: "Extreme" }
      ]
    },
    {
      title: "High-Flow Water Cooling Architecture",
      subtitle: "COOLING SYSTEM",
      type: "hardware",
      icon: "Droplets",
      sideCaption: "AXIAL THERMAL EXTRACTION",
      description: "The Bitter magnet employs direct axial water cooling passing straight through precision-aligned cooling holes inside the copper plate stack.",
      bullets: [
        "De-ionized water cooling integration",
        "High flow rate operation constraints",
        "Efficient heat extraction pathways",
        "Reduced thermal gradients across stacks",
        "Continuous full-power capability validation"
      ],
      highlights: [
        { label: "Water Temp", val: "~10°C" },
        { label: "Inlet Pressure", val: "High" },
        { label: "Channel Layout", val: "Parallel" },
        { label: "Thermal Regulation", val: "Stable" }
      ]
    },
    {
      title: "50 kW Regulated DC Power System",
      subtitle: "POWER SUPPLY",
      type: "software", // Standardized to list interface metrics in cards
      icon: "Zap",
      sideCaption: "IGBT SWITCHING CORE",
      description: "The magnet system includes a heavy-duty industrial DC power supply optimized for ultra-high current electromagnet operation.",
      bullets: [
        "Constant current regulation loops",
        "Voltage limiting mode safeguards",
        "Local and remote operation interfaces",
        "Oil-cooled transformer & rectifier assemblies",
        "Industrial IGBT switching architecture"
      ],
      platforms: ["Overtemperature protection", "Overcurrent protection", "Short circuit protection", "Input voltage monitoring", "Thermal fault shutdown"]
    },
    {
      title: "Built for Continuous High-Power Operation",
      subtitle: "ENGINEERING DESIGN",
      type: "protection", // Standardized for system capabilities
      icon: "Settings",
      sideCaption: "HEAVY DUTY CONSTRUCTION",
      description: "A comprehensive structural setup robustly optimized to withstand dynamic Lorentz forces during maximum magnetizations.",
      bullets: [
        "Air-core magnetic architecture configuration",
        "Modular Bitter plate assembly fields",
        "High-current copper conduction lines",
        "Precision insulated stack design margins",
        "Industrial thermal management loops",
        "Heavy-duty mechanical structure frames"
      ],
      protects: [
        "Gyrotron Systems",
        "Plasma Physics Research",
        "Accelerator Physics",
        "Magneto-Transport Experiments",
        "High-Field Spectroscopy",
        "Fusion Research Systems"
      ]
    }
  ],

  specifications: {
    "Magnet Parameters": [
      { param: "Magnet Type", spec: "Air-Core Bitter Electromagnet" },
      { param: "Maximum Field", spec: "1.1 Tesla" },
      { param: "Inner Bore Diameter", spec: "65 mm" },
      { param: "Axial Length", spec: "300 mm" }
    ],
    "Cooling Infrastructure": [
      { param: "Magnet Cooling", spec: "High-flow water cooling" },
      { param: "Cooling Method", spec: "Parallel Bitter plate cooling channels" }
    ],
    "Power Electronics": [
      { param: "Operating Current", spec: "~1000 A or higher" },
      { param: "Maximum Power", spec: "Up to 50 kW" },
      { param: "Power Supply Type", spec: "Constant Current DC Supply" },
      { param: "Input Supply", spec: "415 VAC, 3-Phase" },
      { param: "Control Modes", spec: "Local & Remote" },
      { param: "Power Electronics", spec: "IGBT Based" }
    ]
  },

  fieldPerformance: {
    title: "Stable High-Field Generation",
    desc: "The magnet generates 1.1 Tesla at the center axis with a symmetrical axial field profile, stable continuous field operation, and optimized field homogeneity.",
    includes: [
      "Axial field profile graphs",
      "Magnetic flux visualization",
      "Thermal simulation renders",
      "Bitter plate current flow animations"
    ]
  },

  applications: [
    "Gyrotron Systems",
    "Plasma Physics Research",
    "Accelerator Physics",
    "Magneto-Transport Experiments",
    "High-Field Spectroscopy",
    "Particle Beam Systems",
    "Magnetic Materials Research",
    "Fusion Research Systems",
    "Industrial Magnetic Testing"
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800", caption: "Stacked Circular Copper Conducting Plates" },
    { url: "https://images.unsplash.com/photo-1558494949-ef010cutoff?q=80&w=800", caption: "High-Flow Water Cooling Layout" },
     { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800", caption: "Bitter Plate Assembly & Magnetic Core" }
  ],

  cta: {
    tagline: "Built for Precision. Designed for Discovery."
  }
},




//  "emc2t-2-magnet": {
//     category: "Electromagnets",
//     name: "EMC2T- 2 Tesla Variable Gap C-Frame Electromagnet",
//     subtitle: "Advanced Coil Design & Precision Power Supply System",
//     tagline: "Optimized Magnet Architecture for Cryogenic and Precision Measurement Systems",
//     heroImage: "/images/emc2t-hero.png", 
//     overview: [
//       "The EMC2T is a compact 2 Tesla variable-gap C-frame dipole electromagnet engineered for laboratory-scale magnetic field experiments. Featuring water-cooled coils and a wide, adjustable pole gap, it enables stable, high-field operation while accommodating cryostats and auxiliary experimental hardware.",
//       "Ideal for condensed-matter, low-temperature, and spin-based research, the EMC2T provides reliable 2 Tesla field generation for a wide range of magneto-transport and magneto-optical studies.",
//       "Optimized for seamless laboratory integration, the EMC2T brings robust and flexible magnet design to precision cryogenic, optical, and transport experiments."
//     ],
//     keyFeatures: {
//       header: "Advanced C-Frame Dipole and Precision Coil Design",
//       features: [
//         { title: "2 Tesla Field Strength", desc: "Generates stable magnetic fields up to 2 T for demanding laboratory experiments." },
//         { title: "Variable Pole Gap", desc: "Adjustable gap accommodates samples, cryostats, and optical access requirements." },
//         { title: "C-Frame Dipole Geometry", desc: "Open mechanical design allows easy sample access and integration of ancillary equipment." },
//         { title: "Water-Cooled Coils", desc: "Efficient thermal management enables continuous operation at high fields." },
//         { title: "Compact Footprint", desc: "Optimized for small-scale laboratory environments without compromising performance." },
//         { title: "Wide Experimental Compatibility", desc: "Supports electrical, optical, and transport measurements under applied magnetic fields." }
//       ]
//     },
//     magnetDesign: {
//       header: "Robust Variable-Gap Dipole Architecture",
//       components: [
//         { id: "1.1", title: "C-Frame Geometry", desc: "Open architecture provides unobstructed access to the sample region and simplifies experimental integration." },
//         { id: "1.2", title: "Variable Pole Gap", desc: "Wide adjustable gap accommodates cryostats, optical components and transport measurement setups." },
//         { id: "1.3", title: "Precision Pole Faces", desc: "Machined pole surfaces ensure stable and uniform magnetic field distribution within the experimental region." },
//         { id: "1.4", title: "Water-Cooled Coils", desc: "Thermally stabilized copper coils enable reliable continuous high-field operation." }
//       ]
//     },
//     experimentalIntegration: {
//       header: "Optimized for Laboratory Integration",
//       features: [
//         { title: "Cryostat Compatibility", desc: "The EMC2T accommodates low-temperature experimental systems positioned directly within the magnet gap." },
//         { title: "Optical Access", desc: "Open C-frame structure allows laser beams and optical diagnostics to access the sample region." },
//         { title: "Transport Measurement Ready", desc: "Supports magneto-transport experiments such as Hall and spin Hall measurements." },
//         { title: "Flexible Laboratory Installation", desc: "Suitable for both bench-top and floor-mounted experimental platforms." }
//       ]
//     },
//     technicalSpecifications: {
//       header: "Precisely Engineered C-Frame Dipole Magnet",
//       data: {
//         "Magnetic Field": "Up to 2 Tesla",
//         "Pole Gap": "0–50 mm (variable)",
//         "Pole Face Area": "25 × 25 mm",
//         "Pole Shape": "Square",
//         "Pole Material": "Low-carbon steel",
//         "Cooling": "Water-cooled copper coils",
//         "Max Continuous Current": "140 A (80 V)",
//         "Sample Region": "Compatible with Ø2–Ø25 mm samples in cryostats",
//         "Mass": "60 kg (magnet only)"
//       }
//     },
//     applications: [
//       "Spintronics Research",
//       "Quantum Materials Testing",
//       "Magneto-Transport Measurements",
//       "Magneto-Optical Studies",
//       "Cryogenic Device Evaluation"
//     ],
//     footers: [
//       "High-Field Capable • Variable Pole Gap • Precision Laboratory Instrument",
//       "Precise Magnetic Control • Broad Experimental Integration • Compact Laboratory Instrument"
//     ]
//   },

// "emc2t-2-magnet": {
//   category: "Electromagnets",
//   name: "2 Tesla Research Electromagnet System",
//   subtitle: "High-uniformity laboratory electromagnet with optical access, adjustable pole gap, and regenerative 4‑quadrant bipolar power supply.",
//   tagline: "Compact 2 Tesla variable‑gap C‑frame dipole electromagnet engineered for laboratory‑scale magnetic field experiments.",
//   heroImage: "/images/emc2t-hero.png",

//   overview: [
//     "The EMC2T Research Electromagnet is a compact high-power laboratory magnet system engineered for precision magnetic field generation up to 2 Tesla with wide optical access compatibility. Designed for advanced research environments, the system combines high magnetic field performance, adjustable pole geometry, optical accessibility, and a regenerative 4-quadrant bipolar power supply for smooth polarity reversal and stable operation.",
//     "The platform is optimized for magneto‑transport measurements, Hall effect studies, Raman and magneto‑optical experiments, cryostat integration, materials characterization, and quantum materials research."
//   ],

//   keySpecs: [
//     { label: "2 Tesla Maximum Field", icon: "Magnet" },
//     { label: "20 mm Pole Separation", icon: "Maximize2" },
//     { label: "48,000 Ampere-Turns", icon: "Zap" },
//     { label: "Optical Access Compatible", icon: "Eye" },
//     { label: "Water-Cooled Coils", icon: "Droplets" },
//     { label: "Bipolar 4-Quadrant Supply", icon: "Settings" }
//   ],

//   productOverview: {
//     title: "Precision Magnetic Field Generation",
//     description: "The EMC2T is a high-power compact electromagnet designed for laboratory-scale scientific experiments requiring stable and adjustable magnetic fields. The system uses high-current water-cooled copper coils combined with low-carbon steel magnetic structures to achieve high saturation performance with low magnetic remanence.",
//     suitableFor: [
//       "Cryostat integration",
//       "Optical spectroscopy",
//       "Magneto-optical measurements",
//       "Transport measurements",
//       "Magnetic resonance experiments"
//     ]
//   },

//   keyFeatures: [
//     { title: "2 Tesla Magnetic Field", desc: "Generates up to 2.0 Tesla axial magnetic field at 20 mm pole separation with 40 mm pole face geometry.", icon: "Magnet" },
//     { title: "Adjustable Pole Gap", desc: "Continuously adjustable pole separation from 5 mm to 50 mm for flexible experimental geometries and cryostat integration.", icon: "Maximize2" },
//     { title: "Optical Access Compatibility", desc: "Integrated optical access holes within the pole structure enable spectroscopy and optical experiments directly inside the magnetic field region.", icon: "Eye" },
//     { title: "Water-Cooled High Current Coils", desc: "High-efficiency copper conductor coils with integrated cooling channels support continuous operation up to 50 A.", icon: "Droplets" },
//     { title: "4-Quadrant Bipolar Power Supply", desc: "State-of-the-art regenerative power supply enables seamless polarity reversal through zero field operation without switching transients.", icon: "Settings" },
//     { title: "High Field Uniformity", desc: "Optimized pole geometry provides stable and uniform magnetic fields for precision measurements and characterization experiments.", icon: "Activity" }
//   ],

//   technicalSpecs: {
//     header: "Technical Specifications",
//     data: {
//       "Maximum Magnetic Field": "2 Tesla",
//       "Pole Face Diameter": "40 mm",
//       "Pole Gap Range": "5 – 50 mm",
//       "Coil Gap": "140 mm",
//       "Maximum Current": "50 A",
//       "Maximum Voltage": "±50 V",
//       "Maximum Power": "~2.5 kW",
//       "Coil Resistance": "0.45 Ω per coil",
//       "Cooling Method": "Water Cooling",
//       "Cooling Flow Rate": "8–10 L/min",
//       "Ampere-Turns": "48,000",
//       "Magnet Weight": "Approx. 530 kg",
//       "Power Supply Weight": "Approx. 35 kg",
//       "Power Input": "415 VAC, 3-Phase",
//       "Operating Mode": "Bipolar 4-Quadrant"
//     }
//   },

//   magneticFieldPerformance: {
//     title: "High-Uniformity Magnetic Field",
//     description: "The EMC2T is engineered to provide highly stable magnetic fields with optimized field uniformity across the pole region.",
//     highlights: [
//       "2 Tesla at 20 mm pole separation",
//       "Stable field response",
//       "Adjustable magnetic geometry",
//       "Wide operating current range",
//       "Precision field control"
//     ]
//   },

//   powerSupply: {
//     title: "Regenerative Bipolar Magnet Power Supply",
//     features: [
//       "Bipolar output operation",
//       "Seamless polarity transition",
//       "Constant current / constant voltage modes",
//       "Low ripple and noise",
//       "Regenerative energy recovery",
//       "High efficiency up to 91%",
//       "IGBT-based architecture"
//     ],
//     protections: [
//       "Overcurrent protection",
//       "Overvoltage shutdown",
//       "Overtemperature protection",
//       "Fan failure detection",
//       "Coil kickback protection"
//     ]
//   },

//   coolingSystem: {
//     title: "High-Efficiency Water Cooling",
//     description: "The magnet uses integrated copper tube cooling channels electrically isolated from the coils for safe and reliable continuous operation.",
//     features: [
//       "Continuous high-current operation",
//       "Reduced thermal drift",
//       "Stable coil temperature",
//       "Corrosion-resistant cooling architecture",
//       "Recirculating chiller compatible"
//     ]
//   },

//   applications: [
//     "Hall Effect Measurements",
//     "Spin Hall Effect Studies",
//     "Magneto-Resistance Experiments",
//     "Magnetic Susceptibility Studies",
//     "Magneto-Caloric Measurements",
//     "Magneto-Optical Characterization",
//     "Magnetic Resonance Experiments",
//     "Quantum Materials Research",
//     "Semiconductor Characterization",
//     "Cryogenic Magneto-Transport"
//   ],

//   safetyEngineering: {
//     title: "Engineered for Laboratory Safety",
//     features: [
//       "Grounded chassis architecture",
//       "Overtemperature monitoring",
//       "High-voltage protection",
//       "Cooling monitoring",
//       "Strong magnetic field warning compliance",
//       "Industrial-grade construction"
//     ]
//   },

//   mechanicalDesign: {
//     title: "Heavy-Duty Scientific Magnet Structure",
//     materials: [
//       "Low-carbon steel yoke",
//       "Precision magnetic pole cores",
//       "Copper conductor coils",
//       "Water-cooled copper tubing"
//     ],
//     highlights: [
//       "Adjustable pole system",
//       "Wide yoke geometry",
//       "Optical access ports",
//       "Cryostat compatibility",
//       "Compact laboratory footprint"
//     ]
//   },
  
//   footerCTA: {
//     title: "Ready for High-Field Scientific Research?",
//     description: "Precision-engineered electromagnet systems for advanced materials science, quantum research, spectroscopy, and cryogenic experimentation."
//   }
// },


// src/data/products.ts record for "emc2t-2-magnet"
"emc2t-2-magnet": {
  category: "Electromagnets",
  name: "2 Tesla Research Electromagnet System",
  subtitle: "High-uniformity laboratory electromagnet with optical access, adjustable pole gap, and regenerative 4-quadrant bipolar power supply.",
  statusBadge: "2 TESLA SYSTEM",
  
  hero: {
    title: "2 Tesla Research Electromagnet System",
    subtitle: "High-uniformity laboratory electromagnet with optical access, adjustable pole gap, and regenerative 4-quadrant bipolar power supply.",
    description: "The EMC2T Research Electromagnet is a compact high-power laboratory magnet system engineered for precision magnetic field generation up to 2 Tesla with wide optical access compatibility. Designed for advanced research environments, the system combines high magnetic field performance, adjustable pole geometry, optical accessibility, and a regenerative 4-quadrant bipolar power supply for smooth polarity reversal and stable operation."
  },

  quickSpecs: [
    { label: "Maximum Field", value: "2 Tesla" },
    { label: "Pole Separation", value: "20 mm" },
    { label: "Ampere-Turns", value: "48,000" },
    { label: "Optical Access", value: "Compatible" },
    { label: "Coil Cooling", value: "Water-Cooled" },
    { label: "Power Supply", value: "4-Quadrant" }
  ],

  overview: {
    title: "Precision Magnetic Field Generation",
    paragraphs: [
      "The EMC2T is a high-power compact electromagnet designed for laboratory-scale scientific experiments requiring stable and adjustable magnetic fields. The system uses high-current water-cooled copper coils combined with low-carbon steel magnetic structures to achieve high saturation performance with low magnetic remanence.",
      "The magnet supports variable pole spacing and wide optical access, making it suitable for cryostat integration, optical spectroscopy, magneto-optical measurements, transport measurements, and magnetic resonance experiments."
    ],
    advantages: [
      "Magneto-transport measurements",
      "Hall effect studies",
      "Raman & magneto-optical experiments",
      "Cryostat integration",
      "Materials characterization",
      "Quantum materials research"
    ]
  },

  keyFeatures: [
    { icon: "Target", title: "2 Tesla Magnetic Field", desc: "Generates up to 2.0 Tesla axial magnetic field at 20 mm pole separation with 40 mm pole face geometry." },
    { icon: "Move", title: "Adjustable Pole Gap", desc: "Continuously adjustable pole separation from 5 mm to 50 mm for flexible experimental geometries and cryostat integration." },
    { icon: "Eye", title: "Optical Access Compatibility", desc: "Integrated optical access holes within the pole structure enable spectroscopy and optical experiments directly inside the magnetic field region." },
    { icon: "Droplets", title: "Water-Cooled High Current Coils", desc: "High-efficiency copper conductor coils with integrated cooling channels support continuous operation up to 50 A." },
    { icon: "Zap", title: "4-Quadrant Bipolar Power Supply", desc: "State-of-the-art regenerative power supply enables seamless polarity reversal through zero field operation without switching transients." },
    { icon: "Activity", title: "High Field Uniformity", desc: "Optimized pole geometry provides stable and uniform magnetic fields for precision measurements and characterization experiments." }
  ],

  coreTechnologies: [
    {
      id: "magnetic",
      title: "High-Uniformity Magnetic Field",
      subtitle: "MAGNETIC FIELD PERFORMANCE",
      type: "hardware",
      icon: "Target",
      sideCaption: "STABLE FIELD RESPONSE",
      description: "The EMC2T is engineered to provide highly stable magnetic fields with optimized field uniformity across the pole region. Precision field control allows for wide operating current ranges and adjustable magnetic geometry.",
      bullets: [
        "2 Tesla at 20 mm pole separation",
        "Stable field response",
        "Adjustable magnetic geometry",
        "Wide operating current range",
        "Precision field control"
      ],
      highlights: [
        { label: "Max Field", val: "2 Tesla" },
        { label: "Pole Separation", val: "20 mm" },
        { label: "Field vs Current", val: "Linearized" },
        { label: "Field Profile", val: "Uniform" }
      ]
    },
    {
      id: "power",
      title: "Regenerative Bipolar Magnet Power Supply",
      subtitle: "4-QUADRANT POWER SUPPLY",
      type: "software",
      icon: "Zap",
      sideCaption: "SEAMLESS POLARITY TRANSITION",
      description: "The EMC2T is powered by a precision 4-quadrant bipolar power supply capable of sourcing and sinking power while enabling smooth magnetic polarity reversal.",
      bullets: [
        "Bipolar output operation",
        "Seamless polarity transition without switching transients",
        "Constant current / constant voltage modes",
        "Low ripple and noise",
        "Regenerative energy recovery"
      ],
      platforms: ["High efficiency up to 91%", "IGBT-based architecture", "Overvoltage shutdown", "Coil kickback protection"]
    },
    {
      id: "cooling",
      title: "High-Efficiency Water Cooling",
      subtitle: "COOLING SYSTEM",
      type: "hardware",
      icon: "Droplets",
      sideCaption: "CONTINUOUS OPERATION",
      description: "The magnet uses integrated copper tube cooling channels electrically isolated from the coils for safe and reliable continuous operation.",
      bullets: [
        "Continuous high-current operation",
        "Reduced thermal drift",
        "Stable coil temperature",
        "Corrosion-resistant cooling architecture",
        "Recirculating chiller compatible"
      ],
      highlights: [
        { label: "Flow Rate", val: "8–10 L/min" },
        { label: "Thermal Drift", val: "Reduced" },
        { label: "Coil Temp", val: "Stable" },
        { label: "Integration", val: "Chiller Ready" }
      ]
    },
    {
      id: "safety",
      title: "Heavy-Duty Scientific Magnet Structure",
      subtitle: "MECHANICAL & SAFETY DESIGN",
      type: "protection",
      icon: "ShieldCheck",
      sideCaption: "LABORATORY SAFETY",
      description: "The EMC2T incorporates extensive electrical, thermal, and magnetic safety protections within a compact laboratory footprint.",
      bullets: [
        "Low-carbon steel yoke & precision pole cores",
        "Water-cooled copper conductor coils",
        "Adjustable pole system & wide yoke geometry",
        "Optical access ports",
        "Cryostat compatibility"
      ],
      protects: ["Grounded chassis architecture", "Overtemperature monitoring", "High-voltage protection", "Cooling monitoring", "Magnetic field warning"]
    }
  ],

  specifications: {
    "Magnetic & Electrical": [
      { param: "Maximum Magnetic Field", spec: "2 Tesla" },
      { param: "Maximum Current", spec: "50 A" },
      { param: "Maximum Voltage", spec: "±50 V" },
      { param: "Maximum Power", spec: "~2.5 kW" },
      { param: "Coil Resistance", spec: "0.45 Ω per coil" },
      { param: "Ampere-Turns", spec: "48,000" }
    ],
    "Mechanical & Geometry": [
      { param: "Pole Face Diameter", spec: "40 mm" },
      { param: "Pole Gap Range", spec: "5 – 50 mm" },
      { param: "Coil Gap", spec: "140 mm" },
      { param: "Magnet Weight", spec: "Approx. 530 kg" },
      { param: "Power Supply Weight", spec: "Approx. 35 kg" }
    ],
    "Cooling & Operations": [
      { param: "Cooling Method", spec: "Water Cooling" },
      { param: "Cooling Flow Rate", spec: "8–10 L/min" },
      { param: "Power Input", spec: "415 VAC, 3-Phase" },
      { param: "Operating Mode", spec: "Bipolar 4-Quadrant" }
    ]
  },

  applications: [
    "Hall Effect Measurements",
    "Spin Hall Effect Studies",
    "Magneto-Resistance Experiments",
    "Magnetic Susceptibility Studies",
    "Magneto-Caloric Measurements",
    "Magneto-Optical Characterization",
    "Magnetic Resonance Experiments",
    "Quantum Materials Research",
    "Semiconductor Characterization",
    "Cryogenic Magneto-Transport"
  ],

  gallery: [
    { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800", caption: "EMC2T Research Electromagnet" },
    { url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800", caption: "4-Quadrant Power Supply" },
    { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800", caption: "Water-Cooled Coil Assembly" }
  ],

  cta: {
    tagline: "Ready for High-Field Scientific Research?"
  }
},
  // --------------------------------------------
  // SERVICES SECTION 
  // --------------------------------------------

  "ac-dc-system-low": {
    category: "Converters",
    name: "AC-DC System",
    subtitle: "Low Power (0.3 kW – 6 kW)",
    tagline: "Compact, high-efficiency AC-DC converters designed for embedded systems, instrumentation, and industrial electronics.",
    heroImage: "/images/ac-dc-hero.png", // Ensure this is your black chassis image
    overview: [
      "Engineered to guarantee absolute power stability in mission-critical environments, our scalable AC-DC architecture delivers pure, low-ripple DC output under extreme operational stress.",
      "Featuring comprehensive protection circuits and active power factor correction (PFC), these high-density systems are built for defense, aerospace, and heavy industrial integration where failure is not an option."
    ],
    keyFeatures: [
      "Up to 95% Peak Efficiency",
      "Active Power Factor Correction (PFC > 0.99)",
      "Wide Universal Input: 85–265 VAC, 47–63 Hz",
      "Low Ripple & Noise (< 50mV pk-pk)",
      "High-Density Compact Chassis",
      "MTBF > 500,000 Hours"
    ],
    protection: [
      "Over-Voltage Protection (OVP) with Auto-Recovery",
      "Over-Current Protection (OCP)",
      "Continuous Short-Circuit Isolation",
      "Active Thermal Foldback & Protection",
      "3000 VAC Input-to-Output Isolation"
    ],
    designRange: [
      "Output Power: 300 W to 6 kW Scalable",
      "Standard Outputs: 12V, 24V, 28V, 48V DC",
      "Custom Voltage Trimming Available",
      "Conduction & Baseplate Cooling Optimized"
    ],
    environmental: {
      desc: "Built to withstand the most extreme operational environments.",
      specs: [
        "Shock & Vibration: MIL-STD-810G Compatible",
        "Operating Temperature: -40°C to +85°C (Baseplate)",
        "Dust and Ingress Resistance (Conformal Coating)",
        "High-Altitude Operation (Up to 30,000 ft)",
        "Severe Thermal Cycling Endurance"
      ]
    },
    applications: [
      { name: "Defense Systems", desc: "Radar, Electronic Warfare (EW), C4ISR platforms." },
      { name: "Aerospace Systems", desc: "Avionics, UAV payloads, and ground-support equipment." },
      { name: "Marine Platforms", desc: "Shipboard navigation and naval power grids." },
      { name: "Railways", desc: "EN50155 compliant rolling stock power delivery." },
      { name: "Telecom Infrastructure", desc: "Base station, 5G relay, and off-grid power delivery." },
      { name: "Industrial Control", desc: "Heavy manufacturing, robotics, and automation systems." }
    ],
    highPowerTier: {
      title: "High Power (6 kW – 30 kW)",
      desc: "Rugged AC-DC systems engineered for mission-critical heavy industrial environments."
    },
    technicalSpecifications: {
      "Input Voltage Range": "85–265 VAC (Universal)",
      "Input Frequency": "47–63 Hz",
      "Power Factor": "> 0.99 (Active PFC)",
      "Output Voltage Range": "12 VDC – 48 VDC (Factory Configurable)",
      "Output Power": "0.3 kW to 6.0 kW",
      "Efficiency": "Up to 95% (Load dependent)",
      "Ripple & Noise": "< 50 mV pk-pk (20MHz Bandwidth)",
      "Line/Load Regulation": "± 0.5% / ± 1.0%",
      "Isolation (In/Out)": "3000 VAC",
      "Operating Temp": "-40°C to +85°C",
      "MTBF": "> 500,000 Hours (MIL-HDBK-217F)"
    },
    footers: [
      "Reliable Power • High Efficiency • Rugged and Compliant"
    ]
  },




  "ac-dc-system-high": {
    category: "Converters",
    name: "AC-DC System (High Power Tier)",
    subtitle: "6 kW – 30 kW Solutions",
    tagline: "Rugged, master-orchestrated parallel systems delivering high current for heavy industrial power demands.",
    heroImage: "/images/ac-dc-high-hero.png", // Cropped chassis image
    overview: [
      "Compact, high-density AC-DC converters engineered for large-scale embedded instrumentation and industrial electronics enclosures.",
      "Optimized for high current output, these modules are designed to promise unwavering power stability and efficiency in severe industrial and defense environments.",
      "Ideally suited for high-power Radar, EW, Telecom, and marine platforms, this series represents the pinnacle of mission-critical electrical conversion."
    ],
    telemetryPatterns: {
      loadSharing: {
        totalLoad: 28.5,
        targetVoltage: 220,
        rippleV: 0.15,
        ripplePct: 0.07,
        redundancyState: "N+1 AVAILABLE"
      },
      // Accent logic for the new specifications table
      tableSpecs: {
        coolingFanStatus: ["FANS: ACTIVE", "FANS: NOMINAL"],
        deratingTemp: 60,
        currentPFC: 0.992
      }
    },
    systemArchitecture: {
      powerScaling: {
        title: "Scaling Density",
        data: ["6 kW to 30 kW range", "High power density", "Up to 30 kW chassis"]
      },
      redundancy: {
        title: "Modular N+1 Redundancy",
        data: ["Fault-Tolerant Operation", "Parallel current sharing", "N+1 architecture link"]
      },
      phaseInput: {
        title: "Phase Inputs",
        data: ["Universal 3-Phase Input", "380–480 VAC compatible", "PFC > 0.99"]
      },
      mechanical: {
        title: "Form Factors",
        data: ["19” Rack mount option", "Custom heavy-duty encl.", "Liquid / Air cooled chassis"]
      }
    },
    controlInterfaces: [
      { name: "CANbus", icon: Cpu, latency: "<5ms", standard: "J1939 Compliant" },
      { name: "Modbus TCP", icon: Database, latency: "<10ms", standard: "Industrial Ethernet" },
      { name: "RS485", icon: Layers, latency: "<20ms", standard: "Master/Slave link" }
    ],
    environmental: {
      desc: "Validated environmental durability for mission-critical loads.",
      specs: ["MIL-STD compatible", "Severe thermal cycling", "IP54/IP67 chassis options"]
    },
    // Comprehensive high-power researched data for the new table
    technicalSpecifications: {
      electricalInput: {
        "Phase Type": "Industrial 3-Phase",
        "Voltage Range": "208-480 VAC (+/-10%)",
        "Frequency Range": "47–63 Hz",
        "Power Factor (PFC)": "> 0.99 at full load",
        "Efficiency": "Up to 96% peak",
        "Hold-up Time": "> 15ms at full load"
      },
      electricalOutput: {
        "Nominal Voltage": "48 VDC (Customizable)",
        "Max Output Power": "30 kW per Chassis",
        "Line Regulation": "<0.1% for full range VAC",
        "Load Regulation": "<0.1% for 0–100% load",
        "Voltage Ripple": "<150mV peak-to-peak",
        "THD": "< 3% at full load",
        "Dynamic Response": "<500µs to 50% load step"
          
      },
      mechanicalEnv: {
        "Module Density": "3.5 kW / 1U Chassis",
        "Total Scalability": "Up to 1.2 MW in single rack",
        "Operating Temp": "-20°C to +60°C (with derating)",
        "Humidity": "95% Non-condensing",
        "Ingress Protection": "IP54 (Chassis) / Liquid opt.",
        "Acoustic Noise": "<65 dBA at 1 meter",
        "Altitude": "Up to 10,000 ft (operating)"
      }
    },
    applications: [
      { name: "Defense Systems", desc: "High-power Radar, Electronic Warfare (EW), C4ISR centers." },
      { name: "Aerospace Infrastructure", desc: "Avionics ground-support power and launch systems." },
      { name: "Marine Platforms", desc: "Shipboard grids and heavy naval electronics." },
      { name: "Telecom Infrastructure", desc: "Massive base station hubs and data center backup." },
      { name: "Railways", desc: "Substation power and EN compliant rolling stock systems." },
      { name: "Heavy Industrial Automation", desc: "Process control, massive PLC racks, and material handling." }
    ],
    footers: [
      "Reliable Power • High Efficiency • Rugged and Compliant"
    ]
  },

  "dc-dc-system-high": {
    category: "Converters",
    name: "DC-DC Converter",
    subtitle: "High Power Tier (6 kW – 30 kW Solutions)",
    tagline: "Unwavering, Master-Orchestrated Power Density for Heavy Industrial and Defense Platforms.",
    heroImage: "/images/dc-dc-high-hero.png", // Render showing a heavy-duty 19" rack-mount chassis
    overview: [
      "Engineered from the ground up to promise unwavered electrical stability for massive industrial and defense loads, our High Power DC-DC Tier represents the pinnacle of power management technology.",
      "This tier is designed to Promissing High-density configuration, delivering customizable output from 6 kW up to an impressive 30 kW per single 19” chassis.",
      "Optimized for N+1 redundant parallel operation, these systems feature autonomous current sharing and severe thermal cycling resistance, validated environmental durability in severe operational environments."
    ],
    // New data structure for the interactive "Module Pulse" visualizer
    modulePulse: {
      voltageIn: 650.4, // e.g., High Voltage DC input
      voltageOut: 48.2,  // Telecom/Industrial standard
      totalAmps: 622.5,  // Massive current
      efficiencyPercent: 96.8,
      modules: [
        { id: "M1", status: "MASTER", temp: 45, amps: 155.6, loadPct: 94 },
        { id: "M2", status: "SLAVE", temp: 47, amps: 155.8, loadPct: 94 },
        { id: "M3", status: "SLAVE", temp: 44, amps: 155.4, loadPct: 94 },
        { id: "M4", status: "SLAVE", temp: 46, amps: 155.7, loadPct: 94 },
        { id: "M5 (N+1)", status: "HOT STANDBY", temp: 28, amps: 0.1, loadPct: 0 } // Standby module
      ]
    },
    systemArchitecture: {
      powerScaling: {
        title: "Chassis Scaling",
        data: ["6 kW to 30 kW range", "Scalable Density per unit", "High Density configuration"]
      },
      redundancy: {
        title: "Modular N+1 Redundancy",
        data: ["Active Load Sharing", "Seamless Fault Tolerance", "Hot-Swappable Modules"]
      },
      inputFlex: {
        title: "Input Dynamics",
        data: ["Industrial Wide-Range Input", "e.g., 300V - 900V DC Source", "PFC & Stability Link"]
      },
      cooling: {
        title: "Thermal Management",
        data: ["Forced Air Cooling", "High-Velocity Internal Fans", "Optimized Airflow path"]
      }
    },
    performanceMetrics: {
      regulationV: "<0.1%",
      thdPercent: "<3%",
      dynamicResponse: "<2ms to 50% load step"
    },
    // New control interfaces data
    controlInterfaces: [
      { name: "CANbus", latency: "<10ms", type: "J1939 Compliant" },
      { name: "Modbus TCP", latency: "<20ms", type: "Industrial Ethernet" },
      { name: "RS485", latency: "<50ms", type: "Serial / Scada Link" }
    ],
    // Extracting environmental data directly from image description
    environmental: {
      validatedSpecs: ["MIL-STD Compatible", "Severe Thermal Cycling", "Shock & Vibration Validated", "Validated environmental durability", "NEMA / IP54 chassis options"]
    },
    // Researched for accuracy (representing as shared/research data mix)
    technicalSpecifications: {
      "Input Voltage Range": "300VDC - 900VDC (Customizable)",
      "Output Voltage Range": "24V / 48V / 110V / 220VDC (Customizable)",
      "Continuous Power": "30 kW Max per Chassis",
      "Peak Power (60s)": "36 kW (N+1 configuration)",
      "Efficiency": "Up to 96.8% at full load",
      "Module Weight": "Approx. 12kg",
      "Chassis Form Factor": "19” Rack mount option, 4U/5U Chassis",
      "Isolation (I/O)": ">2500 VDC",
      "Operating Temperature": "-20°C to +60°C (with derating)",
      "Storage Temperature": "-40°C to +85°C",
      "Protection": "Short Circuit, Over-Voltage, Under-Voltage, Over-Temp, Fan Fail"
    },
    // Extracting applications based on high-power tier capabilities
    applications: [
      { name: "Defense Platforms", icon: Radar, desc: "High-power Radar, EW, C4ISR infrastructure." },
      { name: "EV Charging Infrastructure", icon: Car, desc: "DC Fast Charging station master convertors." },
      { name: "Telecom Hubs", icon: Radio, desc: "Massive base station backup power and grid link." },
      { name: "Railways", icon: Train, desc: "Substation auxiliary power and track switching." },
      { name: "Marine Systems", icon: Ship, desc: "Naval shipboard power grids and weapon systems." },
      { name: "Heavy Industrial Automation", desc: "PLC banks, massive material handling, robotics centers." }
    ],
    // Shared structure for bottom footer band
    footers: [
      "Rugged. Scalable. Master-Orchestrated.",
      "MIL-STD Validation in Severe Environments",
      "High Power DC-DC Technology"
    ]
  },

  "dc-dc-system-low": {
    category: "Converters",
    name: "DC-DC Converter",
    subtitle: "Low Power Tier (Up to 5 kW Solutions)",
    tagline: "Compact Precision, Uncompromised Stability for High-Density Embedded Environments.",
    heroImage: "/images/dc-dc-low-hero.png", // Render showing a compact, multi-output embedded brick
    overview: [
      "Engineered from the ground up for Promissing High-density configuration, our Low Power DC-DC Tier represents the pinnacle of compact, efficient electrical conversion.",
      "Optimized to deliver Promissing High Efficiency and compact design, these systems ensure unwavering Promissing electrical stability for critical embedded instrumentation.",
      "Ideally suited for Embedded Instrumentation, Telecom Hubs, and Defense platforms, this series delivers scalable power up to 5 kW with meticulous regulation in space-constrained layouts."
    ],
    // Unique data for the "Live Regulation Oscilloscope" telemetry
    liveOscilloscope: {
      nominalVoltage: 48.0,
      simulatedRipple: 120, // mV peak-to-peak
      simulatedTHD: 0.8, // percent
      inputBus: 110.1,
      efficiencyPercent: 94.8,
      regulationNodes: [
        { id: "A", voltage: 48.01, stability: 99.98 },
        { id: "B", voltage: 47.99, stability: 99.97 },
        { id: "C", voltage: 48.00, stability: 99.99 },
        { id: "D", voltage: 48.02, stability: 99.98 }
      ]
    },
    // Extracted directly from brochure description text
    keyValueProposition: [
      { title: "Compact Design", icon: Box, desc: "Optimized for high power density per cubic inch." },
      { title: "High Efficiency", icon: ShieldAlert, desc: "Minimized thermal footprint through advanced topology." },
      { title: "Electrical Stability", icon: Activity, desc: "Ultra-precise regulation for sensitive instrumentation." }
    ],
    // Expanded based on brochure mention (embedded instrumentation, telecom, defense)
    deploymentSuitability: {
      telecom: ["Base Station Auxiliary Power", "Remote Radio Heads", "Network Interface Devices"],
      defense: ["Embedded Radar Processing", "Secure Communications", "Avionics Subsystems"],
      instrumentation: ["Medical Scanning Equipment", "High-Speed Data Acquisition", "Precision Lab Power"]
    },
    // Technical specifications extracted from brochure image + accurate research
    technicalSpecifications: {
      inputData: {
        "Nominal Inputs": "24V, 48V, 110V, 220VDC",
        "Input Range": "Wide Range Options (e.g., 2:1 / 4:1)",
        "Input Protection": "Reverse Polarity, Surge Suppression",
        "Soft Start": "Autonomous ramp control included"
      },
      outputData: {
        "Continuous Power": "Up to 5 kW Max",
        "Customization": "Fully customizable voltage ranges",
        "Regulation": "<±0.1% Line/Load Regulation",
        "Efficiency": "Up to 94.8% (typical)",
        "Noise/Ripple": "<1% Vout (peak-to-peak)",
        "Transient Response": "<200µs to 50% load change"
      },
      mechanicalEnv: {
        "Cooling": "Convection / Forced Air Options",
        "Form Factor": "Space-Optimized Brick / Embedded",
        "Operating Temp": "-40°C to +85°C (Case Temp)",
        "Storage Temp": "-55°C to +125°C",
        "Isolation": ">2000 VDC Input-to-Output",
        "Safety Compliance": "UL/IEC/MIL-STD applicable options"
      }
    },

    protectionProtocols: [
      { name: "Over-Voltage Protection (OVP)", threshold: "115% Vout Nom", recovery: "Autonomous Auto-Recovery" },
      { name: "Over-Current Protection (OCP)", threshold: "110–140% Iout Max", recovery: "Continuous Hiccup Mode" },
      { name: "Short-Circuit Protection (SCP)", threshold: "Impedance < 50mΩ", recovery: "Auto-Restart on clear" },
      { name: "Thermal Shutdown (OTP)", threshold: "+105°C Baseplate", recovery: "Auto-Recovery at +90°C" }
    ],
    applicationGrid: [
      { name: "Embedded Instrumentation", icon: Microchip, desc: "Providing meticulous stability for high-speed analysis racks." },
      { name: "Telecom Infrastructure", icon: Antenna, desc: "Compact auxiliary power for hubs and base stations." },
      { name: "Defense Systems", icon: Radar, desc: "Validated rugged performance for battlefield electronics." },
      { name: "Medical Equipment", icon: Stethoscope, desc: "Ultra-low noise conversion for sensitive scanning platforms." },
      { name: "Robotics Control", icon: Bot, desc: "High-density power for mobile and fixed robotic joints." },
      { name: "Data Centers", icon: Server, desc: "Precision localized power rails for localized server nodes." }
    ],
    footers: [
      "Compact Density • Precise Regulation • Unwavering Stability",
      "5kW Embedded Power Solutions",
      "Low Power DC-DC Technology"
    ]
  },


  "dc-ac-inverters": {
    category: "Inverters",
    name: "DC-AC Pure Sine Wave Inverters",
    subtitle: "Clean, Stable AC Power from DC Sources",
    tagline: "Grid-quality AC power conversion with minimal distortion for mission-critical infrastructure.",
    heroImage: "/images/dc-ac-inverter-hero.png", // Render of the inverter
    overview: [
      "CRYONANO’s DC–AC pure sine wave inverters are engineered to convert DC power into high-quality AC output with minimal distortion.",
      "Designed for mission-critical environments, these systems ensure reliable operation of sensitive electronics and heavy infrastructure.",
      "From onboard railway supplies to remote defense mobile systems, our inverters guarantee continuous, low-EMI operation under dynamic load conditions."
    ],
    // New data structure for the "Pure Wave Transformation" visualizer
    waveTelemetry: {
      inputDC: "24V / 48V / 110V DC",
      outputAC: "120V / 230V AC",
      frequency: "50Hz / 60Hz",
      distortionTHD: "< 2%",
      efficiency: "Up to 96%"
    },
    // Extracted Key Features
    keyFeatures: [
      { title: "Pure Sine Wave", desc: "Grid-quality power output ensuring zero interference with sensitive loads." },
      { title: "Low EMI/RFI", desc: "Advanced filtering for low electromagnetic interference design." },
      { title: "Thermal Stability", desc: "High thermal efficiency with advanced cooling management." },
      { title: "Rugged Build", desc: "Constructed for continuous operation in harsh, high-vibration environments." }
    ],
    // Extracted Technical Overview
    technicalSpecs: {
      "Maximum Output Power": "Up to 10 kW",
      "DC Input Source": "Onboard DC supply / Battery systems",
      "AC Output Waveform": "Clean Pure Sine Wave",
      "Thermal Management": "Advanced active cooling architecture",
      "Noise Profile": "Low-EMI / Low-noise design",
      "Load Handling": "Reliable operation under varying dynamic loads"
    },
    // Extracted Use Case Insight
    useCaseInsight: {
      title: "Architectural Insight",
      desc: "Ideal for systems powered by battery banks or DC bus architectures where stable AC output is absolutely essential for operational reliability and equipment safety."
    },
    // Extracted Applications
    applications: [
      { name: "Railway Networks", desc: "Locomotives, metro systems, passenger coaches, and signaling." },
      { name: "Defense Systems", desc: "Military vehicles, mobile command units, and tactical systems." },
      { name: "Marine Platforms", desc: "Naval vessels, offshore rigs, and maritime communication." },
      { name: "Control Systems", desc: "Remote communication hubs and automated control systems." },
      { name: "HVAC & Onboard", desc: "Auxiliary power for HVAC systems and critical onboard electronics." }
    ],
    footers: [
      "Clean Power",
      "Reliable Operation",
      "Rugged and Efficient"
    ]
  },




  "inverter-400hz-rugged": {
    category: "Inverters",
    name: "400Hz Frequency Inverter",
    subtitle: "30 kW Rugged Aerospace Platform",
    tagline: "Precision Aviation Frequency Power Conversion for Demanding Military Mobile Platforms and Aerospace GSE.",
    heroImage: "/images/400hz-inverter-hero.png", // Render of the rugged module
    overview: [
      "CRYONANO’s 400Hz Frequency Inverter series is engineered for high-density, mission-critical aviation power conversion.",
      "Specifically engineered for high density configuration, this 30 kW unit converts 480VAC 3-phase to meticulous 115 / 200VAC, 3-phase, 400Hz output.",
      "Optimized to deliver exceptional stability and low EMI, this series utilizes an autonomous parallel redundant design with N+1 capability."
    ],
    // Unique data for the "Parallel Rack Synchronization" telemetry
    parallelSyncTelemetry: {
      inputACSource: "480VAC / 3Φ / 60Hz",
      outputACBus: "115V / 200VAC / 3Φ / 400Hz",
      frequencyPulse: 400, // Visual representation (Hz)
      modules: [
        { id: "M01", amps: 75.1, loadPct: 75, status: "MASTER", syncTime: "12ms" },
        { id: "M02", amps: 74.9, loadPct: 74, status: "SYNCED", syncTime: "15ms" },
        { id: "M03", amps: 75.0, loadPct: 75, status: "SYNCED", syncTime: "10ms" },
        { id: "M04", amps: 0.0, loadPct: 0, status: "HOT STANDBY", syncTime: "N/A" } // N+1 module
      ]
    },
    // Extracted directly from brochure description text
    keyValueProposition: [
      { title: "N+1 Redundancy", icon: Layers, desc: "Modular architecture ensuring zero downtime operation." },
      { title: "High Power Density", icon: Shield, desc: "Compact 30 kW platform optimized for severe constraints." },
      { title: "Autonomous Control", icon: Settings, desc: "Automatic parallel current sharing and active synchronization." },
      { title: "Meticulous Stability", icon: Target, desc: "Unwavering 400Hz frequency and voltage regulation." }
    ],
    // Expanded based on brochure mention
    deploymentApplications: {
      hangarGSE: ["Hangar Floor Auxiliary Power", "Cockpit Avionics Test", "Aircraft Maintenance Service"],
      mobileMilitary: ["Military Mobile Radar Racks", "Defense Mobile Command Units", "Towed Support Electronics"]
    },
    // Technical specifications extracted from brochure image + accurate research
    technicalSpecifications: {
      inputData: {
        "Nominal Input": "480VAC, 3-Phase",
        "Input Frequency": "60Hz (typical)",
        "Input Protection": "Reverse Polarity, Surge Suppression",
        "Filtering": "Integrated Active Input Filter"
      },
      outputData: {
        "Continuous Power": "30 kW Max",
        "Output Voltage": "115V / 200VAC, 3-Phase (Wye/Star)",
        "Output Frequency": "Meticulous 400Hz",
        "Regulation": "<±1.0% Line/Load Regulation",
        "THD": "< 3% typical (Linear Load)",
        "Overload Cap": "110% for 10 min, 125% for 1 min"
      },
      mechanicalEnv: {
        "Cooling": "Rugged Active Cooling Architecture",
        "Form Factor": "Compact, High-Density configuration",
        "Operating Temp": "-40°C to +60°C (Extended Range)",
        "MIL-STD Environment": "Validated against Shock/Vibe (MIL-STD-810G)",
        "MIL-STD EMI": "Optimized low EMI design (MIL-STD-461G)"
      }
    },
    controlInterfaces: [
      { name: "RS-232 / RS-485", latency: "< 5ms" },
      { name: "CANbus / J1939", latency: "< 2ms" },
      { name: "Ethernet / SNMP", latency: "< 10ms" },
      { name: "Local Control Panel", latency: "Immediate" }
    ],
    footers: [
      "Rugged Design • Meticulous Frequency • High Density",
      "30 kW Aerospace Power Solutions",
      "GSE Auxiliary & Mobile Military Platform"
    ]
  }
};