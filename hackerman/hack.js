   function game(){
    let name=prompt("enter the your name");
   let p1=()=>{ 
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Initializing Hack Program............");
        },2000)
    });
}

    let p2=()=>{ 
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hacking "+name+" username....");
        },2000)
    });
}

    let p3=()=>{ 
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Username Found "+ name +"_17....");
        },2000)
    });
}

    let p4=()=>{ 
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Connecting to facebook....");
        },2000)
    })
}

run=async()=>{
    let x= await p1();
    document.querySelector(".i").innerHTML=x;

    let y= await p2();
    document.querySelector(".h").innerHTML=y;

    let z= await p3();
    document.querySelector(".u").innerHTML=z;

    let a= await p4();
    document.querySelector(".c").innerHTML=a;
}
let go=run();
}
game();