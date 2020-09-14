var link = document.querySelector('.contacts-info-btn');
var popup = document.querySelector('.modal-form');
var close = document.querySelector('.modal-close');
var form = popup.querySelector('form');
var name_user = popup.querySelector('[name=name-user]');
var email = popup.querySelector('[name=email]');
var message = popup.querySelector('[name=message]');
var storage_two = "";
var storage = "" ;
var isStorageSupport = true;
var linkmap = document.querySelector('.contacts-info-map');
var popupmap = document.querySelector('.modal-map');
var closemap = document.querySelector('.modal-map-close');
var linkmenu = document.querySelector('.header-catalog-btn');
var popupmenu = document.querySelector('.modal-menu');


linkmap.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupmap.classList.add('modal-show');
});

closemap.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupmap.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (popupmap.classList.contains('modal-show')) {
			evt.preventDefault();
			popupmap.classList.remove('modal-show');
		}
	}
})

try {
	storage = localStorage.getItem('name_user');
	storage_two = localStorage.getItem('email');
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');
	if (storage) {
	name_user.value	= storage;
  message.focus();
	} else { 
  name_user.focus();
	};
	if (storage_two) {
	email.value = storage_two;
	};
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.remove('modal-show');
	popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
	if (!name_user.value || !email.value || !message.value) {
	evt.preventDefault();
	popup.classList.remove('modal-error');
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
		localStorage.setItem('name_user', name_user.value);
		localStorage.setItem('email', email.value);
		}
	
	}
})

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains('modal-show')) {
			evt.preventDefault();
			popup.classList.remove('modal-show');
	    popup.classList.remove('modal-error');
		}
	}
})

linkmenu.addEventListener('click', function (evt) {
	evt.preventDefault();
	popupmenu.classList.toggle('modal-show');
});


window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (popupmap.classList.contains('modal-show')) {
			evt.preventDefault();
			popupmap.classList.remove('modal-show');
		}
	}
})

