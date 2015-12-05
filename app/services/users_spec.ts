import {UsersService} from './users';

export function main() {
  describe('UsersService Service', () => {
    let usersService;

    beforeEach(() => {
      usersService = new UsersService;
    });

    it('should return the list of names', () => {
      let names = usersService.get();
      expect(names).toEqual(jasmine.any(Array));
    });
  });
}
