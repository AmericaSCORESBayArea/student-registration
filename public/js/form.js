window.onload = function Loader(){
    document.getElementById('submit-btn').addEventListener('click', submitForm);
    document.getElementById('waiver-agree-btn').addEventListener('click', enableSubmit);
    document.getElementById('waiver-link').addEventListener('click', openModalPopup);
    document.getElementById('close-modal').addEventListener('click', closeModalPopup); 
    
    function formData(){
        let data = {};
        let form = document.getElementById('student-registration');
        for(let el of form.elements){
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
                            alert("Student Successful Registered");
                        }else{
                            alert("Student Registration failed");
                        }
                        
                        return response.data.contactId;
                    }else{
                        alert("Student Registration failed");
                        return '';
                    }
                    
                }, (error) => {
                    alert("Student Registration failed")
                    return error;
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

        /*if(!requiredFilled){
            let titles = "\n";
            unfilled.forEach(function(i){
                titles += i.title + "</br>";
             });
            $.alert({
                title: 'Please Fill the Required Fields'+ '<span class="red-req">*</span>',
                content: titles,
            });
        } else { */
            /*$.confirm({
                title: 'Student Registration',
                content: 'Complete Registration?',
                buttons: {
                    confirm: function () {
                        let postResponse = postFetch();
                        console.log(postResponse);
                    },
                    cancel: function () {
                    }
                }
            });*/
            let complete = confirm('Complete Registration?');
            if(complete){
                let postResponse = postFetch();
                console.log(postResponse);
            }

        //}
    }
    
    function enableSubmit(){
            document.getElementById("submit-btn").disabled = false;
            closeModalPopup();
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
