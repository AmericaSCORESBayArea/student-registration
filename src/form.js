window.onload = function Loader(){
    document.getElementById('submit-btn').addEventListener('click', submitForm);
    
    function formData(){
        let data = {};
        let form = document.getElementById('student-registration');
        for(let el of form.elements){
            data[el.title] = el.value;
        }
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
                        alert("Student Successful Registrated");
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

        if(!requiredFilled){
            let titles = "\n";
            unfilled.forEach(function(i){
                titles += i.title + "\n";
             });
            alert("Some required fields were not filled: " + titles);
        } else { 
            let complete = confirm('Complete Registration?');
            if(complete){
                let postResponse = postFetch();
                console.log(postResponse);
            }

        }
    }   
} 
