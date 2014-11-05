var Timetable = {
  data: [
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
    ],

  util: {
    now: new Date(),
    day: 24 * 60 * 60 * 1000,
    start: new Date(2014, 9, 7),
    days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    shortenings: {
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
  }
  },

  currentPeriod: function () {

    var hours = this.util.now.getHours();
    var minutes = this.util.now.getMinutes();

    switch (true) {
      case (hours <= 9 && minutes <= 55): return 0;
      case (hours <= 10 && minutes <= 55): return 1;
      case (hours <= 12 && minutes <= 15): return 2;
      case (hours <= 13 && minutes <= 15): return 3;
      case (hours <= 15 && minutes <= 30): return 4;
      default: return 0;
    }
  },

  currentDay: function () {
    var day = this.util.days[this.util.now.getDay()];
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
        number = 3;
        break;
      case 'Friday':
        number = 4;
        break;
    }

    if (this.util.now.getHours() > 15 && this.util.now.getMinutes() > 30) {
      var newDay = number + 1;
      if(number === 4) {
        newDay = 0;
      }
      number = newDay;
    }

    return number;
  },

  currentCycle: function () {
    var diffDays = Math.round(Math.abs( (this.util.now.getTime() - this.util.start.getTime()) / (this.util.day)));

    if(((diffDays / 7) % 2) >= 1)  {
      return 0;
    } else {
      return 1;
    }
  },

  currentClass: function () {
    var now = new Date();
    if(currentDay() === null) {
      return timetable[currentCycle()][0][0];
    } else {
      return timetable[currentCycle()][currentDay()][currentPeriod()];
    }
  },

  nextClass: function () {
    if(currentDay() === null) {
      return this.data[this.currentCycle()][0][1];
    } else {
      return this.data[this.currentCycle()][this.currentDay()][this.currentPeriod() + 1];
    }
  },

  render: function () {
    var classes = this.data[this.currentCycle()][this.currentDay()];
    console.log(classes);

    for(var i = 0; i < 5; i++) {
      document.getElementsByClassName('row')[i].innerHTML = '<span class="subject">' + classes[i].subject + '</span>' + '<span class="room">' + classes[i].room + '</span>';
      if(this.currentPeriod() === i) {
        document.getElementsByClassName('row')[i].id = 'active';
      }
    }

    // document.getElementsByClassName('current-class')[0].innerHTML = this.currentClass().subject + ' in ' + getCurrentClass().room;
    // document.getElementsByClassName('next-class')[0].innerHTML = this.cgetNextClass().subject + ' in ' + getNextClass().room;

  }
}

document.addEventListener('DOMContentLoaded', function(){
  Timetable.render();
  
    console.log(
      (Timetable.util.days[Timetable.currentDay()] + ", Week " + (Timetable.currentCycle() + 1) )
      + ": \n"
      + Timetable.data[Timetable.currentCycle()][Timetable.currentDay()].map(function(i){
          return i.subject + " in " + i.room
      }).reduce(function(a, b){
        return a + "\n" + b
      }, "")
    )
});
