----------credit----------
INSERT or IGNORE INTO credit(id,montant,date) VALUES(null,100000,'01/01/2020');
INSERT or IGNORE INTO credit(id,montant,date) VALUES(null,50000,'01/02/2020');
INSERT or IGNORE INTO credit(id,montant,date) VALUES(null,23000,'29/02/2020');

----------depense---------
INSERT or IGNORE INTO depense(id,montant,date,motif) VALUES(null,50000,'02/01/2020');
INSERT or IGNORE INTO depense(id,montant,date,motif) VALUES(null,9000,'05/01/2020');
INSERT or IGNORE INTO depense(id,montant,date,motif) VALUES(null,1000,'12/02/2020');
INSERT or IGNORE INTO depense(id,montant,date,motif) VALUES(null,7000,'30/02/2020');

----------solde-----------
INSERT or IGNORE INTO depense(id,montantRest,mois,annee) VALUES(null,41000,1,2020);
INSERT or IGNORE INTO depense(id,montantRest,mois,annee) VALUES(null,106000,2,2020);
