import React from "react";
import { Layout, Divider, Typography, Carousel } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ComponentHeader from "../navigation/ComponentHeader";
import logo from "../../assets/logo_standard_orange.png";

export const images = [
    [logo],
    ["https://www.nba.com/assets/logos/teams/primary/web/POR.svg"],
    ["https://www.nba.com/assets/logos/teams/primary/web/LAL.svg"],
    ["https://www.nba.com/assets/logos/teams/primary/web/GSW.svg"]
];

const Welcome = ({ location, history }) => {
    const { Title, Text } = Typography;
    const { Content } = Layout;
    const users = useSelector(state => state.user.user);
    const onBack = () => {
        {
        }
    };
    return (
        <div>
            {users ? (
                <ComponentHeader
                    title={`Welcome ${users.userName}`}
                    onBack={onBack}
                    subTitle={""}
                    history={history}
                />
            ) : (
                <ComponentHeader
                    title={"Welcome"}
                    onBack={onBack}
                    subTitle={""}
                    history={history}
                />
            )}
            <Content
            // style={{ minHeight: "76.1vh" }}
            >
                <div
                    style={{
                        padding: 24,
                        background: "#fff"
                        // minHeight: 360
                    }}
                >
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
                    
                    <Carousel 
                        autoplay 
                        >
                        {images.map((image, i) => {
                            return (
                                <div
                                    style={{ maxHeight: "220px"}}
                                 key={i}
                                    >
                                    {" "}
                                    <img
                                        style={{ maxHeight: "100%", width:"auto", marginRight: "auto", marginLeft: "auto" }}
                                        src={image}
                                        alt={"home"}
                                    ></img>
                                </div>
                            );
                        })}
                    </Carousel>
                    </div>
                
            </Content>
        </div>
    );
};

export default Welcome;
