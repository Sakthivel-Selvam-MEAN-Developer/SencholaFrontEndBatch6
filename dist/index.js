var subscribeBtn = document.getElementById('subscribe');

const toggleDescription = () => {
    let points = document.getElementById('points');
    let loadButton = document.getElementById('loadButton');
    let moreDescription = document.getElementById('more-description');
    if(points.style.display == 'none'){
        moreDescription.style.display = 'none';
        points.style.display = 'inline';
        loadButton.innerText = 'load less';
    } else {
        moreDescription.style.display = 'inline';
        points.style.display = 'none';
        loadButton.innerText = 'load more';
    }
}

const openForm = () => {
    if(subscribeBtn.textContent == 'SUBSCRIBED'){
        subscribeBtn.style.backgroundColor = 'rgba(169, 1, 1, 0.969)';
        subscribeBtn.textContent = 'SUBSCRIBE';
    } else {
        document.getElementById('form').style.transform = 'scale(1)';
    }
}

const cancelForm = () => {
    document.getElementById('form').style.transform = 'scale(0)';
}

const onSubmitForm = (form) => {
    if(!formValidate(form)){
        alert('All Fields are Required. If you dont want to Subscribe you can cancel this form.');
    } else {
        form.reset();
        cancelForm();
        subscribeBtn.style.backgroundColor = 'grey';
        subscribeBtn.textContent = 'SUBSCRIBED';
    }
}

const formValidate = (form) => {
    if(form['firstname'].value != '' && form['lastname'].value != '' && form['mail'].value != '' && form['dob'].value != '' && form['address'].value != ''){
        return true;
    } else {
        return false;
    }
}