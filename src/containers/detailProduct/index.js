import Search from 'antd/lib/input/Search';
import React, { useEffect } from 'react';
import Layout from './../../component/Layout'

import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from '../../actions/book.action';
import { generatePublicUrl } from '../../urlConfig';
const DetailProduct = (props) => {

    const dispatch = useDispatch();
    const book = useSelector((state) => state.book);
    useEffect(() => {
        const { bookId } = props.match.params;
        const payload = {
            params: {
                bookId,
            },
        };
        dispatch(getProductDetailsById(payload));
    }, []);
    const { productDetails } = book
    return (
        <Layout>
            <div className="container">
                <div className='row mt-5'>
                    <div className='col-sm-3'>
                        <h1>Search</h1>
                        <Search placeholder="input search text" enterButton />
                        <p>Sach moi den</p>
                    </div>
                    <div className='col-sm-3'>
                        <div className='imageBookDetail'>
                            <img
                                src={generatePublicUrl(productDetails.pictureBook)}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='detailBook'>
                            <p>Tên sách: {productDetails.name}</p>
                            <p>ID sách: {productDetails._id}</p>
                            <p>Giá: {productDetails.price} VNĐ</p>
                            <p>Mô tả: {productDetails.descreption}</p>
                            <p>Khả dụng : {productDetails.stock} cuốn</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default DetailProduct;
