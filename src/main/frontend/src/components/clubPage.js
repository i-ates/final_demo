import React, {Component} from 'react';
import Rate from "./rate";
import UserService from "../services/user.service";
import ClubService from "../services/club.service";
import { VscStarFull } from "react-icons/vsc";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class ClubPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rate: 0.0,
            clubId: this.props.match.params.id,
            comments:[]
        }
    }

    componentDidMount() {
        ClubService.getRate(this.state.clubId).then((res) =>{
            this.setState({rate: res.data})});

        ClubService.getComment(this.state.clubId).then((res) =>{
            this.setState({comments: res.data})});
    }

    render() {
        return (
            <div>
                <Row>
                <Col className="panel-container" style={{overflowY: "scroll",scrollBehaviour: "smooth",
                    height:600,opacity:0.9,marginTop:0}}>
                    <h2>
                        Messages
                    </h2>
                    <ul style={{listStyle:"None",textAlign:"left"}}>
                        <li>
                            Message Title
                        </li>
                        <li>
                            Message Content
                        </li>
                        <li>
                            Username
                        </li>
                    </ul>
                </Col>
                <Col>
                    <Row className="panel-container" style={{overflowY: "scroll",scrollBehaviour: "smooth",
                        height:290,opacity:0.9,marginTop:0,marginBottom:10}}>
                        <ul style={{listStyle:"None",textAlign:"left"}}>
                            <h2 style={{textAlign:"center"}}>
                                    Events
                            </h2>
                            <li>
                                Event Title
                            </li>
                            <li>
                                Event Content
                            </li>
                            <li>
                                Username
                            </li>
                        </ul>
                    </Row>
                    <Row>
                        <div className='panel-container' style={{marginTop:0,marginBottom:0,overflowY: "scroll",scrollBehaviour: "smooth",
                            height:300,opacity:0.9 ,width:400}}>
                            <h2 className='text-center'>Comments </h2>
                            <table className="table table-striped table-bordered" style={{color:"white", backgroundColor: "#05082B",opacity: 0.8}}>
                                <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Users Comment</th>
                                    <th>Rate</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.comments.map(
                                        comment =>
                                            <tr key ={comment.id}>
                                                <th>{comment.userId}</th>
                                                <th>{comment.comment}</th>
                                                <th>
                                                    {comment.rate} <VscStarFull style={{color:"yellow",marginBottom:3}}/>
                                                </th>
                                            </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </Row>
                </Col>
                <Col className="panel-container" style={{height:600,opacity:0.9,marginTop:0,marginBottom:10}}>
                    <Row>
                        <Button style={{width:150,marginLeft:120,marginBottom:20}} variant="outline-light"  >Send Message</Button>
                        <h5>
                            You want to be admin in this subclub?
                        </h5>
                        <Button style={{width:200,marginLeft:95,marginBottom:20}} variant="outline-light"  >Request to be an Admin</Button>
                    </Row>
                    <Row >
                        <h2>Rate Of Club {this.state.rate.toFixed(1)}</h2>
                        <Rate clubId={this.state.clubId}>
                        </Rate>
                    </Row>
                </Col>
                </Row>
            </div>
        );
    }
}

export default ClubPage;