import React  from "react";
import {signup} from "../api/apiCall";
import Input from "../Components/Input";
class SignUpPage extends React.Component{
    state = {
        username: null,
        email:null,
        password:null,
        re_password:null,
        pendingApiCall:false,
        errors:{}
    }

    onChange = event =>{

        const { name, value} = event.target;
        const errors = {...this.state.errors};
        errors[name]=undefined;
        this.setState({
            [name]:value,
            errors
        });
    };

    onClickSignUp = async event => {
        event.preventDefault();

        const {username,email,password}=this.state;
        const body = {username,  email,  password};
        this.setState({pendingApiCall:true});
        try{
            const response= await signup(body);
        }catch (error){
            if (error.response.data.validationErrors){
                this.setState({ errors: error.response.data.validationErrors})
            }
        }
        this.setState({pendingApiCall:false});
    };

    render() {
        const {pendingApiCall,errors}=this.state;
        const {username,email,password} = errors
        return(
            <div className="container">
                <form>
                    <h1 className={"text-center"}>Signup Page</h1>
                    <Input name="username" label="Username" error={username} onChange={this.onChange}/>
                    <Input name="email" label="Email" error={email} onChange={this.onChange}/>
                    <div className={"form-group"}>
                        <label>Password</label>
                        <input name="password" className={"form-control"}onChange={this.onChange} type="password"/>
                    </div>
                    <div className={"form-group"}>
                        <label>Re-Password</label>
                        <input name="re_password" className={"form-control"}onChange={this.onChange} type="password"/>
                    </div>
                    <div className={"text-center"}>
                        <button className={"btn btn-primary"} onClick={this.onClickSignUp} disabled={this.state.pendingApiCall}>
                            {this.state.pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>


        )
    }

}

export default SignUpPage;