import React from 'react';
import Layout from '../../component/Layout'
import './style.css'
import { FaBookOpen } from 'react-icons/fa'
import { BsFillGiftFill, BsCollectionFill } from 'react-icons/bs'
import { GiWhiteBook } from 'react-icons/gi'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'
const Homepage = () => {
    return (
        <Layout>
            <div className='section-heading'>
                <h2>Chào mừng đến với thư viện ĐHHP</h2>
                <i>Bạn càng đọc nhiều, bạn càng biết nhiều. Bạn càng học nhiều, bạn càng đi nhiều</i>
                <div className='breakLine'>
                    <FaBookOpen className='iconBreak' />
                </div>
            </div>


            <div className="container mt-5 mb-5">
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='categoryOfBook'>
                            <BsFillGiftFill className='iconOfCategory' />
                            <h2>EBook</h2>
                            <p>an electronic version of a printed book that can be read on a computer.</p>
                            <a href="#">read More</a>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='categoryOfBook'>
                            <GiWhiteBook className='iconOfCategory' />
                            <h2>AudioBooks</h2>
                            <p>an audiocassette or CD recording of a reading of a book, typically a novel</p>
                            <a href="#">read More</a>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='categoryOfBook'>
                            <MdOutlineLibraryBooks className='iconOfCategory' />
                            <h2>Magazine</h2>
                            <p>a periodical publication containing articles and illustrations information</p>
                            <a href="#">read More</a>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='categoryOfBook'>
                            <BsCollectionFill className='iconOfCategory' />
                            <h2>TEANS & KIDS</h2>
                            <p>the years of a person's age from 13 to 19 and are the kids and teens.</p>
                            <a href="#">read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='OurTopCategory p-5'>
                <div className='section-heading'>
                    <h2>Thể loại sách của chúng tôi</h2>
                    <i>Dưới đây là những thể loại sách có sẵn</i>
                    <div className='breakLine'>
                        <FaBookOpen className='iconBreak' />
                    </div>
                </div>
                <div class="container mt-5">
                    <div className='listCategory'>
                        <div className='previousAndNext'>
                            <GrFormPreviousLink className='iconPAN' />
                        </div>
                        <div className='listCategoryDisplay'>
                            <ul>
                                <li>Kinh di</li>
                                <li>Tieu thuyet</li>
                                <li>giao trinh</li>
                                <li>Ki nang song</li>
                            </ul>
                        </div>
                        <div className='previousAndNext'>
                            <GrFormNextLink className='iconPAN' />
                        </div>
                    </div>

                    <div className='listBook'>
                        <div className='row'>
                            <div className='col-sm-3' style={{ paddingRight: '0px' }}>
                                <div className='book'>
                                    <img src="https://th.bing.com/th/id/R.378cdf8dbf034e3e0e7b51edad4a7d3f?rik=fB5ZRwNd4Oajlw&pid=ImgRaw&r=0" />
                                </div>
                            </div>
                            <div className='col-sm-3' style={{ padding: '0' }}>
                                <div className='book'>

                                </div>
                            </div>
                            <div className='col-sm-3' style={{ padding: '0' }}>
                                <div className='book'>

                                </div>
                            </div>
                            <div className='col-sm-3' style={{ paddingLeft: '0' }}>
                                <div className='book'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div>
                <div className='section-heading'>
                    <h2>Đọc sách miễn phí</h2>
                    <i>Cuốn sách được đọc nhiều nhất</i>
                    <div className='breakLine'>
                        <FaBookOpen className='iconBreak' />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Homepage;
