class Antibiotic {
    constructor(name, family, subclass, mechanism, action, spectrum, gramEffect, activityType, uses, resistance) {
        this.name = name;
        this.family = family;
        this.subclass = subclass;
        this.mechanism = mechanism; // One of five definitions of antibiotic mechanisms.
        this.action = action; // A bit more in-depth of the mechanism
        this.spectrum = spectrum; // "Broad" or "Narrow"
        this.gramEffect = gramEffect; // Gram effect: "Gram-positive", "Gram-negative", or "Both"
        this.activityType = activityType; // "Bacteriostatic", "Bactericidal", or "Bacteriolytic"
        this.uses = uses; // Intended medical uses
        this.resistance = resistance; // Resistance information
    }
}

const aminoglycosides = new Antibiotic(
    "Aminoglycosides",
    "Aminoglycosides",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 30S ribosomal subunit, causing misreading of mRNA and production of faulty proteins.",
    "Narrow",
    "Gram-negative",
    "Bactericidal",
    ["Serious Gram-negative infections, sepsis, endocarditis"],
    ["Aminoglycoside-resistant Enterobacteriaceae"]
);

const cephalosporins = new Antibiotic(
    "Cephalosporins",
    "Beta-Lactams",
    "Cephalosporins",
    "Inhibition of Cell Wall Synthesis",
    "Binds to penicillin-binding proteins (PBPs), preventing peptidoglycan cross-linking.",
    "Broad",
    "Both",
    "Bacteriolytic",
    ["Respiratory infections, urinary tract infections, skin infections"],
    ["Extended-spectrum beta-lactamase (ESBL)-producing bacteria"]
);

const penicillins = new Antibiotic(
    "Penicillins",
    "Beta-Lactams",
    "Penicillins",
    "Inhibition of Cell Wall Synthesis",
    "Binds to penicillin-binding proteins (PBPs), disrupting peptidoglycan cross-linking.",
    "Broad",
    "Both",
    "Bacteriolytic",
    ["Streptococcal infections, syphilis, skin infections"],
    ["Beta-lactamase-producing bacteria"]
);

const tetracyclines = new Antibiotic(
    "Tetracyclines",
    "Tetracyclines",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 30S ribosomal subunit, preventing attachment of tRNA to the ribosome.",
    "Broad",
    "Both",
    "Bacteriostatic",
    ["Respiratory infections, acne, rickettsial infections"],
    ["Tetracycline-resistant Enterobacteriaceae"]
);

const quinolones = new Antibiotic(
    "Quinolones",
    "Fluoroquinolones",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
    "Broad",
    "Both",
    "Bactericidal",
    ["Urinary tract infections, respiratory infections, gastrointestinal infections"],
    ["Fluoroquinolone-resistant Pseudomonas aeruginosa"]
);

const macrolides = new Antibiotic(
    "Macrolides",
    "Macrolides",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 50S ribosomal subunit, preventing elongation of the polypeptide chain.",
    "Broad",
    "Gram-positive",
    "Bacteriostatic",
    ["Respiratory infections, skin infections, atypical pneumonia"],
    ["Macrolide-resistant Streptococcus pneumoniae"]
);

const mutilins = new Antibiotic(
    "Mutilins",
    "Pleuromutilins",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 50S ribosomal subunit, preventing formation of functional ribosomes.",
    "Narrow",
    "Gram-positive",
    "Bacteriostatic",
    ["Skin infections, community-acquired pneumonia"],
    ["Resistance due to ribosomal mutations"]
);

const metronidazole = new Antibiotic(
    "Metronidazole",
    "Nitroimidazoles",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Forms toxic free radicals in anaerobic bacteria, damaging DNA.",
    "Narrow",
    "Anaerobic",
    "Bactericidal",
    ["Anaerobic infections, Clostridioides difficile infections"],
    ["Resistance in Helicobacter pylori"]
);

const sulfonamides = new Antibiotic(
    "Sulfonamides",
    "Sulfonamides",
    null,
    "Antimetabolite Activity",
    "Inhibits dihydropteroate synthase, preventing folate synthesis.",
    "Broad",
    "Both",
    "Bacteriostatic",
    ["Urinary tract infections, respiratory infections"],
    ["Sulfonamide-resistant Escherichia coli"]
);

