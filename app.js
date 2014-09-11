var timetable =
[
  [ // Week 1
    [ // Monday Week 1
      {
        subject: "HQ",
        room: "HQ"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Sociology",
        room: "N26"
      },
      {
        subject: "Maths",
        room: "N02"
      },
      {
        subject: "The Rite Journey",
        room: "PA04"
      }
    ],
    [ // Tuesday Week 1
      {
        subject: "KPM",
        room: "P1"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Maths",
        room: "N02"
      },
      {
        subject: "English",
        room: "N26"
      },
      {
        subject: "English",
        room: "N28"
      }
    ],
    [ // Wednesday Week 1
      {
        subject: "Sociology",
        room: "PA04"
      },
      {
        subject: "Sociology",
        room: "PA04"
      },
      {
        subject: "Maths",
        room: "PA04"
      },
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "Geography",
        room: "M18"
      }
    ],
    [ // Thursday Week 1
      {
        subject: "HQ",
        room: "HQ"
      },
      {
        subject: "Geography",
        room: "M18"
      },
      {
        subject: "English",
        room: "N28"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "PE",
        room: "G1"
      },
    ],
    [ // Friday Week 1
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "KPM",
        room: "P1"
      },
      {
        subject: "English",
        room: "N27"
      },
      {
        subject: "Geography",
        room: "M18"
      },
      {
        subject: "Science",
        room: "N14"
      },
    ]
  ],
  [ // Week 2
    [ // Monday Week 2
      {
        subject: "English",
        room: "LiFi"
      },
      {
        subject: "The Rite Journey",
        room: "PA04"
      },
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "Geography",
        room: "M18"
      },
      {
        subject: "Science",
        room: "N14"
      }
    ],
    [ // Tuesday Week 2
      {
        subject: "Maths",
        room: "N15"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Geography",
        room: "PA03"
      },
      {
        subject: "English",
        room: "PA04"
      },
      {
        subject: "Sociology",
        room: "PA04"
      }
    ],
    [ // Wednesday Week 2
      {
        subject: "Sociology",
        room: "N02"
      },
      {
        subject: "Maths",
        room: "N14"
      },
      {
        subject: "HQ",
        room: "HQ"
      },
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "Science",
        room: "N14"
      }
    ],
    [ // Thursday Week 2
      {
        subject: "PE",
        room: "Gym"
      },
      {
        subject: "PE",
        room: "Gym"
      },
      {
        subject: "The Rite Journey",
        room: "PA04"
      },
      {
        subject: "Maths",
        room: "N17"
      },
      {
        subject: "Maths",
        room: "M12"
      }
    ],
    [ // Friday Week 2
      {
        subject: "English",
        room: "N27"
      },
      {
        subject: "Geography",
        room: "M06"
      },
      {
        subject: "HQ",
        room: "HQ"
      },
      {
        subject: "HQ",
        room: "HQ"
      },
      {
        subject: "KPM",
        room: "P1"
      }
    ]
  ]
];

  var currentPeriod = function() {
    var now = new Date();
    if(now.getHours() < 9 || (now.getHours() <= 9 && now.getMinutes() <= 55)) {
      return 0;
    } else if(now.getHours() < 10 || (now.getHours() <= 11 && now.getMinutes() <= 55)) {
      return 1;
    } else if(now.getHours() < 12 || (now.getHours() <= 13 && now.getMinutes() <= 15)) {
      return 2;
    } else if(now.getHours() < 13 || (now.getHours() <= 14 && now.getMinutes() <= 15)) {
      return 3;
    } else {
      return 4;
    }
  };

  function currentDay() {
    var now = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[now.getDay()];
    var number = 0;

    switch(day) {
      case 'Saturday':
      case 'Sunday':
        number = null;
        break;
      case 'Monday':
        number = 0;
        break;
      case 'Tuesday':
        number = 1;
        break;
      case 'Wednesday':
        number = 2;
        break;
      case 'Thursday':
        return 3;
        break;
      case 'Friday':
        number = 4;
        break;
    }

    if (now.getHours > 16) {
      var newDay = number + 1;
      if(number === 4) {
        newDay = 0;
      }
      number = newDay;
    }

    return number;
  };

  function currentCycle() {
    var oneDay = 24*60*60*1000;
    var start = new Date(2014,07,21);
    var today = new Date();

    var diffDays = Math.round(Math.abs((start.getTime() - today.getTime())/(oneDay)));
    if(((diffDays / 7) % 2) > 1)  {
      return 1;
    } else {
      return 0;
    }
  };

  function getCurrentClass() {
    var now = new Date();
    if(currentDay() === null) {
      return timetable[currentCycle()][0][0];
    } else {
      return timetable[currentCycle()][currentDay()][currentPeriod()];
    }
  };

  function getNextClass() {
    var now = new Date();
    if(currentDay() === null) {
      return timetable[currentCycle()][0][1];
    } else {
      return timetable[currentCycle()][currentDay()][currentPeriod() + 1];
    }
  };

  var classes = timetable[currentCycle()][currentDay() || 0];
  console.log(classes);
  console.log(currentCycle());
  console.log(currentDay());
  console.log(document.getElementsByClassName('box')[0]);

  var shortenings = {
    'PE': 'PE',
    'English': 'ENG',
    'Maths': 'MATH',
    'Science': 'SCI',
    'Drama': 'DRA',
    'Sociology': 'SOC',
    'KPM': 'KPM',
    'HQ': 'HQ',
    'Geography': 'GEO',
    'The Rite Journey': 'TRJ'
  };

  for(var i = 0; i < 5; i++) {
    document.getElementsByClassName('box')[i].innerHTML = shortenings[classes[i].subject];
  }

  document.getElementsByClassName('current-class')[0].innerHTML = getCurrentClass().subject + ' in ' + getCurrentClass().room;
  document.getElementsByClassName('next-class')[0].innerHTML = getNextClass().subject + ' in ' + getNextClass().room;
