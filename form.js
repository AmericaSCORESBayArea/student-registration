window.onload = function Loader(){
    document.getElementById('submit-btn').addEventListener('click', function(){
        postXHR();
    });

    function formData(){
        let data = {};
        let form = document.getElementById('student-registration');
        for(let el of form.elements){
            console.log(el.value);
            
            data[el.title] = el.value;
        }
        return data;
    }

    function postXHR(){
        let order = formData();
        xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://httpbin.org/post', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(order));
    }
}