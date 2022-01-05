const {expect, test} = require('@oclif/test');

describe('MK type', () => {
  test
  .stdout()
  .command(['mk', '--type', 'test_type'])
  .it('v_db mk --type "test_type"', ctx => {
    expect(ctx.stdout).to.contain('true\n');
  });

  test
  .stdout()
  .command(['mk', '--type', ''])
  .it('v_db mk --type ""', ctx => {
    expect(ctx.stdout).to.contain('false\n');
  });

  test
  .stdout()
  .command(['mk', '--type', 'test_type', '--content', '{yea:"name"}'])
  .it('v_db mk --type test_type --content {yea: "name"}', ctx => {
    expect(ctx.stdout).to.contain('true\n');
  });

  test
  .stdout()
  .command(['mk', '--type', 'test_type', '--content', '{yea:"name"}' , '--id', 'test_id_item'])
  .it('v_db mk --type test_type --content {yea: "name"} --id test_id_item', ctx => {
    expect(ctx.stdout).to.contain('true\n');
  });
});
