import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const PostCreate = (props) => {
    return (
        <Create title="Create a post" {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate;