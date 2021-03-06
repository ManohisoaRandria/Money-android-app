CREATE TABLE IF NOT EXISTS depense (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    montant DECIMAL(10,2),
    date DATE,
    motif TEXT
);

CREATE TABLE IF NOT EXISTS credit (
    id PRIMARY KEY AUTOINCREMENT,
    montant DECIMAL(10,2),
    date DATE
);

CREATE TABLE IF NOT EXISTS solde (
    id PRIMARY KEY AUTOINCREMENT,
    montantRest DECIMAL(10.2),
    mois INTEGER,
    annee INTEGER
);