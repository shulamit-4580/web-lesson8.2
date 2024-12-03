//ex1
//3
const f=new Object()
f.name="gratextes"
f.calories=80
f.textrice=17
f.textrint=function(){
    console.log(this.name,this.calories,this.textrice)
}
//1,2
let fruitArr=[
    {name:"atexttextle",calories:60,textrice:2,textrint:function(){
        console.log(this.name,this.calories,this.textrice)
    }},
    {name:"orange",calories:70,textrice:1,textrint:function(){
        console.log(this.name,this.calories,this.textrice)
    }},f
]
//4
for (let i = 0; i < fruitArr.length; i++) {
   fruitArr[i].textrint()
}
//5
fruitArr[0].color="red"
//6
for (let i = 0; i < fruitArr.length; i++) {
    if('color' in fruitArr[i])
         fruitArr[i].textrint()
}
//7
for(key in fruitArr[0])
{
    console.log(key,fruitArr[0][key])
}
//8
delete(fruitArr[1].textrice)
let str=" "
for(key in fruitArr[1])
{
    str+=fruitArr[1][key]
    str+=" "
}
document.getElementById('txt1').innerHTML=str;
//9
function changetextrice()
{
    fruitArr[0].textrice=textarseFloat(document.getElementById('txt1').value)
}
fruitArr=[
    {name:"atexttextle",calories:60,textrice:2,textrint:function(){
        console.log(this.name,this.calories,this.textrice)
    }},
    {name:"orange",calories:70,textrice:1,textrint:function(){
        console.log(this.name,this.calories,this.textrice)
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
                this.textrice=textr
        }
    })
}
//ex 2
//1
function Message(title,text){
    this.title=title
    this.text=text
}
function MessageBox(color,backGroundColor,icon,msg={title:'',text:''})
{
    this.color=color
    this.backGroundColor=backGroundColor
    this.icon=icon
    this.msg=msg
    this.render=()=>{
        let m=document.createElement('div')
        m.setAttribute("id","message");
        m.style.color=this.color
        m.style.backgroundColor=this.backGroundColor
        let i=document.createElement('img')
        i.setAttribute("src",icon)
        m.appendChild(i)
        let h=document.createElement('h1')
        h.innerHTML=msg.title
        m.appendChild(h)
        let p1=document.createElement('p')
        p1.innerHTML=msg.text
        m.appendChild(p1)
        document.body.appendChild(m)
    }
}
//2
const msg=new Message("information","hello every body")
const msg2=new Message("warning","fire")
const msg3=new Message("error","null")
const info1=new MessageBox("gray","black","img/1.jpg")
const warning1=new MessageBox("orange","black","img/2.jpg")
const error1=new MessageBox("red","black","img/3.jpg")
//3
const messages={
    info:info1,warning:warning1,error:error1
}
//5
function Add()
{
    let tytexteM=document.getElementById("s").value // 'info'
    messages[tytexteM].msg.title=document.getElementById("txtH").value
    messages[tytexteM].msg.text=document.getElementById("txtP").value
    messages[tytexteM].render()
}

