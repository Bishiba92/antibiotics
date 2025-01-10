// Main mechanisms:
// 1. Inhibition of Cell Wall Synthesis
// 2. Inhibition of Protein Synthesis
// 3. Inhibition of Nucleic Acid Synthesis
// 4. Inhibition of Mycolic Acid Synthesis
// 5. Antimetabolite Activity
// 6. Alteration of Cell Membranes
class Antibiotic {
    constructor(name, family, subclass, mechanism, action, spectrum, gramStain, activityType, uses, resistance, description) {
        this.name = name;
        this.family = family;
        this.subclass = subclass;
        this.mechanism = mechanism; // One of five definitions of antibiotic mechanisms.
        this.action = action; // A bit more in-depth of the mechanism
        this.spectrum = spectrum; // "Broad" or "Narrow"
        this.gramStain = gramStain; // Gram effect: "Positive", "Negative", or "Both"
        this.activityType = activityType; // "Bacteriostatic", "Bactericidal", or "Bacteriolytic" if the bacteria eventually undergoes lysis.
        this.uses = uses; // Intended medical uses
        this.resistance = resistance; // Resistance information
        this.description = description;
    }
}

const aminoglycosides = new Antibiotic(
        "Aminoglycoside",
        "Aminoglycosides",
        null,
        "Inhibition of Protein Synthesis",
        "Binds to the 30S ribosomal subunit, causing misreading of mRNA and production of faulty proteins.",
        "Narrow",
        "Gram-negative",
        "Bactericidal",
        ["Serious Gram-negative infections, sepsis, endocarditis"],
        ["Aminoglycoside-resistant Enterobacteriaceae"]);

const cephalosporins = new Antibiotic(
        "Cephalosporin",
        "β-Lactams",
        "Cephalosporins",
        "Inhibition of Cell Wall Synthesis",
        "Binds to penicillin-binding proteins (PBPs), preventing peptidoglycan cross-linking.",
        "Broad",
        "Both",
        "Bacteriolytic",
        ["Respiratory infections, urinary tract infections, skin infections"],
        ["Extended-spectrum β-lactamase (ESBL)-producing bacteria"]);

const penicillins = new Antibiotic(
        "Penicillin",
        "β-Lactams",
        "Penicillins",
        "Inhibition of Cell Wall Synthesis",
        "Binds to penicillin-binding proteins (PBPs), disrupting peptidoglycan cross-linking.",
        "Broad",
        "Both",
        "Bacteriolytic",
        ["Streptococcal infections, syphilis, skin infections"],
        ["β-lactamase-producing bacteria"]);

const tetracyclines = new Antibiotic(
        "Tetracycline",
        "Tetracyclines",
        null,
        "Inhibition of Protein Synthesis",
        "Binds to the 30S ribosomal subunit, preventing attachment of tRNA to the ribosome.",
        "Broad",
        "Both",
        "Bacteriostatic",
        ["Respiratory infections, acne, rickettsial infections"],
        ["Tetracycline-resistant Enterobacteriaceae"]);

const quinolones = new Antibiotic(
        "Quinolone",
        "Fluoroquinolones",
        null,
        "Inhibition of Nucleic Acid Synthesis",
        "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
        "Broad",
        "Both",
        "Bactericidal",
        ["Urinary tract infections, respiratory infections, gastrointestinal infections"],
        ["Fluoroquinolone-resistant Pseudomonas aeruginosa"]);

const macrolides = new Antibiotic(
        "Macrolide",
        "Macrolides",
        null,
        "Inhibition of Protein Synthesis",
        "Binds to the 50S ribosomal subunit, preventing elongation of the polypeptide chain.",
        "Broad",
        "Gram-positive",
        "Bacteriostatic",
        ["Respiratory infections, skin infections, atypical pneumonia"],
        ["Macrolide-resistant Streptococcus pneumoniae"]);

const mutilins = new Antibiotic(
        "Mutilin",
        "Pleuromutilins",
        null,
        "Inhibition of Protein Synthesis",
        "Binds to the 50S ribosomal subunit, preventing formation of functional ribosomes.",
        "Narrow",
        "Gram-positive",
        "Bacteriostatic",
        ["Skin infections, community-acquired pneumonia"],
        ["Resistance due to ribosomal mutations"]);

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
        ["Resistance in Helicobacter pylori"],
        "Also anti-protozoal");

