import React from 'react'

class Main extends React.Component{

    showText() {
        return (
            <span>Hello From React Component!</span>
        )
    }

    render() {
        return <h1>{this.showText()}</h1>
    }
}

export default Main
