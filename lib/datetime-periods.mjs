var e=function(e,n){return new Date(new Date((e<12?n:n+1)+"-"+(e<12?e+1:1)+"-1").setDate(0)).getDate()},n={days:!0,hours:!0,minutes:!0,months:!0,seconds:!0,years:!0},t=function(e){return{day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),month:e.getMonth()+1,second:e.getSeconds(),tzOffset:e.getTimezoneOffset(),year:e.getFullYear()}},r=function(r,a,o,u){void 0===r&&(r=new Date),void 0===u&&(u=n),u=Object.assign({},n,u),r=new Date(r.setMilliseconds(0));var i=new Date(r),s=!1,l=new Date(new Date(r).setFullYear(r.getFullYear()-100)),m=new Date(new Date(r).setFullYear(r.getFullYear()+100));a=a?new Date(a.setMilliseconds(0)):l,o=o?new Date(o.setMilliseconds(0)):m;var f=a.getTime(),c=o.getTime(),h=r.getTime();f>c&&(console.warn("min > max, setting min and max to defaults"),a=l,f=l.getTime(),o=m,c=m.getTime()),f>h&&(console.warn("min > value, setting value to min"),r=new Date(a),h=f,s=!0),c<h&&(console.warn("max < value, setting value to max"),r=new Date(o),h=c,s=!0);var g=t(a),y=t(o),d=t(r),w=u.days?Array.from({length:e(d.month,d.year)},function(e,n){return n+1}):[],D=u.months?Array.from({length:12},function(e,n){return n+1}):[],v=u.hours?Array.from({length:24},function(e,n){return n}):[],x=u.minutes?Array.from({length:60},function(e,n){return n}):[],A=u.seconds?Array.from({length:60},function(e,n){return n}):[];d.year===g.year&&(D=D.filter(function(e){return e>=g.month}),d.month===g.month&&(w=w.filter(function(e){return e>=g.day}),d.day===g.day&&(v=v.filter(function(e){return e>=g.hour}),d.hour===g.hour&&(x=x.filter(function(e){return e>=g.minute}),d.minute===g.minute&&(A=A.filter(function(e){return e>=g.second})))))),d.year===y.year&&(D=D.filter(function(e){return e<=y.month}),d.month===y.month&&(w=w.filter(function(e){return e<=y.day}),d.day===y.day&&(v=v.filter(function(e){return e<=y.hour}),d.hour===y.hour&&(x=x.filter(function(e){return e<=y.minute}),d.minute===y.minute&&(A=A.filter(function(e){return e<=y.second}))))));var T=u.years?Array.from({length:y.year-g.year+1},function(e,n){return g.year+n}):[];return{max:y,min:g,originalValue:t(i),originalValueChanged:s,periods:{days:w,hours:v,minutes:x,months:D,seconds:A,years:T},value:d}};export{e as getDaysInMonth,n as defaultNeededPeriods,t as getDateTimeObject,r as getDateTimePeriods};
//# sourceMappingURL=datetime-periods.mjs.map