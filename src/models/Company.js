import mongoose from 'mongoose'

const companySchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    founded: { type: Number }
  },
  { versionKey: false }
)

const companies = mongoose.model('companies', companySchema)

export default companies
