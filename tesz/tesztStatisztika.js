import Statisztika from "../js/Statisztika.js";


QUnit.module("Statisztika teszt", function () {
    let lista = [];
    let stat = new Statisztika(lista)
  QUnit.test("Létezik orszagokSzerintAutokSzama?", function (assert) {
    assert.ok(
      typeof stat.orszagokSzerintAutokSzama === "function",
      "Function tipus"
    );
  });
  QUnit.test("Létezik legregebbiAuto?", function (assert) {
    assert.ok(
      typeof stat.legregebbiAuto === "function",
      "Function tipus"
    );
  });
  QUnit.test("Létezik orszagokSzerintLegregebbiAuto?", function (assert) {
    assert.ok(
      typeof stat.orszagokSzerintLegregebbiAuto === "function",
      "Function tipus"
    );
  });
  QUnit.test('Üres lista', function(assert) {
    lista = [];
    assert.deepEqual(stat.legregebbiAuto(), 0);
});
QUnit.test('NULL orszag', function(assert) {
    lista = [
        { auto: "Ford", orszag: null, alapitas_ev: 0 },
        { auto: "Hello", orszag: null, alapitas_ev: 0 },
        { auto: "dddddd", orszag: null, alapitas_ev: 1111 }

    ];
    assert.deepEqual(stat.orszagokSzerintAutokSzama(),0);
});
QUnit.test('NULL auto', function(assert) {
    lista = [
        { auto: NULL, orszag: "Japán", alapitas_ev: 0 },
        { auto: NULL, orszag: "Német", alapitas_ev: 0 },
        { auto: NULL, orszag: "Magyar", alapitas_ev: 1111 }

    ];
    assert.deepEqual(stat.orszagokSzerintAutokSzama(), 0);
});
QUnit.test('NULL alapitas_ev', function(assert) {
    lista = [
        { auto: "Ford", orszag: "Japán", alapitas_ev: NULL },
        { auto: "ford", orszag: "Német", alapitas_ev: NULL },
        { auto: "ford", orszag: "Magyar", alapitas_ev: NULL }

    ];
    assert.deepEqual(stat.legregebbiAuto(), 0);
});
QUnit.test('Semminek nincs értéket', function(assert) {
    lista = [
        { auto: "", orszag: "", alapitas_ev: "" }

    ];
    assert.deepEqual(stat.legregebbiAuto(), 0);
});
});
