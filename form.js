require('dotenv').config();
window.onload = function Loader(){

    let postResponse; 
    document.getElementById('submit-btn').addEventListener('click', submitForm);
    
    function formData(){
        let data = {};
        let form = document.getElementById('student-registration');
        for(let el of form.elements){
            console.log(el.value);
            
            data[el.title] = el.value;
        }
        return data;
    }

    function printJSON(obj){
        let objString = "";
        for(let entry of Object.entries(obj)){
            objString += entry[0] + ": " + entry[1] + "\n";
        }
        return objString;
    }

     /* POST using the fetch call */
     function postFetch(){
        let order = formData();
        fetch('https://salesforce-data-api-proxy.us-e2.cloudhub.io/api/contact', {
            method: 'POST',
            headers: {
                'client_id': process.env.MY_ID, //a647e195e65c4a358563bd950916e28d
                'cleint_secret': process.env.MY_S, //45CDe2241f4C4D238d320fc6A7521C71
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)

        }).then(response => response.json())
        .then(data => console.log(data));
    }
        
    function submitForm(){
        let requiredFilled = true;
        let form = document.getElementById("student-registration")
        let unfilled = [];
        form.querySelectorAll("[required]").forEach(function(i) {
            if(!i.value){ 
                unfilled.push(i);
                console.log(unfilled[0].title);  
                console.log('false');
                console.log(i);
                requiredFilled = false;
                
            } 
        });
        
        if(!requiredFilled){
            let titles = "\n";
            unfilled.forEach(function(i){
                titles += i.title + "\n";
             });
            alert("Some required fields were not filled: " + titles);
        }
        if(requiredFilled){
            let dialogBox = document.querySelector("dialog.confirm");
            dialogBox.showModal();

            document.querySelector("#NotConfirm").addEventListener('click', function(){
                dialogBox.close();
                console.log('NOT')
            });
            document.querySelector("#YesConfirm").addEventListener('click', function(){
                // let order = formData();
                // fetch('https://salesforce-data-api-proxy.us-e2.cloudhub.io/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'client_id': env.MY_ID,
                //         'cleint_secret': process.env.MY_S,
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(order)

                // }).then(response => response.json())
                // .then(data => console.log(data));
                postFetch();
                dialogBox.close();
                console.log('YES')
                console.log(postResponse);
                
            });

        }
    }
        
    
}