import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          'https://open.er-api.com/v6/latest/USD'
        );
        const currencyKeys = Object.keys(response.data.rates);
        setCurrencies(currencyKeys);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };
    fetchCurrencies();
  }, [toCurrency]);

  const handleConvert = async () => {
    try {
      const response = await axios.get(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );
      setExchangeRate(response.data.rates[toCurrency]);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  return (
    <div className="min-h-screen bg-currency-converter bg-no-repeat bg-cover flex items-center justify-center">
      <div className="bg-orange-500 p-8 rounded-lg shadow-lg w-96 bg-opacity-70">
        <h1 className="text-2xl font-bold text-center mb-4">Currency Converter</h1>
        <div className="mb-4">
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4 flex">
          <select
            className="w-1/2 p-2 border rounded mr-2"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select
            className="w-1/2 p-2 border rounded"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleConvert}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>
        {exchangeRate && (
          <div className="mt-4 text-center">
            <p className="text-xl font-bold">
              {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)}{' '}
              {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
