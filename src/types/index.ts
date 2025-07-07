export interface Story {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
  imageUrl: string
  featured: boolean
}

export interface Category {
  id: string
  name: string
  color: string
}
