const {expect, test} = require('@oclif/test');

describe('GET types', () => {
  test
  .stdout()
  .command(['get'])
  .it('v_db get', ctx => {
    expect(ctx.stdout).to.contain("test_type\n");
  });

  test
  .stdout()
  .command(['get', '--type', 'test_type'])
  .it('v_db get --type test_type', ctx => {
    expect(typeof ctx.stdout).to.contain("string");
  });


  test
  .stdout()
  .command(['get', '--type', 'test_type', '--id', 'test_id_item'])
  .it('v_db get --type test_type --id test_id_item', ctx => {
    expect(ctx.stdout).to.contain('{yea:"name"}\n');
  });
});
