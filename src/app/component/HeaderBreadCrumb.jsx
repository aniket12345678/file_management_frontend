import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeLevel, fetchAllMedia, updatefileHistory } from '../slice/fileManager.slice';

const HeaderBreadCrumb = () => {
    const dispatch = useDispatch()
    const { fileHistory } = useSelector((state) => state.fileManager);

    const goToFolder = (data, index) => {
        const storeHistory = [...fileHistory];
        dispatch(updatefileHistory(storeHistory.filter((x, i) => i <= index)));
        dispatch(changeLevel(data['_id']));
        dispatch(fetchAllMedia({ parent_id: data['_id'] }));
    }

    return (
        <Breadcrumb className='py-3'>
            {
                fileHistory.map((itr, index) => {
                    return (
                        <>
                            <span onClick={() => goToFolder(itr, index)}>
                                {itr.media_name}
                            </span>/
                        </>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default HeaderBreadCrumb
