let textBox=document.getElementById("t1")
textBox.addEventListener("input", function(){
     text1 = this.value;
     char1 = text1.length;
     document.getElementById("char").innerHTML=char1

     words= text1.split(" ")
    let voidspace = words.filter(function(elm){
        return elm !=""
    })
     console.log(voidspace);
    
     document.getElementById("word").innerHTML= voidspace.length
    
})