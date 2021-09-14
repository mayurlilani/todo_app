import { ListItemText, ListItem, List, ListItemAvatar, Button } from '@material-ui/core'
import React from 'react'
import db from './firebase'

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline⏰ "/>
                </ListItem>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌ Delete</Button>
            </List>
            {/* <li>{props.text}</li> */}
        </div>
    )
}

export default Todo
