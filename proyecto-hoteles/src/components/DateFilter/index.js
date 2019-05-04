import React from 'react'

class DateFilter extends React.Component {
    constructor(props){
        super(props)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleDateChange(event) {
        this.props.onDateChange(event)
    }

    render(){
        const { date, icon, name } = this.props
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" onChange={ this.handleDateChange } value={ date } name={ name } />
                    <span className="icon is-small is-left">
                    <i className={`fas ${icon}`}></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default DateFilter;