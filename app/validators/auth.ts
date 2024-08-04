import vine from '@vinejs/vine'
export const createAuthValidator = vine.compile(
    vine.object({
      title: vine.string().trim().minLength(6),
      slug: vine.string().trim(),
      description: vine.string().trim().escape(),
      email: vine.string()
    })
)