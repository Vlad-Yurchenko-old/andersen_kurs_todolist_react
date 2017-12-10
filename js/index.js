
const inputTaskField = document.getElementById("addTaskEdit");
const addTaskButton = document.getElementById("addTaskBtn"); 

window.onload = function() {

    ReactDOM.render(
        <TaskManager />,
        document.getElementById('taskList')
    );
    
}
        
