function checkboxes(){
    const inputs=document.getElementsByTagName('input')
    let s=0
    for(let i=0; i<inputs.length; ++i){
        if(inputs[i].type=='checkbox'&&inputs[i].checked){
            ++s;
        }
    }
    if(s>0){
        document.getElementById('ioptions').innerHTML="";
        return false
    } 
    else document.getElementById('ioptions').innerHTML="To pole jest wymagane";
}

function isEmpty(box){
    if(box.value=="")
    {
        document.getElementById("i"+box.id).innerHTML="To pole jest wymagane";
        return true;
    } else{
        document.getElementById("i"+box.id).innerHTML="";
        return false;
    }
}

function mainFunction(){
    let check=true
    if(isEmpty(this.first_name))check=false
    if(isEmpty(this.last_name))check=false
    if(isEmpty(this.email))check=false
    if(checkboxes())check=false

    if(check)alert('Poprawnie wysłano formularz\nDziękujemy!')
    return check
}