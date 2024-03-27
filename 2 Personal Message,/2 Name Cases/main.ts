// lower case 
let personName: string ="Saimakhan"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// Title Cases
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
