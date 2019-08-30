import React from "react";
import { Layout, Divider, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ComponentHeader from '../navigation/ComponentHeader'

const Welcome = ({location,history}) => {
    const { Title, Text } = Typography;
    const { Content } = Layout;
    const users = useSelector(state => state.user.user);
  const onBack = () => {
     {}
  }
    return (
        <div>
            {users ? (
                <ComponentHeader title={`Welcome ${users.userName}`} onBack={onBack}
                    history={history}/>
                ) : (
                <ComponentHeader title={'Welcome'} onBack={onBack}
                    history={history}
                    />
                )
                }
            <Content style={{ minHeight: "76.1vh" }}>
                <div
                    style={{
                        padding: 24,
                        background: "#fff",
                        minHeight: 360
                    }}
                >
                    <Title level={3}>Welcome {users && users.userName}</Title>
                    <Text type="secondary">
                        Start by searching for your favorite player in the
                        <NavLink to="/predictor"> Predictor Section</NavLink>
                    </Text>
                    <br />
                    <Text type="secondary">
                        Or view all the players in the
                        <NavLink to="/players"> Players List</NavLink>
                    </Text>   
                    <br />
                    <Text type="secondary">
                        Or update your account info in the
                        <NavLink to="/users"> Users Page</NavLink>
                    </Text>                                        
                    <Divider />
                </div>
            </Content>
        </div>
    );
};

export default Welcome;
