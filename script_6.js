//
var arn = "CCGUCGUUGCGCUACAGC";
var arn2 = "CCUCGCCGGUACUUCUCG";

function arnToProteins(arn){
   var serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
   var proline = ["CCU", "CCC", "CCA", "CCG"];
   var leucine = ["UUA", "UUG"];
   var phenylalanine = ["UUU", "UUC"];
   var arginine= ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
   var tyrosine= ["UAU", "UAC"];
   var aminoAcids = [];
   var codons = arn.match(/.{1,3}/g);
    codons.forEach(codon => {
        if (serine.includes(codon)){
            aminoAcids.push("Serine");
        } else if (proline.includes(codon)){
            aminoAcids.push("Proline");
        } else if (leucine.includes(codon)){
            aminoAcids.push("Leucine");
        } else if (phenylalanine.includes(codon)){
            aminoAcids.push("Phenylalanine");
        } else if (arginine.includes(codon)){
            aminoAcids.push("Arginine");
        } else if (tyrosine.includes(codon)){
            aminoAcids.push("Tyrosine");
        }
    });
    console.log(aminoAcids.join("-"))
}

arnToProteins(arn);
