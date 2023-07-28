import mongoose from "mongoose";

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongoConnection = {
  isConnected: 0
};

export const connect = async () => {
  try {

    if (mongoConnection.isConnected) {
      console.log("Now we are connected");
      return;
    };

    if (mongoose.connections.length > 0) {

      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if (mongoConnection.isConnected === 1) {
        console.log("Using previous connection");
        return;
      };

      await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || "");
    mongoConnection.isConnected = 1;
    console.log("DB Connected");

  } catch (error) {
    console.log(error);
  };
};

export const disconnect = async () => {
  try {
    if (mongoConnection.isConnected === 0) return;
  
    await mongoose.disconnect();
    mongoConnection.isConnected = 0;
    console.log("DB Disconnected");
    
  } catch (error) {
    console.log(error);
  };
};