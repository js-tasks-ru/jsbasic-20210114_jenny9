describe('1-module-3-task', () => {
  it('Should return true if str include \'1xBet\'', () => {
    expect(checkSpam("1XbeT now")).toEqual(true);
  });

  it('Should return true if str include \'XXX\'', () => {
    expect(checkSpam("free XXX")).toEqual(true);
  });

  it('Should return true if str include \'xxx\'', () => {
    expect(checkSpam("free xxxxx")).toEqual(true);
  });

  it('Should return false if str not include \'1xBet\' or \'XXX\'', () => {
    expect(checkSpam("innocent rabbit")).toEqual(false);
  });

  it('Should return false if str is empty', () => {
    expect(checkSpam("")).toEqual(false);
  });

});
