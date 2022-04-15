import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'test',
      password: '12345',
    },
    {
      userId: 2,
      username: 'test@test.com',
      password: '12345',
    },
    {
      userId: 3,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 4,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
