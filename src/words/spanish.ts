const words = `a tomar por culo,a tomar por saco,anda a cagar,apestar,bastardo,basura,bicho,burro,cabron,cabrón,cacorro,cagar,calientapollas,capullo,cara de culo,cara de monda,carajo,chancla (México),chapero,chichi,chimba,chingar,chocho,chúpame la pija,chúpame la polla,chúpamedias,chúpamela,chupar,cipote,coger,cojonazos,cojones,come mierda y muere,coño,culiao,culo,de puta madre,estúpido,follar,forro,gilipollas,gonorrea,guarra,hijo de perra,hijo de puta,hijueputa,hostia,huevo,huevón,huevos,idiota,imbécil,jode,joder,joder,jódete,joto,la concha de tu madre,la hostia,la madre que te parió,lame botas,loco,los cojones,maldito,malparido,mamahuevo,mamón,marica,maricon,maricón,mariconazo,mariquita,me cago en la hostia,me cago en ti,métetelo por el culo,mierda,mongolo,nabo,no me jodas,no me jodás,no seas gilipollas,pajero,payaso,pelos de los huevos,pelotas,pelotudo,pendejo,percanta,perro,pichacorta,pinche,piruja,polla,pollas en vinagre,puta,Puta madre,puto,qué cabrón,que te den,que te jodan,qué te jodan,rabo,raja,soplapollas,tarado,tonto,tonto del culo,tontopollas,trompada,un putero,verga,vete a la mierda,vete a la verga,vete al demonio,vete al infierno,zorra,zunga`;

// Tokenize the words, splitting at comma
export const badSpanishWords = new Set(words.split(","));

// Unnamed export of the words
export default words;
