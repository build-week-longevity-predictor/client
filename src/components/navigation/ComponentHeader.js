import React from "react";
import {  withRouter } from "react-router-dom";
import { PageHeader,Typography} from "antd";
import { connect } from 'react-redux';


const ComponentHeader = ({title,subTitle, onBack,history}) => {
    // const isMainPage = ["", "/"].includes(location.pathname);
    // const pageHeaderOnBack = isMainPage
    //     ? {}
    //     : { onBack: () => history.push("/") };
        const isMainPage = ["","/"].includes(history.location.pathname );
        const pageHeaderOnBack = isMainPage?{}:{onBack:() => window.history.back()};

const { Title, Text } = Typography;

    return (
        <div>
            <PageHeader 
                {...pageHeaderOnBack}
                style={{ padding: '0 24px 0'}}
                title={<Title level={3}>{title}</Title>}
                

            />
            {console.log()}
        </div>
    );
};

export default withRouter(connect(null)(ComponentHeader));