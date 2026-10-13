// A large music festival is taking place this weekend. Thousands of people are expected to
// attend, but the festival's automated access system is not ready. You have been hired as a
// junior JavaScript developer to create a simplified Festival Access & Crowd Control System.
// Your program will process festival attendees and decide:
// • who may enter
// Answer: 

// • who must be denied entry
// • who gets VIP access
// • who requires an age check
// • who receives food vouchers
// • how many people are inside
// • whether the venue is approaching capacity
// • when entry should be stopped
// Security first needs to see everyone waiting to enter. Use a for...of loop to display each
// attendee's name, age, ticket type and ticket validity. Your loop must process the entire array
// automatically. Do not write separate output statements for individual attendees.

// Answer: 

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

