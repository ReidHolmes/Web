import React from 'react';
export default  class TodoHeader extends React.Component {
    render() {
        return(
            <form>
                <div className="form-group">
                    <input autoFocus={true} type="text" className="form-control"/>
                </div>
            </form>
        )
    }

}