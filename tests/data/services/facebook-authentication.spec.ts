import { LoadFacebookUserApi } from "../../../src/data/contracts/apis"
import { FacebookAuthenticationService } from "../../../src/data/services"
import { AuthenticationError } from "../../../src/domain/errors"

class LoadFacebookUserSpy implements LoadFacebookUserApi {
  token?: string
  result = undefined

  async loadUser(
    params: LoadFacebookUserApi.Params
  ): Promise<LoadFacebookUserApi.Result> {
    this.token = params.token
    return this.result
  }
}

describe("FacebookAuthenticationService", () => {
  it("should return AuthenticationError when LoadFacebookUserApi returns undefined", async () => {
    const loadFacebookUserApi = new LoadFacebookUserSpy()
    loadFacebookUserApi.result = undefined
    const sut = new FacebookAuthenticationService(loadFacebookUserApi)

    const authResult = await sut.perform({ token: "any_token" })

    expect(authResult).toEqual(new AuthenticationError())
  })
})
