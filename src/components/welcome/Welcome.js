import React  from 'react';
import { Layout,Row,Divider,Typography } from 'antd';


const Welcome =()=>  {
const { Title,Text } = Typography;

const {
    Content
} = Layout;

    return (
            <div>
                <Content style={{minHeight:"76.1vh" }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Title level={3}>
                           Welcome
                        </Title>
                </div>
                </Content>
            </div>
        );
}


export default Welcome;