const sulfonamides = new Antibiotic(
        "Sulfonamide",
        "Sulfonamides",
        null,
        "Antimetabolite Activity",
        "Inhibits dihydropteroate synthase, preventing folate synthesis.",
        "Broad",
        "Both",
        "Bacteriostatic",
        ["Urinary tract infections, respiratory infections"],
        ["Sulfonamide-resistant Escherichia coli"]);

const glycopeptides = new Antibiotic(
        "Glycopeptide",
        "Glycopeptides",
        null,
        "Inhibition of Cell Wall Synthesis",
        "Binds to D-Ala-D-Ala terminal of peptidoglycan precursors, blocking polymerization.",
        "Narrow",
        "Gram-positive",
        "Bacteriolytic",
        ["MRSA infections, endocarditis"],
        ["Vancomycin-resistant Enterococci (VRE)"]);

const acyldepsipeptide = new Antibiotic(
        "Acyldepsipeptide",
        "Depsipeptides",
        null,
        "Antimetabolite Activity",
        "Activates ClpP protease, causing uncontrolled protein degradation.",
        "Narrow",
        "Gram-positive",
        "Bactericidal",
        ["Gram-positive resistant infections"],
        ["Mutations in ClpP protease"]);

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
        ["Rifampicin-resistant Mycobacterium tuberculosis"]);

const clavulanicAcid = new Antibiotic(
        "Clavulanic Acid",
        "β-Lactamase Inhibitors",
        null,
        "Antimetabolite Activity",
        "Inhibits β-lactamase enzymes, restoring β-lactam antibiotic efficacy.",
        "None",
        "None",
        "None",
        ["Used in combination with β-lactam antibiotics"],
        ["β-lactamase with altered binding sites"]);

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
        ["Resistance through efflux pumps"]);

const oxazolidinones = new Antibiotic(
        "Oxazolidinone",
        "Oxazolidinones",
        null,
        "Inhibition of Protein Synthesis",
        "Binds to the 50S ribosomal subunit, preventing formation of the initiation complex.",
        "Narrow",
        "Gram-positive",
        "Bacteriostatic",
        ["MRSA, VRE infections"],
        ["Mutations in ribosomal RNA"]);

const lincosamides = new Antibiotic(
        "Lincosamide",
        "Lincosamides",
        null,
        "Inhibition of Protein Synthesis",
        "Binds 50S subunit, Inhibits peptidyl transferase by interfering with binding of aminoacyl-tRNA complex which prevents protein synthesis.",
        "Narrow",
        "Gram-positive",
        "Bacteriostatic",
        ["Skin and soft tissue infections"],
        ["Lincosamide-resistant Staphylococcus aureus"]);

const polymyxins = new Antibiotic(
        "Polymyxin",
        "Polymyxins",
        null,
        "Alteration of Cell Membranes",
        "Disrupts bacterial outer membranes by binding to lipopolysaccharides.",
        "Narrow",
        "Gram-negative",
        "Bacteriolytic",
        ["Multidrug-resistant Gram-negative infections"],
        ["Resistance due to altered lipid A"]);

const lipopeptides = new Antibiotic(
        "Lipopeptide",
        "Lipopeptides",
        null,
        "Alteration of Cell Membranes",
        "Binds to bacterial membranes, causing depolarization and ion leakage.",
        "Narrow",
        "Gram-positive",
        "Bactericidal",
        ["MRSA infections, bacteremia"],
        ["Resistance in Enterococcus spp."]);

const clofazimine = new Antibiotic(
        "Clofazimine",
        "Riminophenazines",
        null,
        "Inhibition of Nucleic Acid Synthesis",
        "Binds to bacterial Guanine bases in DNA, disrupting replication and transcription. Also creates DNA-damage reactive oxygen species (ROS).",
        "Narrow",
        "Gram-positive",
        "Bactericidal",
        ["Leprosy, Mycobacterium avium complex infections"],
        ["Resistance in Mycobacterium leprae"]);

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
        ["Chloramphenicol-resistant Salmonella typhi"]);

