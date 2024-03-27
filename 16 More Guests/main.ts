let guest_list : string [] = [`samra`,`farhan`,`faisal`,`iqra`];
let not_present : string = `farhan`;
let new_guest : string = `Babar Azam`;
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`respected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\nThank you\n`)
    }
guest_list.unshift(`shaheen`,`sarfaraz`,`rizwan`);
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam` + guest_list[i] + `\nWe invited you on dinner tomorrow.\nThank you\n`)

}