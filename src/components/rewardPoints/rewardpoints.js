import React, { useState } from 'react';



const RewardPoints = () => {
  const [rewardPoints, setRewardPoints] = useState([]);
  const [enteredCustomerID, setEnteredCustomerID] = useState('');

  const addRewardPointsHandler = event => {
    event.preventDefault();
    fetch('http://localhost:8086/v1/rewards/'+enteredCustomerID, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setRewardPoints(responseData);
      });
  };

  

  return (
    <div className="App">
     <form onSubmit={addRewardPointsHandler}>
        <label htmlFor="customerid">CustomerId</label>
        <input id="customerid" type="text" onChange={event => {
                setEnteredCustomerID(event.target.value);
              }} />
        <button type="submit">getRewards</button>
      </form>
      <table>
        <tbody>
          <tr>
      <td><label htmlFor="lastMonthRewardPoints">lastMonthRewardPoints</label></td>
      <td>  <output>{rewardPoints.lastMonthRewardPoints}</output></td>
      </tr>
      <tr>
      <td> <label htmlFor="lastSecondMonthRewardPoints">lastSecondMonthRewardPoints</label></td>
      <td> <output>{rewardPoints.lastSecondMonthRewardPoints}</output></td>
      
      </tr>
      <tr>
      <td> <label htmlFor="lastThirdMonthRewardPoints">lastThirdMonthRewardPoints</label></td>
      <td>  <output>{rewardPoints.lastThirdMonthRewardPoints}</output></td>
      </tr>
      <tr>
      <td><label htmlFor="totalRewards">totalRewards</label></td>
      <td>  <output>{rewardPoints.totalRewards}</output></td>
      </tr>
      </tbody>
      </table>
    </div>
  );
};

export default RewardPoints;
