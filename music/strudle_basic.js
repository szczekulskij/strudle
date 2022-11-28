const keys = x => x.s('sawtooth').cutoff(1200).gain(.5).attack(0).decay(.16).sustain(.3).release(.1);

const drums = stack(
  s("bd*2").mask("<x@7 ~>/8").gain(.8),
  s("~ <sd!7 [sd@3 ~]>").mask("<x@7 ~>/4").gain(.5),
  s("[~ hh]*2").delay(.3).delayfeedback(.5).delaytime(.125).gain(.4)
);

const thru = (x) => x.transpose("<0 1>/8").transpose(-1);
const synths = stack(
  "<eb4 d4 c4 b3>/2".scale(timeCat([3,'C minor'],[1,'C melodic minor'])
  .slow(8)).struct("[~ x]*2")
  .layer(
    scaleTranspose(0).early(0),
    scaleTranspose(2).early(1/8),
    scaleTranspose(7).early(1/4),
    scaleTranspose(8).early(3/8)
  ).apply(thru).note().apply(keys).mask("<~ x>/16"),
  note("<C2 Bb1 Ab1 [G1 [G2 G1]]>/2".apply(thru))
  .struct("[x [~ x] <[~ [~ x]]!3 [x x]>@2]/2".fast(2))
  .s('sawtooth').attack(0.001).decay(0.2).sustain(1).cutoff(500),
  "<Cm7 Bb7 Fm7 G7b13>/2".struct("~ [x@0.2 ~]".fast(2)).voicings()
  .apply(thru).every(2, early(1/8)).note().apply(keys).sustain(0)
  .delay(.4).delaytime(.12)
  .mask("<x@7 ~>/8".early(1/4))
)
stack(
  drums.fast(2), 
  synths
).slow(2)
