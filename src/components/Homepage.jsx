import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Card } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { GlobalOutlined, SwapOutlined, DollarOutlined, LineChartOutlined, ShopOutlined } from '@ant-design/icons';
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Loader from './Loader'
const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching, error } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;
  if (error) return 'Error fetching data';
  if (!globalStats) return 'No data available';

  return (
    <>
      <Title level={2} className='heading'> Global Crypto Stats</Title>
      <Row gutter={[32, 32]} className="stats-container">
      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Card className="stats-card" hoverable>
          <GlobalOutlined className="stats-icon" />
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Card className="stats-card" hoverable>
          <ShopOutlined className="stats-icon" />
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Card className="stats-card" hoverable>
          <DollarOutlined className="stats-icon" />
          <Statistic title="Total Market Cap" value={`$${millify(globalStats.totalMarketCap)}`} />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Card className="stats-card" hoverable>
          <LineChartOutlined className="stats-icon" />
          <Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
        </Card>
      </Col>

      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Card className="stats-card" hoverable>
          <SwapOutlined className="stats-icon" />
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Card>
      </Col>
    </Row>
       {/* <Row gutter={[24, 24]} className="stats-container">
      <Col span={8}>
        <Card className="stats-card" hoverable>
          <GlobalOutlined className="stats-icon" />
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Card>
      </Col>

      <Col span={8}>
        <Card className="stats-card" hoverable>
          <ShopOutlined className="stats-icon" />
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Card>
      </Col>

      <Col span={8}>
        <Card className="stats-card" hoverable>
          <DollarOutlined className="stats-icon" />
          <Statistic title="Total Market Cap" value={`$${millify(globalStats.totalMarketCap)}`} />
        </Card>
      </Col>

      <Col span={8}>
        <Card className="stats-card" hoverable>
          <LineChartOutlined className="stats-icon" />
          <Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} />
        </Card>
      </Col>

      <Col span={8}>
        <Card className="stats-card" hoverable>
          <SwapOutlined className="stats-icon" />
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Card>
      </Col>
    </Row> */}
      {/* <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>

      </Row> */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      {/* Simplified is a prop that showing only 10 cryptos */}
      <Cryptocurrencies simplified /> 
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified={true} data={data}/>
    </>
  )
}

export default HomePage