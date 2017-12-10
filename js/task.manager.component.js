
class TaskManager extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            arrayOfTasks: []
        }
        
        addTaskButton.addEventListener("click", function() {
            var taskName = inputTaskField.value;

            var array = this.state.arrayOfTasks;
            array.push(taskName);
            this.setState({arrayOfTasks: array});

            inputTaskField.value = "";
        }.bind(this));

        this.removeTask = function(i) {
            var array = this.state.arrayOfTasks;
            array.splice(i, 1);
            this.setState({arrayOfTasks: array});
        }.bind(this);

        this.createTask = function (item, i) {
            return (<Task key={i} index={i} taskName={item} remove={this.removeTask} />);
        }.bind(this);

    };

    render() {
        return (
            <div>
            {
                this.state.arrayOfTasks.map (this.createTask)
            }
            </div>
        );
    };
}