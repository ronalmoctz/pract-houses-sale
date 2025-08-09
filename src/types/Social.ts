type SocialId = "whatsapp" | "instagram" | "facebook"
type SocialName = "WhatsApp" | "Instagram" | "Facebook"

export interface Social {
    id: SocialId
    name: SocialName
    url: string
    label: string
    image: {
        logo: any
        width: number
        height: number
    }
}