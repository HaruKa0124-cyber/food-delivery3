import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  await connect('mongodb+srv://admin:iu7o1Xb8E5IEIEfS@cluster0.pqsj91j.mongodb.net/?appName=Cluster0');
}

// mongodb+srv://admin:<db_password>@cluster0.pqsj91j.mongodb.net/?appName=Cluster0