export interface CardProps {
  avatar: string
  name: string
  username: string
  email: string
  phone: string
  website: string
  isLiked?: boolean
  address: string
  company: string
  location: {
    lat: string
    lng: string
  }
}

export interface InfoProps {
  icon: JSX.Element
  value: string
}

export interface AboutMeProps
  extends Pick<CardProps, 'name' | 'username' | 'company' | 'address' | 'email' | 'website' | 'phone' | 'location'> {}
