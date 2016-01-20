describe('toPigLatin', function() {
  it("phrase will equal array", function() {
    expect(toPigLatin("all day")).to.eql(["all", "day"]);
  });
});

describe('toPigLatin', function() {
  it("will look for vowels", function() {
    expect(toPigLatin("out all dtgsr every target any")).to.eql(["outay", "allay", "dtgsr", "everyay", "target", "anyay"]);
  });
});
