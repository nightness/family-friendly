const words = `abruti,aller se faire foutre,allez, va t’en,amène ta mère pourque je te refasse,avale mes couilles,bachie coupe,baise,baise moi mor,baise toi,baiser,bander,batard,bigornette,bique,bise,bite,bitte,bloblos,bon sang,bordel,bordel de merde,bosser,bourré,bourrée,brackmard,branlage,branler,branlette,branleur,branleur de chiens morts,branleuse,brouter le cresson,broutte-minou,brûle en enfer,brûle en l'enfer,c'est des conneries,c’est chiant,c’est des conneries,c’est le bordel ici,c’est naze,c’est quoi ce bordel,c’est vraiment de ta faute,ça casse les couilles,ça craint,ça fait shier,ça m'emmerde,ça me casse les couilles,ça me fait chier,ça me saoûle,ça pue,ça schlingue,caca,cailler,calice,calisse,casse-couille,casse-couilles,casse-toi,casse-toi, idiot,casse-toi, idiote,casser les couilles,cave,ce putain d’embouteillage,ce putain d’ordinateur,cela me soûle,charogne,chatte,chiant,chiante,chiasse,chien sale,chienne,chier,chieur,chieuse,chiottes,choleque de merde,clito,clitoris,con,conasse,connard,connasse,conne,connerie,conneries,couille,couilles,couillon,couillonne,cramouille,crétin,crève la gueule ouverte,criss,crisse,crosseur,cul,debile,déconne,déconner,dégage,dégénéré,dégueulasse,dinde,drague,emmerdant,emmerder,emmerdeur,emmerdeuse,enculé,enculé de ta mère,enculé toi salaud,enculée,enculer,enculer les mouches,enculer une mouche,enculeur,enculeurs,enfoiré,enfoirée,étron,face de cul,faire enculer,faire foutre,fais chier,fait moi jouir,ferme ta gueule,fiche moi le paix,fif,fille de pute,film de cul,fils de pute,fils de salope,folle,fous le camps,fous le camps et morte,foutre,foutre la merde,foutre le bordel,framble,fucker,garage à bite,garce,gerbe,gerber,gouine,graine,grande folle,grogniasse,gros tas,gross cul,guenon,gueule,idiot,idiote,il est stupide,il fait chaud ici, enculé,il me fait chier,imbécile,j'en ai marre,j'en ai plus rien à foutre,j'en ai ral le bol,j'en ai ral le cul,j'en ai rien à cirer,j'en ai rien à foutre,j’ai baisé ta mère,j’ai envie de chier,j’en ai marre,j’en ai plus rien à foutre,j’en ai ral le bol,j’en ai ral le cul,j’en ai ras le bol,j’en ai rien à cirer,je m'en fiche,je m'en fou,je m'en fous,je m'en sacre,je m’emmerde,Je m’en bats les couilles,je m’en fiche,je m’en fou,je m’en fous,je me fais chier,je me fais chier ici,je pis dans ta bouche,je t'emmerde,je t'encule,je te déteste,je te nique ta race sale fils de chien,je veux faire l’amour avec toi,jouir,la chatte,la meme chose a toi,la putain de ta mère,la vache,laisse-moi tranquille,le con,lèche-cul,ma couille,mal baisée,mance,mange de la merde,mange ma bite,mange merde et morte,mange tes grands morts,maudit,ménage à trois,merdasse,merde,merde embulante,merdeuse,merdeux,mes couilles en toi,metteux,meuf,mince,mon dieu,morceau de merde,nana,ne rien foutre,nègre,negro,nique la police,nique ta mere,nique ta mère,nique ta mère espèce de gros bâtard de merde,nique ta mère la chauve,nique ta race,niquer,nom de dieu,nom de dieu de merde,noune,oh la vache,oh putain de merde,oh, merde,ordure,osti,osti de calisse de tabarnak,ostie,palucher,partir en couille,pauvre con,pédale,pédé,pétasse,péter,péter la cenne,péter les couilles,petit tabernac,petite pute,pipi,pisser,pisser dans,plotte,pouffe,pouffiasse,poupée,pousse-crotte,punaise,purée,putain,putain de bordel de merde,putain de merde,putain de temps,putain t’es moche,pute,qu’est-ce que tu branles,quel bordel,quel salaud,queue,queutard,ramoner,retourne enculer,rien à branler,rien à foutre,s’en branler,s’en foutre,sa mère,sa mère la pute,sa race,sac à foutre,sac à merde,sac merde,sac vin,sacrament,sacrebleu,salaud,salopard,salope,saloperie,se foutre dans la merde,se taire,stupide,suce,suceuse,t'as pas de couilles,t'es rien qu'un petit connard,t'es un salaud,t’as intérêt ne pas m’énervé,t’as pas de couilles,t’es débile,t’es rien qu’un petit connard,t’es un salaud,t’es vraiment emmerdant, toi,ta gueule,ta mère elle suce des ours,ta mere est francaise,ta mère est une pute,ta mère la pute,ta mere suce des bites en enfer,tabarnak,tais-toi,tanche,tantouze,tapette,tarte,tas de marde,tata,tête de nœud,tête moi le dard,tête moi le noeud,téteux,teuch,teuf,traînée,très stupide,tringler,trique,troncher,trou de cul,trou du cul,tu commence m’enmerder,tu es con,tu es très stupide,tu es un putain,tu et un ane,tu fais chier,tu m'emmerdes,tu me fais chier,tu me fatigues,tu me gonfles,turlute,une salope,va te branler,va te crosser,va te faire,va te faire baiser,va te faire enculer,va te faire foutre,va te faire mettre,va te faire voir,va te tripoter,vache,vas faire foutre a la vache,veuve,vous êtes stupide,vous sentez comme le boeuf et le fromage,vous vissez,zigounette,zizi,zut,zut alors`;

// Tokenize the words, splitting at comma
export const badFrenchWords = new Set(words.split(","));

// Unnamed export of the words
export default words;
