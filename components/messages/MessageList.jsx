import React, {Component} from 'react'
import Message from './Message.jsx'

class MessageList extends Component{
    render(){
        <ul>{
            this.props.message.map(message => {
                return(
                    <Message key={message.id} message={message} />
                )
            })
        }
        </ul>
    }
}

MessageList.propTypes = {
    messages: React.Proptypes.array.isRequired
}
export default MessageList