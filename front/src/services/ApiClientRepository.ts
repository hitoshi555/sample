import {
  Configuration,
  DefaultApi,
  ResponseAllClassRoom,
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
        console.log(result) // ResponseAllClassRoom[]のデータを取得してログに出力
        return result
      })
    console.log(
      'TutorialDataService classRoomControllerGetAllClassRoom',
      result,
    )

    const allClassRoom = await result // 非同期処理が完了するまで待機
    console.log(allClassRoom)
    return allClassRoom
  }
}
