import {
  Configuration,
  DefaultApi,
  ResponseAllClassRoom,
  ResponseChangePassword,
  ResponseEditSelectClassroom,
  ResponseLogin,
  ResponseOneClassRoom,
  ResponseSelectClassroom,
  ResponseSelectedRooms,
} from '../../codegen/api-client'
import { AxiosResponse } from 'axios'
import { useUserStore } from '../store/user'

function getToken(): string {
  const userStore = useUserStore()
  const token = userStore.token
  return token || ''
}

class ApiClientRepository extends DefaultApi {
  constructor() {
    const token = getToken() // トークンを取得
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
        return result
      })

    const allClassRoom = await result
    return allClassRoom
  }

  async getClassRoomDetail(id: number): Promise<ResponseOneClassRoom> {
    const api = new ApiClientRepository()
    const result = api
      .classRoomControllerGetOneClassRoom(id)
      .then((response: AxiosResponse<ResponseOneClassRoom>) => {
        const result: ResponseOneClassRoom = response.data
        return result
      })

    const allClassRoom = await result
    return allClassRoom
  }

  async login(studentId: string, password: string): Promise<ResponseLogin> {
    const api = new ApiClientRepository()
    const result = await api
      .authControllerLogin({ studentId, password })
      .then((response: AxiosResponse<ResponseLogin>) => {
        const result = response
        return result
      })

    return {
      access_token: result.data.access_token,
      studentId: result.data.studentId,
    }
  }

  async changePassword(
    studentId: string,
    password: string,
  ): Promise<ResponseChangePassword> {
    const api = new ApiClientRepository()
    const result = await api
      .usersControllerPostChangePassword({ studentId, password })
      .then((response: AxiosResponse<ResponseChangePassword>) => {
        const result = response.data.studentId
        return result
      })

    return { studentId: result }
  }

  async selectClassRoom(
    id: number,
    studentId: string,
    period: object,
    timeSlot: object,
    weekday: object,
  ): Promise<ResponseSelectClassroom> {
    const api = new ApiClientRepository()
    const result = await api
      .classRoomControllerSelectClassRoom({
        id,
        studentId,
        period,
        timeSlot,
        weekday,
      })
      .then((response: AxiosResponse<ResponseSelectClassroom>) => {
        const result = response.data.resultText
        return result
      })

    return { resultText: result }
  }

  async selectedClassRooms(studentId: string): Promise<ResponseSelectedRooms> {
    const api = new ApiClientRepository()
    const result = await api
      .usersControllerGetSelectedClassRoom(studentId)
      .then((response) => {
        const result = response.data
        return result
      })

    return result
  }

  async editSelectedClassRoom(
    id: number,
    studentId: string,
  ): Promise<ResponseEditSelectClassroom> {
    const api = new ApiClientRepository()
    const result = await api
      .usersControllerPostEditSelectedClassRoom({ id, studentId })
      .then((response) => {
        const result = response.data
        return result
      })

    return result
  }
}
