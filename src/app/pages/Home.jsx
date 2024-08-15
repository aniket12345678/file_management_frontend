import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Folder, ArrowBack } from '@mui/icons-material';

import AddModal from '../component/AddModal'
import HeaderBreadCrumb from '../component/HeaderBreadCrumb'
import { addfileHistory, changeLevel, fetchAllMedia, updatefileHistory } from '../slice/fileManager.slice'

const Home = () => {
    const dispatch = useDispatch();
    const { allMediaData, level, fileHistory } = useSelector((state) => state.fileManager);
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        allMediaFn();
    }, []);

    const allMediaFn = () => {
        dispatch(fetchAllMedia({ parent_id: level }));
    }

    const addMedia = (data) => {
        setModalState(data);
    }

    const navigateToFolder = (data) => {
        dispatch(addfileHistory(data));
        dispatch(changeLevel(data['_id']))
        dispatch(fetchAllMedia({ parent_id: data['_id'] }));
    }

    const previousFolder = () => {
        const storeHistory = [...fileHistory];
        storeHistory.pop();

        if (storeHistory.length >0) {
            dispatch(updatefileHistory(storeHistory));
            dispatch(changeLevel(storeHistory[storeHistory.length - 1]['_id']))
            dispatch(fetchAllMedia({ parent_id: storeHistory[storeHistory.length - 1]['_id'] }));
        } else {
            dispatch(updatefileHistory([]));
            dispatch(changeLevel(0))
            dispatch(fetchAllMedia({ parent_id: 0 }));
        }
    }

    return (
        <>
            <div className="container flex-grow-1 light-style container-p-y">
                <div className="container-m-nx container-m-ny bg-lightest mb-3">
                    <HeaderBreadCrumb />
                    <hr className="m-0" />
                    <div className="file-manager-actions container-p-x py-2">
                        <div>
                            <Button type="button" onClick={addMedia}>
                                Add
                            </Button>
                        </div>
                        <div>
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-default icon-btn md-btn-flat active"> <input type="radio" name="file-manager-view" defaultValue="file-manager-col-view" defaultChecked /> <span className="ion ion-md-apps" /> </label>
                                <label className="btn btn-default icon-btn md-btn-flat"> <input type="radio" name="file-manager-view" defaultValue="file-manager-row-view" /> <span className="ion ion-md-menu" /> </label>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0" />
                </div>
                <div className="file-manager-container file-manager-col-view">
                    <div className="file-manager-row-header">
                        <div className="file-item-name pb-2">Filename</div>
                        <div className="file-item-changed pb-2">Changed</div>
                    </div>

                    {level != 0 && <div className="file-item">
                        <div
                            onClick={() => previousFolder()}
                            className="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"
                        >
                            <ArrowBack />
                        </div>
                    </div>}

                    {
                        allMediaData.map((itr) => {
                            if (itr.media_type === 'file') {
                                return (
                                    <div className="file-item">
                                        <div className="file-item-select-bg bg-primary" />
                                        <label className="file-item-checkbox custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <span className="custom-control-label" />
                                        </label>
                                        <div
                                            className="file-item-icon far fa-folder text-secondary"
                                        >
                                            <img
                                                style={{ width: '80px' }}
                                                src={
                                                    `${process.env.REACT_APP_BACKEND_URL}/file/manager/find/image/${itr['_id']}`
                                                }
                                                alt=""
                                            />
                                        </div>
                                        <a href="javascript:void(0)" className="file-item-name">
                                            {itr.media_name.split('-')[1]}
                                        </a>
                                        <div className="file-item-changed">02/13/2018</div>
                                        <div className="file-item-actions btn-group">
                                            {/* <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="file-item">
                                        <div className="file-item-select-bg bg-primary" />
                                        <label className="file-item-checkbox custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" />
                                            <span className="custom-control-label" />
                                        </label>
                                        <div
                                            className="file-item-icon far fa-folder text-secondary"
                                            onClick={() => navigateToFolder(itr)}
                                        >
                                            <Folder />
                                        </div>
                                        <a href="javascript:void(0)" className="file-item-name">
                                            {itr.media_name}
                                        </a>
                                        <div className="file-item-changed">02/13/2018</div>
                                        <div className="file-item-actions btn-group">
                                            {/* <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <AddModal
                show={modalState}
                addMedia={addMedia}
                allMediaFn={allMediaFn}
            />
        </>
    )
}

export default Home
