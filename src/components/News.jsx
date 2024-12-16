import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import crytpoDailyLogo from '../images/cryptodaily.png';
import Loader from './Loader'

const { Text, Title } = Typography
const { Option } = Select
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const { data: cryptoNewsResponse, isFetching } = useGetCryptoNewsQuery({ count });
  const [newsCategory, setNewsCategory] = React.useState('Cryptocurrency');


  if (isFetching) return <Loader />;
  if (!cryptoNewsResponse?.data) return <div>No news found.</div>;

  const cryptoNews = cryptoNewsResponse.data;

  const limitedCryptoNews = cryptoNews.slice(0, count);
  return (
    <Row gutter={[24, 24]}>
      {limitedCryptoNews.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news.thumbnail || demoImage} style={{ maxWidth: '200px', maxHeight: '100px' }} alt="news" />
              </div>
              <p >
                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src = {crytpoDailyLogo}/>
                  <Text className='provider-name'>Crypto Daily</Text>
                </div>
                <Text >
                  {moment(news.createdAt).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News