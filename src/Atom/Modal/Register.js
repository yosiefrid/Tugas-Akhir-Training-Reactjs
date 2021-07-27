import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import {Form, Col, Row} from 'react-bootstrap'
import FloatingLabel from "react-bootstrap-floating-label";

export default function Register(props) {
    if(!props.showRegister){
        return null;
    }
    return (
        <Form onSubmit={props.onSubmit}>
        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
            <Form.Group as={Row} className="mb-3" controlId="username">
                <Form.Label column sm={2}>Username</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="username"  onChange={props.onChangeUsername}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label column sm={2}>Password</Form.Label>
                <Col sm={10}>
                    <Form.Control type="password" placeholder="password" onChange={props.onChangePassword}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3"  controlId="exampleForm.ControlTextarea1">
                <Form.Label column sm={2}>Dexcribe Yourself</Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" rows={3} onChange={props.onChangeDescription} />
                </Col>
            </Form.Group>

            
            <fieldset>
            <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
                Gender
            </Form.Label>
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="Male"
                value="Male"
                name="gender"
                id="gender1" onChange={props.onChangeGender}
                />
                <Form.Check
                type="radio"
                label="Female"
                value="Female"
                name="gender"
                id="gender2" onChange={props.onChangeDescription}
                />
            </Col>
            </Form.Group>
            </fieldset>

            {/* <fieldset>
            <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
                Are you Indonesian?
            </Form.Label>
            <Col sm={10}>
                <Form.Check
                type="checkbox"
                label="YES"
                value="WNI"
                name="Nationalism"
                id="nationalism1"
                />
                <Form.Check
                type="checkbox"
                label="NO"
                value="WNA"
                name="Nationalism"
                id="nationalism2"
                />
            </Col>
            </Form.Group>
            </fieldset> */}

            <Form.Group as={Row} name="job" className="mb-3" controlId="exampleForm.ControlInput1" onChange={props.onChangeJob}>
                <Form.Label column sm={2}>Job Target</Form.Label>
                <Col sm={10}>
                <select  aria-label="Default select example" >
                    <option selected disabled>Open this select menu</option>
                    <option name="job" value="Software Developer">Software Developer</option>
                    <option name="job" value="QA Analyst">QA Analyst</option>
                    <option name="job" value="Software Tester">Software Tester</option>
                </select>
                </Col>
            </Form.Group>
        
           
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleModal}>Cancel</Button>
            <Button type="submit" variant="outline-success">Register</Button>
        </Modal.Footer>
        </Modal.Dialog>
        </Form>
    )
}