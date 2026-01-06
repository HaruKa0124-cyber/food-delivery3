import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  await connect('mongodb+srv://admin:PiWjwiZFuI2dMFkC@cluster0.j8iszu9.mongodb.net/?appName=Cluster0');
}

// mongodb+srv://admin:<db_password>@cluster0.pqsj91j.mongodb.net/?appName=Cluster0