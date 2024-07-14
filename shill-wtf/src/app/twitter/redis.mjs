import dotenv from 'dotenv';
import redis from 'redis';

dotenv.config();

// Directly set the Redis URL for debugging
const redisUrl = 'redis://localhost:6380';

export const connect = () => {
  return new Promise(async (resolve, reject) => {
    console.log(`Connecting to Redis at ${redisUrl}`);
    const redisClient = redis.createClient({ url: redisUrl });

    redisClient.on('connect', async () => {
      console.log('Redis client connected');
      global.redisClient = redisClient;
      resolve({ code: 1, message: 'Redis Connected', data: null, error: null });
    });

    redisClient.on('error', (error) => {
      console.error('Redis client error:', error);
      reject({ code: -1, message: 'Redis Connection Failed', data: null, error: error });
    });

    try {
      await redisClient.connect();
    } catch (error) {
      console.error('Error connecting to Redis:', error);
      reject({ code: -1, message: 'Redis Connection Failed', data: null, error: error });
    }
  });
};

export const redisQuery = async (cmd, args) => {
  if (!global.redisClient) {
    throw new Error('Redis client not initialized');
  }

  // Log the command and arguments
  console.log('Executing Redis command:', cmd, 'with arguments:', args);

  try {
    const data = await global.redisClient[cmd](...args);
    console.log('Redis Command Successful:', data);
    return { code: 1, message: 'Redis Command Successful', data: data, error: null };
  } catch (error) {
    console.error('Redis Command Failed:', error);
    return { code: -1, message: 'Redis Command Failed', data: null, error: error };
  }
};
