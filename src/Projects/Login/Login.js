import React from 'react'
import Header from './components/header';
import Userd from './components/Userd';
import AddUser from './components/AddUser';
import './css/main.css'
import axios from 'axios';

const baseurl = "https://reqres.in/api/users?page=2"
class Login extends React.Component{
    constructor(props){
        super(props)
        axios.get(baseurl).then((res)=>{
            this.setState({users: res.data.data});
        })
        this.state={
            users: []
        }
        this.addUser=this.addUser.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
        this.editUser=this.editUser.bind(this)
    }
    render(){
    return(<div>
        <Header title="List of users"/>
        <main>
            <Userd users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside>
            <AddUser onAdd={this.addUser} />
        </aside>
    </div>);}
    deleteUser(id){
        this.setState({
            users: this.state.users.filter((el) => el.id !==id),
        })
    }
    editUser(user){
        let allUsers = this.state.users
        allUsers[user.id - 1] = user
        this.setState({users: []}, () => {
            this.setState({users: [...allUsers] })
        })
    }
    
    addUser(user){
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id,...user}]})
    }
    
}

export default Login;