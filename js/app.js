console.log("welcome to notes app. This app is purely developed in javascript and html/css");
showNotes();
function addfun() {
    let text = document.getElementById('addtxt').value;
    console.log(text);

    let notes = localStorage.getItem('notes');
    if(notes == null) {
        noteobj = [];
    }else {
        noteobj = JSON.parse(notes);
    }
    noteobj.push(text);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    addtxt.value = "";
    console.log(noteobj);
    showNotes();
}
function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        noteobj = [];
    }else {
        noteobj = JSON.parse(notes);
    }
    let html = " ";
    noteobj.forEach((element,index) => {
        html +=  `<div class="noteCard my-2 mx-2" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${element}</h5>
                    <p class="card-text"></p>
                    <Button href="#" id = "delete_btn" onclick="deletefun()" class="btn btn-primary">Delete note</Button>
                    </div>   
                </div>
                `
    });

    document.getElementById('notes').innerHTML = html;
}
function deletefun() {
    
}