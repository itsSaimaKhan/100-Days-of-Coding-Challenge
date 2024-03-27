var guest_list = ["samra", "farhan", "faisal", "iqra"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\nWe invited you on dinner tomorrow.\nThank you\n");
}
var not_present = "farhan";
var new_guest = "Babar Azam";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\nWe invited you on dinner tomorrow.\nThank you\n");
}
console.log("Mr. ".concat(not_present, " will not comming tomorrow dinner."));
