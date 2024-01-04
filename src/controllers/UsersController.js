const AppError = require("../utils/appError")

class UserController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError("Nome Obrigatório")
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UserController
