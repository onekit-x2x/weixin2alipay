import {OnekitApp,OnekitPage,OnekitComponent} from '../../onekit/onekit.js';
import wx from '../../onekit/wx.js';
function fib(n){
    if(n < 1)return 0
    if(n <= 2)return 1
    return fib(n - 1) + fib(n - 2);
};
worker.onMessage(function(msg){
    if(msg.type === 'execFunc_fib'){
        worker.postMessage({
            type:'execFunc_fib',
            result:fib(msg.params[0])
        });
    }
});
