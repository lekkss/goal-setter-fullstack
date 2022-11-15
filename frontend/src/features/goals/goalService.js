import axios from "axios";

const API_URL = "/api/goals/";

// Get goals
const getGoals = async (token) => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create Goal
const createGoal = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, userData, config);
  return response.data;
};

const goalService = {
  getGoals,
  createGoal,
};
export default goalService;
