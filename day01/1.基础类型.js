/**
     1.布尔值：boolean
            最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
 * */
var isDone = false;
isDone = true;
console.log(isDone);
/**
 2.数字：number
 和JavaScript一样，TypeScript里的所有数字都是浮点数。
 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，
 TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
 * */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
/*
     3.字符串: string
     JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。
     像其它语言里一样，我们使用 string表示文本数据类型。
     和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
* */
var name1 = "bob";
name1 = "smith";
/*
* 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。
* 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
* */
var name2 = "Gene";
var age = 37;
var sentence = "Hello, my name is ".concat(name2, ".I'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
