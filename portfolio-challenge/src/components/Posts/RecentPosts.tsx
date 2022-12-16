import { Container } from "../Container"
import { Post } from "./Post"

export const RecentPosts = () => {
  return(
    <div className="flex flex-col gap-8">

      <Container>
        <h1 className="text-purple-100 text-xl px-8">Recent Posts</h1>
      </Container>

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </div>
  )
}