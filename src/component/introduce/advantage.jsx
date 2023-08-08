import { Col } from 'antd';
import React from 'react';

function Advantage({item}) {
    return (
        
            <Col span={11} className={item.className}>
                <img src={item.img} className='border-[1rem] border-solid border-white rounded-full p-[2rem] ' alt="" />
                <h2 className='text-left pl-[4rem] text-[#fff] '>{item.title}</h2>
            </Col>
            
        
    );
}

export default Advantage;