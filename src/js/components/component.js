import React from 'react'

class Component extends React.Component{

    showText() {
        return (
            <span>Hello From Routed Component!</span>
        )
    }

    render() {
        return <h1>{this.showText()}</h1>
    }
}

export default Component
