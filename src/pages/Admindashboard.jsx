import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaComment, FaCalendarAlt, FaSignOutAlt, FaUsers, FaEye, FaDollarSign, FaChartPie, FaCloudSun, FaThermometerHalf, FaWind } from 'react-icons/fa';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import '../styles/admin-dashboard.css';
import NewImage from '../assets/all-images/TamilNadu map.jpg';

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const AdminDashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data regularly
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=10.8505&longitude=76.2711&hourly=temperature_2m');
        const data = await response.json();
        setWeather(data.hourly.temperature_2m[0]);  // Sample weather data extraction
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const pieData = {
    labels: ['Coimbatore', 'Salem', 'Tirupur', 'Trichy', 'Tirunelveli', 'Thoothukudi', 'Madurai', 'Chennai'],
    datasets: [
      {
        label: 'District Selection',
        data: [10, 20, 15, 12, 8, 7, 18, 10],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6347',
          '#36EB98',
          '#A236EB',
          '#56FFCE',
          '#EB36A2',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Profits',
        data: [1200, 1500, 1800, 1100, 1700, 2100, 1900, 2300, 2400, 2200, 2600, 2500],  // Sample data
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Prepare labels for Pie Chart
  const pieLabels = pieData.labels.map((label, index) => (
    <div key={label} className="dark-modern-label-item">
      <div
        className="dark-modern-label-color-box"
        style={{ backgroundColor: pieData.datasets[0].backgroundColor[index] }}
      ></div>
      <div className="dark-modern-label-text">{label}</div>
    </div>
  ));

  return (
    <div className="dark-modern-admin-dashboard">
      <nav className="dark-modern-admin-nav">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/car-details">
              <FaCar className="dark-modern-icon" /> Car Details
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <FaComment className="dark-modern-icon" /> Reviews
            </Link>
          </li>
          <li>
            <Link to="/bookings">
              <FaCalendarAlt className="dark-modern-icon" /> Bookings
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FaSignOutAlt className="dark-modern-icon" /> Logout
            </Link>
          </li>
        </ul>
      </nav>

      <main className="dark-modern-admin-main">
        <h1></h1>

        <div className="dark-modern-dashboard-content">
          <div className="dark-modern-stats">
            <div className="dark-modern-stat">
              <FaUsers className="dark-modern-icon" />
              <h3>Total Visits</h3>
              <p>1,234</p>
            </div>
            <div className="dark-modern-stat">
              <FaEye className="dark-modern-icon" />
              <h3>Total Page Views</h3>
              <p>567</p>
            </div>
            <div className="dark-modern-stat">
              <FaDollarSign className="dark-modern-icon" />
              <h3>Profits</h3>
              <p>$12,345</p>
            </div>
            <div className="dark-modern-stat">
              <FaChartPie className="dark-modern-icon" />
              <h3>Bounce Rate</h3>
              <p>33%</p>
            </div>
            <div className="dark-modern-stat dark-modern-weather-column">
              <FaCloudSun className="dark-modern-icon" />
              <h3>Weather</h3>
              {weather ? (
                <div className="dark-modern-weather-details">
                  <p><FaThermometerHalf className="dark-modern-weather-icon" /> Temperature: {weather}°C</p>
                  <p><FaWind className="dark-modern-weather-icon" /> Wind Speed: 15 km/h</p>
                </div>
              ) : (
                <p>Loading weather data...</p>
              )}
            </div>
          </div>

          <div className="dark-modern-image-weather-chart-section">
            <div className="dark-modern-image-section">
              <img src={NewImage} alt="New Dashboard Image" className="dark-modern-dashboard-image" />
            </div>

            <div className="dark-modern-chart-section">
              <div className="dark-modern-chart-container">
                <Pie data={pieData} options={pieOptions} />
              </div>
              <div className="dark-modern-labels-container">
                {pieLabels}
              </div>
            </div>
          </div>

          {/* Sales Report Section */}
          <div className="dark-modern-sales-report-section">
            <h2>Sales Report</h2>
            <div className="dark-modern-sales-grid">
              <div className="dark-modern-sales-item">
                <h4>January</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>February</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>March</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>April</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>May</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>June</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>July</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>August</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>September</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>October</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>November</h4>
                <p>$0.00</p>
              </div>
              <div className="dark-modern-sales-item">
                <h4>December</h4>
                <p>$0.00</p>
              </div>
            </div>
          </div>

          {/* Profit Graph Section */}
          <div className="dark-modern-profit-graph-section">
            <h2>Profit Graph</h2>
            <div className="dark-modern-chart-container">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
