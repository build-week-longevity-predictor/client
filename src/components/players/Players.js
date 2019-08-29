import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlayers } from "../../action/index";
import { Table, BackTop, Typography, Layout} from "antd";

const Players = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector(state => state.player.allPlayers);
  const sorter = () => {
    allPlayers.sort((a, b) => a.yrs - b.yrs)
  }

  useEffect(() => {
    const loadData = () => {
      dispatch(getPlayers());
    };
    loadData();
  }, [dispatch]);

  const { Column, ColumnGroup } = Table;
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
          <BackTop />
          <Title level={3} >Player List</Title>
          <Text type="secondary" onClick={()=> sorter()}>
            Search for a player to see lifetime stats, player comparison and
            longevity prediction.
          </Text>
          <Table
            dataSource={allPlayers}
            rowKey={record => record.unnamed_0}

          >

              <Column title="Player" dataIndex="player" key="player" />
              <Column title="Team" dataIndex="team" key="team"
                render={(text, record) => (
                                  <img alt="example" src={`https://www.nba.com/assets/logos/teams/primary/web/${record.team}.svg`} />
                                  )
                }

               />
              <Column 
                title="Years" 
                dataIndex="yrs" 
                key="yrs" 
       
                sortOrder={'descend'} 
              />

          </Table>
        </div>
      </Content>
    </div>
  );
};



//
export default Players;
