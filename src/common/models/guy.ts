import { BaseModel } from './base-modal'

export interface Guy extends BaseModel {
  name: string
  username: string
  email: string
  address: GuyAddress
  phone: string
  website: string
  company: GuyCompany
}

export type GuyAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export type GuyCompany = {
  name: string
  catchPhrase: string
  bs: string
}
