let personNamename: string ="Saima"
console.log("lowercase:", personNamename.toLowerCase());


console.log("Uppercase:", personNamename.toLocaleUpperCase());


console.log("titlecase:", personNamename.replace(/\bw/g,c => c.toUpperCase()));