// Challenge 1 : View the Queue

let attendees = [
{ name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
{ name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
{ name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
{ name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
{ name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
{ name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
{ name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
{ name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];

// for (const attendee of attendees) {
//   console.log(
//     `Name: ${attendee.name}, Age: ${attendee.age}, Ticket: ${attendee.ticket}, Ticket valid: ${attendee.hasTicket}`
//   );

//   if (attendee.age >= 18 && attendee.hasTicket === true) {
//     console.log(`${attendee.name}: ENTRY APPROVED`);
//   } else if (attendee.age < 18) {
//     console.log(`${attendee.name}: ENTRY DENIED - UNDER 18`);
//   } else {
//     console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
//   }
// }

// Challenge 2: Who Can Enter?

// The festival is an 18+ event. An attendee may enter only when age >= 18 AND hasTicket ===
// true. Display ENTRY APPROVED or ENTRY DENIED. If entry is denied, explain whether the
// reason is UNDER 18 or NO VALID TICKET. Use if, else if, else and logical operators.

// for (const attendee of attendees) {
//   console.log(
//     `Name: ${attendee.name}, Age: ${attendee.age}, Ticket: ${attendee.ticket}, Ticket valid: ${attendee.hasTicket}`
//   );

//   if (attendee.age >= 18 && attendee.hasTicket === true) {
//     console.log(`${attendee.name}: ENTRY APPROVED`);
//   } else if (attendee.age < 18) {
//     console.log(`${attendee.name}: ENTRY DENIED - UNDER 18`);
//   } else {
//     console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
//   }
// }

// Challenge 3: Access Zones

// for (const attendee of attendees) {
//   console.log(
//     `Name: ${attendee.name}, Age: ${attendee.age}, Ticket: ${attendee.ticket}, Ticket valid: ${attendee.hasTicket}`
//   );

//   if (attendee.age >= 18 && attendee.hasTicket === true) {
//     console.log(`${attendee.name}: ENTRY APPROVED`);

//     switch (attendee.ticket) {
//       case "vip_holders":
//         console.log(`${attendee.name}: GOLD WRISTBAND`);
//         break;
//       case "general_holders":
//         console.log(`${attendee.name}: BLUE WRISTBAND`);
//         break;
//       default:
//         console.log(`${attendee.name}: UNKNOWN TICKET TYPE`);
//     }
//   } else if (attendee.age < 18) {
//     console.log(`${attendee.name}: ENTRY DENIED - UNDER 18`);
//   } else {
//     console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
//   }
// }

// Challenge 4: VIP Lounge Security

// for (const attendee of attendees) {
//   console.log(
//     `Name: ${attendee.name}, Age: ${attendee.age}, Ticket: ${attendee.ticket}, Ticket valid: ${attendee.hasTicket}`,
//   );

//   if (
//     attendee.hasTicket === true &&
//     attendee.ticket === "vip_holders" &&
//     attendee.age >= 18
//   ) {
//     console.log(`${attendee.name}: VIP LOUNGE ACCESS is APPROVED`);
//   } else {
//     console.log(`${attendee.name}: VIP LOUNGE ACCESS is DENIED`);

//     if (attendee.age < 18) {
//       console.log(`${attendee.name}: ENTRY DENIED - UNDER 18 for Vip Access.`);
//     } else if (attendee.hasTicket !== true) {
//       console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
//     } else {
//       console.log(`${attendee.name}: Must have VIP ticket for lounge access.`);
//     }
//   }
// }

// Challenge 5: Find a Person in the Queue

// let searchName = "Zanele";
// let attendeeFound = false;

// for (let i = 0; i < attendees.length; i++) {
//   if (attendees[i].name === searchName) {
//     console.log("Attendee found:", attendees[i]);

//     attendeeFound = true;

//     break; // Stops the for loop immediately when the attendee is found
//   }
// }

// if (attendeeFound === false) {
//   console.log(`No attendee found with the name "${searchName}".`);
// }

// Challenge 6: Security Fast Lane

// let hasTicket = false;

// for (let i = 0; i < attendees.length; i++) {
//   if (attendees[i].hasTicket === false) {
//     console.log(`${attendees[i].name} is skipped because; no valid ticket.`);
//     continue;
//   }
//   console.log(`${attendees[i].name} can be processed.`);
// }

// Challenge 7: Food Voucher Rewards

// for (let i = 0; i < attendees.length; i++) {
//   if (attendees[i].spend >= 1000) {
//     console.log(`${attendees[i].name} receives R200 food voucher`);
//   } else if (attendees[i].spend >= 500) {
//     console.log(`${attendees[i].name} receives R100 food voucher`);
//   } else if (attendees[i].spend >= 300) {
//     console.log(`${attendees[i].name} receives R50 food voucher`);
//   } else {
//     console.log(`${attendees[i].name} receives No food voucher`);
//   }
// }

// Challenge 8: Festival Statistics

let validTickets = 0;

for (let i = 0; i < attendees.length; i++) {
  if (attendees[i].hasTicket === true) {
    validTickets++;
  }
}

console.log(`Number of valid tickets: ${validTickets}`);

let invalidTickets = 0;

for (let i = 0; i < attendees.length; i++) {
  if (attendees[i].hasTicket === true) {
    invalidTickets++;
  }
}

console.log(`Number of invalid tickets: ${invalidTickets}`);

let under18 = 0;

for (let i = 0; i < attendees.length; i++) {
  if (attendees[i].age < 18 === true) {
    under18++;
  }
}

console.log(`Number of attendees under 18: ${under18}`);

let vipCount = 0;

for (let i = 0; i < attendees.length; i++) {
  if (attendees[i].ticket === vip_holders) {
    vipCount++;
  }
}

console.log(`Number of Vip tickets: ${vipCount}`);

let generalCount = 0;