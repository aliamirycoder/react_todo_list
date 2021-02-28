import React, {Fragment} from 'react';
import Car from "./Car";
import UUID from 'uuid/dist/v1';
import User from './user1'

var test = new Car();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           list : [],
           tempcontent : '',
           cheack : false,
        }
    }
    inputhandel = (e) =>{

        this.setState({
            tempcontent : e.target.value,
        })

    }
    submithandel = (event) => {
        event.preventDefault();
        var input_value = document.getElementById('input_value').value;
        if (input_value != "") {

            let newlist = {
                key: UUID(),
                content: this.state.tempcontent,
                cheaked: false
            }
            this.setState({
                tempcontent: '',
            })
            this.state.list.push(newlist)
            console.log(this.state.list)
        }
    }
    chakedupdate = (event) =>{
        this.setState((prestate) =>{
            prestate.list.map((row)=>{
                if (row.key==event){
                    row.cheaked = !row.cheaked;
                }
            })
        })
        let index = this.state.list.findIndex(list => list.key === event);
        var text = this.state.list[index].content;
        if (this.state.list[index].cheaked != true){
          alert(" شما "+text+"را انجام دادید " )
        }
        else {
            console.log(this.state.list[index].checke)
        }


    }
    render() {
        const list_show = this.state.list.map((row) => {
            return(
                <Car id={row.key} key={row.key} cheaked={row.cheaked} content={row.content} cheakchange={this.chakedupdate}/>
            )
        })
        return (
          <React.Fragment>
              {list_show}
              <form onSubmit={this.submithandel}>
                  <input type="text" onChange={this.inputhandel} id="input_value" value={this.state.tempcontent}/>
                  <button type="submit">ثبت </button>
              </form>
          </React.Fragment>
        );
    }
}


export default App