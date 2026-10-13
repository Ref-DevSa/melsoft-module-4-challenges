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

for (const attendee of attendees) {
  console.log(
    `Name: ${attendee.name}, Age: ${attendee.age}, Ticket: ${attendee.ticket}, Ticket valid: ${attendee.hasTicket}`
  );

  if (attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name}: ENTRY APPROVED`);
  } else if (attendee.age < 18) {
    console.log(`${attendee.name}: ENTRY DENIED - UNDER 18`);
  } else {
    console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
  }
}

// Challenge 3: Access Zones

for (const attendee of attendees) {
  console.log(
    `Name: ${attendee.name}, Age: ${attendee.age}, Ticket: ${attendee.ticket}, Ticket valid: ${attendee.hasTicket}`
  );

  if (attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name}: ENTRY APPROVED`);

    switch (attendee.ticket) {
      case "vip_holders":
        console.log(`${attendee.name}: GOLD WRISTBAND`);
        break;
      case "general_holders":
        console.log(`${attendee.name}: BLUE WRISTBAND`);
        break;
      default:
        console.log(`${attendee.name}: UNKNOWN TICKET TYPE`);
    }
  } else if (attendee.age < 18) {
    console.log(`${attendee.name}: ENTRY DENIED - UNDER 18`);
  } else {
    console.log(`${attendee.name}: ENTRY DENIED - NO VALID TICKET`);
  }
}