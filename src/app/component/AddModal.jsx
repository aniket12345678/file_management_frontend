import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

import { uploadMedia } from '../slice/fileManager.slice';

const AddModal = (props) => {
    const { show, addMedia } = props;
    const dispatch = useDispatch();
    const [folder, setFolder] = useState('');
    const [allFiles, setAllFiles] = useState([]);
    const [storeType, setStoreType] = useState('');

    const changeType = (data) => {
        setStoreType(data);
    }

    const changeFolder = (data) => {
        setFolder(data);
    }

    const handleFiles = (data) => {
        setAllFiles([...allFiles, ...data]);
    }

    const handleSubmit = () => {
        let formdata = new FormData();
        if (storeType === "1") {
            allFiles.forEach((itr) => {
                formdata.append('attachments', itr);
            });
            formdata.append('user_data', JSON.stringify({ media_type: 'file' }));
        } else {
            formdata.append(
                'user_data',
                JSON.stringify({ media_type: 'foler', folder: folder })
            );
        }
        dispatch(uploadMedia(formdata)).unwrap().then((result) => {
            if (result.code === 200) {
                setFolder('');
                setAllFiles([]);
                setStoreType('');
                addMedia(false);
            }
        });
    }

    return (
        <Modal
            show={show}
            onHide={() => addMedia(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Media</Modal.Title>
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
                                    onChange={(e) => handleFiles(e.target.files)}
                                    multiple
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
