/*
* 对象： object 表示一个js对象
*
* */

let a: object;
// :  用来指定对象中可以包含那些属性  语法：{属性名 : 属性值}  ? 表示属性可选的
a = {};
a = function () {}
let b: {name:string,age?:number};
b={
    name:'22222',
};
//[propName :string] :any  表示任意类型的属性
let c:{name : string, [propName :string] :any}
c={name:'1111',age :12,gender :'12'}

/*
* 设置函数结构的类型声明：
* 语法：(形参：类型,形参：类型,形参：类型, ...) => 返回值
* */
let d : (a: number,b:number) => number;

d= function(a,b): number{
    return a +b;
}

console.log(d(1,3));

/*
* 数组： 数组的类型声明： 1.类型[]    2.Array<类型>
* */
let e1: string[];
let e2: number[];
let e3: boolean[];

e1 = ['1','2','3']

let g : Array<number>;

g = [1,2,3];

/*
* 元组：元素就是固定长度的数组   Tuple
*  元组类型允许表示一个已知元素数量和类型的数组，
* 各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
*
* 语法：[类型,类型,类型]
* */

let x: [string, number];
x = ['hello', 10];


/*
* 枚举  enum  使用枚举类型可以为一组数值赋予友好的名字。
*
* */
enum Gender{
    Male,
    Female
}

let i : {name:string,gender: Gender};
i = {
    name:'11111',
    gender:Gender.Male
}

console.log(i.gender === Gender.Male);

// & 表示同时
let j :string & number;

let k : {name:string} & {age :number};

k = { name : '2222',age :234};

//类型的别名

type myType = 1 | 2 | 3 | 4 | 5;
let l  : myType;
let m  : myType;
let n: myType;
