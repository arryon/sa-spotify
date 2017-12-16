import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from './users/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 1, username: 'Arryon' },
      { id: 2, username: 'Henk' },
      { id: 3, username: 'Stefan' },
      { id: 4, username: 'Kirsten' },
      { id: 5, username: 'Tjeerd' },
      { id: 6, username: 'Ronald' },
      { id: 7, username: 'Thomas' },
      { id: 8, username: 'Sybren' }
    ];
    return { users };
  }
}
