/**
 * TEMPLATE
  {
    question: "QUESTION TEXT HERE",
    choices: [
      {
        text: "CHOICE 1 TEXT HERE",
        meterDeltas: { // HOW CHOOSING CHOICE 1 AFFECTS METERS HERE
          money: 0,
          timeWithFamily: 0,
          caringAboutVoting: 0
        }
      },
      {
        text: "CHOICE 2 TEXT HERE", 
        meterDeltas: { // HOW CHOOSING CHOICE 2 AFFECTS METERS HERE
          money: 0,
          timeWithFamily: 0,
          caringAboutVoting: 0
        }
      }
    ],
  },
 */

const DECISIONS = [
  // Decision 1
  {
    question: "You were notified you were accepted for two different jobs you applied to. Which do you take?",
    choices: [
      {
        text: "Post office job that pays $13 per hour with short and flexible shifts",
        meterDeltas: {
          money: 15,
          timeWithFamily: -10
        }
      },
      {
        text: "Industrial kitchen cleaning job that pays $17 per hour with long and inflexible shifts",
        meterDeltas: {
          money: 30,
          timeWithFamily: -30
        }
      }
    ],
  },
  // Decision 2
  {
    question: "You've saved up $4000 as of this month. Do you spend it on an used car so you can get around more easily or paying for daycare for your daughter?",
    choices: [
      {
        text: "Used car",
        meterDeltas: {
          money: -20,
          timeWithFamily: 20,
        }
      },
      {
        text: "Daycare",
        meterDeltas: {
          money: -10,
          timeWithFamily: -10
        }
      }
    ],
  },
  // Decision 3
  {
    question: "You find out there are free English classes at the local community college. Do you take them?",
    choices: [
      {
        text: "Yes",
        meterDeltas: {
          timeWithFamily: -20,
          caringAboutVoting: 10,
        }
      },
      {
        text: "No",
        meterDeltas: {
          caringAboutVoting: -10
        }
      }
    ],
  },
  // Decision 4
  {
    question: "A volunteer from the voting center calls your house offering help with getting registered to vote this year. Do you talk to him on the phone?",
    choices: [
      {
        text: "Yes",
        meterDeltas: {
          caringAboutVoting: 10,
        }
      },
      {
        text: "No",
        meterDeltas: {
          caringAboutVoting: -10
        }
      }
    ],
  },
  // Decision 5
  {
    question: "You can no longer afford the rent where you currently live. What do you do?",
    choices: [
      {
        text: "Get another part-time job",
        meterDeltas: {
          money: 20,
          timeWithFamily: -30,
          caringAboutVoting: 10
        }
      },
      {
        text: "Move 45 minutes away to a different county",
        meterDeltas: {
          timeWithFamily: -10,
          caringAboutVoting: -20
        }
      }
    ],
  },
  // Decision 6
  {
    question: "Your daughter is sick and it seems worse than a cold. You don't know what she has. What do you do?",
    choices: [
      {
        text: "Bring her to the hospital",
        meterDeltas: {
          money: -30,
        }
      },
      {
        text: "Treat her using home remedies",
        meterDeltas: {
          money: -20,
          timeWithFamily: 10
        }
      }
    ],
  },
  // Decision 7
  {
    question: "There are only a few days left to register to vote. Do you take half a day off work to go to the DMV?",
    choices: [
      {
        text: "Yes",
        meterDeltas: {
          money: -20,
          caringAboutVoting: 20
        }
      },
      {
        text: "No",
        meterDeltas: {
          money: 20,
          caringAboutVoting: -20
        }
      }
    ],
  },
];

export default DECISIONS;