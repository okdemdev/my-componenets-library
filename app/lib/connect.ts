'user server'
import mongoose from 'mongoose'

export async function connect(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('db connected...')
  } catch (error) {
    console.log(error)
  }
}

export default connect
