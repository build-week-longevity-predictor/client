import React, { useEffect } from "react";
import SearchForm from "./SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { Layout, BackTop, Divider, Typography } from "antd";
import { getPlayerNames } from "../../action/index";

const Predictor = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const dispatch = useDispatch();
  const playersNamesLoaded = useSelector(state => state.player.playersNamesLoaded);

  useEffect(() => {
    const loadData = () => {
      dispatch(getPlayerNames());
    };
    loadData();
  }, [dispatch]);
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
          {playersNamesLoaded && <SearchForm />}
        </div>
      </Content>
    </div>
  );
};

export default Predictor;