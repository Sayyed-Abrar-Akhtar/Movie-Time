import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './components/StarRating';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Good', 'Better', 'Amazing']}
    />
    <StarRating maxRating={10} defaultRating={3} />
  </React.StrictMode>
);
