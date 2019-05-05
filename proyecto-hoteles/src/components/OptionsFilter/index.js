import React from 'react'

class OptionsFilter extends React.Component{
    constructor(props){
        super(props)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleOptionChange(event) {
        this.props.onOptionChange(event)
    }

    render(){
        const { options, selected , icon, name } = this.props
        const listOptions = options.map(option =>  
            <option value={option.value} key={`${option.value}`}>{option.name}</option>
        )
        return(
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} } value={selected} onChange={ this.handleOptionChange } name={ name }>
                        {listOptions}
                    </select>
                    </div>
                    <div className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsFilter;