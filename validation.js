$('#loginfrm').submit((event) => {
    let var1=false;
    let var2=false;
    event.preventDefault()
    console.log("afdhadgh");
    const unameNode = $("#uname1");
    const upassNode = $("#upass2");
    // let array1=[errorNode1,errorNode2];
    // for(let node of array1){
    //     node.css({color:"red"});
    // }
    if(unameNode.val()===''){
        window.alert("Username is required");
        window.CSS({border:"2px solid red"});
        return false;
    }
    else if(unameNode.val().length<3 || unameNode.val().length>10){
        document.alert("Username must be 3 to 10 characters long");
        console.log(unameNode.length);
        unameNode.css({border:"2px solid red"});
        console.log("error2");
        return false;
    }
    else{
        unameNode.css({border:"2px solid green"});
        console.log("erro3");
        var1=true;
    }
    let pass=upassNode.val();
    //window.alert("");
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        window.alert("Password is required");
        console.log("if1");
        upassNode.css({border:"2px solid red"});
        return false;
    }
    else if(regx.test(pass)==false){
        window.alert("Password should be 6 to 12 characters long Password should have atleast 1 UpperCase letter 1 LowerCase letter 1 Number and 1 Special Character.");
        upassNode.css({border:"2px solid red"});
        return false;
    }
    else{
        upassNode.css({border:"2px solid green"});
        var2=true;
    }
    if(var1===true && var2===true)
    {
        // window.location.href = "D:\\Food-Delivery-System-main\\Food-Delivery-System-main\\Files\\home.html";
        window.location.href="./home.html"
    }
})


// Signup Form begins.........
$('#signupform').submit((event)=>
{
    let var_1=false;
    let var_2=false;
    let var_3=false;
    let var_4=false;
    let var_5=false;
    event.preventDefault()
    const uname = $("#uname");
    const upass1 = $("#upass");
    const upass2 = $('#upass1');
    const udob = $('#udob');
    const uemail = $('#uemail');
    const date=new Date();
    // let array1=[errorNode1,errorNode2];
    // for(let node of array1){
    //     node.css({color:"red"});
    // }
    if(uname.val()===''){
        window.alert("Username is required");
        uname.CSS({border:"2px solid red"});
        return false;
    }
    else if(uname.val().length<3 || uname.val().length>10){
        document.alert("Username must be 3 to 10 characters long");
        console.log(uname.length);
        uname.css({border:"2px solid red"});
        console.log("error2");
        return false;
    }
    else{
        uname.css({border:"2px solid green"});
        //console.log("erro3");
        var_1=true;
    }
    //email..............
    let email=uemail.val();
    // errorNode4.html("");
    if(email===''){
        window.alert("Email is required");
        uemail.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        window.alert("Please enter valid email");
        uemail.css({border:"2px solid red"});
        return false;
    }
    else{
        uemail.css({border:"2px solid green"});
        var_2=true;
    }
    //date........
    let dob=udob;
    console.log(dob);
    console.log(dob.length);
    let year = parseInt(dob.val().slice(0, 4));
    let month = parseInt(dob.val().slice(5, 7));
    let day = parseInt(dob.val().slice(8, 10));
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();
    let currDate = date.getDate();
    if (dob.val()==='')
    {
        window.alert("Please select Birthdate");
        return false;
    }
    if (year <= currYear && month <= currMonth && day < currDate) {
        console.log("true");
        udob.css({border:"2px solid green"});
        var_3=true;
      } else {
        udob.css({border:"2px solid red"});
        window.alert("Please select valid date.")
        return false;
      }

    //password...........
    let spass=upass1.val();
    //window.alert("");
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(spass===''){
        window.alert("Password is required");
        console.log("if1");
        upass1.css({border:"2px solid red"});
        return false;
    }
    else if(regx.test(spass)==false){
        window.alert("Password should be 6 to 12 characters long Password should have atleast 1 UpperCase letter 1 LowerCase letter 1 Number and 1 Special Character.");
        upass1.css({border:"2px solid red"});
        return false;
    }
    else{
        upass1.css({border:"2px solid green"});
        var_4=true;
    }
    
    //confirm password......
    let cpass=upass2.val();
    //let spass2=upass1.val();
    //errorNode7.html("");
    if(cpass===''){
        window.alert("Confirm Password is required");
        console.log("cpass error");
        upass2.css({border:"2px solid red"});
        return false;
    }
    else if(cpass!=spass){
        window.alert("Both passwords should match");
        upass2.css({border:"2px solid red"});
        return false;
    }
    else{
        upass2.css({border:"2px solid green"});
        var_5=true;
    }
    //login successful
    if(var_1===true && var_2===true && var_3===true && var_4===true && var_5===true)
    {
        window.alert("Signup Successful.... Please Sign-in to continue");
    }
})
