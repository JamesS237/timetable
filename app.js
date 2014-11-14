/*! log.js 0.1.5 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;window.console&&window.console.log&&(j=function(){var a;return a=[],k(arguments).forEach(function(b){return"string"==typeof b?a=a.concat(n(b)):a.push(b)}),o.apply(window,a)},o=function(){return console.log.apply(console,k(arguments))},k=function(a){return Array.prototype.slice.call(a)},c=[{regex:/\*([^\*]+)\*/,replacer:function(a,b){return"%c"+b+"%c"},styles:function(){return["font-style: italic",""]}},{regex:/\_([^\_]+)\_/,replacer:function(a,b){return"%c"+b+"%c"},styles:function(){return["font-weight: bold",""]}},{regex:/\`([^\`]+)\`/,replacer:function(a,b){return"%c"+b+"%c"},styles:function(){return["background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)",""]}},{regex:/\[c\=(?:\"|\')?((?:(?!(?:\"|\')\]).)*)(?:\"|\')?\]((?:(?!\[c\]).)*)\[c\]/,replacer:function(a,b,c){return"%c"+c+"%c"},styles:function(a){return[a[1],""]}}],e=function(a){var b;return b=!1,c.forEach(function(c){return c.regex.test(a)?b=!0:void 0}),b},d=function(a){var b;return b=[],c.forEach(function(c){var d;return d=a.match(c.regex),d?b.push({format:c,match:d}):void 0}),b.sort(function(a,b){return a.match.index-b.match.index})},n=function(a){var b,c,f;for(f=[];e(a);)c=d(a),b=c[0],a=a.replace(b.format.regex,b.format.replacer),f=f.concat(b.format.styles(b.match));return[a].concat(f)},i=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},h=function(){return/OPR/.test(navigator.userAgent)&&/Opera/.test(navigator.vendor)},f=function(){return/Firefox/.test(navigator.userAgent)},g=function(){return/MSIE/.test(navigator.userAgent)},m=function(){var a;return a=navigator.userAgent.match(/AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/),a?537.38<=parseInt(a[1],10)+parseInt(a[2],10)/100:!1},l=function(){var a;return a=navigator.userAgent.match(/OPR\/(\d+)\./),a?15<=parseInt(a[1],10):!1},b=function(){return window.console.firebug||window.console.exception},a=g()||f()&&!b()||h()&&!l()||i()&&!m()?o:j,a.l=o,"function"==typeof define&&define.amd?define(a):"undefined"!=typeof exports?module.exports=a:window.log=a)}).call(this);

var Timetable = {
  data: [
  [ // Week 1
    [ // Monday Week 1
      {
        subject: "Sociology",
        room: "N14"
      },
      {
        subject: "History",
        room: "N27"
      },
      {
        subject: "Maths",
        room: "N17"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "English",
        room: "N25"
      }
    ],
    [ // Tuesday Week 1
      {
        subject: "Business Man.",
        room: "M17"
      },
      {
        subject: "Maths",
        room: "N24"
      },
      {
        subject: "History",
        room: "PA03"
      },
      {
        subject: "Commerce",
        room: "M07"
      },
      {
        subject: "English",
        room: "N27"
      }
    ],
    [ // Wednesday Week 1
      {
        subject: "Business Man.",
        room: "M17"
      },
      {
        subject: "Careers",
        room: "PA06"
      },
      {
        subject: "Commerce",
        room: "PA03"
      },
      {
        subject: "English",
        room: "N28"
      },
      {
        subject: "Science",
        room: "N14"
      }
    ],
    [ // Thursday Week 1
      {
        subject: "English",
        room: "N28"
      },
      {
        subject: "History",
        room: "PA03"
      },
      {
        subject: "Personal Development",
        room: "N03"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Maths",
        room: "N17"
      },
    ],
    [ // Friday Week 1
      {
        subject: "Sociology",
        room: "PA04"
      },
      {
        subject: "Sociology",
        room: "PA04"
      },
      {
        subject: "Physical Education",
        room: "Gym"
      },
      {
        subject: "Physical Education",
        room: "Gym"
      },
      {
        subject: "Business Man.",
        room: "M16"
      },
    ]
  ],
  [ // Week 2
    [ // Monday Week 2
      {
        subject: "Sociology",
        room: "N03"
      },
      {
        subject: "History",
        room: "N16"
      },
      {
        subject: "English",
        room: "N26"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Maths",
        room: "N17"
      }
    ],
    [ // Tuesday Week 2
      {
        subject: "Commerce",
        room: "M16"
      },
      {
        subject: "Business Man.",
        room: "MO6"
      },
      {
        subject: "English",
        room: "N26"
      },
      {
        subject: "Maths",
        room: "PA06"
      },
      {
        subject: "History",
        room: "PA03"
      }
    ],
    [ // Wednesday Week 2
      {
        subject: "Commerce",
        room: "M07"
      },
      {
        subject: "Commerce",
        room: "M07"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Sociology",
        room: "N02"
      },
      {
        subject: "Personal Development",
        room: "N16"
      }
    ],
    [ // Thursday Week 2
      {
        subject: "Maths",
        room: "PA05"
      },
      {
        subject: "Maths",
        room: "PA05"
      },
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Business Man.",
        room: "M05"
      },
      {
        subject: "Commerce",
        room: "M16"
      }
    ],
    [ // Friday Week 2
      {
        subject: "Science",
        room: "N14"
      },
      {
        subject: "Business Man.",
        room: "M17"
      },
      {
        subject: "History",
        room: "PA03"
      },
      {
        subject: "English",
        room: "N28"
      },
      {
        subject: "Sociology",
        room: "PA06"
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
    log(
      "\n"
      +("_" + Timetable.util.days[Timetable.currentDay()] + ", Week " + (Timetable.currentCycle() + 1) + ":_\n" )  //bold
      + Timetable.data[Timetable.currentCycle()][Timetable.currentDay()].map(function(i){
          return "*" + i.subject + "* in *" + i.room + "*"
      }).reduce(function(a, b){
        return a + "\n" + b
      }, "")
      +"\n"
    )
});
