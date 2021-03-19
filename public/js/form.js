window.onload = function Loader(){
    document.getElementById('submit-btn').addEventListener('click', submitForm);
    document.getElementById('waiver-agree-btn').addEventListener('click', enableSubmit);
    document.getElementById('waiver-link').addEventListener('click', openModalPopup);
    document.getElementById('close-modal').addEventListener('click', closeModalPopup); 
    var acceptWaiver = false;
    function formData(){
        let data = {};
        let form = document.getElementById('form-fields');
        for(let el of form.querySelectorAll("input")){
            if(el.value.includes('--None') || el.value.includes('--N/A')){
                data[el.title] = '';
            }else if(el.title === 'MailingZip'){
                if(el.value ==='' || el.value===undefined){
                    data[el.title] = 0;
                }else{
                    data[el.title] = parseInt(el.value);
                }
            }else if(el.title !== ''){
                data[el.title] = el.value;
            }
        }
        for(let el of form.querySelectorAll("select")){
            if(el.value.includes('--None') || el.value.includes('--N/A')){
                data[el.title] = '';
            }else if(el.title === 'MailingZip'){
                if(el.value ==='' || el.value===undefined){
                    data[el.title] = 0;
                }else{
                    data[el.title] = parseInt(el.value);
                }
            }else if(el.title !== ''){
                data[el.title] = el.value;
            }
        }
        let alEl = document.getElementById("allergies");
        data[alEl.title] = alEl.value;
        data["LiabilityWaiver"] = true;
        data["DataReleaseWaiver"] = true;
        data["MediaReleaseWaiver"] = true;
        return data;
    }

     /* POST using the fetch call */
     function postFetch(){
        let order = formData();
        console.log(order);
        console.log("SPACES");
        console.log(JSON.stringify(order));
        const reqHeaders = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post('/register', JSON.stringify(order), reqHeaders)
                .then((response) => {
                    console.log('success repsonse',response.data);
                    if(response.data !== undefined){
                        if(response.data.data === true){
                            $( "#dialog-confirm" ).dialog({
                                resizable: false,
                                height: "auto",
                                width: 400,
                                modal: true,
                                buttons: {
                                  "Register New Student": function() {
                                    $( this ).dialog( "close" );
                                    resetFields();
                                  },
                                  "Goto Scores Home": function() {
                                    window.location.href = "https://scoresu.org/";
                                  }
                                }
                              });
                        }else{
                            creationOfAlert("Student Registration Failed","Oops! Something Went Wrong in Registering the Student");
                            }
                        
                        return response.data.contactId;
                    }else{
                        creationOfAlert("Student Registration Failed","Oops! Something Went Wrong in Registering the Student");
                        return '';
                    }
                    
                }, (error) => {
                    creationOfAlert("Student Registration Failed","Oops! Something Went Wrong in Registering the Student");
                    return error;
                });
    }
     
    function resetFields(){
        let form = document.getElementById("student-registration")
        let unfilled = [];
        form.reset();
    }

    function creationOfAlert(title,message){
        var newDiv = $(document.createElement('div'));
        newDiv.attr("title",title); 
        var newSpan = $(document.createElement('span'));
        newSpan.attr("class","ui-icon ui-icon-alert");
        newSpan.attr("style","float:left; margin:1px 5px 0px 0;");
        var newPara = $(document.createElement('p'));
        newPara.append(newSpan,message);
        newDiv.append(newPara);
        $('bodyId').append(newDiv);
        $(newDiv).dialog({
            modal: true,
            buttons: {
                Ok: function() {
                    $( this ).dialog( "close" );
                }
            }
        });
    }

    function submitForm(){
        let requiredFilled = true;
        let form = document.getElementById("student-registration")
        let unfilled = [];
        form.querySelectorAll("[required]").forEach(function(i) {
            if(!i.value){ 
                unfilled.push(i);
                requiredFilled = false;
                
            } 
        });

        if(!requiredFilled){
            let titles = "<br>";
            unfilled.forEach(function(i){
                titles += i.title + '<br>';
             });
             creationOfAlert("",'<strong>Please Fill the Required Fields</strong><br>'+titles);
        } else if(!acceptWaiver) {
                creationOfAlert("","Please Read & Accept the Waiver");
        }else { 
            acceptWaiver = false;
            confirmModal();
        }
    }
    
    function enableSubmit(){
            acceptWaiver = true;
            closeModalPopup();
    }

    function confirmModal(){
        var newDiv = $(document.createElement('div'));
        newDiv.attr("title","Confirmation"); 
        var newSpan = $(document.createElement('span'));
        newSpan.attr("class","ui-icon ui-icon-alert");
        newSpan.attr("style","float:left; margin:10px 14px 0px 0;");
        var newPara = $(document.createElement('p'));
        newPara.append(newSpan,"Are you Sure?");
        newDiv.append(newPara);
        $('bodyId').append(newDiv);
        $(newDiv).dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Yes": function() {
                    $( this ).dialog( "close" );
                    postFetch();
                },
                "No": function() {
                  $( this ).dialog( "close" );
                }
            }
        });
    }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

function openModalPopup() {
    let modal = document.getElementById("myModal");
    modal.style.visibility = "visible";
}

// When the user clicks on <span> (x), close the modal
function closeModalPopup() {
    let modal = document.getElementById("myModal");
    modal.style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  }
}
} 
