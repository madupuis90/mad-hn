export interface Item {
  id: number,
  title: string,
  points: number,
  user: string,
  time: number
  time_ago: string,
  type: string,
  url: string,
  domain: string,
  comments: any[],	// change to array of comments
  comments_count: number
}