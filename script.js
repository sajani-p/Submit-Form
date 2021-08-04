function validation(){
    flag=true;
    
    var fname = document.getElementById('Fname').value;
    var email = document.getElementById('Email').value;
    var lname = document.getElementById('Lname').value;
    var dot1 = document.getElementById('dot-1');
    var dot2 = document.getElementById('dot-2');
    var dot3 = document.getElementById('dot-3');
    var cnumber = document.getElementById('Number').value;
    var address = document.getElementById('Address').value;
    var txt;

    if(fname == ""){
        txt="*Required";
        document.getElementById("demo1").innerHTML = txt;
           flag = false;
    }
        if(email == "" ){
            txt="*Required";
            document.getElementById("demo2").innerHTML = txt;
               flag = false;
        }
        if(lname == "" ){
            txt="*Required";
            document.getElementById("demo3").innerHTML = txt;
               flag = false;
        }

        if(!dot1.checked && !dot2.checked && !dot3.checked){
            txt="*Required";
            document.getElementById("demo4").innerHTML = txt;
               flag = false;
        }

        if(cnumber == "" ){
            txt="*Required";
            document.getElementById("demo5").innerHTML = txt;
               flag = false;
        }
        if(address == "" ){
            txt="*Required";
            document.getElementById("demo6").innerHTML = txt;
               flag = false;
        }
         return flag;
}

function btnSubmit() {
	if (validation()) {
      alert("User Added Successfully!");
      return true;
    } 
    else {
      return false;
    }
}