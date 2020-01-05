if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    // create the close button for each task list
    var myList = document.getElementsByTagName('li')
    for (var i = 0; i < myList.length; i++) {
        var span = document.createElement('span')
        var txt = document.createTextNode('\u00D7')
        span.className ='close'
        span.appendChild(txt)
        myList[i].appendChild(span)

    }
    // Add checked symbol on selecting list item
    document.getElementById('taskUL').addEventListener('click', check)

    // remove item upon clicking 'X'
    //document.getElementsByClassName('close').addEventListener('click', removeItem)
    var removeTask = document.getElementsByClassName('close')
    for (i = 0; i < removeTask.length; i++ ){
        var task = removeTask[i]
        task.addEventListener('click', removeItem)
    }
    // calling function to clear all task items
    document.getElementsByClassName('removeBtn')[0].addEventListener('click', clearList)

    // calling function to add item to task list
    document.getElementsByClassName('addBtn')[0].addEventListener('click', addItem)
}
function check (event) {
var checkItem = event.target
     if(checkItem.tagName === 'LI') {
        checkItem.classList.toggle('checked') 
        //console.log('its selected li')

     }
    //console.log('click function called')
}

function clearList() {
    var li = document.getElementsByTagName('li')
    //console.log(li)
        for (var i = 0; i < li.length; i++){
            var removeTask = li[i]
            removeTask.style.display = 'none'
        }
    
    //console.log('list cleared')
}

  function removeItem() {
      //var removeTask = document.getElementsByClassName('close')[0]
    var item = this.parentElement
    item.style.display = 'none'

    //console.log('function remove item called')

  }

 function addItem() {
    var li = document.createElement('li')
    var inputTask = document.getElementById('taskInput').value
    var task = document.createTextNode(inputTask)
    li.appendChild(task)
    if(inputTask === ''){
        alert('please mention a task')
    } else {
        document.getElementById('taskUL').appendChild(li)
    }
    document.getElementById('taskInput').value = ''

    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.getElementsByClassName('close')[0].addEventListener('click', removeItem)
  
    //console.log('add item function called')
 }