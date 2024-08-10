import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

let isConnected: boolean = false

export async function connectToDatabase() {
  if (isConnected) {
    return
  }

  try {
    await mongoose.connect(MONGODB_URI)
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
