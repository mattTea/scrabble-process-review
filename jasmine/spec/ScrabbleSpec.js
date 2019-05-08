describe("Scrabble", function() {
  it("returns 1 for string of 'a'", function() {
    expect(scrabble("a")).toEqual(1)
  })

  it("returns 5 for string of 'k'", function() {
    expect(scrabble("k")).toEqual(5)
  })
})