// throttling is a technique where we respond event immidiately for only first time and after that we limit it that it is available to call after certain time.
const submitBtn = document.getElementById('submit')

function throttle(func,limit){
    let isThrottling;
    return function(){
        const ctx = this;
        const args = arguments;
        if(!isThrottling){
            func.apply(ctx,args);
            isThrottling=true
            setTimeout(()=>isThrottling=false,limit)
        }
    }
}

function shoot(val){
    console.log('shooting...',val)
}

const throttledShoot = throttle(shoot,1000)

submitBtn.addEventListener('click',function(e){
    throttledShoot('hello')
})