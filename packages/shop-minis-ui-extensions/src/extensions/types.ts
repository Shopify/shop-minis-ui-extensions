export interface Shop {
  id: string
  name: string
  image?: Image | null
}

export interface Product {
  id: string
  shop: Shop
  title: string
  image?: Image | null
  reviewsAverageRating?: number | null
  reviewsCount?: number | null
  price: Price
  compareAtPrice?: Price
}

export interface Order {
  id: string
}

export interface Image {
  url: string
  altText?: string | null
  height?: number | null
  width?: number | null
}

export interface Video {
  url: string
}

export interface Price {
  amount: string
  currencyCode: string
}
