import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import { useGetCryptoExchangesQuery, useGetExchangeDetailsQuery } from "../services/cryptoExchangesApi";
import Loader from "./Loader";

const { Text } = Typography;

const Exchanges = () => {
  const { data: exchangesList, isFetching } = useGetCryptoExchangesQuery();
  const { data: exchangeDetails } = useGetExchangeDetailsQuery('binance'); // Example for Binance

  if (isFetching) return <Loader />;

  const items = exchangesList?.map((exchange) => ({
    key: exchange.id,
    label: (
      <Row key={exchange.id}>
        <Col span={6}>
          <Avatar className="exchange-image" src={exchange.image} />
          <Text><strong>{exchange.name}</strong></Text>
        </Col>
        <Col span={6}>{millify(exchange.trade_volume_24h_btc)}</Col>
        <Col span={6}>{exchange.trust_score}</Col>
        <Col span={6}>{exchange.trust_score_rank}</Col>


      </Row>
    ),
    children: (
      <div>
        <p><strong>Description: </strong>{exchangeDetails?.description || ''}</p>
        <p><strong>Country:</strong> {exchangeDetails?.country}</p>
        <p><strong>Year Established: </strong>{exchange.year_established}</p>
        <p><strong>Has Trading Incentive:</strong> {exchangeDetails?.has_trading_incentive ? "Yes" : "No"}</p>
        <p><strong>Coins: </strong> {exchangeDetails?.coins}</p>
        <p><strong>Pairs: </strong> {exchangeDetails?.pairs}</p>
        

      </div>
    ),
    // children: HTMLReactParser(exchangeDetails?.description || ''),
  }));

  return (
    <>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume in BTC</Col>
        <Col span={6}>Trust Score</Col>
        <Col span={6}>Trust Score Rank</Col>

      </Row>
      <Collapse items={items} />
    </>
  );
};

export default Exchanges;