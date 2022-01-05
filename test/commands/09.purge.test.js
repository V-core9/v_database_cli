const {expect, test} = require('@oclif/test');

describe('purge', () => {
  test
  .stdout()
  .command(['purge'])
  .it('v_db purge', ctx => {
    expect(ctx.stdout).to.contain('true\n');
  });
});
