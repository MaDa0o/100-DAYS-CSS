//list of suggestions
let names = ["Abby", "Adam", "Alex", "Avery", "Bailey", "Benjamin", "Brooke", "Cameron", "Caroline", "Charlie", "Connor", "Dakota", "Dylan", "Emily", "Ethan", "Hannah", "Jacob", "Kaitlyn", "Madison", "Mason"];


const searchbox= document.querySelector(".searchbar");
const inputb= searchbox.querySelector("input");
const suggbox = document.querySelector(".list");

//activates every time a key is pushed and released
inputb.onkeyup = (e)=>{
    let userdata = e.target.value;      //stores entered value
    let emparr = [];
    if(userdata){
        //converts all suggestions to lowercase, filters according to the entered input and saves in empty array
        emparr = names.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
        });

        //to add tags to every value
        emparr = emparr.map((data)=>{
            return data = '<li class="list-item">' + data + '</li>'
        });

        suggbox.classList.add('active');
        //to add suggestions in the list
        showsugg(emparr);

        //to adds onclick attribute to all tags to implement autocomplete
        let alllist = suggbox.querySelectorAll("li");
        for (let i = 0; i < alllist.length; i++) {
            alllist[i].setAttribute("onclick","select(this)");
        }
    }

    //removes suggestion box when there is no input
    else{
        suggbox.classList.remove('active');
    }
}

//to add selected suggestion to search box
function select(element){
    let selectudata = element.textContent;      //the text of the list element gets stored
    inputb.value = selectudata;                 //search box text gets replaced by stored value
    suggbox.classList.remove('active');         //suggestion box dissapears
}

//to show the suggestion box when there is text input
function showsugg(list){
    let listdata;
    if(list.length){
        listdata = list.join('');   // so that the commas can be replaced by spaces and the string of all elements can be entered directly in the html code
    }
    //when input doesn't matches it shows undefined so to remove this instead the current input is displayed in suggestion box
    else{
        uservalue = inputb.value;       
        listdata = '<li class="list-item">'+uservalue+'</li>';
    }
    suggbox.innerHTML = listdata;       //to enter the string of all elements between the list tags in the html code
}