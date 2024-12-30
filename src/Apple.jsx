import React, {Component} from 'react'
class Apple extends Component{
    render(){
        return(
            <>
                <ol>
                    <li>apple</li>
                    <li>orange</li>
                    <li>apple</li>
                    <li>apple</li>
                    <li>apple</li>
                </ol>
                <ul>
                    <li>apple</li>
                    <li>orange</li>
                    <li>apple</li>
                    <li>apple</li>
                    <li>apple</li>
                </ul>

                <dl>
                    <dt>apple</dt>
                    <dd>this is a fruit</dd>
                    <dt>carrot</dt>
                    <dd>this is a vege</dd>
                </dl>
            </>
        )
    }
}

export default Apple