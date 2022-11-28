samples({
  jj: 'ropeburn.wav',
  rr: 'rr140.wav',
}, 'github:stmball/strudel_cycles/main/');

stack(
  s("RolandTR909_bd").struct("<[x [x x x]]!7 [x [x [x x x x]]]!1>"),
  s("RolandTR909_cp").struct("<~ ~ x ~>"),
  "0 [12 7] 0 ~"
    .scale(seq('C2 minor', 'Ab2 major', 'C2 minor', 'G2 minor')
      .slow(4))
    .note()
    .s("vibraphone_soft")
    .cutoff(sine.range(0, 10000).slow(16))
    .cut(0.25)
    .room(1)
    .gain(3),
  // s("rr").chop(16).loopAt(32, 1).struct("< ~ x [x x x]*3 ~>").speed("<0.0625 0.03125> <-0.03125 0.0625>").cut(0.03125),
  // s("jj").rev().chop(16).loopAt(32, 1).struct("<c(3,8) ~ ~ c(5, 7)>").speed("0.0625 0.03125").cut(0.25).room(0.5).cutoff("<20000!3 2000>")
)