const vancomycin = new Antibiotic(
        "Vancomycin",
        "Glycopeptides",
        null,
        "Inhibition of Cell Wall Synthesis",
        "Binds to D-Ala-D-Ala terminal of the peptidoglycan precursors, preventing peptidoglycan cross-linking.",
        "Narrow",
        "Gram-positive",
        "Bacteriolytic",
        ["MRSA infections, endocarditis, C. difficile-associated diarrhea"],
        ["Vancomycin-resistant Enterococci (VRE)"],
		  "Functional only on growing bacteria."
		);

const carbapenems = new Antibiotic(
        "Carbapenem",
        "β-Lactams",
        "Carbapenems",
        "Inhibition of Cell Wall Synthesis",
        "Binds to penicillin-binding proteins (PBPs), preventing peptidoglycan cross-linking, highly resistant to most β-lactamases.",
        "Broad",
        "Both",
        "Bacteriolytic",
        ["Severe Gram-positive and Gram-negative infections, multidrug-resistant bacterial infections"],
        ["Carbapenem-resistant Enterobacteriaceae (CRE)"]);

const monobactams = new Antibiotic(
        "Monobactam",
        "β-Lactams",
        "Monobactams",
        "Inhibition of Cell Wall Synthesis",
        "Binds to penicillin-binding proteins (PBPs), disrupting peptidoglycan cross-linking, effective only against Gram-negative bacteria.",
        "Narrow",
        "Gram-negative",
        "Bacteriolytic",
        ["Serious Gram-negative infections in β-lactam-allergic patients"],
        ["Resistance due to β-lactamase production"]);

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
        ["Resistance due to enzymatic inactivation"]);

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
        ["Isoniazid-resistant Mycobacterium tuberculosis"]);

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
        ["Resistance due to mutations in the embB gene"]);

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
        ["Resistance due to mutations in RNA polymerase"]);

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
        ["Resistance due to mutations in dihydropteroate synthase"]);

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
        ["Resistance due to mutations in RNA polymerase"]);

const cefotaxime = new Antibiotic(
        "Cefotaxime",
        "β-Lactams",
        "Cephalosporins",
        "Inhibition of Cell Wall Synthesis",
        "Cefotaxime binds to penicillin-binding proteins (PBPs) in bacterial cell walls, inhibiting the final step of peptidoglycan synthesis, leading to cell lysis.",
        "Broad",
        "Both",
        "Bacteriolytic",
        ["Pneumonia, Urinary tract infections, Meningitis, Sepsis"],
        ["Resistance may develop due to beta-lactamase production or modification of PBPs"],
        "Cefotaxime is a third-generation cephalosporin that is effective against both Gram-positive and Gram-negative bacteria, including some strains resistant to earlier-generation cephalosporins.");

const ceftazidime = new Antibiotic(
        "Ceftazidime",
        "β-Lactams",
        "Cephalosporins",
        "Inhibition of Cell Wall Synthesis",
        "Ceftazidime interferes with bacterial cell wall synthesis by binding to PBPs, leading to a weakened cell wall and bacterial cell death.",
        "Broad",
        "Both",
        "Bacteriolytic",
        ["Pseudomonas aeruginosa infections, Respiratory infections, Urinary tract infections"],
        ["Resistance is commonly due to beta-lactamase production or alterations in PBPs"],
        "Ceftazidime is a third-generation cephalosporin with enhanced activity against **Pseudomonas aeruginosa**, and is used for treating serious Gram-negative infections.");

const ceftriaxone = new Antibiotic(
        "Ceftriaxone",
        "β-Lactams",
        "Cephalosporins",
        "Inhibition of Cell Wall Synthesis",
        "Ceftriaxone binds to penicillin-binding proteins (PBPs) in bacterial cell walls, inhibiting the final step of peptidoglycan synthesis, leading to bacterial cell death.",
        "Broad",
        "Both",
        "Bacteriolytic",
        ["Pneumonia, Meningitis, Sepsis, Urinary tract infections, Gonorrhea"],
        ["Resistance to Ceftriaxone can develop through beta-lactamase production or PBP alterations"],
        "Ceftriaxone is a third-generation cephalosporin that is often preferred for its once-daily dosing regimen and broad efficacy against a wide range of infections.");

