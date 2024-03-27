var personNamename = "Saima";
console.log("lowercase:", personNamename.toLowerCase());
console.log("Uppercase:", personNamename.toLocaleUpperCase());
console.log("titlecase:", personNamename.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
