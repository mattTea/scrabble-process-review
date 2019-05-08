describe("Scrabble", function() {
  it("returns 1 for string of 'a'", function() {
    expect(scrabble("a")).toEqual(1)
  })

  it("returns 5 for string of 'k'", function() {
    expect(scrabble("k")).toEqual(5)
  })

  it("returns 2 for string of 'is'", function() {
    expect(scrabble("is")).toEqual(2)
  })

  it("returns 22 for 'quirky'", function() {
    expect(scrabble("quirky")).toEqual(22)
  })

  it("returns 0 for empty string", function() {
    expect(scrabble("")).toEqual(0)
  })

  it("returns 0 for white space characters", function() {
    expect(scrabble(" \t\n")).toEqual(0)
  })
})