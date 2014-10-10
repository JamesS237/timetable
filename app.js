var Timetable = {
  data: [
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
  ],

  util: {
    now: new Date(),
    day: 24 * 60 * 60 * 1000,
    start: new Date(2014, 9, 7),
    days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    shortenings: {
      'PE': 'PE',
      'Latin': 'LAT',
      'English': 'ENG',
      'Maths': 'MATH',
      'Extension Maths': 'EXT',
      'Geography': 'GEO',
      'Science': 'SCI',
      'French': 'FRE',
      'Drama': 'DRA',
      'Engineering Design': 'DES',
      'KPM': 'KPM'
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
      document.getElementsByClassName('row')[i].innerHTML = this.util.shortenings[classes[i].subject];
    }

    document.getElementsByClassName('current-class')[0].innerHTML = getCurrentClass().subject + ' in ' + getCurrentClass().room;
    document.getElementsByClassName('next-class')[0].innerHTML = getNextClass().subject + ' in ' + getNextClass().room;

  }
}

document.addEventListener('DOMContentLoaded', function(){
  Timetable.render();
});
