import React, { Component } from 'react';
import jsonp  from 'jsonp';
export default  class  extends Component{
    constructor(props){
    super(props);
    this.state = {
        words:[],
        index:-1
    };
    }
    handleChange = (event)=>{
        let wd = event.target.value;
        jsonp('http://www.baidu.com/su?wd=${wd}',{param:'cb'},(err,data)=>{
            console.log(data);
            this.setState({words:data.s})
        });
    }
    handleKeyDown = (event)=>{ 
        let  code = event.keyCode;
        if (code== 38 || code== 40){
            let  index = this.state.index;
            if (code == 38){
            index --;
            }else if (code == 40){
                index++;
            }
            this.setState({index})
        }
        }


     render() {
        return(
          <div className="container">
              <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <input onKeyDown={this.handleKeyDown} type="text" className="form-control" onChange={this.handleChange}/>
                           </div>
                          <div className="panel-body">
                              <ul className="list-group">
                                  {this.state.words.map((word,index)=>(
                                      <li key={index} className={"list-group-item "+(index===this.state.index?'active':'')}>{word}</li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          );
    }

}