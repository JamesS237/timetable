var timetable =
[
  [ // Week 1
    [ // Monday Week 1
      {
        subject: "French",
        room: "PA03"
      },
      {
        subject: "English",
        room: "M18"
      },
      {
        subject: "Engineering Design",
        room: "Pub"
      },
      {
        subject: "English",
        room: "N28"
      },
      {
        subject: "Latin",
        room: "Above Black Box"
      }
    ],
    [ // Tuesday Week 1
      {
        subject: "KPM",
        room: "PAO4"
      },
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "English",
        room: "PA03"
      },
      {
        subject: "Science",
        room: "N24"
      },
      {
        subject: "Maths",
        room: "N17"
      }
    ],
    [ // Wednesday Week 1
      {
        subject: "Engineering Design",
        room: "Pub"
      },
      {
        subject: "Engineering Design",
        room: "Pub"
      },
      {
        subject: "Maths",
        room: "N16"
      },
      {
        subject: "Science",
        room: "N24"
      },
      {
        subject: "English",
        room: "N14"
      }
    ],
    [ // Thursday Week 1
      {
        subject: "French",
        room: "PA03"
      },
      {
        subject: "PE",
        room: "Gym"
      },
      {
        subject: "Science",
        room: "N24"
      },
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "Maths",
        room: "N15"
      },
    ],
    [ // Friday Week 1
      {
        subject: "Maths",
        room: "N15"
      },
      {
        subject: "KPM",
        room: "PA04"
      },
      {
        subject: "Geography",
        room: "M18"
      },
      {
        subject: "Geography",
        room: "PA04"
      },
      {
        subject: "Science",
        room: "N24"
      },
    ]
  ],
  [ // Week 2
    [ // Monday Week 2
      {
        subject: "Science",
        room: "N24"
      },
      {
        subject: "Latin",
        room: "Above Black Box"
      },
      {
        subject: "Extension Maths",
        room: "M17"
      },
      {
        subject: "English",
        room: "N25"
      },
      {
        subject: "Geography",
        room: "M17"
      }
    ],
    [ // Tuesday Week 2
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "Geography",
        room: "N18"
      },
      {
        subject: "Science",
        room: "N24"
      },
      {
        subject: "Maths",
        room: "N16"
      },
      {
        subject: "Engineering Design",
        room: "Pub"
      }
    ],
    [ // Wednesday Week 2
      {
        subject: "Engineering Design",
        room: "Pub"
      },
      {
        subject: "Geography",
        room: "PA06"
      },
      {
        subject: "French",
        room: "PA03"
      },
      {
        subject: "Maths",
        room: "N16"
      },
      {
        subject: "English",
        room: "N12"
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
        subject: "Latin",
        room: "Above Black Box"
      },
      {
        subject: "Science",
        room: "N24"
      },
      {
        subject: "Geography",
        room: "PA02"
      }
    ],
    [ // Friday Week 2
      {
        subject: "English",
        room: "N26"
      },
      {
        subject: "Drama",
        room: "Black Box"
      },
      {
        subject: "French",
        room: "PA03"
      },
      {
        subject: "French",
        room: "PA03"
      },
      {
        subject: "KPM",
        room: "PA04"
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
    'Latin': 'LAT',
    'English': 'ENG',
    'Maths': 'MATH',
    'Science': 'SCI',
    'French': 'FRE',
    'Drama': 'DRA',
    'Engineering Design': 'DES',
    'KPM': 'KPM'
  };

  for(var i = 0; i < 5; i++) {
    document.getElementsByClassName('box')[i].innerHTML = shortenings[classes[i].subject];
  }

  document.getElementsByClassName('current-class')[0].innerHTML = getCurrentClass().subject + ' in ' + getCurrentClass().room;
  document.getElementsByClassName('next-class')[0].innerHTML = getNextClass().subject + ' in ' + getNextClass().room;
