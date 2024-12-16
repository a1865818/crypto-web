import React, { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import './Calculator.css'; 
import Select from 'react-select'; 

const Calculator = () => {
  const [income, setIncome] = useState('');
  const [cryptoPrice, setCryptoPrice] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [savings, setSavings] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  const [timePeriodError, setTimePeriodError] = useState(false);

  useEffect(() => {
    if (selectedCrypto && cryptosList) {
      const selected = cryptosList.data.coins.find(coin => coin.uuid === selectedCrypto);
      setCryptoPrice(selected?.price || '');
    }
  }, [selectedCrypto, cryptosList]);

  const calculateSavings = () => {
    if (!timePeriod) {
      setTimePeriodError(true);  // Show error if Time Period is empty
      return; // Prevent calculation if there's an error
    }
    setTimePeriodError(false);  // Reset error if Time Period is filled
    const monthlySavings = (cryptoPrice / timePeriod).toFixed(2);
    setSavings(monthlySavings);
  };

  // Prepare the options for react-select
  const options = cryptosList?.data?.coins.map((coin) => ({
    value: coin.uuid,
    label: (
      <div className="crypto-option">
        <img src={coin.iconUrl} alt={coin.name} className="crypto-icon" />
        <span>{coin.name}</span>
      </div>
    ),
    price: coin.price,
  }));

  // Handle selection change for react-select
  const handleSelectChange = (selectedOption) => {
    setSelectedCrypto(selectedOption?.value);
    setCryptoPrice(selectedOption?.price);
  };

  return (
    <div>
  {/* Hero Section */}
  <div style={{ textAlign: 'center', padding: '50px 20px', background: '#f9f9f9' }}>
    <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333' }}>Optimize Your Crypto Savings</h1>
    <h2 style={{ fontSize: '1.4rem', fontWeight: '400', color: '#555', marginTop: '10px' }}>
      Calculate Growth, Plan Ahead, and Track Your Investments
    </h2>
  </div>

  {/* Calculator Section */}
  <div className="calculator-container" style={{ height: '450px', marginTop: '50px', marginBottom: '50px' }}>
    <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Crypto Savings Calculator</h1>
    <div className="form-group">
      <label>Select Crypto: </label>
      <Select
        value={options?.find((option) => option.value === selectedCrypto)}
        onChange={handleSelectChange}
        options={options}
        getOptionLabel={(e) => e.label}
      />
    </div>
    <div className="form-group">
      <label>Crypto Price: </label>
      <input type="number" value={cryptoPrice} readOnly />
    </div>
    <div className="form-group">
      <label>Time Period (months): </label>
      <input
        type="number"
        value={timePeriod}
        // onChange={(e) => setTimePeriod(e.target.value)}
        onChange={(e) => {
          // Get the value from the input
          const value = e.target.value;
    
          // Check if the value is a positive number or empty (optional)
          if (value === '' || Number(value) > 0) {
            setTimePeriod(value);
          }
        }}
        required
        className={timePeriodError ? 'error' : ''}
      />
      {timePeriodError && <p className="error-message">Please fill in the time period.</p>}
    </div>
    <button className="calculate-button" onClick={calculateSavings}>
      Calculate
    </button>
    {savings && (
      <div className="result" style={{ marginTop: '20px' }}>
        <h2>You need to save ${savings} per month.</h2>
      </div>
    )}
  </div>

  {/* Educational Section */}
  <div style={{ padding: '50px 20px', background: '#fff' }}>
    <h2 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '30px' }}>
      Why Save in Cryptocurrency?
    </h2>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <div style={{ maxWidth: '300px', textAlign: 'center', marginBottom: '20px' }}>
        <h3>High Potential Returns</h3>
        <p>Cryptocurrency savings can yield better long-term gains compared to traditional methods.</p>
      </div>
      <div style={{ maxWidth: '300px', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Secure Your Wealth</h3>
        <p>Blockchain technology ensures security and transparency for your savings.</p>
      </div>
      <div style={{ maxWidth: '300px', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Global Accessibility</h3>
        <p>Save and invest globally without being limited by geographical boundaries.</p>
      </div>
    </div>
  </div>

  {/* FAQ Section */}
  <div style={{ padding: '50px 20px', background: '#f9f9f9' }}>
    <h2 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '30px' }}>FAQs</h2>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <details style={{ marginBottom: '15px' }}>
        <summary style={{ fontWeight: '600', cursor: 'pointer' }}>How accurate is the calculator?</summary>
        <p>This calculator uses real-time crypto prices, so results are as accurate as possible.</p>
      </details>
      <details style={{ marginBottom: '15px' }}>
        <summary style={{ fontWeight: '600', cursor: 'pointer' }}>Can I calculate savings for any crypto?</summary>
        <p>Yes, you can select from a wide range of cryptocurrencies available in our database.</p>
      </details>
      <details>
        <summary style={{ fontWeight: '600', cursor: 'pointer' }}>What happens if I don't fill in the time period?</summary>
        <p>The form will alert you and prevent calculations until the required field is filled.</p>
      </details>
    </div>
  </div>


</div>

    // <div>
    //   <h1>Optimize Your Crypto Savings</h1>
    //   <h2>Calculate Growth, Plan Ahead, and Track Your Investments</h2>

    // <div className="calculator-container" style={{height: '450px', marginTop: '100px', marginBottom: '100px' }}>
    //   <h1 style={{marginBottom:'20px'}}>Crypto Savings Calculator</h1>
    //   <div className="form-group">
    //     <label>Select Crypto: </label>
    //     <Select
    //       value={options?.find(option => option.value === selectedCrypto)} // Set the selected value
    //       onChange={handleSelectChange}
    //       options={options}
    //       getOptionLabel={(e) => e.label}  // Render the custom label
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label>Crypto Price: </label>
    //     <input 
    //       type="number" 
    //       value={cryptoPrice} 
    //       readOnly 
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label>Time Period (months): </label>
    //     <input 
    //       type="number" 
    //       value={timePeriod} 
    //       onChange={(e) => setTimePeriod(e.target.value)} 
    //       required
    //       className={timePeriodError ? 'error' : ''}
    //     />
    //        {timePeriodError && (
    //       <p className="error-message">Please fill in the time period.</p>  // Error message
    //     )}
    //   </div>
    //   <button className="calculate-button" onClick={calculateSavings}>Calculate</button>
    //   {savings && (
    //     <div className="result">
    //       <h2>You need to save ${savings} per month.</h2>
    //     </div>
    //   )}
    // </div>
    // </div>

  );
};

export default Calculator;