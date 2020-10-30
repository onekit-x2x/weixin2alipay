import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
const date = new Date();
const years = [
];
const months = [
];
const days = [
];
for(var i = 1990;(i <= date.getFullYear());i++){
    years.push(i);
};
for(var i = 1;(i <= 12);i++){
    months.push(i);
};
for(var i = 1;(i <= 31);i++){
    days.push(i);
};
OnekitPage({
    data:{
        years:years,
        year:date.getFullYear(),
        months:months,
        month:2,
        days:days,
        day:2,
        value:[
            9999,
            1,
            1
        ]
    },
    bindChange:function(e){
        const val = e.detail.value;
        this.setData({
        year:this.data.years[val[0]],
        month:this.data.months[val[1]],
        day:this.data.days[val[2]]
    });
    }
});
