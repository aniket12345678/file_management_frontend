import React, { useState } from 'react'
import HeaderBreadCrumb from '../component/HeaderBreadCrumb'
import { Button } from 'react-bootstrap'
import AddModal from '../component/AddModal'

const Home = () => {
    const [modalState, setModalState] = useState(false);

    const addMedia = (data) => {
        setModalState(data);
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
                    <div className="file-item">
                        <div className="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            ..
                        </a>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-folder text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Images
                        </a>
                        <div className="file-item-changed">02/13/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-folder text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Scripts
                        </a>
                        <div className="file-item-changed">02/14/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-folder text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Utils
                        </a>
                        <div className="file-item-changed">02/15/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file-archive text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Archive.zip
                        </a>
                        <div className="file-item-changed">02/16/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon fab fa-js text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Build.js
                        </a>
                        <div className="file-item-changed">02/17/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file-word text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Checklist.doc
                        </a>
                        <div className="file-item-changed">02/18/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon fab fa-html5 text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Index.html
                        </a>
                        <div className="file-item-changed">02/19/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-img" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar1.png)' }} />
                        <a href="javascript:void(0)" className="file-item-name">
                            Image-1.jpg
                        </a>
                        <div className="file-item-changed">02/20/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-img" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar6.png)' }} />
                        <a href="javascript:void(0)" className="file-item-name">
                            Image-2.png
                        </a>
                        <div className="file-item-changed">02/21/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-img" style={{ backgroundImage: 'url(https://bootdey.com/img/Content/avatar/avatar4.png)' }} />
                        <a href="javascript:void(0)" className="file-item-name">
                            Image-3.gif
                        </a>
                        <div className="file-item-changed">02/22/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon fab fa-js text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Main.js
                        </a>
                        <div className="file-item-changed">02/23/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            MAKEFILE
                        </a>
                        <div className="file-item-changed">02/24/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file-pdf text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Presentation.pdf
                        </a>
                        <div className="file-item-changed">02/25/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file-alt text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            README.txt
                        </a>
                        <div className="file-item-changed">02/26/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon fab fa-css3 text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Style.css
                        </a>
                        <div className="file-item-changed">02/27/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file-audio text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Test.mp3
                        </a>
                        <div className="file-item-changed">02/28/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <div className="file-item">
                        <div className="file-item-select-bg bg-primary" />
                        <label className="file-item-checkbox custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label" />
                        </label>
                        <div className="file-item-icon far fa-file-video text-secondary" />
                        <a href="javascript:void(0)" className="file-item-name">
                            Tutorial.avi
                        </a>
                        <div className="file-item-changed">03/01/2018</div>
                        <div className="file-item-actions btn-group">
                            <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown"><i className="ion ion-ios-more" /></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="javascript:void(0)">Rename</a>
                                <a className="dropdown-item" href="javascript:void(0)">Move</a>
                                <a className="dropdown-item" href="javascript:void(0)">Copy</a>
                                <a className="dropdown-item" href="javascript:void(0)">Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddModal show={modalState} addMedia={addMedia} />
        </>
    )
}

export default Home
