


// модальное окно

var btn = document.querySelector('.open_modal');
var modal = document.querySelector('.myModal');
var date_in = modal.querySelector('#date_in');
var date_out = modal.querySelector('#date_out');
var search = document.querySelector('.search-button');

var isStorageSupport = true;
var storage = '';


try {
    storage = localStorage.getItem('date_in');
} catch (err) {
    isStorageSupport = false;
}

//modal.classList.toggle('show_modal');                   //Не работает!

btn.addEventListener('click', function(evt) {
    evt.preventDefault(); 
    modal.classList.toggle('show_modal');                      
    //modal.classList.add('show_modal'); 
    if (storage) {
        date_in.value = storage;
        date_out.focus();
    } else {                  
        date_in.focus();
    }
});

search.addEventListener('click', function(evt) {      // Не отменяет действие кнопки поиска "Найти"
    evt.preventDefault();  
});

                                         
search.addEventListener('click', function(evt) {     //     
    if (!date_in.value || !date_out.value) {     
        evt.preventDefault();    
       // modal.classList.add('modal_error');                
        alert('Нужно заполнить форму'); 
            
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains('show_modal')) {
            evt.preventDefault();
            modal.classList.remove('show_modal');
           // modal.classList.remove('modal_error');
        }
    }
});


        

    
