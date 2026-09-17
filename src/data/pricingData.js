export const pricingPlans = [
  {
    id: "football-plan",
    sport: "Football Turf",
    badge: "Most Booked",
    highlight: true,
    capacity: "Up to 14 Players (5v5 / 7v7)",
    rates: [
      { slotType: "Daytime Slots (6:00 AM – 5:00 PM)", price: 800, unit: "per hour" },
      { slotType: "Prime & Floodlights (5:00 PM – 12:00 AM)", price: 1200, unit: "per hour" }
    ],
    inclusions: [
      "Full artificial grass turf pitch access",
      "Complimentary match balls (Size 5)",
      "Colored team scrimmage bibs (2 sets)",
      "Dugout team bench with mist cooling",
      "Drinking water dispenser access",
      "Locker room & clean shower facilities"
    ],
    ctaText: "Book Football Slot",
    sportType: "football"
  },
  {
    id: "cricket-plan",
    sport: "Box Cricket Arena",
    badge: "Squad Pick",
    highlight: false,
    capacity: "Up to 16 Players (6v6 / 8v8)",
    rates: [
      { slotType: "Daytime Slots (6:00 AM – 5:00 PM)", price: 600, unit: "per hour" },
      { slotType: "Prime & Floodlights (5:00 PM – 12:00 AM)", price: 900, unit: "per hour" }
    ],
    inclusions: [
      "Enclosed perimeter netting box",
      "Match-quality hard tennis balls",
      "2 Kashmir willow powerplay bats",
      "Wicket sets & batting/wicketkeeper gloves",
      "Digital scoreboard with remote scoring",
      "Covered spectator seating zone"
    ],
    ctaText: "Book Cricket Slot",
    sportType: "cricket"
  }
];

export const studentOffer = {
  title: "College Student Happy Hours",
  discount: "20% OFF",
  validity: "Monday to Friday • 10:00 AM to 4:00 PM",
  code: "STUDENT20",
  terms: "Valid on presenting a valid college or school student ID card at the arena reception.",
  note: "Applicable directly in the booking modal review step!"
};
