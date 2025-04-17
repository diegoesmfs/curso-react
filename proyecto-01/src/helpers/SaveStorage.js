export const SaveStorage = (key, item) => {

    //get the elements saved
    let items = JSON.parse(localStorage.getItem(key));

    //check if it is an array
    if(Array.isArray(items)){

        //add a new element in the array
        items.push(item);

    }else{

        //create an array with the new movie
        items = [item];

    }

    //set the item in local storage
    localStorage.setItem(key, JSON.stringify(items));

    //return the movie
    return item;


}

