// function sentences(){
//     let new_word=["my name is Lucy Amekwi"]
//     x=new_word.split()
//     start=0
//     end=len(x)-1
//     var start=end?start:end
//     x=[start],x[end]=x[end],x[start]
//     start+=1
//     end-=1
//     name=" "
//     {
//         console.log(name.join("words"))
//     }
//     words();
// }


const a=[5,4,-3,20,17,-33,-4,18]
a.flatMap((n)=>
(n<0)?[]:
(n%2==0)?[n]:
[n-1,1]
)
{
    console.log(a)
}
