const {expect, test} = require('@oclif/test');

describe('RM type', () => {

  test
  .stdout()
  .command(['rm'])
  .it('v_db rm', ctx => {
    expect(ctx.stdout).to.contain('false\n');
  });

  test
  .stdout()
  .command(['rm', '--type', 'test_type', '--id', 'test_id_item'])
  .it('v_db rm --type test_type --id test_id_item', ctx => {
    expect(ctx.stdout).to.contain('true\n');
  });

  test
  .stdout()
  .command(['rm', '--type', 'test_type'])
  .it('v_db rm --type test_type', ctx => {
    expect(ctx.stdout).to.contain('true\n');
  });

  test
  .stdout()
  .command(['rm', '--type', 'test_typeXX'])
  .it('v_db rm --type test_typeXX', ctx => {
    expect(ctx.stdout).to.contain('false\n');
  });

});
