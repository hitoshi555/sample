import {
  Configuration,
  DefaultApi,
  ResponseAllClassRoom,
  ResponseLogin,
  ResponseOneClassRoom,
} from '../../codegen/api-client'
import { AxiosResponse } from 'axios'

class ApiClientRepository extends DefaultApi {
  constructor() {
    super(new Configuration({ basePath: 'http://localhost:3000' }))
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

    return { access_token: result.data.access_token }
  }
}
