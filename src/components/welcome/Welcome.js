import React from "react";
import { Layout, Divider, Typography } from "antd";
import { NavLink } from "react-router-dom";

const Welcome = () => {
    const { Title, Text } = Typography;

    const { Content } = Layout;

    return (
        <div>
            <Content style={{ minHeight: "76.1vh" }}>
                <div
                    style={{
                        padding: 24,
                        background: "#fff",
                        minHeight: 360
                    }}
                >
                    <Title level={3}>Welcome</Title>
                    <Text type="secondary">
                        Start by searching for your favorite player in the
                        <NavLink to="/predictor"> Predictor Section</NavLink>
                    </Text>
                    <Divider />
                </div>
            </Content>
        </div>
    );
};

export default Welcome;
