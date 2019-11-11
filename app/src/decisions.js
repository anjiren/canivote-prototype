const DECISIONS = [
  // Decision 1
  {
    question: "You were notified you were accepted for two different jobs you applied to. Which do you take?",
    choices: [
      {
        text: "Post office job that pays $13 per hour with short and flexible shifts",
        meterDeltas: {
          money: 5,
          timeWithFamily: -5
        }
      },
      {
        text: "Industrial kitchen cleaning job that pays $17 per hour with long and inflexible shifts",
        meterDeltas: {
          money: 10,
          timeWithFamily: -10
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
          money: -10,
          timeWithFamily: 5,
        }
      },
      {
        text: "Daycare",
        meterDeltas: {
          money: -5,
          timeWithFamily: -5
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
          timeWithFamily: -5,
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
];

export default DECISIONS;