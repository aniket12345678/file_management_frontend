import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const AddModal = (props) => {
    const { show, addMedia } = props;
    const [folder, setFolder] = useState('');
    const [storeType, setStoreType] = useState('');

    const changeType = (data) => {
        setStoreType(data);
    }

    const changeFolder = (data) => {
        setFolder(data);
    }

    const handleSubmit = () => {
        alert('yo');
    }

    return (
        <Modal
            show={show}
            onHide={() => addMedia(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className='mb-3'>
                    <Col>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => changeType(e.target.value)}
                        >
                            {storeType === '' && <option>Select</option>}
                            <option value="1">File</option>
                            <option value="2">Folder</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            storeType === '1' ?
                                <Form.Control
                                    type='file'
                                    onChange={(e) => changeFolder(e.target.value)}
                                />
                                : storeType === '2' ?
                                    <Form.Control
                                        type='text'
                                        value={folder}
                                        placeholder='Folder'
                                        onChange={(e) => changeFolder(e.target.value)}
                                    /> : null
                        }
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddModal
