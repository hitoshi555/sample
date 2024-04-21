import {
  Configuration,
  DefaultApi,
  ResponseAllClassRoom,
  ResponseChangePassword,
  ResponseLogin,
  ResponseOneClassRoom,
} from '../../codegen/api-client'
import { AxiosResponse } from 'axios'
import { useUserStore } from '../store/user'

function getToken(): string {
  const userStore = useUserStore()
  const token = userStore.token
  console.log('api userStore.token', userStore.token)
  // 実際のトークン取得ロジックを実装します。例:
  return token || ''
}

class ApiClientRepository extends DefaultApi {
  constructor() {
    const token = getToken() // トークンを取得
    console.log('ApiClientRepository token', token)
    const config = new Configuration({
      basePath: 'http://localhost:3000',
      baseOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
    super(config)
  }
}

export class TutorialDataService {
  async getAll(): Promise<ResponseAllClassRoom> {
    const api = new ApiClientRepository()
    const result = api
      .classRoomControllerGetAllClassRoom()
      .then((response: AxiosResponse<ResponseAllClassRoom>) => {
        const result: ResponseAllClassRoom = response.data
        console.log(result)
        return result
      })
    console.log(
      'TutorialDataService classRoomControllerGetAllClassRoom',
      result,
    )

    const allClassRoom = await result
    console.log(allClassRoom)
    return allClassRoom
  }

  async getClassRoomDetail(id: number): Promise<ResponseOneClassRoom> {
    const api = new ApiClientRepository()
    const result = api
      .classRoomControllerGetOneClassRoom(id)
      .then((response: AxiosResponse<ResponseOneClassRoom>) => {
        console.log('response', response)
        const result: ResponseOneClassRoom = response.data
        console.log(result)
        return result
      })
    console.log(
      'TutorialDataService classRoomControllerGetAllClassRoom',
      result,
    )

    const allClassRoom = await result
    console.log(allClassRoom)
    return allClassRoom
  }

  async login(studentId: string, password: string): Promise<ResponseLogin> {
    const api = new ApiClientRepository()
    const result = await api
      .appControllerLogin({ studentId, password })
      .then((response: AxiosResponse<ResponseLogin>) => {
        console.log('response', response)
        const result = response
        console.log(result)
        return result
      })
    console.log('TutorialDataService login', result)

    return {
      access_token: result.data.access_token,
      studentId: result.data.studentId,
    }
  }

  async changePassword(
    studentId: string,
    password: string,
  ): Promise<ResponseChangePassword> {
    console.log('changePassword start')
    const api = new ApiClientRepository()
    const result = await api
      .usersControllerPostChangePassword({ studentId, password })
      .then((response: AxiosResponse<ResponseChangePassword>) => {
        console.log('response', response)
        const result = response.data.studentId
        console.log(result)
        return result
      })
    console.log('changePassword end')

    return { studentId: result }
  }
}
