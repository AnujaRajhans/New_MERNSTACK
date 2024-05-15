import React from 'react';
class ProfileUser extends React.Component {
    render() {
        return (
            <div>
                <h1>showing using class</h1>
             <h2>{this.props.user.name}</h2>
            </div>
        )
    }
}
export default ProfileUser;