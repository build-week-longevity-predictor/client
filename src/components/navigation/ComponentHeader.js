import React from "react";
import {  withRouter } from "react-router-dom";
import { PageHeader,Typography} from "antd";
import { connect } from 'react-redux';


const ComponentHeader = ({title, onBack,history}) => {
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
                // onBack={() => onBack()} 
                // title={title} 
                title={<Title level={3}>{title}</Title>}
                subTitle="This is a subtitle" 

            />
            {console.log()}
        </div>
    );
};

export default withRouter(connect(null)(ComponentHeader));