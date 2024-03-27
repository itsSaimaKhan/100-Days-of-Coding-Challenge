var guest_list = ["samra", "farhan", "faisal", "iqra"];
var not_present = "farhan";
var new_guest = "Babar Azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected sir/Madam " + guest_list[i] + ",\nWe invited you on dinner tomorrow.\nThank you\n");
}
guest_list.unshift("shaheen", "sarfaraz", "rizwan");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + "\nWe invited you on dinner tomorrow.\nThank you\n");
}
