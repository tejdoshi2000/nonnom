import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props.name + 'Child Constructor');
        this.state = {
            count: 0,
            count2: 1
        }
    }
    componentDidMount(){
        // console.log(this.props.name +'Child Mounted')
    }
    render(){

        // console.log(this.props.name + 'Child Render');
        const {count, count2} = this.state
        return (
            <div className='user-card'>
                <div>
                    <p>Count:{count}</p>
                    <button onClick={()=>{
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>Increase the count</button>
                    <p>Count2:{count2}</p>
              <p>  {this.props.name} </p>
              <p> {this.props.location}</p>
                </div>
                
                </div>
        )
    }
}

export default UserClass;