const lincomycin = new Antibiotic(
    "Lincomycin",
    "Lincosamides",
    null,
    "Inhibition of Protein Synthesis",
    "Lincomycin inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit, preventing peptide chain elongation.",
    "Narrow",
    "Both",
    "Bacteriostatic",
    ["Used for infections caused by Gram-positive cocci, including Staphylococcus aureus and Streptococcus species, as well as some anaerobic infections."],
    ["Resistance due to modification of the ribosomal target site or efflux pumps"],
    "Lincomycin is a narrow-spectrum antibiotic mainly used to treat Gram-positive bacterial infections and some anaerobic infections."
);

const clindamycin = new Antibiotic(
    "Clindamycin",
    "Lincosamides",
    null,
    "Inhibition of Protein Synthesis",
    "Clindamycin inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit, preventing peptide chain elongation.",
    "Narrow",
    "Both",
    "Bacteriostatic",
    ["Used for soft tissue infections, bone infections, and serious infections caused by Gram-positive bacteria, including MRSA and Streptococcus species."],
    ["Resistance due to modification of the ribosomal target site or efflux pumps"],
    "Clindamycin is a lincosamide antibiotic that is effective against many Gram-positive cocci, including methicillin-resistant Staphylococcus aureus (MRSA), and is commonly used for treating soft tissue infections."
);

const sulfamethoxazole = new Antibiotic(
    "Sulfamethoxazole",
    "Sulfonamides",
    null,
    "Antimetabolite Activity",
    "Sulfamethoxazole inhibits the enzyme dihydropteroate synthase, disrupting folate synthesis in bacteria and protozoa, leading to impaired nucleic acid synthesis.",
    "Narrow",
    "Both",
    "Bacteriostatic",
    ["Urinary tract infections, Pneumocystis jirovecii pneumonia (PJP) prophylaxis, Toxoplasmosis treatment"],
    ["Resistance due to mutations in dihydropteroate synthase or increased production of PABA"],
    "Sulfamethoxazole is a sulfonamide antibiotic primarily used to treat urinary tract infections and for prophylaxis against Pneumocystis jirovecii pneumonia in immunocompromised patients."
);

const erythromycin = new Antibiotic(
    "Erythromycin",
    "Macrolides",
    null,
    "Inhibition of Protein Synthesis",
    "Erythromycin inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit, preventing peptide chain elongation.",
    "Broad",
    "Both",
    "Bacteriostatic",
    ["Respiratory tract infections, Skin infections, Chlamydia infections, Pertussis (whooping cough)"],
    ["Resistance due to methylation of the ribosomal target site or efflux pumps"],
    "Erythromycin is a macrolide antibiotic used to treat a variety of bacterial infections, particularly in patients who are allergic to penicillin."
);

const kanamycinA = new Antibiotic(
    "Kanamycin A",
    "Aminoglycosides",
    null,
    "Inhibition of Protein Synthesis",
    "Kanamycin A binds to the 30S ribosomal subunit, causing misreading of mRNA and inhibiting protein synthesis.",
    "Broad",
    "Both",
    "Bactericidal",
    ["Used for the treatment of serious Gram-negative bacterial infections, including tuberculosis and infections caused by Pseudomonas aeruginosa"],
    ["Resistance due to enzymatic modification of the drug or mutations in the ribosomal target site"],
    "Kanamycin A is an aminoglycoside antibiotic used primarily for serious Gram-negative bacterial infections, including tuberculosis, and infections caused by **Pseudomonas aeruginosa** and **Enterobacteriaceae**."
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
    acyldepsipeptide,
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
    rifaximin,
    cefotaxime,
    ceftazidime,
    ceftriaxone, 
	lincomycin,
	clindamycin,
	sulfamethoxazole, 
	erythromycin,
	kanamycinA
];

sortArray(antibiotics);
