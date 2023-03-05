import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:5001/api"
});

export const getRatings = async () => {
  try {
    const response = await client.get('/ratings');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getSentAndReceived = async () => {
  try {
    const response = await client.get('/sentandreceived');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getNames = async () => {
  try {
    const response = await client.get('/names');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getTopWord = async () => {
  try {
    const response = await client.get('/topword');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getReceivedWords = async () => {
  try {
    const response = await client.get('/receivedwords');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export const getTopEmoji = async () => {
  try {
    const response = await client.get('/topemoji');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getMessages = async () => {
  try {
    const response = await client.get('/messages');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getSentHours = async () => {
  try {
    const response = await client.get('/senthours');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getReceivedHours = async () => {
  try {
    const response = await client.get('/receivedhours');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getDaysMessages = async () => {
  try {
    const response = await client.get('/daysmessages');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getReceivedEmojis = async () => {
  try {
    const response = await client.get('/receivedemojis');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getSentEmojis = async () => {
  try {
    const response = await client.get('/sentemojis');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getGroupChats = async () => {
  try {
    const response = await client.get('/groupchats');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}