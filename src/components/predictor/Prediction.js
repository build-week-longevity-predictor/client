import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Card, Icon, Avatar } from "antd";
import defaultImage from "../../assets/default-image.JPG";

const { Meta } = Card;

export const Prediction = () => {
  const player = useSelector(state => state.player.player);

  const [playerImage, setPlayerImage] = useState("");
  const [playerLongevity, setPlayerLongevity] = useState(null);
  const [similarPlayers, setSimilarPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://nba-players.herokuapp.com/players/${
          player.player.split(" ")[1]
        }/${player.player.split(" ")[0]}`
      )
      .then(res => {
        console.log(res.data);
        if (
          res.data ===
          "Sorry, that player was not found. Please check the spelling."
        ) {
          setPlayerImage(defaultImage);
        } else {
          setPlayerImage(
            `https://nba-players.herokuapp.com/players/${
              player.player.split(" ")[1]
            }/${player.player.split(" ")[0]}`
          );
        }
      })
      .catch();
  }, [player]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://nbabw.herokuapp.com/similarities/${player.player}`
      )
      .then(res => {
        console.log(JSON.parse(res.data.similars));
        setPlayerLongevity(res.data.longevity);
        setSimilarPlayers(JSON.parse(res.data.similars));
      })
      .catch(error => console.log(error));
  }, [player]);

  return (
    <div className="player-card">
      <Card
        style={{ width: 400, margin: "0 auto" }}
        cover={<img alt="Player Image" src={playerImage} />}
      >
        <Meta
          title={
            <p style={{ fontSize: "2rem", fontWeight: "bolder" }}>
              {player.player}
            </p>
          }
          description={
            <div>
              <h3>
                <span style={{ fontWeight: "bolder" }}>
                  Predicted Career Length:
                </span>{" "}
                <br />
                <p style={{ fontSize: "2rem", fontWeight: "bolder" }}>
                  {Math.round(playerLongevity) + 4} years
                </p>
              </h3>

              <p>
                <span style={{ fontWeight: "bolder" }}>Team:</span>
                <Avatar
                  size={70}
                  src={`https://www.nba.com/assets/logos/teams/primary/web/${
                    player.team === "NOH"
                      ? "NOP"
                      : player.team === "NJN"
                      ? "BKN"
                      : player.team === "PHO"
                      ? "PHX"
                      : player.team
                  }.svg`}
                  alt="Team logo"
                />
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>College: </span>

                {player.college === "0"
                  ? "Did not attend college"
                  : player.college}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Draft Year: </span>
                {player.draft_yr}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Pick # </span>{" "}
                {player.pk}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Games Played: </span>
                {player.games}
              </p>
              <p>
                <span style={{ fontWeight: "bolder" }}>Points: </span>{" "}
                {player.pts}
              </p>
            </div>
          }
        />
      </Card>

      <div>
        <h2>Similar Players: </h2>
        {Object.values(similarPlayers).map(player => {
          return <div>{player.player}</div>;
        })}
      </div>
    </div>
  );
};
