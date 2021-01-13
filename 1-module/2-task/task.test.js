describe('1-module-2-task', () => {
  it('Should return true if got name with length >= 4', () => {
    expect(isValid("Kate")).toEqual(true);
  });

  it('Should return false if got empty str', () => {
    expect(isValid("")).toEqual(false);
  });

  it('Should return false if got space str', () => {
    expect(isValid(" ")).toEqual(false);
  });

  it('Should return false if got name with length <= 3', () => {
    expect(isValid("Abs")).toEqual(false);
  });

  it('Should return false if got name with space', () => {
    expect(isValid("Jen ny")).toEqual(false);
  });
});
