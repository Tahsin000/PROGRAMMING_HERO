function dd (x) { console.log(x); }
let i = 0;
let m = 0;

const timerStart = () =>{
    const timerDigite = document.getElementById('timerDigite');
    const timerStop = document.getElementById('timerStop');
    const timerReset = document.getElementById('timerReset');
    const setIntervalValue = setInterval(()=>{
        ++i;
        if (i > 59){
            i %= 60;
            m++;
        }
        if (i < 10) {
            timerDigite.innerHTML=`${m}:0${i}<sub style="font-size:24px;">s</sub>`;
        } else {
            timerDigite.innerHTML = `${m}:${i}<sub style="font-size:24px;">s</sub>`;
        }
        timerStop.addEventListener('click', ()=>{
            clearInterval(setIntervalValue);
        });
        timerReset.addEventListener('click', ()=>{
            clearInterval(setIntervalValue);
            i=0;
            timerDigite.innerHTML = `0:00<sub style="font-size:24px;">s</sub>`;
        });
    },1000);
}

// const timerStop = ()=>{
//     dd('text');
//     clearInterval(setIntervalValue);
// }

// const timerStop = ()=>{

// }

