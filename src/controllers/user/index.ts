import { getRepository } from "typeorm"
import { User } from "@models/entity/User"

export const getLogin = async (request, response) => {
  const userRepository = getRepository(User)
  const findUser = await userRepository.find()
  return response.json(findUser)
}
