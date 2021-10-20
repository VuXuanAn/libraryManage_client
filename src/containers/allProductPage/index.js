import React, { useEffect } from 'react';
import Layout from '../../component/Layout'
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { getAllBook } from '../../actions/book.action';
import { generatePublicUrl } from '../../urlConfig';
import { NavLink } from 'react-router-dom';
const Index = () => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.book)
    useEffect(() => {
        dispatch(getAllBook())
    }, []);
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    {books.book.map(bo => {
                        return (

                            <div className='col-sm-3 mt-5'>
                                <NavLink to={`detail_product/${bo._id}`} >
                                    <div className='bookPresent '>
                                        <img className='imageBook' src={generatePublicUrl(bo.pictureBook)} />
                                        <p className='nameBook'>{bo.name}</p>
                                    </div>
                                </NavLink>
                            </div>

                        )
                    })}

                </div>
            </div>
        </Layout >
    );
}

export default Index;
