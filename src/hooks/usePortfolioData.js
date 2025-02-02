import { useState, useEffect } from 'react';
import { sectionsData } from '../data/sections';

export const usePortfolioData = () => {
  const [data, setData] = useState(sectionsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/portfolio_data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err);
        setLoading(false);
        setData(sectionsData);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}; 