               //显示时间
               function runTime() {
                    var d = new Date(), str = '';
                    BirthDay = new Date("March 01,2018");
                    today = new Date();
                    timeold = (today.getTime() - BirthDay.getTime());
                    sectimeold = timeold / 1000
                    secondsold = Math.floor(sectimeold);
                    msPerDay = 24 * 60 * 60 * 1000
                    msPerYear = 365 * 24 * 60 * 60 * 1000
                    e_daysold = timeold / msPerDay
                    e_yearsold = timeold / msPerYear
                    daysold = Math.floor(e_daysold);
                    yearsold = Math.floor(e_yearsold);
                    //str = yearsold + "年";
                    str += daysold + "天";
                    str += d.getHours() + '时';
                    str += d.getMinutes() + '分';
                    str += d.getSeconds() + '秒';
                    return str;
                }
                setInterval(function () { $('#run_time').html(runTime()) }, 1000);