const glycopeptides = new Antibiotic(
    "Glycopeptides",
    "Glycopeptides",
    null,
    "Inhibition of Cell Wall Synthesis",
    "Binds to D-Ala-D-Ala terminal of peptidoglycan precursors, blocking polymerization.",
    "Narrow",
    "Gram-positive",
    "Bacteriolytic",
    ["MRSA infections, endocarditis"],
    ["Vancomycin-resistant Enterococci (VRE)"]
);

const adep = new Antibiotic(
    "ADEP",
    "Depsipeptides",
    null,
    "Antimetabolite Activity",
    "Activates ClpP protease, causing uncontrolled protein degradation.",
    "Narrow",
    "Gram-positive",
    "Bactericidal",
    ["Gram-positive resistant infections"],
    ["Mutations in ClpP protease"]
);

const rifampicin = new Antibiotic(
    "Rifampicin",
    "Rifamycins",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Inhibits bacterial RNA polymerase, preventing transcription.",
    "Broad",
    "Both",
    "Bactericidal",
    ["Tuberculosis, meningitis prophylaxis"],
    ["Rifampicin-resistant Mycobacterium tuberculosis"]
);

const clavulanicAcid = new Antibiotic(
    "Clavulanic Acid",
    "Beta-Lactamase Inhibitors",
    null,
    "Antimetabolite Activity",
    "Inhibits beta-lactamase enzymes, restoring beta-lactam antibiotic efficacy.",
    "None",
    "None",
    "None",
    ["Used in combination with beta-lactam antibiotics"],
    ["Beta-lactamase with altered binding sites"]
);

const bacitracin = new Antibiotic(
    "Bacitracin",
    "Polypeptides",
    null,
    "Inhibition of Cell Wall Synthesis",
    "Inhibits bactoprenol phosphate recycling, disrupting peptidoglycan synthesis.",
    "Narrow",
    "Gram-positive",
    "Bacteriolytic",
    ["Skin and wound infections"],
    ["Resistance through efflux pumps"]
);

const oxazolidinones = new Antibiotic(
    "Oxazolidinones",
    "Oxazolidinones",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 50S ribosomal subunit, preventing formation of the initiation complex.",
    "Narrow",
    "Gram-positive",
    "Bacteriostatic",
    ["MRSA, VRE infections"],
    ["Mutations in ribosomal RNA"]
);

const lincosamides = new Antibiotic(
    "Lincosamides",
    "Lincosamides",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 50S ribosomal subunit, preventing peptide bond formation.",
    "Narrow",
    "Gram-positive",
    "Bacteriostatic",
    ["Skin and soft tissue infections"],
    ["Lincosamide-resistant Staphylococcus aureus"]
);

const polymyxins = new Antibiotic(
    "Polymyxins",
    "Polymyxins",
    null,
    "Alteration of Cell Membranes",
    "Disrupts bacterial outer membranes by binding to lipopolysaccharides.",
    "Narrow",
    "Gram-negative",
    "Bacteriolytic",
    ["Multidrug-resistant Gram-negative infections"],
    ["Resistance due to altered lipid A"]
);

const lipopeptides = new Antibiotic(
    "Lipopeptides",
    "Lipopeptides",
    null,
    "Alteration of Cell Membranes",
    "Binds to bacterial membranes, causing depolarization and ion leakage.",
    "Narrow",
    "Gram-positive",
    "Bactericidal",
    ["MRSA infections, bacteremia"],
    ["Resistance in Enterococcus spp."]
);

const clofazimine = new Antibiotic(
    "Clofazimine",
    "Riminophenazines",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Binds to bacterial DNA, disrupting replication and transcription.",
    "Narrow",
    "Gram-positive",
    "Bactericidal",
    ["Leprosy, Mycobacterium avium complex infections"],
    ["Resistance in Mycobacterium leprae"]
);

const chloramphenicol = new Antibiotic(
    "Chloramphenicol",
    "Phenicols",
    null,
    "Inhibition of Protein Synthesis",
    "Binds to the 50S ribosomal subunit, preventing peptide bond formation.",
    "Broad",
    "Both",
    "Bacteriostatic",
    ["Typhoid fever, meningitis, rickettsial infections"],
    ["Chloramphenicol-resistant Salmonella typhi"]
);

const vancomycin = new Antibiotic(
    "Vancomycin",
    "Glycopeptides",
    null,
    "Inhibition of Cell Wall Synthesis",
    "Binds to D-Ala-D-Ala terminal, preventing peptidoglycan cross-linking.",
    "Narrow",
    "Gram-positive",
    "Bactericidal",
    ["MRSA infections, endocarditis, C. difficile-associated diarrhea"],
    ["Vancomycin-resistant Enterococci (VRE)"]
);

