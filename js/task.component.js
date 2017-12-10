
class Task extends React.Component {
    constructor(props){
        super(props);
        
        this.remove = function() {
            props.remove(props.index);
        }
    }
    render() {
        return (
            <div class="task well-sm">
                <span> {this.props.taskName} </span>
                <button class="btn btn-danger" onClick={this.remove}>Remove</button>
            </div>
        );
    }
}