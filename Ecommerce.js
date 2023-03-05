var registration=[];
function register(){
    event.preventDefault();
    var name=getvaluebyId("registration-name");
    var email=getvaluebyId("registration-email");
    var password=getvaluebyId("registration-password");

    //console.log(ID);

    var details={
        Name: name,
        Email:email,
        Password:password
    }
    registration.push(details);
    console.log(registration);
    document.getElementById("form").reset();
}
function getvaluebyId(id){
    var value=document.getElementById(id).value;
    return value;
}

    var data=[
        data1={
           email: "abc@123",
           password:12345
        },
        data2={
            email: "efg@123",
            password:678910
         },
         data3={
            email: "hij@123",
            password:111213
         },
         data4={
            email: "klm@123",
            password:141516
         }
    ]
function login(){
    var email=getvaluebyId("registration-email");
    var password=getvaluebyId("registration-password");
    var index=0;
    for (index=0;index<data.length;index++){
        
    }
}