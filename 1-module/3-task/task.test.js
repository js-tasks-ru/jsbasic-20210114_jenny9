describe('1-module-3-task', () => {
  it('Should return empty str if got empty str', () => {
    expect(ucFirst("")).toEqual("");
  });

  it('Should return uppercase letter if got lowercase one', () => {
    expect(ucFirst("d")).toEqual("D");
  });

  it('Should return word from first uppercase letter if got word started from first lowercase', () => {
    expect(ucFirst("jenny")).toEqual("Jenny");
  });

  it('Should return the same word of got word started from first uppercase', () => {
    expect(ucFirst("Abs")).toEqual("Abs");
  });
});
