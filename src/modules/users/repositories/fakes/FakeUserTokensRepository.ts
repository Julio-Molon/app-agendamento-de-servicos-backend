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
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.usersTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.usersTokens.find(
      findtoken => findtoken.token === token,
    );
    return userToken;
  }
}

export default FakeUsersTokensRepository;
