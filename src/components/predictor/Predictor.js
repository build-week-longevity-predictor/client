import React, { useEffect } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
import { Layout, BackTop, Divider, Typography } from "antd";
import { getPlayers } from "../../action/index";

const Predictor = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const dispatch = useDispatch();
  const name = useSelector(state => state.player.name);  
  const players = useSelector(state => state.player.allPlayers);
const playersLoaded = useSelector(state => state.player.playersLoaded);



  useEffect(() => {
    const loadData = () => {
      dispatch(getPlayers())
    }
    loadData()
  },[dispatch])
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
          <BackTop />
          <Title level={3}>Player Predictor</Title>
          <Text type="secondary">
            Search for a player to see lifetime stats, player comparison and
            longevity prediction.
          </Text>
          <Divider />
          {playersLoaded && <SearchForm />}


        </div>
      </Content>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.player.name,
    players: state.player.allPlayers
  };
};

export default Predictor
// export default connect(
//   null,
//   {getPlayers}
// )(Predictor);
