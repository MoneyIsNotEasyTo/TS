console.log('hello');
console.log('2222222');

let a = '22222';

let bs:string = '22222'
//1111111111
console.log(bs);

function fn(a: number,b : number) {
    return a +b;
}

function fn2(this: Window) {
    console.log(this)
}

let box1 = document.getElementById('box1');
if (box1 !== null){
    box1.addEventListener('click',function () {
        alert('hello');
    })
}

box1?.addEventListener('click',function () {
    alert('hello');
})



