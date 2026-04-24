import { craftAiPost } from "@/components/social-media/batch-posts"
import { SocialPostPageTemplate } from "@/components/social-media/post-page-template"

export default function CraftNaEraDaIaPage() {
  return <SocialPostPageTemplate {...craftAiPost} />
}
