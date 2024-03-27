let guest_list : string [] = [`samra`,`farhan`,`faisal`,`iqra`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank you\n`)
}
let not_present : string = `farhan`;
let new_guest : string = `Babar Azam`;
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected sir/Madam` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank you\n`)
    }
console.log(`Mr. ${not_present} will not comming tomorrow dinner.`)