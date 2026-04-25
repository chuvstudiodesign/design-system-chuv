import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

export async function POST(request: Request) {
  const { namespace, changes } = (await request.json()) as {
    namespace: string
    changes: Record<string, string>
  }

  const filePath = join(
    process.cwd(),
    "src/app/styleguide/site-sections",
    namespace,
    "content.json"
  )

  const existing = JSON.parse(readFileSync(filePath, "utf-8")) as Record<string, string>
  const updated = { ...existing, ...changes }
  writeFileSync(filePath, JSON.stringify(updated, null, 2) + "\n")

  return Response.json({ ok: true })
}
