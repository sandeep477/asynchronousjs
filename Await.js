const datas = [
{name:"Ajay",profession:"Software Engineer"},
{name:"Sanjay",profession:"Electrical Engineer"},
{name:"Vijay",profession:"Mechanical Engineer"},
{name:"AjayGyan",profession:"Civil Engineer"}
];

function getDatas()
{let output="";
console.log("Hi I am Async");
    setTimeout(()=>{
        datas.forEach((data,index)=>{
            output +=`<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

function createData(newData)
{    
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{  datas.push(newData);
            let error = false;
            if(!error)
            {
              resolve();
            }
            else{
               reject("error while doing the operations");
            }
        },2000);
    });
}


// createData({name:"vivek",profession:"Software Engineer"}).then(getDatas).catch(error=>{
//     console.log(error);
// });

async function start()
{
    await createData({name:"vivek",profession:"Software Engineer"});
    getDatas();
}
start();
