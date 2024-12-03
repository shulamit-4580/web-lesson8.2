const f=new Object()
f.name="grapes"
f.calories=80
f.price=17
f.print=function(){
    console.log(this.name,this.calories,this.price)
}
let fruitArr=[
    {name:"apple",calories:60,price:2,print:function(){
        console.log(this.name,this.calories,this.price)
    }},
    {name:"orange",calories:70,price:1,print:function(){
        console.log(this.name,this.calories,this.price)
    }},f
]
//4
for (let i = 0; i < fruitArr.length; i++) {
   fruitArr[i].print()
}
//5
fruitArr[0].color="red"
//6
for (let i = 0; i < fruitArr.length; i++) {
    if('color' in fruitArr[i])
         fruitArr[i].print()
}
//7
for(key in fruitArr[0])
{
    console.log(key,fruitArr[0][key])
}
//8
delete(fruitArr[1].price)
let str=" "
for(key in fruitArr[1])
{
    str+=fruitArr[1][key]
    str+=" "
}
document.getElementById('p1').innerHTML=str;
//9
function changePrice()
{
    fruitArr[0].Price=parseFloat(document.getElementById('txt1').value)
}
fruitArr=[
    {name:"apple",calories:60,price:2,print:function(){
        console.log(this.name,this.calories,this.price)
    }},
    {name:"orange",calories:70,price:1,print:function(){
        console.log(this.name,this.calories,this.price)
    }},f
]
//10
function changeCalories(){
    fruitArr=fruitArr.filter(x=>x.calories<=document.getElementById('col').value)
}
for (let i = 0; i < fruitArr.length; i++) {
    Object.defineProperty(fruitArr[i],"Price",{
        set(pr){
            if(pr > 10 && pr< 10000)
                this.price=pr
        }
    })
}
