import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import IUsersTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import { uuid } from 'uuidv4';

class FakeUsersTokensRepository implements IUsersTokensRepository {
  private usersTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }
}

export default FakeUsersTokensRepository;
