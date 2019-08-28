import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon} from 'antd';
import { Link,withRouter } from 'react-router-dom';


const SideNavBar = props => {
  const [collapse, setCollapse] = useState(true);
  const onCollapse = () => {
    setCollapse(!collapse);
  };

const {Sider} = Layout;  
const navBarTheme = "light";
        return (
            <Sider
                collapsible
                collapsed={collapse}
                onCollapse={onCollapse}
                theme={navBarTheme}
                style={{ zIndex: 10}}
            >
                <div className="logo"/>
                <Menu theme={navBarTheme} defaultSelectedKeys={[props.location.pathname]} 
                    mode="inline" >
                    <Menu.Item key="/">
                        <Link to="/">
                            <Icon type="home" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/">
                        <Icon type="calculator" />
                        <span>Predictor</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/">
                        <Icon type="table" />
                        <span>Players</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );    
}
const mapStateToProps = (state, props) => {
    return {...state,...props};
};
export default withRouter(connect(mapStateToProps)(SideNavBar));