const carbapenems = new Antibiotic(
    "Carbapenems",
    "Beta-Lactams",
    "Carbapenems",
    "Inhibition of Cell Wall Synthesis",
    "Binds to penicillin-binding proteins (PBPs), preventing peptidoglycan cross-linking, highly resistant to most beta-lactamases.",
    "Broad",
    "Both",
    "Bacteriolytic",
    ["Severe Gram-positive and Gram-negative infections, multidrug-resistant bacterial infections"],
    ["Carbapenem-resistant Enterobacteriaceae (CRE)"]
);

const monobactams = new Antibiotic(
    "Monobactams",
    "Beta-Lactams",
    "Monobactams",
    "Inhibition of Cell Wall Synthesis",
    "Binds to penicillin-binding proteins (PBPs), disrupting peptidoglycan cross-linking, effective only against Gram-negative bacteria.",
    "Narrow",
    "Gram-negative",
    "Bacteriolytic",
    ["Serious Gram-negative infections in beta-lactam-allergic patients"],
    ["Resistance due to beta-lactamase production"]
);

const nitrofurantoin = new Antibiotic(
    "Nitrofurantoin",
    "Nitrofurans",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Forms reactive intermediates that damage bacterial DNA.",
    "Narrow",
    "Both",
    "Bactericidal",
    ["Uncomplicated urinary tract infections"],
    ["Resistance due to enzymatic inactivation"]
);

const isoniazid = new Antibiotic(
    "Isoniazid",
    "Anti-Tuberculosis Drugs",
    null,
    "Inhibition of Mycolic Acid Synthesis",
    "Blocks mycolic acid synthesis, a key component of the Mycobacterium tuberculosis cell wall.",
    "Narrow",
    "Mycobacteria",
    "Bactericidal",
    ["Tuberculosis"],
    ["Isoniazid-resistant Mycobacterium tuberculosis"]
);

const ethambutol = new Antibiotic(
    "Ethambutol",
    "Anti-Tuberculosis Drugs",
    null,
    "Inhibition of Cell Wall Synthesis",
    "Inhibits arabinosyltransferase enzymes, preventing the synthesis of the mycobacterial cell wall.",
    "Narrow",
    "Mycobacteria",
    "Bacteriostatic",
    ["Tuberculosis"],
    ["Resistance due to mutations in the embB gene"]
);

const fidaxomicin = new Antibiotic(
    "Fidaxomicin",
    "Macrolides",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Inhibits bacterial RNA polymerase, preventing transcription.",
    "Narrow",
    "Gram-positive",
    "Bactericidal",
    ["Clostridioides difficile-associated diarrhea"],
    ["Resistance due to mutations in RNA polymerase"]
);

const dapsone = new Antibiotic(
    "Dapsone",
    "Sulfonamides",
    null,
    "Antimetabolite Activity",
    "Inhibits dihydropteroate synthase, disrupting folate synthesis in bacteria and protozoa.",
    "Narrow",
    "Both",
    "Bacteriostatic",
    ["Leprosy, Pneumocystis jirovecii pneumonia prophylaxis"],
    ["Resistance due to mutations in dihydropteroate synthase"]
);

const rifaximin = new Antibiotic(
    "Rifaximin",
    "Rifamycins",
    null,
    "Inhibition of Nucleic Acid Synthesis",
    "Inhibits bacterial RNA polymerase, disrupting transcription.",
    "Narrow",
    "Gram-positive",
    "Bactericidal",
    ["Traveler’s diarrhea, hepatic encephalopathy prophylaxis"],
    ["Resistance due to mutations in RNA polymerase"]
);

const antibiotics = [
    aminoglycosides,
    cephalosporins,
    penicillins,
    tetracyclines,
    quinolones,
    macrolides,
    mutilins,
    metronidazole,
    sulfonamides,
    glycopeptides,
    adep,
    rifampicin,
    clavulanicAcid,
    bacitracin,
    oxazolidinones,
    lincosamides,
    polymyxins,
    lipopeptides,
    clofazimine,
    chloramphenicol,
    vancomycin,
	carbapenems,
    monobactams,
    nitrofurantoin,
    isoniazid,
    ethambutol,
    fidaxomicin,
    dapsone,
    rifaximin
];
