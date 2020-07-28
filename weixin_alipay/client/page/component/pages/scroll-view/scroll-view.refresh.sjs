export default {
    onPulling:function(evt,instance){
        console.log("rrrrrrr");
        var p = Math.min(evt.detail.dy / 80,1);
        console.log(p);
        var view = instance.selectComponent('.refresh-container');
        view.setStyle({
            opacity:p,
            transform:"scale(" + p + ")"
        });
    }
};
