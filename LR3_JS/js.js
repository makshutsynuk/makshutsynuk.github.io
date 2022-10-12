document.write('<h2>Індивідуальне завдання 1:</h2>')
  let date15 = new Date(2012, 1, 20, 3, 12)
  document.write(date15)
///////////////////

document.write('<h2>Індивідуальне завдання 2:</h2>')
  function getWeekDay(date) {
      let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    
      return days[date.getDay()]
    }
    
    let date16 = new Date(2014, 0, 3)
    document.write(getWeekDay(date16))
///////////////////////////////

document.write('<h2>Індивідуальне завдання 3:</h2>')
  function getLastDayOfMonth(year, month) {
    let date17 = new Date(year, month + 1, 0)
    return date17.getDate()
  }
  
  document.write(getLastDayOfMonth(2012, 0))
  document.write('<br>' + getLastDayOfMonth(2012, 1))
  document.write('<br>' + getLastDayOfMonth(2013, 1))

  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }
document.write('<br>' + getSecondsToTomorrow())
//////////////////////////

document.write('<h2>Індивідуальне завдання 4:</h2>')
  function formatDate(date) {
      let diff = new Date() - date;
    
      if (diff < 1000) { 
        return 'прямо зараз';
      }
    
      let sec = Math.floor(diff / 1000); 
    
      if (sec < 60) {
        return sec + ' ск. назад';
      }
    
      let min = Math.floor(diff / 60000); 
      if (min < 60) {
        return min + ' хв. назад';
      }
    
      let d = date;
      d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
      ].map(component => component.slice(-2)); 

      return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
    document.write(formatDate(new Date(new Date - 1)) ); // "прямо зараз"
    document.write('<br>' + formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
    document.write('<br>' + formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"
    document.write('<br>' + formatDate(new Date(new Date - 86400 * 1000)) );