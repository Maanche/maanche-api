import { User } from '@prisma/client'
import { RequestQueryDto } from '../../src/interfaces'

declare global {
   namespace Express {
      interface Request {
         authUser: User & { role?: { name: string; slug: string } }
         rawBody: Buffer
         requestQuery: RequestQueryDto
         id: string
         startTime: number
         originalUrl: string
      }
      interface Response {
         apiSuccess: (fn: ApiSuccess) => void
         apiFail: (fn: ApiFail) => void
      }
      interface ApiSuccess {
         message?: string
         data?: any
         status?: Status
      }
      interface ApiFail {
         message?: string
         error?: any
         status?: Status
      }
      interface Status {
         code?: number
         success?: boolean
      }
   }
}
